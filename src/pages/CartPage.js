import React from "react";
import { Button } from "react-bootstrap";
import CartTable from "../components/CartTable";

export default function CartPage() {
    return (
        <>
            <CartTable />
            <div className="clearfix d-flex justify-content-end">
                <div className="float-right w-25">
                    <div className="d-flex justify-content-between">
                        <p>Tổng giá trị</p>
                        <p>$22</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Phí vận chuyển</p>
                        <p>$2</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p>Hình thức thanh toán</p>
                        <p>COD</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <h5>Tổng</h5>
                        <h5>$24</h5>
                    </div>
                    <Button block className="mt-3">
                        Đặt hành
                    </Button>
                </div>
            </div>
        </>
    );
}
