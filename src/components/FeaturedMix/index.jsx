import React from 'react'
import PlayMix from '../PlayMix'
import PlayButton from '../PlayButton'
// import { Link } from 'react-router-dom'

const FeaturedMix = ({
  name,
  pictures = {},
  picture_primary_color,
  title,
  id,
  slug,
  ...props
}) => {
  return (
    <div
      className="w-50-l vh-100 flex items-center justify-center cover bg-center pad-bottom fixed-l left-0 mix-overlay"
      style={{
        backgroundImage: `url(${pictures.extra_large})`,
        // here the app shows a background color whilst the image loads
        // * good for slower connections
        backgroundColor: `#${picture_primary_color}`
      }}
    >
      <PlayMix {...props} id={id} className="relative z-5 pointer">
        <div className="w-100 tc pa3 relative z-2">
          <p className="b biryani f6 white ttu">Featured Mix</p>
          <h1 className="mix-title mt0 mb3 anton white ttu">{name}</h1>

          {/* <Link to={`/show/${slug}`} className="absolute absolute--fill z-3" /> */}

          <PlayButton />
        </div>
      </PlayMix>
    </div>
  )
}

export default FeaturedMix
