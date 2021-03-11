import styled, { css } from 'styled-components';

export const getButtonStyle = props => {
  if (props.isGoogleSignIn) { return googleSignInStyles; }
  else if (props.inverted) { return invertedButtonStyle; }
  else { return stdButtonStyle; } 
}

export const stdButtonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const invertedButtonStyle = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: 1px solid #357ae8;

  &:hover {
    background-color: #357ae8;
  }

  &:focus  {
    background-color: #357ae8;
    outline: none !important;
  }

  &:active  {
    background-color: #357ae8;
    outline: none !important;
  }
`;

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display:flex;
  justify-content: center;
  ${getButtonStyle}
`;

