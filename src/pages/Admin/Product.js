import React, {useEffect, useState} from "react";
import {getBookPage} from "../../api/";
import ProductComponent from "../../components/Admin/Product";
import Filter from "../../components/Admin/Filter";
import Pagination from "../../components/Pagination";
import "./Product.css";
import ProductDetail from "../../components/Admin/ProductDetail";

export default function Product(props) {
	const [mode, setMode] = useState("");
	const [books, setBooks] = useState([]);
	const [pagination, setPagination] = useState({
		page: 1,
		totalPage: 1,
	});
	const [filter, setFilter] = useState({
		size: 2,
		categoryId: null,
		search: null,
		isSuspend: null,
	});

	const options = [
		{
			id: 1,
			name: "Tất cả",
		},
		{
			id: 2,
			name: "aaaa",
		},
		{
			id: 3,
			name: "aaaa",
		},
	];

	useEffect(() => {
		getBookPage({
			page: pagination.page,
			size: filter.size,
			categoryId: filter.categoryId,
			search: filter.search,
			isSuspend: filter.isSuspend,
		}).then((res) => {
			setMode("VIEW");
			// console.log(res);
			setPagination({
				...pagination,
				totalPage: res.payload?.totalPage,
			});
			setBooks(res.payload?.books);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [JSON.stringify(pagination), JSON.stringify(filter)]);

	const onPageChange = (page) => {
		setPagination({
			...pagination,
			page: page,
		});
	};

	return (
		<div className="product mt-4">
			<div className="row">
				<div className="col-xl-2 col-md-3 mb-4">
					<Filter
						options={options}
						filter={filter}
						setFilter={setFilter}
						pagination={pagination}
						setPagination={setPagination}
					/>
				</div>
				{books != null && books.length > 0 && (
					<div className="col-xl-10 col-md-9">
						{pagination.totalPage > 1 && (
							<Pagination
								className="mb-4 d-flex justify-content-center	"
								pagination={pagination}
								setPagination={setPagination}
								onPageChange={onPageChange}
							/>
						)}

						<div className="product--items">
							{books.map((book) => (
								<ProductComponent key={book.id} book={book} setMode={setMode} />
							))}
						</div>
					</div>
				)}
			</div>
			{mode === "DETAIL" && <ProductDetail productId="1" setMode={setMode} />}
			{mode === "EDIT" && <h1>edit</h1>}
			{mode === "DELETE" && <h1>delete</h1>}
		</div>
	);
}
