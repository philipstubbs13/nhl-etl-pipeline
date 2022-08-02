const express = require('express')
const router = express.Router()
const { getPlayers, downloadPlayerCsv, getPlayer } = require('../controllers/playerController')

router.route('/').get(getPlayers);
router.route('/:id').get(getPlayer);
router.route('/:id/download').get(downloadPlayerCsv);

module.exports = router