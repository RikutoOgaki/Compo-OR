import { Particle } from '@/components/Particle'

export default function ParticlePage() {
    return (
        <>
            <div style={{ width: '100%', height: '100%' }}>
                <Particle />
                <div style={{ width: '100%', height: '100vh', zIndex: '999' }}>
                    <h2>TestPage</h2>
                </div>
                <div style={{ width: '100%', height: '100vh', zIndex: '999' }}>
                    <h2>TestPage</h2>
                </div>
                <div style={{ width: '100%', height: '100vh', zIndex: '999' }}>
                    <h2>TestPage</h2>
                </div>
                <div style={{ width: '100%', height: '100vh', zIndex: '999' }}>
                    <h2>TestPage</h2>
                </div>
            </div>
        </>
    )
}