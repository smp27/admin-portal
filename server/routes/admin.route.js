const express = require('express');
const app = express();
const AdminRoute = express.Router();

// Admin model
let Admin = require('../models/admin');

// Add Admin
AdminRoute.route('/create').post((req, res, next) => {
    Admin.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
});

// Get All Admins
AdminRoute.route('/').get((req, res) => {
    Admin.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Get single Admin
AdminRoute.route('/read/:id').get((req, res) => {
    Admin.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Update Admin
AdminRoute.route('/update/:id').put((req, res, next) => {
    Admin.findByIdAndUpdate(req.params.id, {
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

// Delete Admin
AdminRoute.route('/delete/:id').delete((req, res, next) => {
    Admin.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.status(200).json({
            msg: data
        })
        }
    })
})

module.exports = AdminRoute;