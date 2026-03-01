const { lists, cards } = require('../data/data.store')
let currentCardId = 1
const createCard = (req, res) => {
    const { listId } = req.params
    const { title } = req.body

    const listExists = lists.find(
        list => list.id === Number(listId)
    )
    if (!listExists) {
        return res.status(404).json({
            success: false,
            message: "List not found"
        })
    }

    if (!title) {
        return res.status(400).json({
            sucess: false,
            message: "Title is required"
        })
    }

    const newCard = {
        id: currentCardId++,
        title,
        listId: Number(listId),
        position: cards.filter(card => card.listId === Number(listId)).length + 1,
        createAt: new Date()
    }
    cards.push(newCard)
    return res.status(201).json({
        success: true,
        data: newCard
    })
}

const getCardsByList = (req, res) => {
    const { listId } = req.params

    const listExists = lists.find(
        list => list.id === Number(listId)
    )
    if (!listExists) {
        return res.status(404).json({
            success: false,
            message: "List not found"
        })
    }
    const listCards = cards.filter(
        card => card.listId === Number(listId)
    )
    return res.status(200).json({
        success: true,
        data: listCards
    })
}

module.exports = {
    createCard,
    getCardsByList
}