import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookDescription from "../components/BookDescription";
import BookDetail from "../components/BookDetail";

export default function BookDetailPage() {
    const { id } = useParams();
    const [page, setPages] = useState(1);
    if (page === 1)
        return (
            <>
                <BookDetail />
                <BookDescription />
            </>
        );
    else return <></>;
}
