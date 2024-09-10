import React, { useRef, useState } from "react";
import './Trivia.css'
import { trivia_data } from "../../assets/trivia_data";

const Trivia = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(trivia_data[index]);
    let [lock, setLock] = useState(false);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);

    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let option_array = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e, answer) => {
        if (lock === false) {
            if (question.answer === answer) {
                e.target.classList.add("correct");
                setScore(prev=>prev+1);
                //setLock(true);
            } else {
                e.target.classList.add("incorrect");
                option_array[question.answer-1].current.classList.add("correct");
                //setLock(true);
            } 
        }
       setLock(true);
    }

    const next = () => {
        if (lock === true) {
            if (index === trivia_data.length - 1) {
                setResult(true);
                return 0;
            }
            setIndex(++index);
            setQuestion(trivia_data[index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("incorrect");
                option.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestion(trivia_data[0]);
        setScore(0);
        setLock(false);
        setResult(false);
        return 0;
    }

    return(
        <div className="trivia-container">
            <h1>Trivia Game</h1>
            <hr/>
            {result ? <>
            <h2>You scored {score} out of {trivia_data.length} points.</h2>
            <button onClick={reset}>Reset</button>
            </>
            :
            <>
            <h2>{index+1}. {question.question}</h2>
            <ul>
                <li ref={Option1} onClick={(e)=>{checkAnswer(e,1)}}>{question.option1}</li>
                <li ref={Option2} onClick={(e)=>{checkAnswer(e,2)}}>{question.option2}</li>
                <li ref={Option3} onClick={(e)=>{checkAnswer(e,3)}}>{question.option3}</li>
                <li ref={Option4} onClick={(e)=>{checkAnswer(e,4)}}>{question.option4}</li>
            </ul>
            <button onClick={next}>Next</button>
            <div className="index">{index+1} of {trivia_data.length} questions</div>
            </>}
            
        </div>
    );
};
export default Trivia;