const express = require('express');
const router = new express.Router();

router.use('/films', require('./films.js'));

// HOME route
router.get('/', function(req, res) {
  res.json({ data: 'films'});
});


module.exports = router;
