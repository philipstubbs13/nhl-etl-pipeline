const express = require('express')
const router = express.Router()
const { getPlayers, downloadPlayerCsv } = require('../controllers/playerController')

router.route('/').get(getPlayers);
router.route('/:id/download').get(downloadPlayerCsv);

module.exports = router