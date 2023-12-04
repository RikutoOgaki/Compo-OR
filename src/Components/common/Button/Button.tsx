'use client'

import { useState, useEffect } from 'react'

type Props = {
    text: string,
    className?: string | undefined,
    onClick?: () => void,
    link?: string
}

export function Button(props: Props) {

    const [state, setState] = useState({
        text: props.text,
        className: props.className,
        link: props.link
    })

    const ButtonComponent = (
        <button
            onClick={props.onClick}
            className={state.className !== undefined ? props.className : undefined}
        >
            {state.text}
        </button>
    )

    return (
        <>
            {props.link ? (
                <a href={state.link}>
                    {ButtonComponent}
                </a>
            ) : (
                ButtonComponent
            )}
        </>
    )
}