import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import style from '@/styles/components/Calendar/calendar.module.scss'

type Props = {
    nowYear: number,
    nowMonth: number,
    calendarSize: string,
}

export default function Calendar(props: Props) {

    const day = dayjs()
    const [state, setState] = useState({
        nowYear: day.year(),
        nowMonth: dayjs().month() + 1,
        calendarSize: props.calendarSize
    })

    useEffect(() => {
        setState({
            ...state,
            nowYear: props.nowYear,
            nowMonth: props.nowMonth,
            calendarSize: props.calendarSize
        })
    }, [props])

    // 日付についてのあれこれのデータ ここから


    // ここまで

    return (
        <>
            <div className={style.CalendarWrap} style={{ width: `${state.calendarSize}`, height: `${state.calendarSize}` }}>

            </div>
        </>
    )
}