import style from '@/styles/pages/Button/index.module.scss'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button/Button'

export default function BUttonPage() {

    const [state, setState] = useState({
        buttonText: 'tekitou',
        backColor: 'green',
    })

    return (
        <>
            <div className={style.buttonWrap}>
                <Button
                    buttonText={state.buttonText}
                    backColor={state.backColor}
                />
            </div>
        </>
    )
}