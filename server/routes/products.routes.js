// Import controller
const AuthorController = require("../controllers/authors.controller");

// Exports routes to be called in server.js
module.exports = app => {
    app.post("/api/authors/new", AuthorController.create);
    app.get("/api/authors/", AuthorController.getAll);
    app.get("/api/authors/:id", AuthorController.getOne);
    app.put("/api/authors/update/:id", AuthorController.update);
    app.delete("/api/authors/delete/:id", AuthorController.delete);
};

// Format:
// app.MONGOOSE_FUNCTION("ROUTE", CONTROLLER_FUNCTION)