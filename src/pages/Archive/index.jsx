import React from 'react'
import PlayMix from '../../components/PlayMix'
import PlayButton from '../../components/PlayButton'
import ArchiveLink from '../../components/ArchiveLink'
import util from '../../utils/utils'
const Archive = ({ mixes, ...props }) => {
  return (
    // <ul className="list pl0 archive mv0 pad-bottom">
    //   {mixes.map((mix, idx) => (
    //     <li key={idx} className="ph3 ph4-l">
    //       <PlayMix {...props} id={mix.id}>
    //         <div className="pv3 bb b--light-gray flex justify-between items-center">
    //           <h1 className="f6 mv0 black ttu biryani pr2">{mix.name}</h1>
    //           <PlayButton />
    //         </div>
    //       </PlayMix>
    //     </li>
    //   ))}
    // </ul>
    <table style={{ width: '100%' }}>
      <thead>
        <th colspan="2">{util.getYear()}</th>
      </thead>
      <tbody className="list pl0 mr5 archive mv0 pad-bottom">
        {mixes.map((mix, idx) => (
          //<PlayMix {...props}>
            <tr
              key={idx}
              className="pv3 ml4 mr4 bb b--light-gray flex justify-between items-center"
            >
              <td>
                <h1 className="f6 mv0 black ttu biryani pr2">{mix.name}</h1>
              </td>
              <td>
          <ArchiveLink/>
               
              </td>
            </tr>
          // </PlayMix>
        ))}
      </tbody>
    </table>
  )
}

export default Archive
