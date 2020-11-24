import { Rating } from "@material-ui/lab";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./BookDescription.css";
import ListReviews from "./ListReviews";

export default function BookDescription() {
    const [page, setPage] = useState(1);

    const p =
        "Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis. Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.";

    return (
        <div className="book-description mt-5 rounded">
            <div className="titles">
                <h6
                    onClick={() => setPage(1)}
                    className={page === 1 ? "active" : ""}
                >
                    Thông tin + Mô tả
                </h6>
                <h6
                    onClick={() => setPage(2)}
                    className={page === 2 ? "active" : ""}
                >
                    Đánh giá <span>100</span>
                </h6>
            </div>
            <div className="content">
                {page === 1 ? (
                    p
                ) : (
                    <>
                        <Form className="review-form">
                            <div className="review-form-content">
                                <div className="rating mr-3">
                                    <Form.Check
                                        type="radio"
                                        label={
                                            <Rating
                                                className="rating"
                                                value={5}
                                                readOnly
                                                size="small"
                                            />
                                        }
                                        name="rate"
                                        id="five-stars"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label={
                                            <Rating
                                                className="rating"
                                                value={4}
                                                readOnly
                                                size="small"
                                            />
                                        }
                                        name="rate"
                                        id="four-stars"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label={
                                            <Rating
                                                className="rating"
                                                value={3}
                                                readOnly
                                                size="small"
                                            />
                                        }
                                        name="rate"
                                        id="three-stars"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label={
                                            <Rating
                                                className="rating"
                                                value={2}
                                                readOnly
                                                size="small"
                                            />
                                        }
                                        name="rate"
                                        id="two-stars"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label={
                                            <Rating
                                                className="rating"
                                                value={1}
                                                readOnly
                                                size="small"
                                            />
                                        }
                                        name="rate"
                                        id="one-stars"
                                    />
                                </div>
                                <Form.Control
                                    className="review-content"
                                    as="textarea"
                                    rows={3}
                                />
                            </div>
                            <div className="submit-btn w-100 mt-3 clearfix">
                                <Button type="submit" className="float-right">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                        <ListReviews />
                    </>
                )}
            </div>
        </div>
    );
}
