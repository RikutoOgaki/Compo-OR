import React, { ReactNode } from 'react'
import style from '@/styles/components/modal.module.scss'

type ModalProps = {
    isOpen: boolean,
    isClose: () => void,
    children: ReactNode
}

export function Modal({ isOpen, isClose, children }: ModalProps): JSX.Element {

    return (
        <>
            <div
                className={style.modalWrap}
                onClick={isClose}
            >
                <div className={style.modalSubWrap}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal
