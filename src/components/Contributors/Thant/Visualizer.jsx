import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import Sphere from './3d-components/Sphere'
import { Environment, OrbitControls, PositionalAudio } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'

const Visualizer = ({ audioTime }) => {
    const sound = useRef();
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.background = 'black';
    }, [])
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 15, 10]} angle={0.3} />
                <Suspense fallback={null}>
                    <PositionalAudio autoplay offset={audioTime} url="https://audio.jukehost.co.uk/v6TCqepDF7CE28rXmM2bV35cQ3vyitSL" ref={sound} distance={3} />
                    <Sphere sound={sound} />
                </Suspense>
                <OrbitControls />
                <EffectComposer disableNormalPass>
                    <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={3} />
                    <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={15} height={700} />
                </EffectComposer>
            </Canvas>
        </div>
    )
}

export default Visualizer