const express = require('express')
const router = express.Router()
const { createCard, getCardsByList } = require('../controllers/card.controller')
router.post('/lists/:listId/cards', createCard)
router.get('/lists/:listId/cards', getCardsByList)

module.exports = router