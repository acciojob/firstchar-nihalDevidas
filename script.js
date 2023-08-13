function firstChar(text) {
  // your code here
	const char = text.slice(0,1);
	return char;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
