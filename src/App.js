import React, { Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CateGory from "./pages/CategoriesPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import AdminPage from "./pages/Admin";
import BookDetailPage from "./pages/BookDetailPage";
import CartPage from "./pages/CartPage";
import HighLightPage from "./pages/HighLightPage";

import Loading from "./components/Loading";
import RightBar from "./components/RightBar";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

import "./App.css";

export const App = ({ user }) => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/login">
                    {user.isLogin ? <Redirect to="/" /> : <LoginPage />}
                </Route>
                <Route path="/admin" component={AdminPage} />
                <Route>
                    <Route
                        path={[
                            "/",
                            "/highlight",
                            "/category",
                            "/search/:id?",
                            "/book/:id?",
                        ]}
                    >
                        <Header />
                    </Route>
                    <Container fluid>
                        <Row>
                            <Col xs={2}>
                                <NavBar />
                            </Col>
                            <Switch>
                                <Route path={["/user", "/cart"]}>
                                    <Col xs={10}>
                                        <Route
                                            path="/user"
                                            component={UserPage}
                                        />
                                        <Route
                                            path="/cart"
                                            component={CartPage}
                                        />
                                    </Col>
                                </Route>
                                <Route
                                    path={[
                                        "/",
                                        "/highlight",
                                        "/category",
                                        "/search/:id?",
                                        "/book/:id?",
                                    ]}
                                >
                                    <Col xs={8} className="px-5">
                                        <Switch>
                                            <Route
                                                exact
                                                path="/"
                                                component={HomePage}
                                            />
                                            <Route
                                                path="/highlight"
                                                component={HighLightPage}
                                            />
                                            <Route
                                                path="/category"
                                                component={CateGory}
                                            />
                                            <Route
                                                path="/search/:id?"
                                                component={SearchPage}
                                            />
                                            <Route
                                                path="/book/:id?"
                                                component={BookDetailPage}
                                            />
                                            <Route
                                                path="*"
                                                component={NotFoundPage}
                                            />
                                        </Switch>
                                    </Col>
                                    <Col xs={2}>
                                        <RightBar />
                                    </Col>
                                </Route>
                            </Switch>
                        </Row>
                    </Container>
                    <Footer />
                </Route>
            </Switch>
        </Suspense>
    );
};

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
