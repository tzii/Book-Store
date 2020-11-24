import { Avatar } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React from "react";
import Img from "../images/avatar.jpg";

export default function Review({ review }) {
    return (
        <>
            <div className="review d-flex">
                <Avatar className="mr-3" src={Img} />
                <div className="review-content">
                    <h6>Lisa Doe</h6>
                    <Rating
                        className="rating"
                        value={4}
                        readOnly
                        size="small"
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>
            </div>

            <hr />
        </>
    );
}
