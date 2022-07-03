import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getBookData } from "../Redux/action";

export const BooksList = () => {
  const books = useSelector((store) => store.reducer.books);
  const navigate = useNavigate()

  return <div className="booksGrid">
    {books?.map((item)=>{return(
      <div key={item.id} className="book" onClick={()=>navigate("/"+item.id)}>
       <b> Name: </b>{item.book_name}<br/>
       <b>Author: </b>{item.author}<br/>
       <b>Category: </b>{item.category}<br/>
       <b>Release Year: </b>{item.release_year}<br/>
      </div>
    )})}
  </div>;
};
