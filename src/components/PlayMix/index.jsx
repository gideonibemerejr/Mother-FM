import React from 'react'

const PlayMix = ({ playMix, id, currentMix, playing, children }) => {
  return (
    <div
      className={`pointer ${id === currentMix && playing && 'playing'} 
      `}
      onClick={() => playMix(id)}
    >
      {children}
    </div>
  )
}

export default PlayMix

//absolute bottom-1 left-1 z-5 flex items-left
