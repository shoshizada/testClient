import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./App.css";

function Btn() {
  const dispatch = useDispatch();

  //עידכון הנתונים מהסטור לצורך קידום התמונות
  const photos = useSelector((state) => state.siteReducer.photos);
  const currentPage = useSelector((state) => state.siteReducer.index);
 
  //בקשת GET לצורך קידום בתשע עמודים
  const fetchData = async () => {
    const url = `http://localhost:5000/api/photos?currentPage=${currentPage}&photos=${photos}`;
    try {
      const response = await axios.get(url);
      dispatch({
        type: "SET_PHOTOS",
        payload: response.data,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    
  };



  return (
    <div>
      <button className="btn-next" onClick={fetchData}>
        NEXT
      </button>
      <button className="btn-prev" >
        PREV{" "}
      </button>
      <button className="btn-select" >
        SELECT OPTION
      </button>
    </div>
  );
}

export default Btn;
