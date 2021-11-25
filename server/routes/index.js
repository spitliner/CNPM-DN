'use strict';
var express = require('express');
const passport = require('passport');
var router = express.Router();
var User = require('../models/user.model.js');
var Reservation = require('../models/reservation.model');
var ResetToken = require('../models/reset-token.model');
var sendEmail = require('../config/email-config');
router.post("/api/login", (req, res, next) => {
    passport.authenticate("local.login", (err, user, info) => {
        if (err) {
            res.status(200).json({ message: err, success: false, user: null });
        }
        if (!user) {
            res.status(200).json({ message: "Incorrect email or password!", success: false, user: null })
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
    try {
        User.findOne({ email: req.body.email }, async(err, user) => {
            if (err)
                res.status(200).json({ message: err, success: false });

            if (user)
                res.status(200).json({ message: "Email is already in use!", success: false });
            if (!user) {
                if (!req.body.password || !req.body.email || !req.body.username || !req.body.address || !req.body.phone)
                    return res.status(200).json({ success: false, message: "Some thing wrong!" });
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
    } catch (err) {
        return res.status(200).json({ success: false, message: err });
    }
});
router.get("/api/logout", (req, res) => {
    if (!req.isAuthenticated()) {
        res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" })
    } else {
        req.session.destroy(() => {
            req.logout();
        });
        res.status(200).json({ success: false, message: "Logout successfully!" })
    }
});
router.post("/api/change_password", (req, res) => {
    try {
        if (!req.isAuthenticated())
            return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" })
        var email = req.user.email;
        if (!req.body.newPassword || !req.body.oldPassword)
            return res.status(200).json({ success: false, message: "Some thing wrong!" });
        User.findOne({ 'email': email }, function(err, user) {
            if (err) return res.status(200).json({ success: false, message: err });
            if (!user.validPassword(req.body.oldPassword)) {
                return res.status(200).json({ success: false, message: "Incorect old password!" })
            }
            user.password = user.encryptPassword(req.body.newPassword);
            user.save(function(err, result) {
                if (err) res.status(200).json({ success: false, message: err });
                else res.status(200).json({ success: true, message: "Successfully change passwod!" });
            })
        })
    } catch (err) {
        console.log(err);
        return res.status(200).json({ success: false, message: err });
    }
});
router.post("/api/change_information", (req, res) => {
    try {
        if (!req.isAuthenticated())
            return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" })
        var email = req.user.email;
        User.findOne({ 'email': email }, function(err, user) {
            if (err) return res.status(200).json({ success: false, message: err });
            if (req.body.newUsername) user.username = req.body.newUsername;
            if (req.body.newAddress) user.address = req.body.newAddress;
            if (req.body.newPhone) user.phone = req.body.newPhone;
            user.save(function(err, result) {
                if (err) res.status(200).json({ success: false, message: err });
                else res.status(200).json({ success: true, message: "Successfully change user infomation" });
            })
        })
    } catch (err) {
        return res.status(200).json({ success: false, message: err });
    }
});
router.post("/api/reservation", (req, res) => {
    try {
        if (!req.isAuthenticated())
            return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" })
        var email = req.user.email;
        var reservation = new Reservation();
        reservation.email = email;
        reservation.numberOfPersons = req.body.numberOfPersons;
        reservation.date = req.body.date;
        reservation.time = req.body.time;
        reservation.message = req.body.message;
        reservation.save((err, result) => {
            if (err) res.status(200).json({ success: false, message: err });
            else res.status(200).json({ success: true, message: "Successfully table reservation!" });
        })
    } catch (err) {
        return res.status(200).json({ success: false, message: err });
    }
});
router.post("/api/get_reset_code", (req, res) => {
    try {
        User.findOne({ 'email': req.body.email }, function(err, user) {
            if (err) return res.status(200).json({ success: false, message: err });
            if (!user) return res.status(200).json({ success: false, message: "Email not found!" });
            ResetToken.findOne({ 'email': req.body.email }, function(err, resetToken) {
                if (err) return res.status(200).json({ success: false, message: err });
                if (resetToken) return res.status(200).json({ success: true, message: "Reset code has been sent and will expire in 3 minutes, please check your mail box!" });
                // No reset token --> create one
                var code = Math.floor(Math.random() * (999999 - 100000) + 10000);
                var resetToken = new ResetToken();
                resetToken.email = req.body.email;
                resetToken.code = code;
                resetToken.save(async(err, result) => {
                    if (err) res.status(200).json({ success: false, message: err });
                    else {
                        await sendEmail(req.body.email, code);
                        res.status(200).json({ success: true, message: "Success! Reset code has been sent to your email, please input your reset code in 3 minutes!" });
                    }
                });
            });
        });
    } catch (err) {
        return res.status(200).json({ success: false, message: err });
    }
});

router.post("/api/check_reset_code", (req, res) => {
    try {
        ResetToken.findOne({ 'email': req.body.email }, function(err, resetToken) {
            if (err) return res.status(200).json({ success: false, message: err });
            if (!resetToken) return res.status(200).json({ success: false, message: "Reset code not found, please get a new or another code!" });
            if (req.body.code != resetToken.code) return res.status(200).json({ success: false, message: "Incorrect reset code!" });
            // Else set new password
            resetToken.delete(); // delete current token
            User.findOne({ 'email': req.body.email }, function(err, user) {
                if (err) return res.status(200).json({ success: false, message: err });
                if (!user) return res.status(200).json({ success: false, message: "Something wrong! User not found!" });
                if (!req.body.password) return res.status(200).json({ success: false, message: "Something wrong!" });
                user.password = user.encryptPassword(req.body.password);
                user.save(function(err, result) {
                    if (err) res.status(200).json({ success: false, message: err });
                    else res.status(200).json({ success: true, message: "Successfully reset passwod!" });
                })
            })
        });
    } catch (err) {
        return res.status(200).json({ success: false, message: err });
    }
});
router.get("/api/check_login", (req, res) => {
    try {
        if (req.isAuthenticated())
            return res.status(200).json({ success: true, message: req.user })
        return res.status(200).json({ success: false, message: {} })
    } catch (err) {
        return res.status(200).json({ success: false, message: err });
    }
});
module.exports = router;