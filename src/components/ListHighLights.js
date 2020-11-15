import React from "react";
import HighLight from "./HighLight";

export default function ListHighLights({ books = [{}, {}, {}, {}] }) {
    return (
        <div className="list-highlight">
            {books.map((book) => (
                <HighLight book={book} />
            ))}
        </div>
    );
}
