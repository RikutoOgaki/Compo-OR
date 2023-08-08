import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import style from '@/styles/components/Calendar/calendar.module.scss'

type Props = {
    calendarSize: string,
}

export default function Calendar(props: Props) {

    const [state, setState] = useState({
        calendarSize: props.calendarSize
    })

    useEffect(() => {
        setState({
            ...state,
            calendarSize: props.calendarSize
        })
    }, [props])

    // 日付についてのあれこれのデータ ここから
    const today = dayjs().format('YYYY/MM/DD')
    console.log(today);

    // ここまで

    return (
        <>
            <div className={style.CalendarWrap} style={{ width: `${state.calendarSize}`, height: `${state.calendarSize}` }}>

            </div>
        </>
    )
}