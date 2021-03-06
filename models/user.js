const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// on save
userSchema.pre('save', function(next){
    const user = this;

    bcrypt.genSalt(10, (err, salt) => {
        if(err){ return next(err);}

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if(err){ return next(err);}
            user.password = hash;
            next();
        });
    });
});


const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;
