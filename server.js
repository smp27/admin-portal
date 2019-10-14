let express = require('express'),
   path = require('path'),
   mongoose = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./server/database/db'),
   session = require('express-session');

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
      console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up routes
const roleRoute = require('./server/routes/role.route');
const adminUsersRoute = require('./server/routes/adminuser.route');
const applicationRoute = require('./server/routes/application.route');
const superAdminRoute = require('./server/routes/superadmin.route');

// Setting up port with express js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'dist/admin-portal')));
// app.use('/', express.static(path.join(__dirname, 'dist/admin-portal')));

// session set up
app.use(session({
   secret: 'AdminPortal',
   resave: false,
   saveUninitialized: true
}));

app.use('/api/role', roleRoute)
app.use('/api/adminuser', adminUsersRoute)
app.use('/api/application', applicationRoute);
app.use('/api', superAdminRoute);

// Catch all other routes and return the index file
app.get('*', function(req, res) {
   res.sendFile(path.join(__dirname, 'dist/admin-portal/index.html'));
});

// Create port
const port = process.env.PORT || 4200;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});