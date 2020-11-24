import React from "react";
import { Link } from "react-router-dom";
import "./MoreBtn.css";

export default function MoreBtn({ to, right = true, className = "" }) {
    return (
        <Link
            to={to}
            className={className + " more-btn" + (right ? " float-right" : "")}
        >
            Xem thêm ...
        </Link>
    );
}
