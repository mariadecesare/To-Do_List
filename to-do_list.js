/* 
 * to-do_list.js
 * author: Maria DeCesare 
 */


// create variables with elements
var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

// create function that gets the length of the input value
function inputLength(){
	return input.value.length;
} 

// create function that gets the length of the list
function listLength(){
	return item.length;
}

// create function that creates list element
function createListElement() {
	// create an li element
	var li = document.createElement("li"); 
	// add the text from the input field to li
	li.appendChild(document.createTextNode(input.value)); 
	// add li to ul
	ul.appendChild(li); 
	// reset text input field
	input.value = "";


	// create a function that toggles "done"
	function crossOut() {
		li.classList.toggle("done");
	}

	// add event listener that calls crossOut function when li is clicked
	li.addEventListener("click",crossOut);

	// create delete button
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	// create event listener that calls deleteListItem function delete button is clicked
	dBtn.addEventListener("click", deleteListItem);


	// create function that deletes list item
	function deleteListItem(){
		li.classList.add("delete")
	}
}

// create a function that adds a list element if input isn't empty (for a click)
function addListAfterClick(){
	// create if statement to make sure that empty input field doesn't create an li
	if (inputLength() > 0) {
		createListElement();
	}
}

// create a function that adds a list element if input is't empty (for a keypress)
function addListAfterKeypress(event) {
	// if statement to see if enter or return was hit (13 is the enter key's keycode)
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}

// create event listener that calls addListAfterClick when enter button is clicked
enterButton.addEventListener("click", addListAfterClick);

// create event listener that calls addListAfterKeypress when enter key is pressed
input.addEventListener("keypress", addListAfterKeypress);