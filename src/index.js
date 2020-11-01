import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//DIfferent book objects
const bookOne = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg',
  author: 'George Orwell',
  title: '1984 (Signet Classics)',
}

const bookTwo = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81zBVMvSjNL._AC_UL200_SR200,200_.jpg',
  author: 'Stephenie Meyer',
  title: 'Midnight Sun',
}

//BookList component that contains multiple 'Book' components
const BookList = () => {
  return (
    <section className='booklist'>
      <Book img={bookOne.img} title={bookOne.title} author={bookOne.author}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, sed
          ipsam.
        </p>
      </Book>
      <Book img={bookTwo.img} title={bookTwo.title} author={bookTwo.author} />
    </section>
  )
}

//Book component
function Book(props) {
  const { img, author, title } = props
  return (
    <article className='book'>
      <img src={img} alt='you have no luck' />
      <h1 className='title'>{title}</h1>
      <h2>{author}</h2>
      {props.children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
