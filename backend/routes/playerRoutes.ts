import express from 'express';
import { downloadPlayerCsv, getPlayer } from '../controllers/playerController';

const router = express.Router()

router.route('/:id').get(getPlayer);
router.route('/:id/download').get(downloadPlayerCsv);

module.exports = router