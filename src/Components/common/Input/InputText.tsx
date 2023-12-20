'use client'

type Props = {
    onChange?: () => void,
    className?: string | undefined,
    value?: string | undefined
}

export function InputText(props: Props) {
    return (
        <>
            <input
                type="text"
                onChange={props.onChange}
                value={props.value}
                className={props.className}
            />
        </>
    )
}