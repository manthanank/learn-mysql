const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router;
