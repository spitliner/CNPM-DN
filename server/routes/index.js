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
                    res.status(200).json({ message: "Successfully Authenticated!", success: true, user: req.user })
                }
            });
        }
    })(req, res, next);
});
router.post("/api/register", (req, res) => {
    User.findOne({ email: req.body.email }, async(err, user) => {
        if (err)
            res.status(200).json({ message: err, success: false });

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
router.get("/logout", (req, res) => {
    if (!req.isAuthenticated()) {
        res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" })
    } else {
        req.session.destroy(() => {
            req.logout();
        });
        res.status(200).json({ success: false, message: "Logout successfully!" })
    }
});
router.post("/change_password", (req, res) => {
    var email = req.user.email;
    User.findOne({ 'email': email }, function(err, user) {
        if (err) return res.status(200).json({ success: false, message: err });
        if (!user.validPassword(req.body.oldPassword)) {
            return res.status(200).json({ success: false, message: "Incorect old password!" })
        }
        user.password = user.encryptPassword(req.body.newPassword);
        user.save(function(err, result) {
            if (err) res.status(200).json({ success: false, message: err });
            else res.status(200).json({ success: true, message: "Successfully change passwod" });
        })
    })
});
router.post("/change_user_info", (req, res) => {
    var email = req.user.email;
    User.findOne({ 'email': email }, function(err, user) {
        if (err) return res.status(200).json({ success: false, message: err });
        if (req.body.newEmail) user.email = req.body.newEmail;
        if (req.body.newAddress) user.address = req.body.newAddress;
        if (req.body.newPhone) user.phone = req.body.newPhone;
        user.save(function(err, result) {
            if (err) res.status(200).json({ success: false, message: err });
            else res.status(200).json({ success: true, message: "Successfully change user infomation" });
        })
    })
})


module.exports = router;