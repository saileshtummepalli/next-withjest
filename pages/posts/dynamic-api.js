import React, { useEffect, useState } from "react";
import axios from "axios";
import all from "./user"
function Dynamicapi() {
  const [photodata, setPhotodata] = useState([]);
  const fetchUser = async () => {
    const result = await axios.get(
      "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
    );
    setPhotodata(result.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
        <title>api fetching</title>
      <h1>react js DataFetching with axios</h1>
      {photodata.length > 0 ? (
        <div>
          {photodata.map((r, index) => {
            return (
              <div key={index}>
                <ul>
                  <li>{r.id}</li>
                  <li>{r.title}</li>
                  <li>{r.url}</li>
                </ul>
              </div>
            );
          })}
          <a href="http://localhost:3000/">
               main menu 
                </a>
        </div>
      ) : (
        <div>loading ....</div>
      )}
    </div>
  );
}

export default Dynamicapi;
