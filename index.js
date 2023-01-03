function calc() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operator = document.getElementById("operators").value;
  let answer;

  switch (operator) {
    case "add":
      answer = num1 + num2;
      break;
    case "subtract":
      answer = num1 - num2;
      break;
    case "multiply":
      answer = num1 * num2;
      break;
    case "divide":
      answer = num1 / num2;
      break;
    case "default":
      answer = "";
  }

  if (!num1 || !num2) {
    alert("please fill both fields");
    document.getElementById("show_answer").innerHTML = "";
  } else {
    document.getElementById("show_answer").innerHTML = answer;
  }
}
