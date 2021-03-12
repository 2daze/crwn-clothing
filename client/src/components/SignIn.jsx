import React, { useState } from 'react';
import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { googleSignInStart, emailSignInStart } from '../redux/UserActions';
import { connect } from 'react-redux';

import './SignIn.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const[ userCredentials, setCredentials ] = 
    useState({ email: '', password: ''});

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange = (event) => {
    const { value, name } = event.target; 
    setCredentials({...userCredentials, [name]: value})
    console.log(userCredentials);
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Signin with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email" 
          value={email} 
          handleChange={handleChange}
          label="Email"
          required 
        />
        <FormInput 
          name="password" 
          type="password" 
          value={password} 
          handleChange={handleChange}
          label="Password"
          required 
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
            {' '}
            Sign in with Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => 
    dispatch(emailSignInStart({ email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);

