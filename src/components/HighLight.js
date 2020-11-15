import React from "react";
import { Rating } from "@material-ui/lab";
import Book from "../images/book.png";
import "./HighLight.css";

export default function HighLight() {
    return (
        <div className="highlight-book mt-3">
            <img src={Book} alt="" className="mr-2" />
            <div className="highlight-info">
                <h6 className="info-name">World of Abstract Art</h6>
                <p className="writer mb-0">
                    By <span>Mesha Maren</span> | <span>Feb 2020</span>
                </p>
                <Rating className="rating" value={4} readOnly size="small" />
                <p className="description mb-0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                </p>
            </div>
        </div>
    );
}
