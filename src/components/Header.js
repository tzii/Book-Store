import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../images/home.svg";
import WhatHot from "../images/whathot.svg";
import Category from "../images/category.svg";
import Glass from "../images/magnifying-glass.svg";
import Logo from "../images/Logo.png";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={Logo} />
            <nav>
                <NavLink to="/">
                    <img src={HomeIcon} />
                    Trang Chủ
                </NavLink>
                <NavLink to="">
                    <img src={WhatHot} />
                    Nổi Bật
                </NavLink>
                <NavLink to="">
                    <img src={Category} />
                    Danh Mục
                </NavLink>
                <NavLink to="">
                    <img src={Glass} />
                    Khám Phá
                </NavLink>
            </nav>
        </header>
    );
}
