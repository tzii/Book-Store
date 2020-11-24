import React from "react";
import Review from "./Review";

export default function ListReviews({ reviews = [{}, {}, {}, {}, {}] }) {
    return (
        <div className="review-list mt-5">
            {reviews.map((review) => (
                <Review review={review} />
            ))}
        </div>
    );
}
