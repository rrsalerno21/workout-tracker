const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/exercise', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/exercise.html'));
})

router.get('/blah', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../public/blah.html'));
})

module.exports = router;

