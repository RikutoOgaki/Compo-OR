import { useState, useEffect } from 'react'
import style from '@/styles/home.module.scss'

export default function Home() {

  return (
    <>
      <div className={style.homeWrap}>
        <h1 className={style.title}>Compo-OR</h1>
      </div>
    </>
  )
}