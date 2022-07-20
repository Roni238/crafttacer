import React from "react";
import s from './modal.module.css'
import { NavLink } from "react-router-dom";


const Modal1=()=>{
    return <div className={s.modal}>
        <div className={s.winMenu}>
           <h2>Уровень пройден!</h2> 
           <NavLink to="/level2" className='menuItem'>Следущий уровень</NavLink>
           <NavLink to="/levels" className='menuItem'>Выбрать уровень</NavLink>
           <NavLink to="/" className='menuItem'>Главное меню</NavLink>
           <button onClick={()=>window.location.reload()}>Переиграть</button>
        </div>
    </div>
}

export default Modal1