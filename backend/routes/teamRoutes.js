const express = require('express')
const router = express.Router()
const { getTeams, getTeam, downloadTeamCsv } = require('../controllers/teamController')

router.route('/').get(getTeams);
router.route('/:id').get(getTeam);
router.route('/:id/download').get(downloadTeamCsv);

module.exports = router