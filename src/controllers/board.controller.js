const boardService = require('../services/board.service')
const createBoard = (req, res) => {
    try {
        const {title} = req.body
        const newBoard = boardService.createBoard(title)
        res.status(201).json({
            success: true,
            data: newBoard
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getBoards = (req, res) => {
    try {
        const boards = boardService.getBoards()
        res.status(201).json({
            success: true,
            data: boards
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const getBoardById = (req, res) => {
    try {
        const { boardId } = req.params
        const board = boardService.getBoardById(boardId)
        res.status(200).json({
            success: true,
            data: board
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        })
    }
}

const updateBoard = (req, res) => {
    try {
        const {boardId} = req.params
        const {title} = req.body
        const board = boardService.updateBoard(boardId, title)
        res.status(200).json({
            success: true,
            data: board
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const closeBoard = (req, res) => {
    try {
        const {boardId} = req.params
        const board = boardService.closeBoard(boardId)
        res.status(200).json({
            success: true,
            data: board
        })
    } catch (error) {
        
    }
}

module.exports = {
    getBoards,
    createBoard,
    getBoardById,
    updateBoard,
    closeBoard
}