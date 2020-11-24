import React, { useState } from "react";
import "./BookDetail.css";
import Img from "../images/book.png";
import { Rating } from "@material-ui/lab";
import { Button } from "react-bootstrap";

export default function BookDetail() {
    const [count, setCount] = useState(1);

    const minusHandler = () => {
        if (count === 1) return;
        setCount(count - 1);
    };
    const plusHandler = () => {
        setCount(count + 1);
    };

    return (
        <div className="book-detail">
            <img src={Img} alt="" />
            <div className="book-info">
                <h4>
                    The Heart of Hell <span>Mitch Weiss</span>
                </h4>
                <Rating className="rating" value={4} readOnly size="small" />
                <div className="book-info-2">
                    <p>Số lượng còn lại</p>
                    <p>100</p>
                    <p>Danh mục</p>
                    <p>Văn học</p>
                    <p>Giá</p>
                    <p className="price">9$</p>
                    <p>Chọn số lượng</p>
                    <div className="book-count">
                        <span onClick={minusHandler} className="minus">
                            -
                        </span>
                        <span className="count">{count}</span>
                        <span onClick={plusHandler} className="plus">
                            +
                        </span>
                    </div>
                    <Button className="shadow" size="sm" variant="primary">
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
