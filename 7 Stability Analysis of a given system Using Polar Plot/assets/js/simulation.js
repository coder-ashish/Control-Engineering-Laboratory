$(function() {
	$("#eq1").click(function() {
		$('#main').hide();
		$('#section1').show();
		$('#section2').hide();
	});
	$("#eq2").click(function() {
		$('#main').hide();
		$('#section2').show();
		$('#section1').hide();
	});	
});


function checkAnswer1() {
  if (
    (document.form1[0].value == 3.47) &&
    (document.form1[1].value == -131)&&
    (document.form1[2].value == 1.26) &&
    (document.form1[3].value == -162)&&
    (document.form1[4].value == 0.67) &&
    (document.form1[5].value == -180)&&
    (document.form1[6].value == 0.59) &&
    (document.form1[7].value == -183)&&
    (document.form1[8].value == 0.31) &&
    (document.form1[9].value == -198)&&
    (document.form1[10].value == 0.004) &&
    (document.form1[11].value == -235)

  ) {
    document.getElementById("output1").style.color = "Green";
    document.getElementById("output1").innerHTML = "Correct Answer";
    document.getElementById("output15ans").style.visibility = "visible";
    // document.getElementById("btnID").style.visibility = "visible";
    
  } else {
    document.getElementById("output1").innerHTML = "Wrong Answer Try Again !";
    document.getElementById("output1").style.color = "red";
  }
}

function showHint1() {
  document.getElementById("hint-display1").style.display = "block";
}

function showResponse(){
  document.getElementById("imgGraph").style.display="block";
}

function showAnswer1() {
  document.getElementById("answer-display1").style.display = "block";
}



function checkAnswer2() {
  if (
    (document.form2[0].value == 11.64) &&
    (document.form2[1].value == -194)&&
    (document.form2[2].value == 2.68) &&
    (document.form2[3].value == -207)&&
    (document.form2[4].value == 1.07) &&
    (document.form2[5].value == -217)&&
    (document.form2[6].value == 0.53) &&
    (document.form2[7].value == -225)&&
    (document.form2[8].value == 0.006) &&
    (document.form2[9].value == -259)

  ) {
    document.getElementById("output2").style.color = "Green";
    document.getElementById("output2").innerHTML = "Correct Answer";
    document.getElementById("output14ans").style.visibility = "visible";
    //document.getElementById("btnID").style.visibility = "visible";
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

function showResponse2(){
  document.getElementById("imgGraph2").style.display="block";
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
  $('#formative-box').hide();
  $('#section2').show();
    //window.location = "simulation4.html";
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
