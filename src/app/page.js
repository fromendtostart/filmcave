"use client"

import { useState } from "react";
import "./page.css";
import Form from "@/components/Form";
import ChatUI from "@/components/ChatUI";

export default function Home() {
  
  const [filmChosen, setFilmChosen] = useState(false);
  const [filmWiki, setFilmWiki] = useState("");


  return(
    <div className="main">
      {!filmChosen ? <Form 
                      filmChosen = {filmChosen} 
                      setFilmChosen = {setFilmChosen}  
                      filmWiki = {filmWiki}
                      setFilmWiki={setFilmWiki}
                      /> : 
                      <ChatUI
                      filmWiki = {filmWiki}    
                      />}
    </div>
  )

}
