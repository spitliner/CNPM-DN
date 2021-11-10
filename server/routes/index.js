'use strict';
var express = require('express');
const passport = require('passport');
var router = express.Router();
var User = require('../models/user.model.js');

router.post("/api/login", (req, res, next) => {
    passport.authenticate("local.login", (err, user, info) => {
        if (err) {
            res.status(200).json({ message: err, success: false, user: null });
        }
        if (!user) {
            res.status(200).json({ message: "No user found!", success: false, user: null })
        } else {
            req.logIn(user, (err) => {
                if (err) {
                    res.status(200).json({ message: err, success: false, user: null })
                } else {
                    res.status(200).json({ message: "Successfully Authenticated", success: true, user: req.user })
                }
            });
        }
    })(req, res, next);
});
router.post("/api/register", (req, res) => {
    User.findOne({ email: req.body.email }, async(err, user) => {
        if (err) {
            res.status(200).json({ message: err, success: false });
        }
        if (user)
            res.status(200).json({ message: "Email is already in use!", success: false });
        if (!user) {
            var newUser = new User();
            newUser.email = req.body.email;
            newUser.password = newUser.encryptPassword(req.body.password);
            newUser.username = req.body.username;
            newUser.address = req.body.address;
            newUser.phone = req.body.phone;
            newUser.save((err, result) => {
                if (err) {
                    res.status(200).json({ message: err, success: false });
                } else {
                    res.status(200).json({ message: "Register succesfully!", success: true });
                }
            });
        }
    });
});
module.exports = router;