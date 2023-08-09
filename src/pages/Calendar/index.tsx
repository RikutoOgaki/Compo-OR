import { useState, useEffect } from 'react'
import Calendar from '@/components/Calendar/Calendar'
import style from '@/styles/pages/Calendar/index.module.scss'

export default function CalendarHome() {

    const [state, setState] = useState()

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
            </div>
        </>
    )
}