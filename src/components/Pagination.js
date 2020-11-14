import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";

Pagination.propTypes = {
	onPageChange: PropTypes.func,
	pagination: PropTypes.object.isRequired,
	setPagination: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
	onPageChange: null,
	setPagination: null,
};

function Pagination(props) {
	const {pagination, setPagination, onPageChange, className} = props;

	const onHandlerClick = (page) => {
		if (onPageChange && setPagination) {
			onPageChange(page);
		}
	};

	var Pages = [];

	for (let i = 1; i <= pagination.totalPage; i++) {
		Pages = [
			...Pages,
			<button
				disabled={pagination.page === i}
				className="page--item"
				key={i}
				onClick={() => onHandlerClick(i)}>
				{i}
			</button>,
		];
	}

	return (
		<div className={className}>
			<button
				disabled={pagination.page <= 1}
				onClick={() => onHandlerClick(pagination.page - 1)}
				className="page--item page--prev">
				<i className="fas fa-chevron-left"></i>
			</button>
			{Pages}
			<button
				disabled={pagination.page >= pagination.totalPage}
				onClick={() => onHandlerClick(pagination.page + 1)}
				className="page--item page--next">
				<i className="fas fa-chevron-right"></i>
			</button>
		</div>
	);
}

export default Pagination;
