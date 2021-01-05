// Removing element with parent-child method
var parent = document.getElementsByTagName("body"); //Always an array call
var child = document.getElementById("demo");

// Removes "Ayy Lmao"
// child.parentNode.removeChild(child);
parent[0].removeChild(child); // Same as previous method

var elem = document.createElement("elem");
var replaced = document.createTextNode(" If this is displayed, replaced Ayy Lmao");

elem.appendChild(replaced);

parent[0].appendChild(elem); // Array called because ".getElementsByTagName" is an array by default