import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../images/home.svg";
import WhatHot from "../images/whathot.svg";
import Category from "../images/category.svg";
import Glass from "../images/magnifying-glass.svg";
import Logo from "../images/Logo@2x.png";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={Logo} />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            <img src={HomeIcon} />
                            <span>Trang Chủ</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/highlight">
                            <img src={WhatHot} />
                            <span>Nổi Bật</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/category">
                            <img src={Category} />
                            <span>Danh Mục</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">
                            <img src={Glass} />
                            <span>Khám Phá </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
