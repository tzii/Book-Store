import React, {Suspense} from "react";
import {connect} from "react-redux";
import {Redirect, Route, Switch, BrowserRouter} from "react-router-dom";
import Loading from "./components/Loading";
import Admin from "./pages/Admin";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";

export const App = ({user}) => {
	return (
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/login">
						{user.isLogin ? <Redirect to="/" /> : <LoginPage />}
					</Route>
					<Route path="/admin/" component={Admin}></Route>
					<Route path="/search/:id?" component={SearchPage} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</BrowserRouter>
		</Suspense>
	);
};

const mapStateToProps = (state) => ({user: state.user});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
