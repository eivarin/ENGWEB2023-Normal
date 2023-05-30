var Plantas = require("../models/planta");

module.exports.list = () => {
  return Plantas.find()
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlantaFromId = (id) => {
  return Plantas.findOne({ _id: id })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlantaFromEspecie = (especie) => {
  return Plantas.find({ "Espécie": especie })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getPlantaFromImplant = (implant) => {
  return Plantas.find({ "Implantação": implant })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getFreguesias = () => {
  return Plantas.distinct("Freguesia").sort()
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.getEspecies = () => {
  return Plantas.distinct("Espécie").sort()
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};



module.exports.addPlanta = (c) => {
  return Plantas.create(c)
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};

module.exports.deletePlanta = (id) => {
  return Plantas.deleteOne({ _id: id })
    .then((resposta) => {
      return resposta;
    })
    .catch((erro) => {
      return erro;
    });
};