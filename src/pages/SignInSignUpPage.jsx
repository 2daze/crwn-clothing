import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

import './SignInSignUpPage.styles.scss';

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUpPage;
