const express = require('express')
const router = express.Router()
const { getTeams } = require('../controllers/teamController')

router.route('/').get(getTeams);
// router.route('/:id').get(getTeam);

module.exports = router