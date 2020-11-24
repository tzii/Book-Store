import { Rating } from "@material-ui/lab";
import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Img from "../images/book.png";
import "./Book.css";

export default function Book() {
    const history = useHistory();

    const clickHandler = () => {
        history.push("/book/1");
    };

    const addToCartHandler = () => {
        console.log("add to cart");
    };
    return (
        <div className="book">
            <img
                onClick={clickHandler}
                className="mr-2 shadow"
                src={Img}
                alt=""
            />
            <div className="book-info">
                <h6 onClick={clickHandler} className="book-name mb-0">
                    The Heart of Hell
                </h6>
                <p className="writer mb-0">Mitch Weiss</p>
                <Rating className="rating" value={4} readOnly size="small" />
                <p className="price mb-0">9$</p>
                <div className="book-btn">
                    <Button
                        onClick={addToCartHandler}
                        className="shadow"
                        size="sm"
                        variant="primary"
                    >
                        Add to cart
                    </Button>
                </div>
            </div>
        </div>
    );
}
