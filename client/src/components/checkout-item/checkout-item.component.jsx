import React from "react";
import { connect } from "react-redux";

import {
	removeItemFromCart,
	addItem,
	removeItem
} from "../../redux/cart/cart.actions";

import {
	CheckOutItemContainer,
	ImageContiner,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { imageUrl, name, price, quantity } = cartItem;
	return (
		<CheckOutItemContainer>
			<ImageContiner>
				<img src={imageUrl} alt="item" />
			</ImageContiner>

			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItem(cartItem)}>&#10095;</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButtonContainer>
		</CheckOutItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(removeItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
