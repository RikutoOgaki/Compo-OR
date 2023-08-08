import { useState, useEffect } from 'react'
import style from '@/styles/home.module.scss'
import Calendar from '@/components/Calendar/Calendar'

export default function Home() {

  // calendar用のstate
  const [calendarState, setCalendarState] = useState({
    calendarSize: ''
  })

  return (
    <>
      <div className={style.homeWrap}>
        <div className={style.calendarBox}>
          <div className={style.instructions}>
            <p>calendarComponentについての使い方や説明</p>
          </div>
          <div className={style.anyBox}>
            <input type="text" value={calendarState.calendarSize}
              onChange={(e) => setCalendarState({
                ...calendarState,
                calendarSize: e.target.value
              })}
            />
          </div>
          <Calendar
            calendarSize={calendarState.calendarSize}
          />
        </div>
      </div>
    </>
  )
}