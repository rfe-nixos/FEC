function validateEmail(string) {
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
  if (regex.test(string)) {
    return true;
    console.log('good email')
  }
  console.log('bad email')
  return false;
}

// let bad = "asdf";
// let good = "hey@hey.com"

// console.log(validateEmail(bad))
// console.log(validateEmail(good));

export default validateEmail;
