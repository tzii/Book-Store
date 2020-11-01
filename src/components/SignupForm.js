import React, { Component } from "react";
import { connect } from "react-redux";

export const SignupForm = ({ setForm }) => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form className="form" onSubmit={submitHandler}>
            <h2>Đăng kí</h2>
            <input type="text" name="" id="" placeholder="Your name" />
            <input type="text" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Your Phone" />
            <input type="text" name="" id="" placeholder="Username" />
            <input type="password" name="" id="" placeholder="Password" />
            <input
                type="password"
                name=""
                id=""
                placeholder="Confirm Password"
            />
            <button type="submit">Sign Up</button>
            <button type="button" onClick={() => setForm("signin")}>
                Have already an account? <a href="#">Login here</a>
            </button>
        </form>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
