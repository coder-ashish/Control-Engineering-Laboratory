
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
      question: "Frequency response test is not suitable for systems with ___________.",
      answers: {
        a: "Very low time constants",
        b: "With large time constants",
        c: "Any time constants",
        d: "none of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "The corner frequency for the polar factor 1/ (S + 5) is ____________.",
      answers: {
        a: "0.2 rad/sec.",
        b: "-0.2 rad/sec.",
        c: "-5 rad/sec.",
        d: "5 rad/sec."
      },
      correctAnswer: "a"
    },
    {
      question: "The phase margin of the system is 0 degree. The nature of the system is _____.",
      answers: {
        a: "Conditionally stable",
        b: "unstable",
        c: "marginally stable",
        d: "stable"
      },
      correctAnswer: "c"
    },
    {
      question: "The value of resonant frequency in rad/sec. for a second order system with the undamped natural frequency of 8 rad/sec. and damping ratio of 0.5 is ________.",
      answers: {
        a: "4.657",
        b: "5.657",
        c: "6.657",
        d: "5.567"
      },
      correctAnswer: "b"
    },
    {
      question: "A transfer function which has all its poles and zeros only in the left half of the S-plane is called ________ transfer function.",
      answers: {
        a: "an all-pass ",
        b: "a minimum-phase",
        c: "a non minimum-phase",
        d: "none of the above"
      },
      correctAnswer: "b"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
