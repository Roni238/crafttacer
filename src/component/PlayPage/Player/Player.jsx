import React from "react";
import s from "./Player.module.css"


const Player=(cord)=>{
    return(
        <div className={s.pl} style={{gridColumn:cord.cordX,gridRow: cord.cordY}}></div>
    ) 
}
export default Player