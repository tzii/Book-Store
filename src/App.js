import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import BookDetailPage from "./pages/BookDetailPage";
import CartPage from "./pages/CartPage";
import HighLightPage from "./pages/HighLightPage";

export const App = ({ user }) => {
    return (
        <>
            <Switch>
                <Route path="/login" component={LoginPage} />
                {/* <Route path="/admin" component={NotFoundPage} /> */}
                <Route>
                    <Container fluid>
                        <Row>
                            <Col xs={2}>
                                <Header />
                            </Col>
                            <Route path={["/user", "/cart"]}>
                                <Col xs={10}>
                                    <Route path="/user" component={UserPage} />
                                    <Route path="/cart" component={CartPage} />
                                </Col>
                            </Route>
                            <Route
                                path={[
                                    "/",
                                    "/highlight",
                                    "/category",
                                    "/search",
                                    "/book",
                                ]}
                            >
                                <Col xs={8}>
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
                                            component={HighLightPage}
                                        />
                                        <Route
                                            path="/search/:id?"
                                            component={SearchPage}
                                        />
                                        <Route
                                            path="/book"
                                            component={BookDetailPage}
                                        />
                                        <Route
                                            path="*"
                                            component={NotFoundPage}
                                        />
                                    </Switch>
                                </Col>
                            </Route>
                        </Row>
                    </Container>
                    <Footer />
                </Route>
            </Switch>
        </>
    );
};

const mapStateToProps = (state) => ({ user: state.user });

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
