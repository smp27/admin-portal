const express = require('express');
const app = express();
const UserRoute = express.Router();

// User model
let User = require('../models/user');

// Add User
UserRoute.route('/create').post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
});

// Get All Users
UserRoute.route('/').get((req, res) => {
    User.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Get single User
UserRoute.route('/read/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Update User
UserRoute.route('/update/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
        return next(error);
        console.log(error)
        } else {
        res.json(data)
        console.log('Data updated successfully')
        }
    })
})

// Delete User
UserRoute.route('/delete/:id').delete((req, res, next) => {
    User.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.status(200).json({
            msg: data
        })
        }
    })
})

module.exports = UserRoute;