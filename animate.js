var t = setInterval (move, 100);

// Creates timer called move() function every 500 milliseconds

//Define move() function

var pos = 0;
var box = document.getElementById("box");

function move () {

    if (pos >= 400) {
        clearInterval(t);
    } else {
        pos  += 1;
        box.style.left = pos + "px";
    }
}