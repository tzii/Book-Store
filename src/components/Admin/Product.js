import React, {useRef} from "react";
import "./Product.css";

export default function ProductComponent(props) {
	const {book, setMode} = props;
	const idRef = useRef(null);
	const formatVND = (n) => {
		return n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
	};
	return (
		<div className="admin-product">
			<input type="hidden" value={book.id} name="id" ref={idRef} />
			<div className="product--image--contains">
				<img className="product--image" src={book.image} alt={book.title} />
			</div>
			<div className="product--info">
				<p className="product--title">{book.name}</p>
				<p className="product--category">
					<i>{book.category}</i>
				</p>
				<div className="d-flex justify-content-between">
					<p className="product--count">{formatVND(book.price)}đ</p>
					<p className="product--count">Còn lại : {book.available}</p>
				</div>
			</div>
			<div className="product-action">
				<div className="button button__detail" onClick={() => setMode("DETAIL")}>
					<i className="fas fa-info" style={{fontWeight: 500}}></i>
				</div>
				<div className="button button__edit" onClick={() => setMode("EDIT")}>
					<i className="far fa-edit"></i>
				</div>
				<div className="button button__delete" onClick={() => setMode("DELETE")}>
					<i className="far fa-trash-alt"></i>
				</div>
			</div>
		</div>
	);
}
