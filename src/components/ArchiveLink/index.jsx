import React from 'react'

const ArchiveLink = ({ url }) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={url}>
      <figure className=" mv0 button bg-transparent contain button-reset mixcloud-link db bg-center pointer center" />
    </a>
  )
}

export default ArchiveLink
