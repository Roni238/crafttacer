import React from "react";
import s from './blockSide.module.css'

const BlockSide=(props)=>{
    return(
        <div className={s.sideBlock} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default BlockSide
