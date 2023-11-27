import { useState, useEffect } from 'react'
import style from '@/styles/components/input.module.scss'

type Props = {
    value: string,
    className: string | undefined,
    handleInputChenge: () => void
}

export function Input(props: Props) {

    const [state, setState] = useState({
        value: props.value,
        className: props.className
    })

    useEffect(() => {
        setState({
            value: props.value,
            className: props.className
        })
    }, [props])

    return (
        <>
            <input
                type="text"
                value={state.value}
                className={state.className}
                onChange={props.handleInputChenge}
            />
        </>
    )
}