import { Avatar, Badge, IconButton } from "@material-ui/core";
import React from "react";
import Img from "../images/avatar.jpg";
import ListHighLights from "./ListHighLights";
import MoreBtn from "./MoreBtn";
import "./RightBar.css";

export default function RightBar() {
    return (
        <div className="right-bar">
            <div className="user">
                <IconButton className="mr-2">
                    <Badge badgeContent={4} color="secondary">
                        <i class="far fa-shopping-cart"></i>
                    </Badge>
                </IconButton>
                <IconButton className="mr-2">
                    <Avatar src={Img} />
                </IconButton>
            </div>
            <div className="hightlight-bar mt-4">
                <h5>Sách nổi bật trong tuần </h5>
                <ListHighLights />
                <MoreBtn to="/highlight" />
            </div>
        </div>
    );
}
