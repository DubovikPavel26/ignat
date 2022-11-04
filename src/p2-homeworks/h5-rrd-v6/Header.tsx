import React from 'react'
import {NavLink} from "react-router-dom";
import s from './header.module.css'
import {PATH} from "./Pages";


function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.PRE_JUNIOR} className={(param) => {return param.isActive ? s.active : s.link}}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={(param) => {return param.isActive ? s.active : s.link}}>junior</NavLink>
            <NavLink to={PATH.JUNIORPLUS} className={(param) => {return param.isActive ? s.active : s.link}}>junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
