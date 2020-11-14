import React from "react";
import {Redirect, Route, Switch, useRouteMatch} from "react-router-dom";
import Navigation from "../../components/Admin/Navigation";
import NotFoundPage from "../NotFoundPage";
import "./Admin.css";

const Home = React.lazy(() => import("./Home"));
const Order = React.lazy(() => import("./Order"));
const Product = React.lazy(() => import("./Product"));
const Account = React.lazy(() => import("./Account"));

export default function Admin() {
	const match = useRouteMatch();
	return (
		<div className="admin-page">
			<Navigation />
			<Switch>
				<Route exact path={`${match.url}`}>
					<Redirect to={`${match.url}/home`}></Redirect>
				</Route>
				<Route exact path={`${match.url}/home`} component={Home}></Route>
				<Route path={`${match.url}/product`} component={Product}></Route>
				<Route path={`${match.url}/order`} component={Order}></Route>
				<Route path={`${match.url}/account`} component={Account}></Route>
				<Route path="*" component={NotFoundPage}></Route>
			</Switch>
		</div>
	);
}
