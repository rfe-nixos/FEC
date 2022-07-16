/* eslint-disable no-console */
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.static(path.join(__dirname, '../client/public')));

<<<<<<< HEAD
app.listen(() => {
=======
app.listen(process.env.PORT, () => {
>>>>>>> main
  console.log(`listening on port ${process.env.PORT}`);
});
