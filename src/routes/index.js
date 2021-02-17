const express = require('express');
const router = express.Router();



/**
 * Rqueriendo los controladores.
 * 
 */
const trainerController = require('../controllers/trainerController.js');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'DI POKEDEX'
  });
});


//router.get('/list', trainerController.list);



module.exports = router;