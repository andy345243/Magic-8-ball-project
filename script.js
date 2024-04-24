//EVENT LISTENER
document.getElementById("btn").addEventListener("click", button);

function button() {
  let ball = document.getElementById("question").value.toLowerCase();

  let result = Math.random();

  if (ball == "does magic 8 ball actually work?") {
    document.getElementById("result").innerHTML = "How dare you doubt me!";
  } else if (ball == "is javascript awesome?") {
    document.getElementById("result").innerHTML = "Of Course!";
  } else if (result < 0.2) {
    document.getElementById("result").innerHTML = "As I see it, yes.";
  } else if (result < 0.4) {
    document.getElementById("result").innerHTML = "Without a Doubt";
  } else if (result < 0.6) {
    document.getElementById("result").innerHTML = "Concentrate and ask again.";
  } else if (result < 0.8) {
    document.getElementById("result").innerHTML = "Don't count on it.";
  } else {
    document.getElementById("result").innerHTML = "Outlook not so good.";
  }

  document.getElementById("result").style.color = "rgba(16, 150, 16)";
}
