const passwordBoxes = document.querySelectorAll("input[type='password']")

const pwdBox = document.getElementById('pwd')
const confirmPwdBox = document.getElementById('confirm-pwd')


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

  if (pwd == confirmPwd) {
    pwdBox.style.backgroundColor = "green";
    confirmPwdBox.style.backgroundColor = "green";
  } else {
    pwdBox.style.backgroundColor = "red";
    confirmPwdBox.style.backgroundColor = "red";
  }
}

function clearPwdBoxStyle() {
  pwdBox.style.backgroundColor = "white";
  confirmPwdBox.style.backgroundColor = "white";
}



