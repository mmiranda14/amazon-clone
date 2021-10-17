import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
	const [{ basket }] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img
					className="checkout__ad"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoWWC3wQLEJhkdjBkst82BBBP6yZoCxHqcA&usqp=CAU"
					alt=""
				/>
				{basket?.length === 0 ? (
					<div>
						<h2>Your Shopping Cart is empty</h2>
						<p>
							You have no items in your basket. To buy one or more items, click
							"Add to Cart" next to the item.
						</p>
					</div>
				) : (
					<div>
						<h2 className="checkout__title">Your Shopping Cart</h2>
						{basket.map(item => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				)}
			</div>
			{basket?.length > 0 && (
				<div className="checkout__right">
					<h1>Subtotal</h1>
					<Subtotal />
				</div>
			)}
		</div>
	);
};

export default Checkout;
