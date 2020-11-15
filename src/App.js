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
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

export const App = ({ user }) => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route path="/login">
                    {user.isLogin ? <Redirect to="/" /> : <LoginPage />}
                </Route>
                <Route path="/admin" component={AdminPage} />
                <Route>
                    <Container fluid className="mt-4">
                        <Row>
                            <Col xs={2}>
                                <Header />
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
                                        "/search",
                                        "/book",
                                    ]}
                                >
                                    <Col xs={8}>
                                        <SearchForm />
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
                                                path="/book"
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
