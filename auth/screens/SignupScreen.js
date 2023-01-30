import { useState } from 'react';
import AuthContent from '../components/auth/AuthContent';

import { createUser } from '../util/auth';
import LoadingOverlay from '../components/ui/LoadingOverlay';

const SignupScreen = () => {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthentication(true);
    await createUser(email, password);
    setIsAuthentication(false);
  };

  if (isAuthentication) return <LoadingOverlay message="Creating user..." />;

  return <AuthContent onAuthenticate={signupHandler} />;
};

export default SignupScreen;
