import { useState } from "react"
import {books as bookData} from "../constants/mockData"

import BookCard from "./BookCard"
import SideCard from "./SideCard"
import SearchBox from "./SearchBox"

import styles from "./Books.module.css"

function Books() {
  const [books , setBooks ]=useState(bookData)
  const [liked , setLiked ]=useState([])
  const [search , setSearch ]=useState()


  const handleLikeedList =(book , status)=>{
    if(status){
      const newLikedList =liked.filter(i =>i.id!==book.id)
      setLiked(newLikedList)
    }else{
      setLiked(liked=>[...liked , book])
    }
  }
  const searchHandler = ()=>{
    if(search){
      const newBooks =bookData.filter(book=>
        book.title.toLowerCase().includes(search)
      )
      setBooks(newBooks)
      // console.log(typeof(search))
    }else{
      setBooks(bookData)
      // console.log(typeof(search))
    }

  }
  return (<>
    <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div  className={styles.container}>
        <div className={styles.cards}>
            {books.map(book=>(
                <BookCard key={book.id} data={book} handleLikeedList={handleLikeedList}/>
            ))}
        </div>
        {!!liked.length && <div className={styles.favorite}>
                            <h4>Favorites</h4>
                           {liked.map(book=><SideCard key={book.id} data={book}/>)}
                           </div>}
    </div>
    </>
  )
}

export default Books