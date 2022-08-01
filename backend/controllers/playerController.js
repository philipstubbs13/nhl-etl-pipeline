const asyncHandler = require('express-async-handler')


const getPlayers = asyncHandler(async (req, res) => {
    res.status(200).json({ players: [] })
})

module.exports = {
    getPlayers
}