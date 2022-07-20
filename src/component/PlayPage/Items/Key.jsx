import React from "react";
import s from './key.module.css'

const Key=(props)=>{
    return(
        <div className={s.key} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default Key