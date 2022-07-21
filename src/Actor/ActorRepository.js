const repository = require('./ActorModel')

exports.getAll = function() {
    return repository.getAll()
};