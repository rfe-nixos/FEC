function resizePhoto(url, height) {
  // takes url string, and height wanted.
  // converts url string with proper parameters.
  const arr = url.split('/');
  const uploadIndex = arr.indexOf('upload');
  arr[uploadIndex + 1] = `c_scale,h_${height}`;
  const result = arr.join('/');
  return result;
}

// let example = 'http://res.cloudinary.com/joehan/image/upload/v1658260875/b7xg9m7xthi6uzftq5me.jpg';

// let res = resizePhoto(example, 100);

// console.log(res);

export default resizePhoto;
