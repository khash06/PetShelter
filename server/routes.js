const api = require('./controller');
const bp = require('body-parser');

function router(app)
{
    app.use(bp.json());
    app.get("/api/pets", api.getAll);
    app.post("/api/pets/new", api.createOne);
    app.get("/api/pets/:id", api.getOne);
    app.put("/api/pets/:id/edit", api.editOne);
    app.delete("/api/pets/:id", api.deleteOne);
    app.get('/');
}

module.exports = router;