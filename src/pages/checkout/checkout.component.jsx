import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	selectCartItems,
	selectCartItemsTotal
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
	CheckoutContainer,
	CheckoutHeader,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer
} from "./checkout.styles";

const ChackoutPage = ({ cartItems, total }) => {
	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeader>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}

			<TotalContainer>
				<span>Total: ${total}</span>
			</TotalContainer>
			<WarningContainer>
				*Please use the following test credit card for payments
				<br />
				4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
			</WarningContainer>
			<StripeCheckoutButton price={total} />
		</CheckoutContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartItemsTotal
});

export default connect(mapStateToProps)(ChackoutPage);
