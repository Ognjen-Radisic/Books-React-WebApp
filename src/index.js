import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
function Book() {
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg'
        alt='you have no luck'
      />
      <h1 className='title'>1984 (Signet Classics)</h1>
      <h2>George Orwell </h2>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
