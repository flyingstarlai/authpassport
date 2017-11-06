const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
