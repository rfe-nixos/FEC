function parseContent(formValues) {
  let result = {
    product_id: 37311,
    rating: parseInt(formValues.rating),
    summary: formValues.summary,
    body: formValues.body,
    name: formValues.name,
    email: formValues.email,
    recommend: formValues.recommend,
    characteristics: {'125033': 3, '125031': 4, '125032': 5, '125034': 3}
  }

  let name = formValues.name.toLowerCase();
  //split into array of strings
  let nameArray = name.split(' ');
  //loop through array, make first character uppercase.
  for (var i = 0; i < nameArray.length; i++) {
    nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
  }
  name = nameArray.join(' ');
  result.name = name;

  return result;
}