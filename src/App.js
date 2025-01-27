import React, { useState } from 'react';

const quizData = [
  { image: '🐶🐶🐶', correctAnswer: 3, question: 'How many dogs are in the picture?' },
  { image: '🐱🐱', correctAnswer: 2, question: 'How many cats are in the picture?' },
  { image: '🐰🐰🐰🐰', correctAnswer: 4, question: 'How many rabbits are in the picture?' },
  { image: '🐵🐵🐵🐵🐵', correctAnswer: 5, question: 'How many monkeys are in the picture?' },
  { image: '🐸🐸🐸🐸', correctAnswer: 4, question: 'How many frogs are in the picture?' },
  { image: '🦁🦁🦁🦁🦁🦁', correctAnswer: 6, question: 'How many lions are in the picture?' },
  { image: '🐴🐴🐴🐴🐴🐴🐴', correctAnswer: 7, question: 'How many horses are in the picture?' },
];

const App = () => {
  const [userAnswers, setUserAnswers] = useState(new Array(quizData.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getScore = () => {
    return userAnswers.filter((answer, index) => answer === quizData[index].correctAnswer).length;
  };

  return (
    <div className="App">
      <h1>Animal Matching Quiz</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {quizData.map((item, index) => (
          <div key={index}>
            <p>{item.question}</p>
            <div>{item.image}</div>
            <label>
              Your answer:
              <input
                type="number"
                value={userAnswers[index] !== null ? userAnswers[index] : ''}
                onChange={(e) => handleAnswerChange(index, parseInt(e.target.value))}
                disabled={submitted}
              />
            </label>
            {submitted && userAnswers[index] !== null && userAnswers[index] !== item.correctAnswer && (
              <p style={{ color: 'red' }}>Incorrect! The correct answer is {item.correctAnswer}.</p>
            )}
          </div>
        ))}
        <button type="button" onClick={handleSubmit} disabled={submitted}>
          Submit Answers
        </button>
        {submitted && (
          <div>
            <h2>Your Score: {getScore()} / {quizData.length}</h2>
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
