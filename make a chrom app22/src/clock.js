const clock = document.querySelector(".clock");

function clockTicking() {
  clock.textContent = new Date().toTimeString().substring(0, 8);
}

clockTicking();
setInterval(clockTicking, 1000);
