import React from "react"
import FlatItem from "./FlatItem";
import s from "./PlayPage.module.css";
import Player from "./Player/Player";
import Block from "./Blocks/Block";
import BlockSide from "./Blocks/BlockSide";
import BlockStone from "./Blocks/BlockStone";
import Key from "./Items/Key";
import Door from "./Items/Door";
import Target from "./Items/Target";
import Steps from "./Steps/Steps";
import Lava from "./Blocks/Lava";
import Enemy from "./Items/Enemy";
import Modal1 from "../Modal/Modal1";





const PlayPage = (props)=>{
    let blocks=props.state.objData.blocks.block.map(el=><Block pozX={el[0]} pozY={el[1]} key={el}/>)
    let blocksSide=props.state.objData.blocks.blockSide.map(el=><BlockSide pozX={el[0]} pozY={el[1]} key={el}/>)
    let blocksStone=props.state.objData.blocks.blockStone.map(el=><BlockStone pozX={el[0]} pozY={el[1]} key={el}/>)
    let keys=props.state.objData.item.key.map(el=><Key zpozX={el[0]} pozY={el[1]} key={el}/>)
    let door=props.state.objData.item.door.map(el=><Door pozX={el[0]} pozY={el[1]} key={el}/>)
    let targets=props.state.objData.item.target.map(el=><Target pozX={el[0]} pozY={el[1]} key={el}/>)
    let lavs=props.state.objData.blocks.lava.map(el=><Lava pozX={el[0]} pozY={el[1]} key={el}/>)
    let enemy=props.state.objData.item.enemy.map(el=><Enemy pozX={el[0]} pozY={el[1]} key={el}/>)
    let modalWindow
    if(props.state.win){
       modalWindow=<Modal1/>
    }
return(
        <div className={s.PlayPage}>
            <div className={s.flat}>
                {lavs}
                {enemy}
                {blocks}
                {blocksSide}
                {blocksStone}
                {keys}
                {door}
                {targets}
                <Player cordX={props.state.playerData.cordX} cordY={props.state.playerData.cordY} />
              <FlatItem/>  
              <Steps steps={props.state.steps}/>
              {modalWindow}
            </div>
        </div>
    )
}

export default PlayPage