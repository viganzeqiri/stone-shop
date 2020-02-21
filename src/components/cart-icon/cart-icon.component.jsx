import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
	CartIconContainer,
	ShoppingIcon,
	ItemCountContainer
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<CartIconContainer onClick={toggleCartHidden}>
			<ShoppingIcon />
			<ItemCountContainer>{itemCount}</ItemCountContainer>
		</CartIconContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
