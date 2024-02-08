const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Routes
router.get('/users', usersController.getAll);
router.post('/users', usersController.create);
router.put('/users/:id', usersController.update);
router.delete('/users/:id', usersController.delete);

module.exports = router;
