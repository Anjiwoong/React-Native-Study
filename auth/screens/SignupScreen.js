import { useContext, useState } from 'react';
import AuthContent from '../components/auth/AuthContent';

import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../store/auth-context';

const SignupScreen = () => {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthentication(true);

    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, Please check your input and try again later.'
      );
      setIsAuthentication(false);
    }
  };

  if (isAuthentication) return <LoadingOverlay message="Creating user..." />;

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
