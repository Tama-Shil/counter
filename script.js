function setInitialValue() {
  document.getElementById("marks-inp").value = 0;
}

function showGrade(grade) {
  document.getElementById("grade").innerText = grade;
}

function IsvalidInput(input) {
  return (input >= 0 && input <= 100) ? true : false;
}

function CalculateGrade() {
  const marks = parseInt(document.getElementById("marks-inp").value);

  if (!IsvalidInput(marks)) {
    alert("Invalid input");
    return;
  }

  if (marks >= 0 && marks <= 40) {
    showGrade("F");
  } else if (marks >= 41 && marks <= 50) {
    showGrade("D");
  } else if (marks >= 61 && marks <= 59) {
    showGrade("C");
  } else if (marks >= 60 && marks <= 64) {
    showGrade("B-");
  } else if (marks >= 65 && marks <= 69) {
    showGrade("B");
  } else if (marks >= 70 && marks <= 70) {
    showGrade("A-");
  } else if (marks >= 75 && marks <= 79) {
    showGrade("A");
  } else {
    showGrade("A+");
  }

}
setInitialValue();