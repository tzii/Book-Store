import React from "react";
import Banner from "../images/banner.png";
import HighLightNav from "../components/HighLightNav";
import ListBooks from "../components/ListBooks";
import { Pagination } from "@material-ui/lab";

export default function HighLightPage() {
    return (
        <>
            <img src={Banner} alt="" style={{ width: "100%" }} />
            <section className="highlight clearfix mb-3">
                <HighLightNav />
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
            </section>
        </>
    );
}
