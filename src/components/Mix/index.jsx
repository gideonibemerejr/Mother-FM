import React from 'react'
import PlayButton from '../PlayButton'
import PlayMix from '../PlayMix'

const Mix = ({ name, pictures, ...props }) => {
  return (
    <div
      className="aspect-ratio aspect-ratio--3x4 pointer bg-black cover bg-center"
      style={{ backgroundImage: `url(${pictures.extra_large})` }}
    >
      <div className="ph3 pv4 aspect-ratio--object mix-overlay">
        <div className="flex flex-column relative z-2">
          <h1 className="f4 f3-l mv0 white ttu biryani pr2 lh-title">{name}</h1>
          {/* PlayButton goes here */}
        </div>
        {/* <Link to={`/show/${slug}`} className="absolute absolute--fill z-3" /> */}
        <div className="absolute bottom-1 left-1 z-5 flex items-left pointer">
          <PlayMix {...props}>
            <PlayButton />
          </PlayMix>
        </div>
      </div>
    </div>
  )
}

export default Mix
