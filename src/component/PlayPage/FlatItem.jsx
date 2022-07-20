import React from "react";
import s from "./PlayPage.module.css";

const FlatItem=()=>{
    let span= Array(144).fill(<span></span>)
    return(
        <div className={s.flat}>
            {span}
        </div>
    )
}

export default FlatItem