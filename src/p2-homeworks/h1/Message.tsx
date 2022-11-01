import React from 'react'
import s from './Message.module.css'

 type messgeType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message (props:messgeType) {
    return (
        <div className={s.Messege}>
            <div className={s.item}>

                <img src={props.avatar} alt="logo" className={s.logo}/>
                <div className={s.angel}></div>
                <div className={s.wrapper}>
                    <h1 className={s.name}>{props.name}</h1>
                    <p className={s.text}>{props.message}</p>
                    <p className={s.time}>{props.time}</p>
                </div>
            </div>

        </div>
    )
}

export default Message
