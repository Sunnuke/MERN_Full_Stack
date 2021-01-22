const { Pirate } = require("../models/pirate.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Connected!"
    });
}

module.exports.createPirate = (request, response) => {
    const { pirateName, imageUrl, chests, catchPhrase, crewPosition, pegLeg, eyePatch, hookHand } = request.body;
    Pirate.create({
        pirateName,
        imageUrl,
        chests,
        catchPhrase,
        crewPosition,
        pegLeg,
        eyePatch,
        hookHand
    })
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}

module.exports.allPirate = (request, response) => {
    Pirate.find({})
        .then(pirates => response.json(pirates))
        .catch(err => response.status(400).json(err));
}
module.exports.onePirate = (request, response) => {
    Pirate.findOne({_id:request.params.id})
        .then(pirate => response.json(pirate))
        .catch(err => response.status(400).json(err));
}

module.exports.UpdatePirate = (request, response) => {
    Pirate.updateOne({_id: request.params.id}, request.body, {new: true, runValidators: true})
        .then(updated => response.json(updated))
        .catch(err => response.status(400).json(err));
}

module.exports.deletePirate = (request, response) => {
    Pirate.findOneAndDelete({_id: request.params.id})
        .then(deleted => response.json(deleted))
        .catch(err => response.status(400).json(err));
}