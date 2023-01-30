import { useState } from 'react';
import AuthContent from '../components/auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { login } from '../util/auth';

const LoginScreen = () => {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthentication(true);
    await login(email, password);
    setIsAuthentication(false);
  };

  if (isAuthentication) return <LoadingOverlay message="Logging you in..." />;

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;
