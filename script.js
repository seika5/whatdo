var todo = []
var last;

function submit() {
  todo.push(document.getElementById("in").value);
  displayTodo();
  document.getElementById("in").value="";
}

function roll() {
  if (todo.length > 1) {
    var rolled;
    do {
      rolled = todo[Math.floor(Math.random()*todo.length)];
    } while (last == rolled);
    last = rolled;
    displayRoll(rolled);
  }
}

function displayTodo() {
  document.getElementById("displaytodo").innerHTML=todo;
}

function displayRoll(variable) {
  document.getElementById("displayroll").innerHTML=variable;
}