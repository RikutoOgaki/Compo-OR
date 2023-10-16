import style from '@/styles/button.module.scss'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'

export default function BUttonPage() {

    const [buttonstate, setButtonState] = useState({
        buttonText: 'sample',
        backColor: 'green',
    })

    return (
        <>
            <div className={style.buttonWrap}>
                <Button
                    buttonText={buttonstate.buttonText}
                    backColor={buttonstate.backColor}
                />
            </div>
        </>
    )
}