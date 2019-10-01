const express = require('express');
const app = express();
const ApplicationRoute = express.Router();

// Application model
let Application = require('../models/application');

// Add Application
ApplicationRoute.route('/create').post((req, res, next) => {
    Application.create(req.body, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
});

// Get All Applications
ApplicationRoute.route('/').get((req, res) => {
    Application.find((error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Get single Application
ApplicationRoute.route('/read/:id').get((req, res) => {
    Application.findById(req.params.id, (error, data) => {
        if (error) {
        return next(error)
        } else {
        res.json(data)
        }
    })
})

// Update Application
ApplicationRoute.route('/update/:id').put((req, res, next) => {
    Application.findByIdAndUpdate(req.params.id, {
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

// Delete Application
ApplicationRoute.route('/delete/:id').delete((req, res, next) => {
    Application.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
        return next(error);
        } else {
        res.status(200).json({
            msg: data
        })
        }
    })
})

module.exports = ApplicationRoute;