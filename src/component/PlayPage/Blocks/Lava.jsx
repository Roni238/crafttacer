import React from "react";
import s from './lava.module.css'

const Lava=(props)=>{
    return(
        <div className={s.lava} style={{
            gridColumn:props.pozX,
            gridRow: props.pozY,    
        }}></div>
    )
}
export default Lava