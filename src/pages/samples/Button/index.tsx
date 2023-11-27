import style from '@/styles/button.module.scss'
import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'

export default function ButtonPage() {

    const [buttonstate, setButtonState] = useState({
        buttonText: 'sample',
        backColor: 'green',
    })

    function TestClick() {
        console.log('押されました');
    }

    return (
        <>
            <div>
                <Button
                    handleButtonClick={TestClick}
                    buttonText={buttonstate.buttonText}
                    backColor={buttonstate.backColor}
                />
            </div>
        </>
    )
}