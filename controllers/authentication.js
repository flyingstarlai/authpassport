const User = require('../models/user');

exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    if( !email || !password) {
        return res.status(422).send({ error: 'Your data not correct'});
    }

    User.findOne({ email }, (err, existingUser) => {
        if(err){return next(err)}
        if(existingUser) {
            return res.status(422).send({ error: 'Email is used!'});
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(err=> {
            if(err){return next(err)}

            res.json({ success: true });
        });
    });



};