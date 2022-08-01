const express = require('express')
const router = express.Router()
const { getPlayers } = require('../controllers/playerController')

router.route('/').get(getPlayers);
// router.route('/:id').get(getTeam);

module.exports = router