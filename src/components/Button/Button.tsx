import { useState, useEffect } from 'react'
import style from '@/styles/components/Button/button.module.scss'


type Props = {
    buttonText: string,
    buttonWidth: string,
    buttonHeight: string,
    backColor: string,
}

export function Button(props: Props) {

    const [state, setState] = useState({
        buttonText: props.buttonText,// ボタンに入るテキストデータ
        buttonWidth: props.buttonWidth,// ボタンの幅指定データ
        buttonHeight: props.buttonHeight,// ボタンの高さ指定データ
        backColor: props.backColor// ボタンの背景色データ
    })

    useEffect(() => {
        setState({
            buttonText: props.buttonText,
            buttonWidth: props.buttonWidth,
            buttonHeight: props.buttonHeight,
            backColor: props.backColor
        })
    }, [props])



    return (
        <>
            <button
                className={style.buttonCompo}
                style={{
                    width: `${state.buttonWidth}`,
                    height: `${state.buttonHeight}`,
                    backgroundColor: `${state.backColor}`
                }}
            >{state.buttonText}</button>
        </>
    )
}