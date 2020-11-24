import { Pagination } from "@material-ui/lab";
import React from "react";
import ListBooks from "../components/ListBooks";

export default function CategoriesPage() {
    return (
        <>
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
}
