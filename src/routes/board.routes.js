const express = require('express');
const router = express.Router();

const boardController = require('../controllers/board.controller');
const listRoutes = require('./list.routes')
router.use('/:boardId/lists', listRoutes)

router.post('/', boardController.createBoard);
router.get('/', boardController.getBoards);
router.get('/:boardId', boardController.getBoardById);
router.put('/:boardId', boardController.updateBoard);
router.delete('/:boardId', boardController.closeBoard)
module.exports = router;