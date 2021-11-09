'use strict';
var express = require('express');
const passport = require('passport');
var router = express.Router();

router.post("/api/login", (req, res, next) => {
    passport.authenticate("local.login", (err, user, info) => {
        if (err) {
            res.status(200).json({ message: err, user: null })
            throw err;
        }
        if (!user) {
            res.status(200).json({ message: "No user found!", user: null })
        } else {
            req.logIn(user, (err) => {
                if (err) {
                    res.status(200).json({ message: err, user: null })
                    throw err;
                } else {
                    res.status(200).json({ message: "Successfully Authenticated", user: req.user })
                }
            });
        }
    })(req, res, next);
});
module.exports = router;