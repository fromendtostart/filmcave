"use client"

import { useState } from "react";
import axios from "axios";

export default function Home() {
  
  const [filmWiki, setFilmWiki] = useState("");
  
  const getFilmWiki = async () => {
    try {
      const response = await axios.get("/api/wiki");
      setFilmWiki(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <button onClick={getFilmWiki}>Submit!</button>
      {JSON.stringify(filmWiki)}
    </main>
  )
}
