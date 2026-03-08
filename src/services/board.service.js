const {boards} = require('../data/data.store')
let currentBoardId = 1

const createBoard = (title) => {
    if (!title) {
        throw new Error("Title is required")
    }
    const newBoard = {
        id: currentBoardId++,
        title,
        createAt: new Date()
    }
    
    boards.push(newBoard)
    return newBoard
}

const getBoards = () => {
    return boards
}

const getBoardById = (boardId) => {
    const board = boards.find(
        board => board.id === Number(boardId)
    )
    if (!board) {
        throw new Error("Board not found")
    }
    return board
}

const updateBoard = (boardId, title) => {
    const board = boards.find(
        board => board.id === Number(boardId)
    )
    if(!board)
    {
        throw new Error("Title is requird")
    }
    board.title = title
    
    return board
}

const closeBoard = (boardId) => {
    const board = boards.find(
        board => board.id === Number(boardId)
    )

    if(!board)
    {
        throw new Error("Board not found")
    }

    board.closed = true
    return board
}

module.exports = {
    createBoard,
    getBoardById,
    getBoards,
    updateBoard,
    closeBoard
}