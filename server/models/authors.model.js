// Import mongoose
const mongoose = require("mongoose");
// Repeating message vars
const requiredMsg = "{PATH} is required.";
const minlengthMsg = "{PATH} must be at least {MINLENGTH} characters.";

// Create Author Schema
const AuthorSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, requiredMsg],
			minlength: [3, minlengthMsg]
		},
	},{ timestamps: true }
)

// Create model, registering Author Schema and creating "Authors" collection when we insert to it
const Author = mongoose.model("Author",AuthorSchema);

// Export Author Model to be used in Controller
module.exports = Author;