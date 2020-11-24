import React, { useEffect } from "react";
import CategoryNav from "../components/CategoryNav";
import ListBooks from "../components/ListBooks";
import Banner from "../images/banner.png";
import MoreBtn from "../components/MoreBtn";

export default function HomePage() {
    useEffect(() => {
        console.log("render");
    }, []);
    return (
        <>
            <img src={Banner} alt="" style={{ width: "100%" }} />
            <section className="highlight clearfix mb-3">
                <h2>Sách nổi bật</h2>
                <hr className="m-0" />
                <ListBooks />
                <MoreBtn to="/highlight" />
            </section>
            <section className="category clearfix mb-3">
                <CategoryNav />
                <hr className="m-0" />
                <ListBooks />
                <MoreBtn to="/category" />
            </section>
        </>
    );
}
