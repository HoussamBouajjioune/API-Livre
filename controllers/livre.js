const Livre = require("../models/livre");


exports.getall = (req, res) => {

  Livre.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "un errer de recuperer les livres."
      });
    else res.send(data);
  });
};

exports.add = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // console.log(req.body);

  // Create a livre
  // const livre = new Livre({
  //   titre: req.body.titre,
  //   auteur: req.body.auteur,
  //   langue: req.body.langue
  // });

  const livre = new Livre({...req.body});


  Livre.add(livre, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the livre."
      });
    else res.send(data);
  });

}



exports.update = (req, res) => {

  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Livre.update(
    req.params.id,
    new Livre(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found livre with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating livre with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};


exports.delete = (req, res) => {
  Livre.delete(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found livre with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete livre with id " + req.params.id
        });
      }
    } else res.send({ message: `livre was deleted successfully!` });
  });
};

exports.findOne = (req, res) => {
  Livre.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found livre with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving livre with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

