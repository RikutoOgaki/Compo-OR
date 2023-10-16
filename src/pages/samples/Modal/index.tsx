import { useState } from 'react'
import { Modal } from '@/components/Modal'

export default function Modalpage() {

    const [modalOpen, setModalOpen] = useState(false)

    const isModalOpen = () => {
        setModalOpen(true)
    }

    const isModalClose = () => {
        setModalOpen(false)
    }

    return (
        <>
            <div>
                <div>
                    <button onClick={isModalOpen}>Open</button>
                </div>
            </div>
            {modalOpen &&
                <Modal isOpen={modalOpen} isClose={isModalClose}>
                    <p>ModalComponent完成</p>
                </Modal>
            }
        </>
    )
}