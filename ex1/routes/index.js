var express = require('express');
var router = express.Router();
var Plantas = require('../controllers/planta')




// GET /plantas: devolve uma lista com todos os registos;
// GET /plantas?especie=EEEE: devolve a lista dos registos correspondentes à espécie EEEE;
// GET /plantas?implant=AAA: devolve a lista dos registos com implantação AAA;
router.get('/plantas', function(req, res, next) {
  if(req.query.especie){
    Plantas.getPlantaFromEspecie(req.query.especie)
    .then(plantas => {
      res.status(200).json(plantas)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Erro na obtenção das plantas com especie: " + req.query.especie})
    })
  }
  else if(req.query.implant){
    Plantas.getPlantaFromImplant(req.query.implant)
    .then(plantas => {
      res.status(200).json(plantas)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Erro na obtenção das plantas com implantacao: " + req.query.implant})
    })
  }
  else{
    Plantas.list()
    .then(planta => {
      res.status(200).json(planta)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Erro na obtenção das plantas"})
    })
  }
});

// GET /plantas/freguesias: devolve a lista de freguesias ordenada alfabeticamente e sem repetições;
router.get('/plantas/freguesias', function(req, res) {
  Plantas.getFreguesias()
  .then(freguesias => {
    res.status(200).json(freguesias)
  })
  .catch(erro => {
    res.status(520).json({erro: erro, mensagem: "Erro na obtenção das freguesias das plantas"})
  })
});

// GET /plantas/especies: devolve a lista das espécies vegetais ordenada alfabeticamente e sem repetições;
router.get('/plantas/especies', function(req, res) {
  Plantas.getEspecies()
  .then(especies => {
    res.status(200).json(especies)
  })
  .catch(erro => {
    res.status(520).json({erro: erro, mensagem: "Erro na obtenção das especies das plantas"})
  })
});

// GET /plantas/:id: devolve o registo com identificador id;
router.get('/plantas/:id', function(req, res) {
  Plantas.getPlantaFromId(req.params.id)
  .then(planta => {
    res.status(200).json(planta)
  })
  .catch(erro => {
    res.status(520).json({erro: erro, mensagem: "Erro na obtenção da planta" + req.params.id})
  })
});

// POST /plantas: acrescenta um registo novo à BD;
router.post('/plantas', (req, res) => {
  Plantas.addPlanta(req.body)
  .then(especies => {
    res.status(201).json(especies)
  })
  .catch(erro => {
    res.status(520).json({erro: erro, mensagem: "Erro na criacao da planta"})
  })
});

// DELETE /plantas/:id: elimina da BD o registo com o identificador id.
router.delete('/plantas/:id', function(req, res) {
  Plantas.deletePlanta(req.params.id)
  .then(especies => {
    res.status(204).json(especies)
  })
  .catch(erro => {
    res.status(520).json({erro: erro, mensagem: "Erro na remocao da planta"})
  })
});

module.exports = router;