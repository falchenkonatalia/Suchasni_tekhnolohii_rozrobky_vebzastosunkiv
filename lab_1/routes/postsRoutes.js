
const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/', postsController.getPosts);
router.get('/:id', postsController.getPost);
router.post('/create', postsController.createPost);

module.exports = router;
