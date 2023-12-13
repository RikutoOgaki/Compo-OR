'use client'

import { useState } from 'react'
import { Button } from '@/Components/common/Button/Button'

export function Tabs() {

    const [state, setState] = useState(1)


    const textData = [
        {
            id: 1,
            text: '1が押されたので現在1の内容を表示しています'
        },
        {
            id: 2,
            text: '2が押されたので現在2の内容を表示しています'
        },
        {
            id: 3,
            text: '3が押されたので現在3の内容を表示しています'
        },
    ]

    return (
        <>
            <div className='tabsWrap'>
                <div className='btnBox'>
                    <Button text='1' onClick={() => setState(1)} className='btn' />
                    <Button text='2' onClick={() => setState(2)} className='btn' />
                    <Button text='3' onClick={() => setState(3)} className='btn' />
                </div>
                <div className='textBox'>
                    {textData.map((v, idx) =>
                        <p key={idx}>
                            {state === v.id ? v.text : undefined}
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}