var todo = []
var last;
var rolled;
var idx;

function submit() {
  todo.push(document.getElementById("in").value);
  displayTodo();
  document.getElementById("in").value="";
}

function roll() {
  if (todo.length > 1) {
    do {
      idx = Math.floor(Math.random()*todo.length);
      rolled = todo[idx];
    } while (last == rolled);
    last = rolled;
    displayRoll(rolled);
  } else {
    displayRoll(todo[0]);
  }
}

function delLast() {
  todo.splice(idx,1);
  displayTodo();
}

function displayTodo() {
  document.getElementById("displaytodo").innerHTML=todo;
}

function displayRoll(variable) {
  document.getElementById("displayroll").innerHTML=variable;
}