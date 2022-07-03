import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getBookData } from "../Redux/action";
import {useDispatch} from "react-redux"

export const FilterSort = () => {
  const dispatch = useDispatch()
  const [SearchParams, setSearchParams] = useSearchParams();
  const urlCategory = SearchParams.getAll("category");
  const urlsortBy = SearchParams.get("sortBy");
  const [category, setcategory] = useState(urlCategory || []);
  const [sortBy, setsortBy] = useState(urlsortBy || "");
  console.log(sortBy);

  const handleCheckBox = (e) => {
    const option = e.target.value;
    // If the option already presenrt rtemove it, else add it
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setcategory(newCategory);
  };

  const handleSort = (e) => {
    setsortBy(e.target.value);
  };

  useEffect(() => {
    if(category){
        setSearchParams({ category });
      dispatch(getBookData({params:{category}}))

    }
  }, [category, setSearchParams]);

  useEffect(() => {
    if (sortBy) {
      const params = {
        category: SearchParams.getAll("category"),
        _sort: sortBy && "release_year",
        _order: sortBy,
      };
      setSearchParams(params);
      dispatch(getBookData({params}))

    }
  }, [setSearchParams, SearchParams, sortBy]);

  return (
    <div className="FilterSort">
      <div >
        <h3>Category</h3>
        <input
          type="checkbox"
          onChange={handleCheckBox}
          defaultChecked={category.includes("phy")}
          value="Novel"
        />
        <label htmlFor="">Novel</label>
        <br />
        <input
          type="checkbox"
          onChange={handleCheckBox}
          defaultChecked={category.includes("Science_Fiction")}
          value="Science_Fiction"
        />
        <label htmlFor="">Science_Fiction</label>
        <br />
        <input
          type="checkbox"
          onChange={handleCheckBox}
          defaultChecked={category.includes("Thriller")}
          value="Thriller"
        />
        <label htmlFor="">Thriller</label>
        <br />
        <input
          type="checkbox"
          onChange={handleCheckBox}
          defaultChecked={category.includes("Motivational")}
          value="Motivational"
        />
        <label htmlFor="">Motivational</label>
      </div>
      <div onChange={handleSort}>
        <h3>Sort By Order</h3>
        <input
          type="radio"
          defaultChecked={sortBy === "asc"}
          name="sortBy"
          value="asc"
        />
        <label htmlFor="">Ascending</label>
        <br/><input
          type="radio"
          defaultChecked={sortBy === "desc"}
          name="sortBy"
          value="desc"
        />
        <label htmlFor="">Descending</label>
      </div>
    </div>
  );
};
