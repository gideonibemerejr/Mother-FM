import React from 'react'
import Counter from '../../components/Counter'

const Stat = ({ statName, statNumber, statWord, ...props }) => (
  <div className="mb4 fade-in stat" style={{ marginRight: -2 }}>
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
      <p className="mt0 fade-in">
        Mother FM is an up and coming, internet radio station that will _mother_
        several radio shows, podcasts, and mix archives. V1.0 of the application
        serves as the MVP and is the first and only open call for users to
        submit mixes through the Add Mix form. Additionally, the MVP provides
        some simple functionality to view mixes, blog posts, and an archive.
      </p>
      <p className="mb4 fade-in">World wide music for listening.</p>
      <div className="flex justify-between ">
        <Stat
          statName="Featuring…"
          statNumber={mixes.length}
          statWord="mixes"
        />
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
  </div>
)

export default About
