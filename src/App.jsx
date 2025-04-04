import { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Rules from "./components/Rules";
import TriviaBox from "./components/TriviaBox";
import Hearts from "./components/Hearts";
import { startHearts, startingQueObj } from "./data";
import {
  getQuestionObj,
  getRandomAnd,
  updateHeartsArray,
  resetQuestions,
} from "./runGame";
import Timer from "./components/Timer";

function App() {
  const [hearts, setHearts] = useState(startHearts);
  const [heartCount, setHeartCount] = useState(3);
  const [gameOn, setGameOn] = useState(false);
  const [level, setLevel] = useState(0);
  const [title, setTitle] = useState("Trivia Game");
  const [answers, setAnswers] = useState([]);
  const [questionObj, setQuestionObj] = useState(startingQueObj);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [counter, setCounter] = useState(30);
  const [timeLeft, setTimeLeft] = useState(100);
  const [countDownColor, setCountDownColor] = useState('#2196f3')
  const firstStart = useRef(true);
  const tick = useRef();
  let { question, id } = questionObj;

  const colorOpt = ['#2196f3', '#ffeb3b', '#f44336'];
  const colorValues =[30, 15, 5];

  useEffect(() => {
    if (firstStart.current) {
      firstStart.current = !firstStart.current;
      return;
    }
    if (gameOn) {
      if (counter > 0) {
        tick.current = setInterval(() => {
          setCounter((prevCounter) => {
            const newCounter = prevCounter - 1;
            setTimeLeft((newCounter / 30) * 100);
            return newCounter;
          });
        }, 1000);
      } else {
        lostRound();
        setTimeLeft(100);
      }
    } else clearInterval(tick.current);

    return () => clearInterval(tick.current);
  }, [counter, gameOn]);

useEffect(() => {
  for (let i=0; i< colorValues.length; i++){
    const item = colorValues[i];
    if(counter === item){
      setCountDownColor(colorOpt[i]);
      break;
    }
  }
})


  const startGame = () => {
    var newGameOn = true;
    var startLevel = 1;
    setHearts(startHearts);
    setHeartCount(3);
    resetQuestions();
    setGameOn(newGameOn);
    setLevel(startLevel);
    nextRound(startLevel);
  };

  const nextRound = (level) => {
    if (level === 11) {
      var newGameOn = false;
      handleTitle(level, newGameOn, true);
      setGameOn(newGameOn);
    } else {
      setCounter(30);
      setTimeLeft(100);
      setLevel((l) => l + 1);
      handleTitle(level, true, false);
      var queObj = getQuestionObj();
      var ranAnd = getRandomAnd(queObj.answers);
      setCurrentAnswer(queObj.correctAnswer);
      setQuestionObj(queObj);
      setAnswers(ranAnd);
    }
  };

  const handleTitle = (level, gameOn, gameWon) => {
    if (level < 11 && gameOn) {
      setTitle("Level " + level);
    } else if (gameWon) {
      setTitle("You won!");
    } else {
      var finalLevel = level - 1;
      setTitle("Game Over! You made it to level " + finalLevel);
    }
  };

  const checkPlayer = (playerAnswer, cAnswer) => {
    if (playerAnswer === cAnswer && gameOn) {
      nextRound(level);
    } else if (gameOn) {
      lostRound();
    }
  };

  const lostRound = () => {
    var newHeartCount = heartCount - 1;
    var newHearts = updateHeartsArray(newHeartCount, hearts);
    setHearts(newHearts);
    setHeartCount(newHeartCount);
    if (newHeartCount === 0) {
      var newGameOn = false;
      setGameOn(newGameOn);
      handleTitle(level, newGameOn, false);
    } else nextRound(level);
  };

  return (
    <div>
      <Header title={title} />
      <div class="container">
        {!gameOn && <Rules clicked={startGame} />}
        <TriviaBox
          id={id}
          answers={answers}
          currectAnswer={currentAnswer}
          question={question}
          buttonColor={countDownColor}
          playerChoice={checkPlayer}
        />
        <div class="hearts">
          {hearts.map((h) => (
            <Hearts key={h.id} id={h.id} color={h.color} />
          ))}
        </div>
      { gameOn && <Timer color={countDownColor} percent={timeLeft} countD={counter}></Timer>}
      </div>
    </div>
  );
}

export default App;
