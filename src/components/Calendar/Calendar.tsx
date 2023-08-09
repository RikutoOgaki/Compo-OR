import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import style from '@/styles/components/Calendar/calendar.module.scss'

type Props = {
    nowYear: number,
    nowMonth: number,
    calendarSize: string,
}

function weekIdx(day: number) {
    if (day === 6) {
        return 0
    }

    return day + 1
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
    const date = dayjs(`${state.nowYear}-${state.nowMonth}`)
    console.log(date);

    // １日の曜日を番号で取得
    const test = date.day()
    console.log(test);

    // stateの月の日数を配列で持つ
    const toArray = [...new Array(date.daysInMonth())].map((_, e) => e + 1)







    // ここまで

    return (
        <>
            <div className={style.CalendarWrap} style={{ width: `${state.calendarSize}`, height: `${state.calendarSize}` }}>
                <table>
                    <thead>
                        <tr>
                            {weekArray.map((e, week) =>
                                <th key={week}>{e}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {toArray.map((e, idx) => {

                            const test = dayjs(`${state.nowYear}/${state.nowMonth}/${e}`).day()

                            return (
                                <tr key={idx}>
                                    <td>{e}{weekArray[test]}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}