'use client'

type Props = {
    title: string
}

export function Header(props: Props) {
    return (
        <>
            <header>
                <h1>{props.title}</h1>
            </header>
        </>
    )
}