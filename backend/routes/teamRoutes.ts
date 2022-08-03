import express from 'express';
import { getTeams, getTeam, downloadTeamCsv } from '../controllers/teamController'

const router = express.Router()

router.route('/').get(getTeams);
router.route('/:id').get(getTeam);
router.route('/:id/download').get(downloadTeamCsv);

export default router;