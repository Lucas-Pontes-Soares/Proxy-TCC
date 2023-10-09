const express = require('express')
const app = express()
const router = express.Router();

const findGetPlayerSummariesProxy = require('../controllers/findGetPlayerSummariesProxy');
const findGetPlayerGamesProxy = require('../controllers/findGetPlayerGamesProxy')

router.get('/steam/findGetPlayerSummariesProxy/UserId/:UserId/steamId/:steamId', findGetPlayerSummariesProxy)
router.get('/steam/findGetPlayerGamesProxy/UserId/:UserId/:page', findGetPlayerGamesProxy)

module.exports = router;