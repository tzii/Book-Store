import React from "react";
import CategoryNav from "../components/CategoryNav";
import ListBooks from "../components/ListBooks";
import Banner from "../images/banner.png";

export default function HomePage() {
    return (
        <>
            <img src={Banner} alt="" style={{ width: "100%" }} />
            <section className="highlight">
                <h2>Sách nổi bật</h2>
                <ListBooks />
            </section>
            <section className="category">
                <CategoryNav />
                <ListBooks />
            </section>
        </>
    );
}
