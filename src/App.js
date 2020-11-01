import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";

export const App = ({ user }) => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />

            <Route path="/login">
                {user.isLogin ? <Redirect to="/" /> : <LoginPage />}
            </Route>
            <Route path="/search/:id?" component={SearchPage} />
            <Route path="*" component={NotFoundPage} />
        </Switch>
    );
};

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
