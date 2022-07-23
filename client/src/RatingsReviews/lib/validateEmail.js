function validateEmail(string) {
  const mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (string.value.match(mailRegex)) {
    return true;
  }
  return false;
}

export default validateEmail;
