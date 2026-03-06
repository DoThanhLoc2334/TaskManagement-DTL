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

const getBoardById = (req, res) => {
    const{boardId} = req.params
    const board = boards.find(
        board => board.id === Number(boardId)
    )

    if(!board){
        return res.status(404).json({
            success: false,
            message: "Board not found"
        })
    }

    res.status(200).json({
        success: true,
        data: board
    })
}

const updateBoard = (req, res) => {
    const {boardId} = req.params
    const{title} = req.body

    const board = boards.find(
        board => board.id === Number(boardId)
    )

    if(!board){
        res.status(404).json({
            success: false,
            message: "Board not found"
        })
    }
    if(!title)
    {
        res.status(404).json({
            success: false,
            message: "Title is requires"
        })
    }

    board.title = title;

    res.status(200).json({
        success: true,
        data: board
    })
}
module.exports = {
    createBoard,
    getBoards,
    getBoardById,
    updateBoard
}