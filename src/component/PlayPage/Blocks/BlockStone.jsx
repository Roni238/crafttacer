import React from "react";
import s from './blockStone.module.css'

const BlockStone=(props)=>{
    return(
        <div className={s.blockStone} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default BlockStone
