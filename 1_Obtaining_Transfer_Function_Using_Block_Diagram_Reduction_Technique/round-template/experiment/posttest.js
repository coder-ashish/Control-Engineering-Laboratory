
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
      question: "Is the block with unity feedback ignored while reducing the block diagram ?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "b"
    },
    {
      question: "Is each block given in the system contributes to the overall transfer function of the system ?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "a"
    },
    {
      question: "Is modification made on the block diagram will alter the input and output relations of the system ?",
      answers: {
        a: "Yes",
        b: "No"
      },
      correctAnswer: "b"
    },
    {
      question: "The error signal in positive feedback is _______.",
      answers: {
        a: "Increases",
        b: "Decreases"
      },
      correctAnswer: "a"
    },
    {
      question: "From the below statement, which is not the characteristics of negative feedback",
      answers: {
        a: "Accuracy in tracking steady state value",
        b: "Rejection of disturbance signal",
        c: "High sensitivity to parameter variations",
        d: "Reduction in gain"
      },
      correctAnswer: "c"
    } //Dont add comma here
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
