import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../images/home.svg";
import WhatHot from "../images/whathot.svg";
import Category from "../images/category.svg";
import Glass from "../images/magnifying-glass.svg";
import Logo from "../images/Logo@2x.png";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        <i class="far fa-home mr-1"></i>
                        <span>Trang Chủ</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/highlight">
                        <i class="far fa-fire mr-1"></i>
                        <span>Nổi Bật</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/category">
                        <i class="far fa-list-alt mr-1"></i>
                        <span>Danh Mục</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/search">
                        <i class="far fa-search mr-1"></i>
                        <span>Khám Phá</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
