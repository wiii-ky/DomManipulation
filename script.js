function onclickRed(){
document.getElementById("box-1").style.backgroundColor = "red";
}

function onclickGreen(){
document.getElementById("box-2").style.backgroundColor = "green";
}

function onclickBlue(){
document.getElementById("box-3").style.backgroundColor = "blue";
}

function onclickYellow(){
document.getElementById("box-4").style.backgroundColor = "yellow";
}

function onclickGreet() {
  const greet = document.getElementById("text").value;
  const changeElem = document.getElementById("change");
  if (greet) {
    changeElem.innerHTML = "Hello ," + greet;
  }
}
