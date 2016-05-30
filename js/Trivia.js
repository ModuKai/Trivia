var questions = new Map();
questions.set("George Washington was the first president of the United States", true)
questions.set("Hunter College is located in Queens", false)
questions.set("The abacus was invented by the Incas", false)
questions.set("The year 2000 bug resulted from an error in the assembly of transistors for IBM computers", false);
var objectsToBeInvisible = document.getElementsByClassName("init_invisible");
for (var i = 0; i < objectsToBeInvisible.length; i++) {
	objectsToBeInvisible[i].style.display = "none";
}

document.getElementById("begin_quiz_button").onclick = function() {
	var questionObject = document.getElementById("question");
	var questionSet    = questions.keys();
	// Remove "Begin Quiz!" button.
	document.getElementById("begin_quiz_button").style.display = "none";
	for (var i = 0; i < objectsToBeInvisible.length; i++) {
		objectsToBeInvisible[i].style.display = "block";
	}

	// Add the question.
	questionObject.textContent = questionSet.next().value;
	//Add the choices.

};

document.getElementById("submit_answer_button").onclick = function() {
	
};

