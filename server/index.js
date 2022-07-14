/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, '../client/public')));

app.listen(() => {
  console.log(`listening on port ${process.env.PORT}`);
});
