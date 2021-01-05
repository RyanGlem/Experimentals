function show() {

    var message = "Hi there";
    alert (message);

    var btn = document.getElementsByTagName("button");
    
    btn[0].addEventListener("mouseout", tell());
}

function tell() {

    alert ("PUT THE MOUSE IN THE BOX");
}