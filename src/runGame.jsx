import React from "react";
import { questionArray } from "./data.js";

function getQuestionObj() {
  var foundFreashQuestion = false;
  while (!foundFreashQuestion) {
    var randomQuestionNumb = Math.floor(Math.random() * 10);
    var q = questionArray[randomQuestionNumb];
    if (!q.hasBeenAsked) {
      q.hasBeenAsked = true;
      foundFreashQuestion = true;
      return q;
    }
  }
}

function resetQuestions() {
  questionArray.forEach((q) => (q.hasBeenAsked = false));
}

function getRandomAnd(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function updateHeartsArray(heartCounter, hearts) {
  const newHearts = hearts.map((h, i) => {
    if (i === heartCounter) {
      h = { color: "black" };
      return h;
    } else return h;
  });
  return newHearts;
}

export { getQuestionObj, getRandomAnd, updateHeartsArray, resetQuestions };
