import style from '@/styles/components/InputText/input.module.scss'

type Props = {
    inputText: string,
    inputWidth: string,
    inputHeight: string
}

export function InputText() {
    return (
        <>
            <input type="text" className={style.InputText} />
        </>
    )
}