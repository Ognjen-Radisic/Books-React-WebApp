import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//DIfferent book objects
const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg',
    author: 'George Orwell',
    title: '1984 (Signet Classics)',
  },

  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg',
    author: 'Stephenie Meyer',
    title: 'Midnight Sun',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81Me-r4UL1L._AC_UL200_SR200,200_.jpg',
    author: 'Wizards RPG Team',
    title: "Tasha's Cauldron of Everything (D&D Rules Expansion)",
  },

  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
    author: 'Greenlights',
    title: 'Matthew McConaughey',
  },
]
//BookList component that contains multiple 'Book' components
const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((elem) => {
        return <Book book={elem} />
      })}
    </section>
  )
}

//Book component
function Book(props) {
  const { img, author, title } = props.book
  return (
    <article className='book'>
      <img src={img} alt='you have no luck' />
      <h1 className='title'>{title}</h1>
      <h2>{author}</h2>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
