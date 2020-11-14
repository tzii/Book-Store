import React from "react";
import {Col, Row} from "reactstrap";
import "./InfoCard.css";
import {useHistory} from "react-router-dom";

const classNames = require("classnames");

export default function InfoCard(props) {
	const {color, title, subTitle, count, href, images, className} = props;
	const history = useHistory();
	return (
		<div className={classNames(className, "card", color)} onClick={() => history.push(href)}>
			<div className="card--body">
				<Row>
					<Col xs="8" className="mr-2">
						<h4 className="card__title">{title}</h4>
						<small>{subTitle}</small>
						<p className="card__content">{count}</p>
					</Col>
					<Col className="card--logo d-flex justify-content-center ">
						<img src={images} alt={title} />
					</Col>
				</Row>
			</div>
		</div>
	);
}
