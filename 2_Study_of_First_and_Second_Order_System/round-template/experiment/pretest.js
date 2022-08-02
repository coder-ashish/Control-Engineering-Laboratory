
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
      question: "First order system is defined as :",
      answers: {
        a: "Number of poles at origin",
        b: "Order of the differential equation",
        c: "Total number of poles of equation",
        d: "Total number of poles and order of equation"
      },
      correctAnswer: "d"
    },
    {
      question: "The nature of transient response of a system is dependent __________.",
      answers: {
        a: "Only on system poles",
        b: "Only on the inputs applied",
        c: "Both on the system poles and the inputs applied",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "For a second order undamped system, the poles are _____.",
      answers: {
        a: "Real and equal",
        b: "Complex conjugate of each other",
        c: "Purely imaginary",
        d: "Real and unequal"
      },
      correctAnswer: "c"
    },
    {
      question: "The Laplace transform of impulse function is ________.",
      answers: {
        a: "0",
        b: "1",
        c: "1/S",
        d: "1/S^2"
      },
      correctAnswer: "b"
    },
    {
      question: "A second order system with damping ratio of greater than one is called____ system.",
      answers: {
        a: "undamped",
        b: "under damped",
        c: "over damped",
        d: "critically damped"
      },
      correctAnswer: "c"
    }
     //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
