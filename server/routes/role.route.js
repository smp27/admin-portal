const express = require('express');
const app = express();
const RoleRoute = express.Router();

// Role model
let Role = require('../models/role');

// Add Role
RoleRoute.route('/create').post((req, res, next) => {
    Role.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
});

// Get All Roles
RoleRoute.route('/').get((req, res) => {
    Role.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Get single Role
RoleRoute.route('/read/:id').get((req, res) => {
    Role.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Update Role
RoleRoute.route('/update/:id').put((req, res, next) => {
    Role.findByIdAndUpdate(req.params.id, {
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

// Delete Role
RoleRoute.route('/delete/:id').delete((req, res, next) => {
    Role.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.status(200).json({
            msg: data
        })
        }
    })
})

module.exports = RoleRoute;