import React from "react";
import Glass from "../images/magnifying-glass.svg";

export default function SearchForm() {
    return (
        <form>
            <input
                type="text"
                placeholder="tìm cuốn sách mà bạn yêu thích ..."
            />
            <img src={Glass} />
        </form>
    );
}
