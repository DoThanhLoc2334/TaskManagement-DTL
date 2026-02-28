const { boards, lists } = require('../data/data.store')
let currentListId = 1

const createList = (req, res) => {
    const { boardId } = req.params
    const { title } = req.body
    const boardExits = boards.find(
        board => board.id === Number(boardId)
    )
    if (!boardExits) {
        return res.status(404).json({
            success: false,
            message: "Board not found"
        })
    }
    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        })
    }

    const newList = {
        id: currentListId++,
        title,
        boardId: Number(boardId),
        position: lists.length + 1,
        createdAt: new Date()
    }

    lists.push(newList)

    res.status(201).json({
        success: true,
        data: newList
    })
}

const getListsByBoard = (req, res) => {
    const { boardId } = req.params
    const boardExits = boards.find(
        board => board.id === Number(boardId)
    )
    if (!boardExits) {
        return res.status(404).json({
            success: false,
            message: "Board not found"
        })
    }
    const boardLists = lists.filter(
        list => list.boardId === Number(boardId)
    )

    res.status(200).json({
        success: true,
        data: boardLists
    })
}

module.exports = {
    createList,
    getListsByBoard
}