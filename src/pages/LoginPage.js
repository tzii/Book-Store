import React, { useState } from "react";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";
import "./LoginPage.css";

export default function LoginPage() {
    const [form, setForm] = useState("signin");
    return (
        <div id="login-page">
            {form === "signin" ? (
                <SigninForm setForm={setForm} />
            ) : (
                <SignupForm setForm={setForm} />
            )}
        </div>
    );
}
