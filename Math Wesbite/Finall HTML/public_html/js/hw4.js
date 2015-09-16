var num1, num2;
    var correctcount=0;
    var totalcorrect;
    var incorrectcount=0;
    var totalincorrect;

// create a question using random number
function refreshQuestion() {
        num1 = Math.floor(Math.random() * 10);
        num2 = Math.floor(Math.random() * 10);
        var dc = "How much is " + num1 + " times " + num2 + "?";
        document.getElementById("Quest").innerHTML = dc;
}


//checks the answer giving by user and depending on if it is correct or not will display appropitate message
function checkAns ()
{
	var totalquestions;
	var student_answer = parseInt(document.myform.answer.value);
	var correct_answer = num1 * num2;

    // switch statement used to randomize the comment left for when student answers the questions.
	if (student_answer == correct_answer)
	{
		correct_comment = Math.floor( 1 + Math.random() * 4 );
		
		switch (correct_comment){

		    case 1:
		        document.getElementById("show_alert").innerHTML = '<b>"Very Good!"</b>';
		        break;
		
		    case 2:
			    document.getElementById("show_alert").innerHTML = '<b>"Excellent!"</b>';
			    break;

			case 3:
		        document.getElementById("show_alert").innerHTML = '<b>"Nice Work!"</b>';
		        break;

		    case 4:
			    document.getElementById("show_alert").innerHTML = '<b>"Keep Up The Good Work!"</b>';
		        break;
		}
		setTimeout(function () {
		    document.getElementById("show_alert").innerHTML = '                                  ';
		    document.myform.answer.value = '';
		}, 3000);
		refreshQuestion();
		correctcount++;
		totalcorrect = correctcount;
	}
	
	else
	{
		incorrect_comment = Math.floor( 1 + Math.random() * 4 );
		
		switch (incorrect_comment){
			
			case 1:
		        document.getElementById("show_alert").innerHTML = '<b>No. Please Try Again</b>';
		        break;

		    case 2:
			    document.getElementById("show_alert").innerHTML = '<b>Wrong Try Once More.</b>';
		        break;
		
		    case 3:
			    document.getElementById("show_alert").innerHTML = '<b>Dont Give Up!</b>';
			    break;

		    case 4:
			    document.getElementById("show_alert").innerHTML = '<b>No Keep Trying</b>';
		        break;	
		}
		setTimeout(function () {
		    document.getElementById("show_alert").innerHTML = '                                  ';
		    document.myform.answer.value = '';
		}, 3000);
		incorrectcount++;
		totalincorrect = incorrectcount;
	}
	
	totalquestions = correctcount + incorrectcount;
	document.getElementById("rightans").innerHTML = "Right Answer Count: [" + correctcount + "]  Wrong Answers Count : [" + incorrectcount + "]";
	
	if (totalquestions == 10)
	{
	    var calc1;
	    var testmsg;
	    calc1 = correctcount / totalquestions;
	    if (calc1 < .75) 
	        testmsg = "<b>Please ask your instructor for extra help</b>, You Percent Accurcy is : ";
	    else
	        testmsg = "<b>Very Good Job, You Passed!</b>, You Percent Accurcy is : "
	    setTimeout(function () {
	        document.getElementById("rightans").innerHTML = '                                                                 ';
	    }, 4000);
	    document.getElementById("Totals").innerHTML = testmsg + calc1 * 100 + "%";
	    setTimeout(function () {
	       document.getElementById("Totals").innerHTML = '                                                                 ';
	    }, 4000);
	    incorrectcount = 0;
	    correctcount = 0;
	    totalquestions = 0;
	}
}