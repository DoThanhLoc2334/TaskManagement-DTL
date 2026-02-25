const express = require('express')
const router = express.Router({ mergeParams: true })

const listController = require('../controllers/list.controller')
router.post('/', listController.createList)
router.get('/', listController.getListsByBoard)
module.exports = router