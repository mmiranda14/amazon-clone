import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<div className="home">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="253456789"
						title="Amazon Echo 2021"
						price={69.99}
						rating={5}
						image="https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.1601313845.fit_scale.size_760x427.jpg"
					></Product>
					<Product
						id="253456789"
						title="Amazon Echo 2021"
						price={69.99}
						rating={5}
						image="https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.1601313845.fit_scale.size_760x427.jpg"
					></Product>
				</div>

				<div className="home__row">
					<Product
						id="253456789"
						title="Amazon Echo 2021"
						price={69.99}
						rating={5}
						image="https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.1601313845.fit_scale.size_760x427.jpg"
					></Product>
					<Product
						id="253456789"
						title="Amazon Echo 2021"
						price={69.99}
						rating={5}
						image="https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.1601313845.fit_scale.size_760x427.jpg"
					></Product>
					<Product
						id="253456789"
						title="Amazon Echo 2021"
						price={69.99}
						rating={5}
						image="https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.1601313845.fit_scale.size_760x427.jpg"
					></Product>
				</div>

				<div className="home__row">
					<Product
						id="253456789"
						title="Amazon Echo 2021"
						price={69.99}
						rating={5}
						image="https://i.pcmag.com/imagery/reviews/04e3bEzJD7ng3WviIdH5URF-1.1601313845.fit_scale.size_760x427.jpg"
					></Product>
				</div>
			</div>
		</div>
	);
};

export default Home;
