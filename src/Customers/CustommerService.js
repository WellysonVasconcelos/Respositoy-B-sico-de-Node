const repository = require('./CustommerRepository')

exports.getAll = function() {
    return repository.getAll()
};