"use client"

import { useState } from "react";
import axios from "axios";
import "./page.css";

export default function Home() {
  
  const [filmWiki, setFilmWiki] = useState("");
  const [filmName, setFilmName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  
  const getFilmWiki = async (e) => {
    e.preventDefault();
    const searchURL = "?id=" + filmName + "&year=" + releaseYear;
    try {
      console.log(searchURL);
      const response = await axios.get(`/api/wiki/${searchURL}`);
      setFilmWiki(JSON.stringify(response.data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="main">
      <form className="film-form" onSubmit={getFilmWiki}>
        <input 
          type="text"
          placeholder="Enter movie name"
          value={filmName}
          onChange={(e)=>setFilmName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Release year"
            value={releaseYear}
            onChange={(e)=>setReleaseYear(e.target.value)}
            style={{fontSize: "1.5rem"}}
            ></input>
        <button onSubmit={getFilmWiki}>Call Your Buddy</button>
      </form>      
      {filmWiki}
    </div>
  )
}
