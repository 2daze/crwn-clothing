import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import { publishableKey } from './Cart.utils';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert("Payment Successful");
    }).catch(error => {
      console.log("Payment error: ", JSON.parse(error));
      alert("There was issue with your payment.  Please use the test cc.");
    });
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
