var questions = new Map();
var questionObject = document.getElementById("question");
var objectsToBeInvisible = document.getElementsByClassName("init_invisible");
var radioTrue  = document.getElementById("radio_true");
var radioFalse = document.getElementById("radio_false");

questions.set("George Washington was the first president of the United States", true)
questions.set("Hunter College is located in Queens", false)
questions.set("The abacus was invented by the Incas", false)
questions.set("The year 2000 bug resulted from an error in the assembly of transistors for IBM computers", false);
var questionSet = questions.keys();

radioTrue.checked = false;
radioFalse.checked = false;

function makeInvisible() {
	for (var i = 0; i < objectsToBeInvisible.length; i++) {
		objectsToBeInvisible[i].style.display = "none";
	}
}

function makeVisible() {
	for (var i = 0; i < objectsToBeInvisible.length; i++) {
		objectsToBeInvisible[i].style.display = "block";
	}
}

makeInvisible();

document.getElementById("begin_quiz_button").onclick = function() {
	// Remove "Begin Quiz!" button.
	document.getElementById("begin_quiz_button").style.display = "none";

	makeVisible();

	// Add the question.
	questionObject.textContent = questionSet.next().value;
};

document.getElementById("submit_answer_button").onclick = function() {
	var answer = questions.get(document.getElementById("question").textContent);

	if (!radioTrue.checked && !radioFalse.checked) {
		alert("No answer selected.");
	} else {
		if (radioTrue.checked == answer && radioFalse.checked != answer) {
			alert("Correct!");
		} else {
			alert("Incorrect!");
		}

		var nextQuestionObject = questionSet.next();
		questionObject.textContent = nextQuestionObject.value;

		if (nextQuestionObject.done) {
			makeInvisible();	
			alert("Quiz completed.");
		} else {
			radioTrue.checked = false;
			radioFalse.checked = false;
		}
	}
};

