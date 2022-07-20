import React from "react";
import s from './enemy.module.css'

const Enemy=(props)=>{
    return(
        <div className={s.enemy} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default Enemy