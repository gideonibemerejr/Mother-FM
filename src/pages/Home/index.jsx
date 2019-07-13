import React from 'react'

const Home = ({ playMix, togglePlay }) => {
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => togglePlay()}>Play Mix</button>
    </div>
  )
}

export default Home
