const Pets = require("./models");

function getAll(req, res)
{
    Pets.find({})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}

function createOne(req, res)
{
    Pets.create(req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}

function getOne(req, res)
{
    Pets.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}

function editOne(req, res)
{
    Pets.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: "query"})
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs))
}

function deleteOne(req, res)
{
    Pets.findByIdAndRemove(req.params.id)
    .then(data=>res.json({status: 'good', data: data}))
    .catch(errs=>res.json({status: 'bad', errs: errs}))
}

module.exports = {
    getAll: getAll,
    createOne: createOne,
    getOne: getOne,
    editOne: editOne, 
    deleteOne: deleteOne
}