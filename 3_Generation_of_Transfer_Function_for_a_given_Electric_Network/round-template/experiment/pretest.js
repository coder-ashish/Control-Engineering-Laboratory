
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
      question: "A larger time constants corresponds to a _____________ system.",
      answers: {
        a: "Sluggish",
        b: "faster",
        c: "over damped",
        d: "under damped"
      },
      correctAnswer: "a"
    },
    {
      question: "The roots of the characteristic equation are the same as the poles of the __________.",
      answers: {
        a: "Closed loop transfer function",
        b: "Open loop transfer function",
        c: "Forward path transfer function",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "In a second order under damped system, the poles are _____.",
      answers: {
        a: "Real and equal",
        b: "Complex conjugate of each other",
        c: "Purely imaginary",
        d: "Real and unequal"
      },
      correctAnswer: "b"
    },
    {
      question: "The forward path gain of a control system increases means the steady state error of the system is ________.",
      answers: {
        a: "reduced",
        b: "increased",
        c: "not affected",
        d: "infinite"
      },
      correctAnswer: "a"
    },
    {
      question: "If the characteristic equation of the system is S2 + 2S  + 1 = 0, the system is ___________.",
      answers: {
        a: "undamped",
        b: "under damped",
        c: "over damped",
        d: "critically damped"
      },
      correctAnswer: "d"
    }//Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
