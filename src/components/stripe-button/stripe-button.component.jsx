import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //Stripe process price values in US Cents
  const publishablekey = 'pk_test_hrFU9PP3vqEjYapTHquWqCOC00zuVpD7Xz';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful'); //Test Message
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Printed Threads Ltd.'
      currency='GBP'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
