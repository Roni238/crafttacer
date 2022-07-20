import React from "react";
import s from './target.module.css'

const Target=(props)=>{
    return(
        <div className={s.target} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default Target