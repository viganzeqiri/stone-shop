import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey = "pk_test_ZEWtuddGJUj8XQkHeZF9QHtg0085F5p8fC";

	const onToken = token => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token: token
			}
		})
			.then(response => {
				alert("Payment Successful");
			})
			.catch(error => {
				console.log("Payment error: " + JSON.parse(error));
				alert(
					"There was an issue with your payment. Please make sure you use the provided credit card."
				);
			});
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
