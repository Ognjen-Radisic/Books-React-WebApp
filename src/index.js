import React from 'react'
import ReactDom from 'react-dom'
import { books } from './books'
import Book from './Book'
//CSS
import './index.css'

//BookList component that contains multiple 'Book' components
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((elem) => {
        return <Book key={elem.id} {...elem} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
