import React from 'react';
import FBLogo from '../FBLogo';

const LoginWithFacebook = () => (
  <a className="button fb-button" href={`${process.env.GATSBY_API_URL}/auth/facebook`}>
    <FBLogo size={24} />
    Continuar con Facebook
  </a>
);

export default LoginWithFacebook;