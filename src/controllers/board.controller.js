const { boards } = require('../data/data.store')
let currentID = 1;
const createBoard = (req, res) => {
    const { title } = req.body
    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        })
    }
    const newBoard = {
        id: currentID++,
        title,
        createBoard: new Date()
    }

    boards.push(newBoard);
    res.status(201).json({
        success: true,
        data: newBoard
    })
}

const getBoards = (req, res) => {
    res.status(200).json({
        success: true,
        data: boards
    })
}

module.exports = {
    createBoard,
    getBoards
}