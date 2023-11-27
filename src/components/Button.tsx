import { useState, useEffect } from 'react'
import style from '@/styles/components/button.module.scss'


type Props = {
    buttonText: string
    backColor: string,
    handleButtonClick: () => void
}

export function Button(props: Props) {

    const [state, setState] = useState({
        buttonText: props.buttonText,// ボタンに入るテキストデータ
        backColor: props.backColor// ボタンの背景色データ
    })

    useEffect(() => {
        setState({
            buttonText: props.buttonText,
            backColor: props.backColor
        })
    }, [props])



    return (
        <>
            <button
                className={style.buttonCompo}
                style={{
                    backgroundColor: `${state.backColor}`
                }}
                // どんな関数でも受け入れるようにする値
                onClick={props.handleButtonClick}
            >{state.buttonText}</button>
        </>
    )
}