const asyncHandler = require('express-async-handler')


const getTeams = asyncHandler(async (req, res) => {
    res.status(200).json({ teams: [] })
})

module.exports = {
    getTeams
}