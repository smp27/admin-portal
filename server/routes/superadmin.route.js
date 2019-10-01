const express = require('express');
const app = express();
const SuperAdminRoute = express.Router();
const passwordHash = require('password-hash');

const config = require('../config');
let jwt = require('jsonwebtoken');

// Super Admin model
let SuperAdmin = require('../models/superadmin');

// Login Super Admin
SuperAdminRoute.route('/login').post((req, res, next) => {
    SuperAdmin.findOne({email: req.body.email}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      //passwordHash.generate(req.body.password)
      //passwordHash.verify(req.body.password, data.password)
      if(passwordHash.verify(req.body.password, data.password)) {
        let token = jwt.sign({username: req.body.email},
          config.secret,
          {
            expiresIn: '24h' // expires in 24 hours
          }
        );
        res.json({
          success: true,
          message: 'Authentication successful!',
          token: token
        });
      } else {
        res.json({
          success: false,
          message: 'Authentication failed! Please check password'
        });
      }
    }
  })
});

// Logout Super Admin
SuperAdminRoute.route('/logout').post((req, res, next) => {
  console.log(res);
});

module.exports = SuperAdminRoute;