import React from "react";
import s from './door.module.css'

const Door=(props)=>{
    return(
        <div className={s.door} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default Door