"use client";
import React, { useState } from "react";
import { quiz } from "../data.js";

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    aspiration: 0,
    financialFitness: 0,
    energyManagement: 0,
    precision: 0,
    leadership: 0,
    connection: 0,
    selfExpertise: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  // Select answer and update score
  const onAnswerSelected = (answer, idx) => {
    setSelectedAnswerIndex(idx);
    const property = getPropertyForQuestion(activeQuestion);
    const scoreIncrement = calculateScoreIncrement(answer, correctAnswer);
    setResult((prev) => ({
      ...prev,
      [property]: prev[property] + scoreIncrement,
    }));
  };

  // Calculate score increment based on answer correctness
  const calculateScoreIncrement = (selectedAnswer, correctAnswer) => {
    return selectedAnswer === correctAnswer ? 1 : 0;
  };

  // Determine which property the current question corresponds to
  const getPropertyForQuestion = (questionIndex) => {
    switch (questionIndex) {
      case 0:
      case 1:
        return "aspiration";
      case 2:
      case 3:
        return "financialFitness";
      case 4:
      case 5:
        return "energyManagement";
      case 6:
      case 7:
        return "precision";
      case 8:
      case 9:
        return "leadership";
      case 10:
      case 11:
        return "connection";
      case 12:
      case 13:
        return "selfExpertise";
      default:
        return "";
    }
  };

  // Proceed to the next question or show result
  const nextQuestion = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setShowResult(true);
    }
    setSelectedAnswerIndex(null);
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
            <h3>{question}</h3>
            {answers.map((answer, idx) => (
              <li
                key={idx}
                onClick={() => onAnswerSelected(answer, idx)}
                className={
                  selectedAnswerIndex === idx ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            <button onClick={nextQuestion} className="btn">
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Results</h3>
            <p>Aspiration: {result.aspiration * 25}%</p>
            <p>Financial Fitness: {result.financialFitness * 25}%</p>
            <p>Energy Management: {result.energyManagement * 25}%</p>
            <p>Precision: {result.precision * 25}%</p>
            <p>Leadership: {result.leadership * 25}%</p>
            <p>Connection: {result.connection * 25}%</p>
            <p>Self Expertise: {result.selfExpertise * 25}%</p>
            <button onClick={() => window.location.reload()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
