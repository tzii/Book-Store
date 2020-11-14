import React, {useEffect, useState} from "react";
import "./Home.css";
import {getAllBook} from "../../api";

import InfoCard from "../../components/Admin/InfoCard";
import bookIcon from "../../images/bookshelf.svg";
export default function Home() {
	const [countBook, setCountBook] = useState(0);

	useEffect(() => {
		getAllBook().then((res) => {
			setCountBook(res.payload.total);
		});
	}, []);

	return (
		<div className="home mt-5">
			<div className="home--cards">
				<InfoCard
					className="card"
					images={bookIcon}
					color="green"
					title="Sản phẩm"
					count={countBook}
					href="/admin/product"
				/>
				<InfoCard
					className="card"
					images={bookIcon}
					color="red"
					title="Đơn hàng"
					subTitle="Đang chờ xử lí"
					count="152"
					href="/admin/order"
				/>
				<InfoCard
					className="card"
					images={bookIcon}
					color="blue"
					title="Khách hàng"
					count="81"
					href="/admin/account/user"
				/>
				<InfoCard
					className="card"
					images={bookIcon}
					color="green"
					title="Doanh thu"
					count="14500500"
				/>
			</div>
		</div>
	);
}
