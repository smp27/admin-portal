const express = require('express');
const app = express();
const AdminuserRoute = express.Router();

// AdminUsers model
let AdminUser = require('../models/adminuser');

// Add AdminUsers
AdminuserRoute.route('/create').post((req, res, next) => {
    AdminUser.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
});

// Get All AdminUsers
AdminuserRoute.route('/').get((req, res) => {
    AdminUser.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Get single AdminUsers
AdminuserRoute.route('/read/:id').get((req, res) => {
    AdminUser.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Update AdminUsers
AdminuserRoute.route('/update/:id').put((req, res, next) => {
    AdminUser.findByIdAndUpdate(req.params.id, {
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

// Delete AdminUsers
AdminuserRoute.route('/delete/:id').delete((req, res, next) => {
    AdminUser.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.status(200).json({
            msg: data
        })
        }
    })
})

module.exports = AdminuserRoute;