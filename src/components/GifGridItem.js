import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__zoomIn animate__delay-1s">
      <img src={ url } alt={ title } />
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired
}