import React, { useEffect, useState } from 'react'
import VN from './VN'
import Visualizer from './Visualizer'

const App = () => {
    const [isClicked, setClick] = useState(false)
    const [audioTime, setAudioTime] = useState(0)
    return (
        <>
            {
                isClicked ? <Visualizer audioTime={audioTime} /> : <VN setClick={setClick} setAudioTime={setAudioTime} />
            }
        </>
    )
}

export default App