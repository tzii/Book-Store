import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { getSession } from "../api";
import { signin } from "../store/userSlice";

export const SigninForm = ({setForm, signin}) => {
	const {register, handleSubmit} = useForm();

	const submit = (data) => {
		// getSession(data).then((res) => console.log(res));
		signin(data);
	};

	return (
		<form className="form" onSubmit={handleSubmit(submit)}>
			<h2>Đăng nhập</h2>
			<input type="text" ref={register} name="username" placeholder="username" />
			<input type="password" ref={register} name="password" placeholder="password" />
			<div className="option">
				<label>
					<input type="checkbox" ref={register} name="remember" id="" />
					Remember
				</label>
				<p>Forgotten Password?</p>
			</div>
			<button type="submit">Sign In</button>
			<button type="button" onClick={() => setForm("signup")}>
				Not registered? <a href="#">Create an account</a>
			</button>
		</form>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {signin};

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
