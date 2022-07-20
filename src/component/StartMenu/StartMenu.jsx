import React from "react";
import { NavLink } from 'react-router-dom';
import s from './StartMenu.module.css'

const StartMenu=()=>{
    return <div className={s.start_menu}>
         <div className={s.menu}>
            <div>
               <NavLink to="/levels" className={s.menuItem}>Играть</NavLink>
               <NavLink to="/settings" className={s.menuItem}>Настройки</NavLink>
               <NavLink to="/developer" className={s.menuItem}>Разработчик</NavLink>
            </div>
         </div>
         <div />
         

    </div>
}
export default StartMenu