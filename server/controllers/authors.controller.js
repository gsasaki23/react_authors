// Import model
const Author = require("../models/authors.model");

// Export functions to be called in Routes
module.exports = {
    // CREATE: Create one Author
    create(req, res) {
        Author.create(req.body)
            .then(Author => res.json(Author))
            .catch(err => res.status(400).json(err));
    },

    // READ: Get all Authors
    getAll(req, res) {
        // Blank .find param gets all
        Author.find({})
            .then(Authors => res.json(Authors))
            .catch(err => res.status(400).json(err))
    },
    // READ: Get one Author by id
    getOne(req, res) {
        Author.findById({ _id: req.params.id })
            .then(Author => res.json(Author))
            .catch(err => res.status(400).json(err))
    },

    // UPDATE: Update one Author by id, re-running validators on any changed fields
    update(req, res) {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true
        })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err));
    },

    // DESTROY: Delete one Author by id
    delete(req, res) {
        Author.findByIdAndDelete(req.params.id)
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.status(400).json(err));
    },
};

// Format:
// module.exports.FUNCTION_NAME = (req, res) => {
//   MODEL.MONGOOSE_FUNCTION(PARAMS)
//     .then(VAR => res.json({MODEL: VAR}))
//     .catch(err => res.json(err))
// }