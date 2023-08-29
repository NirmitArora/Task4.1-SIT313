import React from 'react'

export const MyItem = ({ art }) => {
  return (
    <div className='article-card'>
      <img src={art.image} alt='Article' className='imagecss' />
      <h2>{art.title}</h2>
      <p>{art.Desc}</p>
      <p>By {art.author}</p>
    </div>
  )
}
