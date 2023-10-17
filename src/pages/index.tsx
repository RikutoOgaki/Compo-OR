import { useState, useEffect } from 'react'
import Link from 'next/link'
import style from '@/styles/home.module.scss'

export default function Home() {

  return (
    <>
      <div className={style.homeWrap}>
        <h1 className={style.title}>Compo-OR</h1>
        <ul>
          <li><Link href={'/samples/Button'}>Button</Link></li>
          <li><Link href={'/samples/Calendar'}>Calendar</Link></li>
          <li><Link href={'/samples/Modal'}>Modal</Link></li>
          <li><Link href={'/samples/Particle'}>Particle</Link></li>
        </ul>
      </div>
    </>
  )
}