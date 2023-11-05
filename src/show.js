import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

//פונקציה המציגה תשע תמונות לפי הקטגוריה הנבחרת
function Show() {
    const photos = useSelector((state) => state.siteReducer.photos);
  return (
    <div className="photo-grid">
      {photos &&
        photos.length > 0 &&
        photos.map((photo) => (
          <div key={photo.id} className="photo-wrapper">
            <img src={photo.previewURL} alt={photo.tags} className="photo" />
          </div>
        ))}
    </div>
  );
}

export default Show;
