const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    message: String
});

module.exports = mongoose.model('users', TaskSchema);