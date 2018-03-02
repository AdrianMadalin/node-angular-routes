var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', (req, res, next) => {
    console.log('route hit')
  res.send(
      {message: 'Send from users route'}
      );
});

module.exports = router;
