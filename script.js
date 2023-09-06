let score  = 0;
let scoreHTML = document.getElementById("score");

function increase() {
    scoreHTML.innerHTML = score++;


}

function welcome(name)  {
    name = prompt("enter your name here: ")
    console.log("welcome " + name)

}

welcome();