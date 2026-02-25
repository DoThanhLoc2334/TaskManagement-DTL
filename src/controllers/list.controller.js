let lists = []
let currentList = 1

const createList = (req, res) => {
    const { boardId } = req.params
    const { title } = req.body

    if (!title) {
        return res.status(401).json({
            success: false,
            message: "Title is required"
        })
    }

    const newList = {
        id: currentId++,
        title,
        boardId: Number(boardId),
        position: lists.length + 1,
        createAt: new Date()
    }
    lists.push(newList)

    res.status(201).json({
        success: true,
        data: newList
    })

    const getListsByBoard = (req, res) => {
        const { boardId } = req.params
        const boardLists = lists.filter(
            list => list.boardId === Number(boardId)
        )

        res.status(200).json({
            success: true,
            data: boardLists
        })
    }
}
module.exports = {
    createList,
    getListsByBoard
}