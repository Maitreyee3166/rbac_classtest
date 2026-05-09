const express = require('express');


const router = express.Router();


const AuthApi = require('./auth.route');
const UserApi = require('./user.route');
const TaskApi = require('./task.route');



// Auth Api

router.use('/api/auth', AuthApi);


// user api

router.use('/api/users', UserApi);


// task api

router.use('/api/tasks', TaskApi);




module.exports = router;