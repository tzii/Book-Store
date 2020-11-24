import React, { useEffect } from "react";
import ListHighLights from "./ListHighLights";
import MoreBtn from "./MoreBtn";
import "./RightBar.css";

export default function RightBar() {
    useEffect(() => {
        console.log("render right");
    }, []);
    return (
        <div className="hightlight-bar mt-4 clearfix">
            <h5>Sách bán chạy trong tuần </h5>
            <ListHighLights />
            <MoreBtn to="/highlight" />
        </div>
    );
}
