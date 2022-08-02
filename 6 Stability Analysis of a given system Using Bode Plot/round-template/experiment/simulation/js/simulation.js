// form 1
function checkAnswer1() {
  if (
    document.form1.cornerFrequency1.value == 0.25 &&
    (document.form1.cornerFrequency2.value == 0.333 ||
      document.form1.cornerFrequency2.value == 0.33)
  ) {
    document.getElementById("output1").style.color = "Green";
    document.getElementById("output1").innerHTML = "Correct Answer";
  } else {
    document.getElementById("output1").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output1").style.color = "red";
  }
}

function showHint1() {
  document.getElementById("hint-display1").style.display = "block";
}

function showAnswer1() {
  document.getElementById("answer-display1").style.display = "block";
}

// form2

function checkAnswer2() {
  if (
    document.form2.slope1.value == "-20" &&
    document.form2.slope2.value == "-20" &&
    document.form2.slope3.value == "-20"
  ) {
    document.getElementById("output2").innerHTML = "Correct Answer";
    document.getElementById("output2").style.color = "Green";
  } else {
    document.getElementById("output2").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output2").style.color = "red";
  }
}

function showHint2() {
  document.getElementById("hint-display2").style.display = "block";
}

function showAnswer2() {
  document.getElementById("answer-display2").style.display = "block";
}

// form 3

function checkAnswer3() {
  if (
    document.form3.slope11.value == "-40" &&
    document.form3.slope22.value == "-60"
  ) {
    document.getElementById("output3").innerHTML = "Correct Answer";
    document.getElementById("output3").style.color = "Green";
  } else {
    document.getElementById("output3").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output3").style.color = "red";
  }
}

function showHint3() {
  document.getElementById("hint-display3").style.display = "block";
}

function showAnswer3() {
  document.getElementById("answer-display3").style.display = "block";
}

function checkAnswer4() {
  if (
    document.form4.lowerCorner.value == 42.5 &&
    document.form4.higherCorner.value == -6.22
  ) {
    document.getElementById("output4").innerHTML = "Correct Answer";
    document.getElementById("output4").style.color = "Green";
  } else {
    document.getElementById("output4").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output4").style.color = "red";
  }
}

function showHint4() {
  document.getElementById("hint-display4").style.display = "block";
}

function showAnswer4() {
  document.getElementById("answer-display4").style.display = "block";
}

function checkAnswer5() {
  if (
    document.form5.firstCorner.value == 38 &&
    document.form5.secondCorner.value == 33
  ) {
    document.getElementById("output5").innerHTML = "Correct Answer";
    document.getElementById("output5").style.color = "Green";
  } else {
    document.getElementById("output5").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output5").style.color = "red";
  }
}

function showHint5() {
  document.getElementById("hint-display5").style.display = "block";
}

function showAnswer5() {
  document.getElementById("answer-display5").style.display = "block";
}

function checkAnswer6() {
  if (
    document.form6.phaseangle1.value == -146 &&
    document.form6.phaseangle2.value == -172 &&
    document.form6.phaseangle3.value == -187 &&
    document.form6.phaseangle4.value == -248 
  ) {
    document.getElementById("output6").innerHTML = "Correct Answer";
    document.getElementById("output6").style.color = "Green";
  } else {
    document.getElementById("output6").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output6").style.color = "red";
  }
}

function showHint6() {
  document.getElementById("hint-display6").style.display = "block";
}

function showAnswer6() {
  document.getElementById("answer-display6").style.display = "block";
}

function checkAnswer7() {
    if (
      document.form7.crossoverFrequency.value == 1.16 &&
      document.form7.crossoverAngle.value == -242 &&
      document.form7.phaseMargin.value == -62
    ) {
      document.getElementById("output7").innerHTML = "Correct Answer";
      document.getElementById("output7").style.color = "Green";
    } else {
      document.getElementById("output7").innerHTML = "Wrong Answer Try Again !";
      document.getElementById("output7").style.color = "red";
    }
  }
  
  function showHint7() {
    document.getElementById("hint-display7").style.display = "block";
  }
  
  function showAnswer7() {
    document.getElementById("answer-display7").style.display = "block";
  }
  
  function checkAnswer8() {
    if (
      document.form8.phaseCrossover.value == 0.289 &&
      document.form8.gainMargin.value == -30.7&& 
      document.form8.stable.value.toLowerCase() === "no"
    ) {
      document.getElementById("output8").innerHTML = "Correct Answer";
      document.getElementById("output8").style.color = "Green";
    } else {
      document.getElementById("output8").innerHTML = "Wrong Answer Try Again !";
      document.getElementById("output8").style.color = "red";
    }
  }
  
  function showHint8() {
    document.getElementById("hint-display8").style.display = "block";
  }
  
  function showAnswer8() {
    document.getElementById("answer-display8").style.display = "block";
  }
  
function displayAnswerpost() {
  let c = 0;
  if (document.getElementById("option-11").checked && document.getElementById("option-21").checked && document.getElementById("option-31").checked) {
    c++;
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML = "Correct!";
    alert(`Correct Answer! On to the next.`);
	$('#qa1').hide();
	$('#q4').show();
    //window.location = "simulation4.html";
  $('.box1').show();
  $('#formative-box').hide();
  }
 else {
    // document.getElementById("block-12").style.border = "3px solid red";
    // document.getElementById("result-12").style.color = "red";
    // document.getElementById("result-12").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
      document.getElementById("block-21").style.border = "3px solid limegreen";
      document.getElementById("result-21").style.color = "limegreen";
      document.getElementById("result-21").innerHTML =
        "This is the correct answer!";   
         document.getElementById("block-31").style.border = "3px solid limegreen";
        document.getElementById("result-31").style.color = "limegreen";
        document.getElementById("result-31").innerHTML =
          "This is the correct answer!";
  }
}

function displayAnswer() {
  let c = 0;
  console.log("why")
  if (document.getElementById("option-11").checked) {
    c++;
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML = "Correct!";
    //alert(`Correct Answer! On to the next.`);
   // return;
  }
  if (document.getElementById("option-12").checked) {
    document.getElementById("block-12").style.border = "3px solid red";
    document.getElementById("result-12").style.color = "red";
    document.getElementById("result-12").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
  }
  if (document.getElementById("option-13").checked) {
    document.getElementById("block-13").style.border = "3px solid red";
    document.getElementById("result-13").style.color = "red";
    document.getElementById("result-13").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
  }
  if (document.getElementById("option-14").checked) {
    document.getElementById("block-14").style.border = "3px solid red";
    document.getElementById("result-14").style.color = "red";
    document.getElementById("result-14").innerHTML = "Incorrect!";
    document.getElementById("block-11").style.border = "3px solid limegreen";
    document.getElementById("result-11").style.color = "limegreen";
    document.getElementById("result-11").innerHTML =
      "This is the correct answer!";
  }
}
