import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey = "pk_test_ZEWtuddGJUj8XQkHeZF9QHtg0085F5p8fC";

	const onToken = token => {
		console.log(token);
		alert("Payment Successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Stone Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is ${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishKey}
		/>
	);
};

export default StripeCheckoutButton;
