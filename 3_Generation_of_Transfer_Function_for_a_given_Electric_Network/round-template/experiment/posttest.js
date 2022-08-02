
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
      question: "Is current through all the components of series RLC network are same?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    },
    {
      question: "Is Laplace transformation can be preferred to obtain the transfer function in RLC network?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    },
    {
      question: "The initial condition of the given RLC network need not to be zero while deriving the overall transfer function using Laplace transformation.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "Correct option (If option a is correct then specify a)"
    },
    {
      question: "The open loop transfer function of any unity feedback open loop system is (2s^2 + 6s + 5)/((s+1)^2 * (s+2)) . The characteristic equation of the closed loop system is _____.",
      answers: {
        a: "2s^2 + 6s + 5 = 0",
        b: "(s + 1)2(s + 2) = 0",
        c: "2s + 6s + 5 + (s + 1)^2*(s + 2) = 0",
        d: "2s^2 + 6s + 5 - (s + 1)^2*(s + 2) = 0"
      },
      correctAnswer: "c"
    },
    {
      question: "The second derivative input signals modify which of the following?",
      answers: {
        a: "The time constant of the system",
        b: "Damping of the system",
        c: "The gain of the system",
        d: "The time constant and suppress the oscillations"
      },
      correctAnswer: "d"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
