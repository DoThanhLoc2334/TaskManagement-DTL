const express = require('express')
const router = express.Router({ mergeParams: true })

const listController = require('../controllers/list.controller')
router.post('/', listController.createList)
router.get('/', listController.getListsByBoard)
router.get('/:listId', listController.getListById)
module.exports = router