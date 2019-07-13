import React from 'react'
import PlayMix from '../../components/PlayMix'
import PlayButton from '../../components/PlayButton'

const Archive = ({ mixes, ...props }) => {
  return (
    <ul className="list pl0 archive mv0 pad-bottom">
      {mixes.map((mix, idx) => (
        <li key={idx} className="ph3 ph4-l">
          <PlayMix {...props} id={mix.id}>
            <div className="pv3 bb b--light-gray flex justify-between items-center">
              <h1 className="f6 mv0 black ttu biryani pr2">{mix.name}</h1>
              <PlayButton />
            </div>
          </PlayMix>
        </li>
      ))}
    </ul>
  )
}

export default Archive
