const express = require('express')
const listController = require('../controllers/list.controller')
router.post('/', listController, createList)
router.get('/', listController, getListsByBoard)
module.exports = router