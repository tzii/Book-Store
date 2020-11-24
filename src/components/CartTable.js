import React from "react";
import "./CartTable.css";
import Img from "../images/book.png";

export default function CartTable({ orders = [{}, {}, {}] }) {
    return (
        <table className="cart-table w-100 mb-5">
            <thead>
                <tr className="border-bottom">
                    <th>Sách</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order) => (
                    <tr className="order-info border-bottom ">
                        <td className="d-flex  my-2">
                            <img className="mr-4" src={Img} alt="" />
                            <p>War on the Gothic Line</p>
                        </td>
                        <td>$11</td>
                        <td>2</td>
                        <td>$22</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
