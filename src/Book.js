import React from 'react'

//Book component
function Book(props) {
  const { img, author, title } = props
  return (
    <article className='book'>
      <img src={img} alt='you have no luck' />
      <h1 className='title'>{title}</h1>
      <h2>{author}</h2>
    </article>
  )
}

export default Book
