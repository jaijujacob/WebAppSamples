alert("inside");
var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}
function createListElement() {
	console.log("Click is working");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

}
function createListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function createListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
// T

button.addEventListener('click', createListAfterClick);
input.addEventListener('keypress', createListAfterKeypress);


var btnNew = document.getElementById("buttonOne");
btnNew.addEventListener("click", function () {console.log('Button Test');})

var tst = document.getElementById("Test");
tst.addEventListener("click", function(){console.log('test');})

