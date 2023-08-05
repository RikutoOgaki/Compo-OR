import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import style from '@/styles/components/Calendar/calendar.module.scss'

type State = {
    CalendarSize: number,

}

export default function Calendar() {

    const [state, setState] = useState({
        CalendarSize: 0
    })

    return (
        <>
            <div className={style.CalendarWrap} style={{ width: `${state.CalendarSize}px`, height: `${state.CalendarSize}px` }}>

            </div>
        </>
    )
}