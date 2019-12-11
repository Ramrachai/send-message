var msgIn, msgOut, msgBtn;

msgBtn = document.querySelector(".msgBtn");
msgIn = document.querySelector(".msgIn");
msgOut = document.querySelector(".msgOut");

msgBtn.addEventListener("click", msgDisplay);

function msgDisplay() {
  msg = msgIn.value;
  if (msg === "") {
    alert("Can not send Empty Message. Please write something");
  } else {
    msgOut.innerHTML = `Your message <br> '${msg}'  <br>  has been sent successfully`;
    msgIn.value = "";
  }
}
