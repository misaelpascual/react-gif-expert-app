import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Cats'])

  return (
    <>
      <section className='section'>
        <h2>
          GifExpertApp
        </h2>
        <AddCategory
          setCategories={ setCategories }
        />
        <hr />

        <div>
          { categories.map((category, index) => (
              <GifGrid
                key={index}
                category={category}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}

