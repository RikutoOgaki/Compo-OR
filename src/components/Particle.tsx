import { useEffect } from 'react'
import style from '@/styles/components/particle.module.scss'

export function Particle() {

    useEffect(() => {
        const createSnow = () => {
            const snow = document.createElement('div')
            snow.classList.add('snowStyle')
            snow.style.left = `${Math.random() * 100}vw`
            document.body.appendChild(snow)

            setTimeout(() => {
                snow.remove()
            }, 10000)
        }

        const snowFallinterval = setInterval(createSnow, 200)

        return () => {
            clearInterval(snowFallinterval)

        }

    }, [])

    return (
        <>
            <div className={style.snowWrap}>

            </div>
        </>
    )
}