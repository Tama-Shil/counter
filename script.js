let count = 0;

function setCount() {
  document.getElementById("output").innerText = count;
}
function setInitialCount() {
  setCount();
}
function increment() {
  count++;
  setCount();
  if (count > 10) {
    alert("You typed more than 10 times");
  }
}

setInitialCount();
