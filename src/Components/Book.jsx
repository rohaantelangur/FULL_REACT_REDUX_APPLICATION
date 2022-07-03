import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getBookData } from "../Redux/action";
import { BooksList } from "./BooksList";
import { FilterSort } from "./FilterSort";

export const Book = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.reducer);
  const [SearchParams, setSearchParams] = useSearchParams();
  const urlCategory = SearchParams.getAll("category");
  const urlsortBy = SearchParams.get("sortBy");
  const [category, setcategory] = useState(urlCategory || []);
  const [sortBy, setsortBy] = useState(urlsortBy || "");

  console.log(category, sortBy);

  useEffect(() => {
    if (category && sortBy) dispatch(getBookData());
  }, []);

  return (
    <div className="BookMain">
      <FilterSort />
      <BooksList />
    </div>
  );
};
