import React from "react";
import p from "./MenuItem.module.css";

const MenuItem = (props) => {
    return (
        <div className={p.item}>
            {props.name}
        </div>
    )
}

export default MenuItem;