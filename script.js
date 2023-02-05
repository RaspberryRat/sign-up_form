const passwordBoxes = document.querySelectorAll("input[type='password']")

const pwdBox = document.getElementById('pwd')
const confirmPwdBox = document.getElementById('confirm-pwd')
const pwdListElement = document.querySelector(".pwd-li")
const pwdErrorMsg = document.querySelector(".pwd-error-msg")




/* passwordBox.addEventListener('change' () ) */

passwordBoxes.forEach(box => {
  box.addEventListener("blur", checkPwd, true)
});

passwordBoxes.forEach(box => {
  box.addEventListener("focus", clearPwdBoxStyle, true)
});

function checkPwd() {
  let pwd = pwdBox.value
  let confirmPwd = confirmPwdBox.value

  if (pwd != confirmPwd) {
    pwdBox.style.backgroundColor = "red";
    confirmPwdBox.style.backgroundColor = "red";
    pwdMismatchWarning()
  }
}

function clearPwdBoxStyle() {
  pwdBox.style.backgroundColor = "white";
  confirmPwdBox.style.backgroundColor = "white";
  pwdErrorMsg.innerHTML = " "
}

function pwdMismatchWarning() {
  pwdErrorMsg.innerHTML = "*Password does not match";
  pwdErrorMsg.style.color = "red";
}
