const model = require('./CustommerModel');


exports.getAll = function () {
    return model.findAll();
};