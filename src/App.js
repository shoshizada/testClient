import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Btn from "./button";
import Show from "./show";

function App() {

  const dispatch = useDispatch();
  const category = useSelector((state) => state.siteReducer.category);
  const photos = useSelector((state) => state.siteReducer.photos);
  const index = useSelector((state) => state.siteReducer.index);
  const apiUrl = `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}`;

//בקשת GET מPIAXYBAY לצורך קבלת התמונות עפ"י הקטוגריה
     const fetchData = async () => {
       try {
         const response = await axios.get(apiUrl);
         dispatch({
           type: "SET_PHOTOS",
           payload: response.data.hits.slice(0,9),
         });
         console.log("the req from piaxybay")
         console.log(response.data.hits);
       } catch (error) {
         console.error(error);
       }
     };
  
  //בקשת הGET תקרה לפני טעינת ה APP.js
  useEffect(() => {
    fetchData();
  }, []);


  
  return (
    <div>
      <Show/>
      <Btn/>
    </div>
  );
}

export default App;












