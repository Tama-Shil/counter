function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}
function CalculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);
  console.log(typeof marks);
  if (marks >= 0 && marks <= 40) {
    document.getElementById("grade").innerText = "F";
  } else if (marks >= 41 && marks <= 50) {
    document.getElementById("grade").innerText = "D";
  } else if (marks >= 61 && marks <= 59) {
    document.getElementById("grade").innerText = "C";
  } else if (marks >= 60 && marks <= 64) {
    document.getElementById("grade").innerText = "B-";
  } else if (marks >= 65 && marks <= 69) {
    document.getElementById("grade").innerText = "B";
  } else if (marks >= 70 && marks <= 70) {
    document.getElementById("grade").innerText = "A-";
  } else if (marks >= 75 && marks <= 79) {
    document.getElementById("grade").innerText = "A";
  } else {
    document.getElementById("grade").innerText = "A+";
  }

}
setInitialValue();