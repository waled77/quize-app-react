import React, { useState } from 'react';
import './Questions.css';

function Questions() {
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [showScore,setShowScore] = useState(false);
    const [score,setScore] = useState(0);

    const questions = [
        {
            id:1,
            questionText: "What is HTML? ",
            answerOptions:[
                {answerText:"Hyper Text Markup Language","isCorrect":true},
                {answerText:"Programing Language","isCorrect":false},
                {answerText:"Script Language","isCorrect":false}
            ]
        },

        {
            id:2,
            questionText: "What is CSS?",
            answerOptions:[
                {answerText:"Computer Style Sheets","isCorrect":false},
                {answerText:"Cascading Style Sheets","isCorrect":true},
                {answerText:"Machine Language","isCorrect":false}
            ]
        },

        {
            id:3,
            questionText: "What's Javascript ",
            answerOptions:[
                {answerText:"App","isCorrect":false},
                {answerText:"Program","isCorrect":false},
                {answerText:"Programming Language","isCorrect":true}
            ]
        },

        {
            id:4,
            questionText: "What is React?",
            answerOptions:[
                {answerText:"Library developed by Facebook","isCorrect":true},
                {answerText:"Programming Language","isCorrect":false},
                {answerText:"FrameWork developed by Google","isCorrect":false}
            ]
        },

        {
            id:5,
            questionText: "What is JSX?",
            answerOptions:[
                {answerText:"React Html library","isCorrect":false},
                {answerText:"HTML","isCorrect":false},
                {answerText:"shorthand for JavaScript XML","isCorrect":true}
            ],
        }

    ]

    const handelAnswerBtnClick = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1);
        } 
        
        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    return (
        <div className="questions">
            {showScore ? (
                <div className="score-section">You Scored {score} out of {questions.length}</div>
            ):(
                <>
                <div className="question-section">
                    <div className="question-count">
                        <span>Question {score + 1}</span>/{questions.length}
                    </div>
                    <div className="question-text">{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className="answer-section">
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handelAnswerBtnClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
                
            )}
            </div>
        );
}

export default Questions;
