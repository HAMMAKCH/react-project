import React from 'react';
//  list from '../data';
import '../styles/amazon.css';
import Cards from './Cards';

const Amazon = ({books,handleClick}) => {
  return (
    <section>
        {
            books.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
        }
    </section>
  )
}

export default Amazon