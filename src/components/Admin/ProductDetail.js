import React, {useEffect, useState} from "react";

import "./ProductDetail.css";
import {getBook} from "../../api";

const classNames = require("classnames");

function ProductDetail(props) {
	const {className, productId, setMode} = props;
	const [book, setBook] = useState();

	console.log(book);
	useEffect(() => {
		getBook(productId).then((res) => {
			setBook(res.payload.book);
		});
	}, [productId]);

	const handleOutClick = (event) => {
		if (event.target.classList.contains("exit")) {
			setMode("VIEW");
		}
	};

	return (
		<div className={classNames(className, "product-detail", "exit")} onClick={handleOutClick}>
			<div className="product-card d-flex justify-content-center align-items-center">
				<div className="exit button-exit">
					<i className="far fa-times-circle"></i>
				</div>
				<div className="container-fluid product-card--content"></div>
			</div>
		</div>
	);
}

export default ProductDetail;
