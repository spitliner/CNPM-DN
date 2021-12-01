'use strict';
var express = require('express');
const passport = require('passport');
var router = express.Router();
var User = require('../models/user.model.js');
var Reservation = require('../models/reservation.model');
var ResetToken = require('../models/reset-token.model');
var Voucher = require('../models/voucher.model');
var Order = require('../models/order.model');
var Food = require('../models/food.model');
var Feedback = require('../models/feedback.model');
var Star = require('../models/star.model');
var sendEmail = require('../config/email-config');
router.post("/api/login", (req, res, next) => {
    try {
        passport.authenticate("local.login", (err, user, info) => {
            if (err) {
                return res.status(200).json({ message: err, success: false, user: null });
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
    } catch (err) {
        res.status(200).json({ message: err, success: false, user: null });
    }
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
                newUser.role = "Customer";
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
        res.status(200).json({ success: true, message: "Logout successfully!" })
    }
});
router.post("/api/change_password", (req, res) => {
    try {
        if (!req.isAuthenticated())
            return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" })
        var email = req.user.email;
        if (!req.body.newPassword || !req.body.oldPassword)
            return res.status(200).json({ success: false, message: "Something wrong!" });
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
router.post("/api/voucher", (req, res) => {
    try {
        if (!req.isAuthenticated())
            return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" })
        Voucher.findOne({ 'voucherCode': req.body.voucherCode }, function(err, voucher) {
            if (err) return res.status(200).json({ success: false, message: err });
            if (!voucher) return res.status(200).json({ success: false, message: 'Voucher not found!' });
            return res.status(200).json({ success: true, message: "Apply voucher successfully!", discount: voucher.discount, voucherCode: voucher.voucherCode });
        });
    } catch (err) {
        return res.status(200).json({ success: false, message: err });
    }
});

router.get("/api/get_all_foods", (req, res) => {
    Food.find({}, (err, menuItems) => {
        if (err) return res.status(200).json({ success: false, message: "Failed to get foods!", menuItems: [] });
        res.status(200).json({ success: true, message: "Successfully get all foods!", menuItems: menuItems });
    });
})
router.post("/api/make_order", (req, res) => {
    if (!req.isAuthenticated())
        return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" });
    var order = new Order();
    order.email = req.user.email;
    order.paymentType = req.body.paymentType;
    order.takeAwayOrEatIn = req.body.takeAwayOrEatIn;
    order.address = req.body.address;
    order.bank = req.body.bank;
    order.creditCardNumber = req.body.creditCardNumber;
    order.cartItems = req.body.cartItems;
    order.voucherCode = req.body.voucherCode;
    order.totalCost = req.body.totalCost;
    order.finalCost = req.body.finalCost;
    order.time = req.body.time;
    order.status = "Waiting";
    order.save((err, result) => {
        if (err) return res.status(200).json({ success: false, message: err });
        return res.status(200).json({ success: true, message: "Successfully make order!" });
    })

});
router.post("/api/feedback", async(req, res) => {
    if (!req.isAuthenticated())
        return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" });
    if (req.body.feedback) {
        var feedback = new Feedback();
        feedback.foodID = req.body.foodID;
        feedback.feedback = req.body.feedback;
        feedback.email = req.user.email;
        feedback.save((err, result) => {
            if (err) return res.status(200).json({ success: false, message: err });
        })
    }
    if (req.body.star) {
        Star.findOne({ foodID: req.body.foodID, email: req.user.email }, (err, result) => {
            if (err) return res.status(200).json({ success: false, message: err });
            if (result) result.delete();
            var newStar = Star();
            newStar.email = req.user.email;
            newStar.star = req.body.star;
            newStar.foodID = req.body.foodID;
            newStar.save((err, result) => {
                if (err) return res.status(200).json({ success: false, message: err });
                // Re-calculate star of food:
                var newStar = 5;
                Star.find({ foodID: req.body.foodID }, (err, starArray) => {
                    if (err) return res.status(200).json({ success: false, message: err });
                    starArray.forEach(element => {
                        newStar += element.star;
                    });
                    newStar /= (starArray.length + 1);
                    // Update star for food:
                    Food.findOne({ id: req.body.foodID }, (err, food) => {
                        if (err) return res.status(200).json({ success: false, message: err });
                        food.star = newStar;
                        food.save((err, result) => {
                            if (err) return res.status(200).json({ success: false, message: err });
                            return res.status(200).json({ success: true, message: "Successfully send feedback!" });
                        });
                    });
                });
            })
        });
    }

});
router.post("/api/get_user_food_star", (req, res) => {
    if (!req.isAuthenticated())
        return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" });
    Star.findOne({ foodID: req.body.foodID, email: req.user.email }, (err, result) => {
        if (err) return res.status(200).json({ success: false, message: err });
        if (!result) return res.status(200).json({ success: false, message: "No star vote!", star: 0 });
        return res.status(200).json({ success: true, message: "Successfully get star!", star: result.star });
    })
});
router.get("/api/get_user_orders", (req, res) => {
    if (!req.isAuthenticated())
        return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" });
    Order.find({ email: req.user.email }, (err, result) => {
        if (err) return res.status(200).json({ success: false, message: err });
        return res.status(200).json({ success: true, message: "Successfully get user orders!", orders: result });
    });
});
router.post("/api/delete_user_order", (req, res) => {
    if (!req.isAuthenticated())
        return res.status(200).json({ success: false, message: "Incorrect flow! You are not logged in!" });
    console.log(req.body.orderID);
    Order.findOne({ _id: req.body.orderID }, async(err, result) => {
        if (err) return res.status(200).json({ success: false, message: err });
        if (!result) return res.status(200).json({ success: false, message: "Some thing wrong!" });
        await result.delete();
        return res.status(200).json({ success: true, message: "Successfully delete order!" });
    });
});
// call this router by POSTMAN to insert data of food
router.get("/api/insert_foods", async(req, res) => {
    var items = [{
            id: 1,
            imgUrl: "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
            name: "Pizza mixed",
            category: "PIZZA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 2,
            imgUrl: "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
            name: "Pizza mixed",
            category: "PIZZA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 3,
            imgUrl: "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
            name: "Pizza mixed",
            category: "PIZZA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 4,
            imgUrl: "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
            name: "Pizza mixed",
            category: "PIZZA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 5,
            imgUrl: "https://media.ex-cdn.com/EXP/media.vntravellive.com/files/editor1/2018/12/07/5517-di-dau-de-tim-thay-pizza-ngon-nhat-105446.jpg",
            name: "Pizza mixed",
            category: "PIZZA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 6,
            imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
            name: "Burger mixed",
            category: "BURGER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 7,
            imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
            name: "Burger mixed",
            category: "BURGER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 8,
            imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
            name: "Burger mixed",
            category: "BURGER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 9,
            imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
            name: "Burger mixed",
            category: "BURGER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 10,
            imgUrl: "http://farm1.staticflickr.com/955/41117503084_128499c414.jpg",
            name: "Burger mixed",
            category: "BURGER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 11,
            imgUrl: "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
            name: "Soup mixed",
            category: "SOUP",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 12,
            imgUrl: "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
            name: "Soup mixed",
            category: "SOUP",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 13,
            imgUrl: "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
            name: "Soup mixed",
            category: "SOUP",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 14,
            imgUrl: "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
            name: "Soup mixed",
            category: "SOUP",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 15,
            imgUrl: "https://images.startsat60.com/wp-content/uploads/20150801171559/310715_pumpkin_soup-500x281.jpg",
            name: "Soup mixed",
            category: "SOUP",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 16,
            imgUrl: "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
            name: "Peach tea",
            category: "TEA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 17,
            imgUrl: "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
            name: "Peach tea",
            category: "TEA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 18,
            imgUrl: "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
            name: "Peach tea",
            category: "TEA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 19,
            imgUrl: "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
            name: "Peach tea",
            category: "TEA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 20,
            imgUrl: "https://nghekhachsan.com/upload/Ni-Anh-NKS/Nam-2019/Thang-11/cong-thuc-pha-tra-dao-01.jpg",
            name: "Peach tea",
            category: "TEA",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 21,
            imgUrl: "https://hallmark.brightspotcdn.com/dims4/default/5beba82/2147483647/strip/true/crop/500x281+0+0/resize/1140x640!/quality/90/?url=http%3A%2F%2Fhallmark-channel-brightspot.s3.amazonaws.com%2Fa2%2F24%2Fc5371a577db4a441383a914b79b8%2Fhf-ep2111-product-cristina-cooks.jpg",
            name: "Cake",
            category: "OTHER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 22,
            imgUrl: "https://www.cookingpanda.com/wp-content/uploads/2021/04/0004_16x9_CandyCookieCake-500x281.jpg",
            name: "Coffee cake",
            category: "OTHER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 23,
            imgUrl: "https://jandatri.com/wp-content/uploads/2019/02/Black-Forest-Cake-Slice-500x281.jpg",
            name: "Tiramisu cake",
            category: "OTHER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 24,
            imgUrl: "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
            name: "Strawberry ice-cream",
            category: "OTHER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
        {
            id: 25,
            imgUrl: "https://i.ndtvimg.com/i/2016-04/granola-parfait-625_625x350_41459499249.jpg",
            name: "Strawberry ice-cream",
            category: "OTHER",
            pricePU: 4.8,
            description: "DESSERT",
            star: 5,
        },
    ]
    await Food.insertMany(items, { ordered: true });
    res.status(200).json({ success: true, message: "Successfully!" })
});
module.exports = router;