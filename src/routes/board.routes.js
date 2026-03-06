const express = require('express');
const router = express.Router();
const boardController = require('../controllers/board.controller');
const listRoutes = require('./list.routes')
router.use('/:boardId/lists', listRoutes)
router.post('/', boardController.createBoard);
router.get('/', boardController.getBoards);
router.get('/:boardId', boardController.getBoardById);
router.put('/:boardId', boardController.updateBoard);
module.exports = router;