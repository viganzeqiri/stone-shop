import React from "react";

import {
	CartitemContainer,
	CartitemImage,
	ItemDetailsContainer
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartitemContainer>
		<CartitemImage src={imageUrl} alt="item" />
		<ItemDetailsContainer>
			<span>{name}</span>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetailsContainer>
	</CartitemContainer>
);

export default CartItem;
