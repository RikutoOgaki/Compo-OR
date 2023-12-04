'use client'

import { useState, useEffect } from 'react'

type Props = {
    onChange?: () => void,
    className?: string | undefined,
    value: string | undefined
}

export function InputText(props: Props) {
    return (
        <>
            <input
                type="text"
                onChange={props.onChange}
                value={props.value}
            />
        </>
    )
}