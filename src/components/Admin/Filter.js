import React from "react";
import "./Filter.css";

var classNames = require("classnames");
export default function Filter(props) {
	const {className, options, filter, setFilter, pagination, setPagination} = props;

	const onHandleSearch = (event) => {
		if (event.key === "Enter") {
			setFilter({
				...filter,
				search: event.target.value,
			});

			console.log(filter);
		}
	};

	const onHandleIsSuspend = (event) => {
		setFilter({
			...filter,
			isSuspend: event.target.value,
		});
	};

	const onHandleItem = (event) => {
		setFilter({
			...filter,
			size: event.target.value,
		});

		setPagination({
			...pagination,
			page: 1,
		});
	};
	//NOTE category select

	return (
		<div className={classNames(className, "filter")}>
			<div className="filter-item ">
				<label htmlFor="search-box">Tìm kiếm</label>
				<input
					className="search-box"
					name="search-box"
					id="search-box"
					type="text"
					onKeyDown={onHandleSearch}
				/>
			</div>
			<div className="filter-item">
				<label htmlFor="category">Danh mục</label>
				<select className=" category" id="category" name="category">
					{options?.map((option) => (
						<option value={option.id} key={option.id}>
							{option.name}
						</option>
					))}
				</select>
			</div>
			<div className="filter-item ">
				<label htmlFor="isSuspend">Tình trạng</label>
				<select
					className="isSuspend"
					id="isSuspend"
					name="isSuspend"
					onChange={onHandleIsSuspend}>
					<option value="">Tất cả</option>
					<option value="false">Còn hàng</option>
					<option value="true">Hết hàng</option>
				</select>
			</div>
			<div className="filter-item ">
				<label htmlFor="show">Hiển thị</label>
				<select className="show" id="show" name="size" onChange={onHandleItem}>
					<option value="2"> 2 cuốn sách</option>
					<option value="10">10 cuốn sách</option>
					<option value="20">20 cuốn sách</option>
					<option value="50">50 cuốn sách</option>
					<option value="">Tất cả</option>
				</select>
			</div>
		</div>
	);
}
