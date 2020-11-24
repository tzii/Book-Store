import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Book from "./Book";

export default function ListBooks({ books = [{}, {}, {}, {}] }) {
    return (
        <Row>
            {books.map((book) => (
                <Col xs={4} className="mt-3">
                    <Book book={book} />
                </Col>
            ))}
        </Row>
    );
}
