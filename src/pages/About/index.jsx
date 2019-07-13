import React from 'react'
import Counter from '../../components/Counter'

const Stat = ({ statName, statNumber, statWord, ...props }) => (
  <div className="mb4" style={{ marginRight: -2 }}>
    <div className="f5 biryani mb0 b">{statName}</div>
    <div className="f1 b orange mb0 lh-1">
      <Counter
        start={0}
        end={statNumber}
        useEasing={true}
        useGrouping={true}
        separator=","
        {...props}
      />
    </div>
    <div className="f4 lh-1">{statWord}</div>
  </div>
)

const About = ({ mixes }) => (
  <div className="ph3 ph4-l pad-bottom">
    <div className="measure center lh-copy">
      <p className="mt0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia
        assumenda, repudiandae nesciunt necessitatibus ratione, quae esse
        laudantium explicabo eligendi illum. Magni dignissimos rerum sed
        distinctio tempora.
      </p>
      <p className="mb4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        repudiandae quam soluta vel delectus amet quod ad numquam saepe!
        Ratione.
      </p>
      <Stat statName="Featuring…" statNumber={mixes.length} statWord="mixes" />
      {/* play_count */}
      <Stat
        statName="Played…"
        statNumber={mixes.reduce(
          (accum, current) => accum + current.play_count,
          0
        )}
        statWord="times"
      />
      {/* audio_length */}
      <Stat
        statName="With…"
        statNumber={mixes.reduce(
          (accum, current) => accum + current.audio_length,
          0
        )}
        statWord="seconds"
      />
    </div>
  </div>
)

export default About
