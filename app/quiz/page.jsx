"use client";
import React, { useState } from "react";
import { quiz } from "../data.js";

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const { questions } = quiz;
  const currentQuestion = questions[activeQuestion];

  // Select answer and update score
  const onAnswerSelected = (answer, idx) => {
    setSelectedAnswerIndex(idx);
    answer.updateCategory(); // Increment category count
  };

  // Proceed to the next question or show result
  const nextQuestion = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      calculateResult();
      setShowResult(true);
    }
    setSelectedAnswerIndex(null);
  };

  // Calculate final result based on category scores
  const calculateResult = () => {
    const { category } = quiz;
    const totalQuestions = questions.length;
    const updatedResult = {};

    for (const categoryName in category) {
      const categoryScore = (category[categoryName] / totalQuestions) * 100;
      updatedResult[categoryName] = categoryScore;
    }

    setResult(updatedResult);
  };

  return (
    <div className="container">
      <h1>Mental Strength Test</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{currentQuestion.question}</h3>
            <ul>
              {currentQuestion.answers.map((answer, idx) => (
                <li
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  className={
                    selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                  }
                >
                  <span>{answer.answer}</span>
                </li>
              ))}
            </ul>
            <button onClick={nextQuestion} className="btn">
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            {result &&
              Object.entries(result).map(([category, score]) => (
                <p key={category}>
                  {category}: {score}%
                </p>
              ))}
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
