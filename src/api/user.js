import axios from "axios";
import {BASE_URL} from "../constance/baseURL";

const instance = axios.create({baseURL: BASE_URL});

export const getSession = (data) => {
	return instance.post("/api/account/login", data).then((res) => res.data);
};

export const getInfor = (id, token) => {
	return instance
		.get("/api/account", {
			params: {id},
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => res.data);
};
