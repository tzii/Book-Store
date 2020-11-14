import axios from "axios";

const instance = axios.create({baseURL: "http://localhost:5000"});

export const getAllBook = () => {
	return instance.get("/api/book/all").then((res) => res.data);
};

export const getBookPage = (params = {}) => {
	return instance.get("/api/book/query", {params}).then((res) => res.data);
};

export const getBook = (id) => {
	return instance.get(`/api/book/${id}`).then((res) => res.data);
};
