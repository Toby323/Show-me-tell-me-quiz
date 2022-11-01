import { useState } from "react";
import { questions } from "./data/questionData";
import { answers } from "./data/answersData";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./App.css";

let randomNumber = 0;
let currentQuestion = 0;

function App() {
  const [showMeDisplay, setShowMeDisplay] = useState("none");
  const [currentText, setText] = useState(
    "To start press either the arrows or the random button"
  );
  const [questionOrAnswer, setQuestionOrAnswer] = useState("Question");

  function showRandomQuestion() {
    setQuestionOrAnswer("Question");
    randomNumber = Math.floor(Math.random() * 13) + 1;
    setText(JSON.stringify(questions[randomNumber].question));
  }

  function showRandomAnswer() {
    setQuestionOrAnswer("Answer");
    setText(JSON.stringify(answers[randomNumber].answer));
  }

  function stepForward() {
    if (currentQuestion !== 13) {
      setQuestionOrAnswer("Question");
      currentQuestion = randomNumber += 1;
      setText(JSON.stringify(questions[currentQuestion].question));
    }
  }

  function stepBack() {
    if (currentQuestion !== 0 || randomNumber > 0) {
      setQuestionOrAnswer("Question");
      currentQuestion = randomNumber -= 1;
      setText(JSON.stringify(questions[currentQuestion].question));
    }
  }

  return (
    <div className="App">
      <div id="Titlebar">
        <div id="Information">
          <h1>
            {questionOrAnswer}: <b>{randomNumber}</b>
          </h1>
        </div>
      </div>
      <div id="Question-Container">
        <p>{currentText}</p>
      </div>
      <div id="Control-Bar">
        <div id="Reveal-Answer-Button" onClick={showRandomAnswer}>
          <h4 style={{ fontWeight: 700 }}>reveal</h4>
        </div>
        <BsArrowLeft
          className="Icon-Button"
          id="Step-Backward-Button"
          color="white"
          fontSize={70}
          onClick={stepBack}
        />
        <div
          className="Icon-Button"
          id="Show-Random-Question-Button"
          onClick={showRandomQuestion}>
          <GiPerspectiveDiceSixFacesRandom id="Random-Question-Icon" />
        </div>
        <BsArrowRight
          className="Icon-Button"
          id="Step-Forward-Button"
          color="white"
          fontSize={70}
          onClick={stepForward}
        />
      </div>
    </div>
  );
}

export default App;
