import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { login } from '../util/auth';

const LoginScreen = () => {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const authCtx = useContext(AuthContext);

  const loginHandler = async ({ email, password }) => {
    setIsAuthentication(true);

    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      setIsAuthentication(false);
    }
  };

  if (isAuthentication) return <LoadingOverlay message="Logging you in..." />;

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
