import React from "react";
import s from './block.module.css'

const Block=(props)=>{
    return(
        <div className={s.block} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default Block
