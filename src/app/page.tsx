'use client'

import Image from 'next/image'
import style from './page.module.scss'
import { Button } from '@/Components/common/Button/Button'

export default function Home() {
  return (
    <>
      <div className={style.wrap}>
        <h1 className={style.title}>Compo<span>-OR</span></h1>
        <div className={style.linkBox}>
          <Button
            text='Get Started'
            link='/componentspages'
          />
          <Button
            text='GitHub'
            className={style.btn}
            link='https://github.com/RikutoOgaki/Compo-OR'
          />
        </div>
      </div>
    </>
  )
}
