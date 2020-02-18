import React from "react";

import Button from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				<Button>GO TO CHECKOUT</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
