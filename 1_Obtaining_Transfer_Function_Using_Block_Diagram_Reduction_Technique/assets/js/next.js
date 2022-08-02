$(function() {
	let count = 1;
	$(".next").click(function() {
	  let prevQuestion = 'q'+count;	
	   $('#'+prevQuestion).hide()
	  ++count;
	  let question = 'q'+count;
	  switch (count) {
		  case 4:
			$('#qa1').show();
			break;
		  case 7:
			$('#qa2').show();
			break;
		  case 10:
			$('#qa3').show();
			break;
		  default:
			$('#'+question).show();
	  }
	//  if(count == 4) {
	// 	 $('#qa1').show();
	//  } else {
	// 	 $('#'+question).show();
	//  }
	  //$('#box').html($('#'+question).html());

	});
});