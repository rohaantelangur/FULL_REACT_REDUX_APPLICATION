import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getBookData } from '../Redux/action'

export const SingleBook = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const books = useSelector((store)=>store.reducer.books)
  const [currentBook, setcurrentBook] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    if(books?.length===0){
      dispatch(getBookData())
    }
  }, [books?.length, dispatch])

  useEffect(() => {
    if(id){
      const temp = books?.find((book)=>book.id===Number(id))
      temp && setcurrentBook(temp)
    }
  }, [books, id])
  
  const handleEdit = () =>{
    navigate("/"+id+"/"+"edit")
  }
  
  return (
    <div>
      <h2>{currentBook?.book_name}</h2>
      <h2>{currentBook?.category}</h2>
      <h2>{currentBook?.release_year}</h2>
      <button onClick={handleEdit}>Edit</button>
    </div>
  )
}
