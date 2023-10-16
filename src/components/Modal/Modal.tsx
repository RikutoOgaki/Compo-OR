import React, { ReactNode } from 'react'
import style from '@/styles/components/Modal/modal.module.scss'

type ModalProps = {
    isOpen: boolean,
    isClose: () => void,
    children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, isClose, children }) => {

    if (isOpen) return null

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
