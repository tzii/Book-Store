import React from "react";
import Glass from "../images/magnifying-glass.svg";
import Logo from "../images/Logo@2x.png";
import Img from "../images/avatar.jpg";
import { Avatar, Badge, IconButton } from "@material-ui/core";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="mt-2 shadow-sm">
            <div className="brand">
                <img src={Logo} alt="" />
            </div>
            <div className="search">
                <form id="search-form">
                    <input
                        type="text"
                        placeholder="Tìm cuốn sách mà bạn yêu thích ..."
                    />
                    <img src={Glass} alt="" />
                </form>
            </div>
            <div className="user">
                <Link className="mr-2 cart-icon" to="/cart">
                    <Badge badgeContent={4} color="secondary">
                        <i className="far fa-shopping-cart"></i>
                    </Badge>
                </Link>
                <IconButton className="mr-2">
                    <Avatar src={Img} />
                </IconButton>
            </div>
        </header>
    );
}
