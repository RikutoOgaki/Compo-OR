import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import style from '@/styles/components/Calendar/calendar.module.scss'

type Props = {
    nowYear: number,
    nowMonth: number,
    calendarSize: string,
}

function weekIdx(day: number) {
    if (day === 0) {
        return 6
    }

    return day - 1
}

export default function Calendar(props: Props) {

    const [state, setState] = useState<Props>({
        nowYear: props.nowYear,
        nowMonth: props.nowMonth,
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

    // 1週間の曜日配列
    const weekArray = ['日', '月', '火', '水', '木', '金', '土']

    // 日付についてのあれこれのデータ ここから

    // 今月の1日を取得 (日本時間で)
    const month = dayjs(`${state.nowYear}-${state.nowMonth}`)
    console.log(month);

    // stateの月の日数を配列で持つ
    const toArray = new Array(month.daysInMonth())

    console.log(toArray);


    // ここまで

    return (
        <>
            <div className={style.CalendarWrap} style={{ width: `${state.calendarSize}`, height: `${state.calendarSize}` }}>
                <table>
                    <thead>
                        <tr>
                            {weekArray.map((e, week) =>
                                <td key={week}>{e}</td>
                            )}
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </>
    )
}