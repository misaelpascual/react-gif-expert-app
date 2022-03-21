import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'
import { LoadingBase } from './UI/LoadingBase'

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([]);
  const { data:images, loading } = useFetchGifs(category)


  return (
    <>
      <h3 className='animate__animated animate__fadeInDown animate__delay-1s'> { category } </h3>
      { loading && <LoadingBase /> }
      <div className="card_grid">
        {
          images?.map((img) => (
            <GifGridItem
              key={ img.id }
              { ...img }
            />
          ))
        }
      </div>
    </>
  )
}

GifGrid.protoTypes = {
  category: PropTypes.string.isRequired
}
