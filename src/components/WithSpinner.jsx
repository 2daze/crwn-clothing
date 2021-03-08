import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.style';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  if (isLoading) {
    return (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    );
  }
  else {
    return <WrappedComponent { ...otherProps } />;
  }
}

export default WithSpinner;

