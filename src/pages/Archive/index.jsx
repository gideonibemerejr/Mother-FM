import React from 'react'

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
    <table className="pb2 mb5" style={{ width: '100%' }}>
      <thead>
        <tr colSpan="2">
          <th> FOUND IN {util.getYear()}</th>
        </tr>
      </thead>
      <tbody className="list pl0 mr5 archive mv0 pad-bottom fade-in">
        {mixes.map((mix, idx) => (
          <tr
            key={idx}
            className="pv3 ml4 mr4 bb b--light-gray flex justify-between items-center "
          >
            <td>
              <a
                style={{ textDecoration: 'none' }}
                rel="noopener noreferrer"
                target="_blank"
                href={mix.url}
              >
                <h1 className="f6 mv0 black ttu biryani pr2">{mix.name}</h1>
              </a>
            </td>
            <td>
              <ArchiveLink {...mix} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Archive
