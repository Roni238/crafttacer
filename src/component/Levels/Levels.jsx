import React from "react";
import { NavLink } from 'react-router-dom';
import s from './levels.module.css'

const Levels=()=>{
    return(
        <div className={s.levels}>
          <div>
            <div style={{background: 'linear-gradient(215.32deg, #427091 -1%, #b48372 124%)'}}>
              <h1><NavLink to="/level1" className={s.menuItem}>Уровень 1</NavLink></h1>
            </div>
            <div style={{background: 'linear-gradient(215.32deg, #427091 -1%, #b48372 124%)'}}>
              <h1><NavLink to="/level2" className={s.menuItem}>Уровень 2</NavLink></h1>
            </div>
            <div style={{background:'linear-gradient(215.32deg, #427091 -1%, #b48372 124%)'}}>
              <h1><NavLink to="/level3" className={s.menuItem}>Уровень 3</NavLink></h1>
            </div>
        </div>
        <div className={s.infoMenu}>
                <h4>Помогите медному голему найти друзей!</h4>
                <h4>W,A,S,D-Управление</h4>
                <h4>Количество ходов ограничено</h4>
                <h4>Блоки магмы отбирают 2 хода</h4>
                <h4> враги мешают пройти, но их можно прибить к стенке</h4>
                <h3>Будте осторожны</h3>
                </div>
      </div>

    )
}

export default Levels