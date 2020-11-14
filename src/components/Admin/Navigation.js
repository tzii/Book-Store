import React, {useState} from "react";
import {Col, Row} from "reactstrap";
import {Link, NavLink} from "react-router-dom";
import "./Navigation.css";
import logo from "../../images/admin-nav-logo.svg";

const classNames = require("classnames");

export default function Navigation() {
	const [active, setActive] = useState(false);

	return (
		<Row className="nav">
			<Col
				md="2"
				xs="1"
				className={classNames("hamburger", {active: active})}
				onClick={() => setActive(!active)}>
				<div></div>
				<div></div>
				<div></div>
			</Col>

			<Col md="2" xs="11" className="drop-down text-right">
				<img className="nav--logo" src={logo} alt="admin-logo" />
				<div className="drop-down-content"></div>
			</Col>

			<Col md="8" className={classNames("nav-links", {active: active})}>
				<NavLink to="/admin/home" className="nav-item" activeClassName="active">
					Trang chủ
				</NavLink>
				<NavLink to="/admin/product" className="nav-item" activeClassName="active">
					Sản phẩm
				</NavLink>
				<NavLink to="/admin/order" className="nav-item" activeClassName="active">
					Đơn hàng
				</NavLink>
				<NavLink to="/admin/account" className="nav-item" activeClassName="active">
					Khách hàng
				</NavLink>
			</Col>
		</Row>
	);
}
