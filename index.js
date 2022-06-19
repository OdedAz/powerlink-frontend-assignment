const form = document.querySelector("form");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

form.addEventListener("submit", (event) => {
  // submit event detected
  event.preventDefault();

  const email = document.getElementById("emailInput")?.value;
  const password = document.getElementById("passwordInput")?.value;
  const formValidated = {validated: true}
  
  if (!email || (email.length < 3 || email.length > 50) || !validateEmail(email)) {
    document.getElementById("emailFeedback").classList.add("alert-show");
    formValidated.validated=false;
  } else {
    document.getElementById("emailFeedback").classList.add("alert-no-show");
  }
  if (!password || (password.length < 3 || password.length > 50)) {
    document.getElementById("passwordFeedback").classList.add("alert-show");
    formValidated.validated=false;
  } else {
    document.getElementById("passwordFeedback").classList.add("alert-no-show");
  }
  if (formValidated.validated) {
    form.submit()
    window.location.href = "https://stage.powerlink.co.il/web/qasuccess.html";
  }
});
