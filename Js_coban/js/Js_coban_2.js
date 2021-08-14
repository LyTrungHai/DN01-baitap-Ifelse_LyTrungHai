function xinChao() {
  var takePerson = document.getElementById("hello").value;

  var sayHello = document.getElementById("txtHello");

  switch (takePerson) {
    case "dad":
      sayHello.innerHTML = "Hello Dad ! <i class='fas fa-user-secret'></i>";
      break;

    case "mom":
      sayHello.innerHTML = "Hello Mom! <i class='fas fa-female'></i> ";
      break;

    case "bro":
      sayHello.innerHTML = "Hello Brother ! <i class='fas fa-child'></i>";
      break;

    default:
      sayHello.innerHTML = "Hi there!";
  }
}
document.getElementById("btnHello").onclick = xinChao;
