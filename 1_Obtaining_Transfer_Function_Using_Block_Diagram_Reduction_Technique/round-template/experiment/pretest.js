
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "For parallel combination of blocks, the direction of signals through the blocks in parallel can be _____________.",
      answers: {
        a: "same",
        b: "different",
        c: "opposite",
        d: "none of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "The property of block diagram reduction method is ____________.",
      answers: {
        a: "bilateral",
        b: "unilateral",
        c: "composite",
        d: "two-sided"
      },
      correctAnswer: "b"
    },
    {
      question: "Block diagram reduction can be used to represent _____.",
      answers: {
        a: "linear systems only",
        b: "non-linear systems only",
        c: "both linear and non-linear systems",
        d: "time-invariant and time- varying systems"
      },
      correctAnswer: "d"
    },
    {
      question: "Three blocks with gains 2, 6 and 7 are connected in series. The resultant gain of the system is ________.",
      answers: {
        a: "15",
        b: "19",
        c: "84",
        d: "44"
      },
      correctAnswer: "c"
    },
    {
      question: "Two blocks with gains 2 and 4 are connected in parallel. The total gain of the system is ____.",
      answers: {
        a: "6",
        b: "8",
        c: "2",
        d: "4"
      },
      correctAnswer: "a"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
