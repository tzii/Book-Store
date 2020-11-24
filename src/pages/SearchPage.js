import { Pagination } from "@material-ui/lab";
import React from "react";
import { useParams } from "react-router-dom";
import ListBooks from "../components/ListBooks";

export default function SearchPage() {
    const { id } = useParams();
    if (id)
        return (
            <>
                <h3>Kết quả tìm kiếm: {id} ...</h3>
                <hr className="my-0" />
                <ListBooks />
                <div className="d-flex justify-content-center mt-3  ">
                    <Pagination
                        className="mx-auto"
                        count={10}
                        variant="outlined"
                        siblingCount={1}
                    />
                </div>
            </>
        );
    else
        return (
            <div className="search">
                <h2>Nhập để tìm kiếm </h2>
            </div>
        );
}
