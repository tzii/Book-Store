import React, { useState } from "react";
import MoreBtn from "./MoreBtn";
import "./HighLightNav.css";

export default function HighLightNav({
    titles = [
        "Sách bán chạy hàng trong tuần",
        "Sách bán chạy trong tháng",
        "Sách bán chạy của năm",
    ],
}) {
    const [currentTitle, setTitle] = useState(titles[0]);

    return (
        <div className="highlight-nav">
            {titles.map((title) => (
                <p
                    className={currentTitle === title ? "active" : ""}
                    onClick={() => setTitle(title)}
                >
                    {title}
                </p>
            ))}
        </div>
    );
}
