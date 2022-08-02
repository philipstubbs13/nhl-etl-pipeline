const express = require('express')
const router = express.Router()
const { downloadPlayerCsv, getPlayer } = require('../controllers/playerController')

router.route('/:id').get(getPlayer);
router.route('/:id/download').get(downloadPlayerCsv);

module.exports = router