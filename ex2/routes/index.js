var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res) {
var data = new Date().toISOString().substring(0,16)
axios.get('http://localhost:15030/plantas')
  .then(resposta => {
    res.render('index', { plantas: resposta.data, d: data });
  })
  .catch(erro =>{
    res.render('error', {error: erro})
  })
});
  
router.get('/especies/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(`http://localhost:15030/plantas/${req.params.id}`)
  .then(resposta1 => {
      axios.get('http://localhost:15030/plantas?especie='+ resposta1.data['Espécie'])
        .then(resposta2 => {
          var cientifico = resposta1.data["Nome Científico"]
          res.render('especie', { comum:resposta1.data.Espécie, especie:cientifico, plantas: resposta2.data, d: data });
        })
        .catch(erro =>{
          res.render('error', {error: erro})
        })
    })
    .catch(erro =>{
      res.render('error', {error: erro})
    })
});


router.get('/:id', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get(`http://localhost:15030/plantas/${req.params.id}`)
  .then(resposta => {
    res.render('planta', { p: resposta.data, d: data });
  })
  .catch(erro =>{
    res.render('error', {error: erro})
  })
});


module.exports = router;
