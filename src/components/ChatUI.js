"use client"

import { useState, useRef, useEffect } from "react";

import "./chatUI.css";
import * as tf from "@tensorflow/tfjs";
import * as qna from "@tensorflow-models/qna";

export default function ChatUI(props){
    
    const question = useRef(null);

    const [answer, setAnswer] = useState("");
    const [model, setModel] = useState(null);
    const [filmName, setFilmName] = useState("");

    const loadModel = async() => {
        const loadedModel = await qna.load();
        setModel(loadedModel); 
        console.log("Model loaded!");
    }

    useEffect(()=>{
        loadModel();
    }, []);

    useEffect(()=>{
        const stringBeforeTitle = `<p><i><b>`;
        const stringAfterTitle = `</b></i>`;
        setFilmName(props.filmWiki.slice(
            props.filmWiki.indexOf(stringBeforeTitle)+9,
            props.filmWiki.indexOf(stringAfterTitle)
        ));
    }, [props.filmWiki]);

    const reply = async (e) => {
        if(e.which === 13 && model!==null){
            const referenceText = props.filmWiki;
            const userQuery = question.current.value;

            const answers = await model.findAnswers(userQuery, referenceText);
            setAnswer(answers);
            console.log(answers);
        }
        else if(model===null)
        {
            console.log("Model not loaded");
        }
    }

    return(
        <div className="chatui">
            {model == null?
                <div className="loader">
                    <span>Loading</span>
                    <div className="loadanimation"></div>
                </div>
                :
                <div className="ui">
                    <span className="filname">{filmName}</span>
                    <input  ref={question} onKeyDown={reply} placeholder="Ask your question"></input>
                    {answer ? <div className="answer">{answer.length>0? answer[0]?.text : "Sorry, no answer found!"}</div>:"Firing up my neurons ;)"}
                </div>
            }
        </div>
    )
}