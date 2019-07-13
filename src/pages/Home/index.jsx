import React from 'react'
import Mix from '../../components/Mix'

const Home = ({ mixes, ...props }) => {
  return (
    <div className="flex flex-wrap justify-between mixes ph3 ph4-l">
      {/* loop through the mixes */}
      {mixes.slice(0, 6).map(mix => (
        <div key={mix.key} className="mix mb4">
          <Mix id={mix.key} {...props} {...mix} />
        </div>
      ))}
    </div>
  )
}

export default Home
