import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getBookData } from "../Redux/action";
import axios from 'axios'

export const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const books = useSelector((store) => store.reducer.books);
  const [currentBook, setcurrentBook] = useState({});
  const [edit, setedit] = useState({
    book_name:"",
    category:"",
    release_year:""
  })
  const navigate = useNavigate();

  const handleSave = () => {
    console.log(edit);
    axios.patch(`http://localhost:8080/books/${id}`,edit).then((result) => {
      console.log(result);
      
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    if (books?.length === 0) {
      dispatch(getBookData());
    }
  }, [books?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = books?.find((book) => book.id === Number(id));
      temp && setcurrentBook(temp);
    }
  }, [books, id]);

  return (
    <div style={{ textAlign: "center" }}>
      <h3>EditBook</h3>
      <h2>{currentBook?.book_name}</h2>
      <input type="text" onChange={(e)=>setedit({...edit, book_name:e.target.value})}/>
      <h2>{currentBook?.category}</h2>
      <select onChange={(e)=>setedit({...edit, category:e.target.value})} name="" id="">
        <option value="Novel">Novel</option>
        <option value="Science_Fiction">Science_Fiction</option>
        <option value="Motivational">Motivational</option>
        <option value="Thriller">Thriller</option>
      </select>
      <h2>{currentBook?.release_year}</h2>
      <input type="number" onChange={(e)=>setedit({...edit, release_year:e.target.value})} />
      <br />
      <button onClick={handleSave}>Save</button>
      <button onClick={()=>navigate("/")}>Back To Home</button>
    </div>
  );
};
