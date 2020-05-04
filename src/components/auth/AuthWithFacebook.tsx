import React from 'react';
import FBLogo from '../FBLogo';

const LoginWithFacebook = () => (
  <a className="button fb-button" href="http://localhost:3000/auth/facebook">
    <FBLogo size={24} />
    Continuar con Facebook
  </a>
);

export default LoginWithFacebook;