const express = require('express');
const app = express();
const SuperAdminRoute = express.Router();
const passwordHash = require('password-hash');

const config = require('../config');
let jwt = require('jsonwebtoken');

// Super Admin model
let SuperAdmin = require('../models/superadmin');

// Create Super Admin
SuperAdminRoute.route('/createSuperAdmin').post((req, res, next) => {
  SuperAdmin.create({email: req.body.email, password: passwordHash.generate(req.body.password)}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log('user created');
    }
  })
});

// Login Super Admin
SuperAdminRoute.route('/login').post((req, res, next) => {
    SuperAdmin.findOne({email: req.body.email}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      //passwordHash.generate(req.body.password)
      //passwordHash.verify(req.body.password, data.password)
      if(passwordHash.verify(req.body.password, data.password)) {
        req.session.loggedInUser = req.body;
        req.session.save();
        // console.log(req.session.loggedInUser);
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
SuperAdminRoute.route('/logout').get((req, res, next) => {
  req.session.destroy();
  res.json({
    success: true
  });
});

// Check Session
SuperAdminRoute.route('/isLoggedIn').get((req, res, next) => {
  // console.log(req.session.loggedInUser);
  if(req.session.loggedInUser) {
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false
    });
  }
});

module.exports = SuperAdminRoute;