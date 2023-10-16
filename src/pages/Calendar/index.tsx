import { useState, useEffect } from 'react'
import Calendar from '@/components/Calendar'
import style from '@/styles/calnedar.module.scss'
import dayjs from 'dayjs'

export default function CalendarHome() {

    const day = dayjs()
    const [state, setState] = useState({
        nowYear: day.year(),
        nowMonth: day.month() + 1,
        calendarSize: ''
    })


    return (
        <>
            <div className={style.CalendarWrap}>
                <div className={style.navigationBox}>
                    <h1 className={style.title}>Calendar</h1>
                    <div className={style.instructions}>
                        <p></p>
                    </div>
                    <div className={style.dayBox}>
                        <div className={style.nowYearBox}>
                            <button>before</button>
                            <p></p>
                            <button>after</button>
                        </div>
                        <div className={style.nowMonthBox}>
                            <button>before</button>
                            <p></p>
                            <button>after</button>
                        </div>
                    </div>
                    <div></div>
                </div>
                {/* CalendarComponentがここに入る */}
                <Calendar
                    nowYear={state.nowYear}
                    nowMonth={state.nowMonth}
                    calendarSize={state.calendarSize}
                />
            </div>
        </>
    )
}