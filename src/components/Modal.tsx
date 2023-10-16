import React, { ReactNode } from 'react'
import style from '@/styles/components/Modal/modal.module.scss'

type ModalProps = {
    isOpen: boolean,
    isClose: () => void,
    children: ReactNode
}

export function Modal({ isOpen, isClose, children }: ModalProps): JSX.Element {

    return (
        <>
            <div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal
