const express = require('express')
const app = express()
const router = express.Router();

//steam
const findGetPlayerSummariesProxy = require('../controllers/findGetPlayerSummariesProxy');
const findGetPlayerGamesProxy = require('../controllers/findGetPlayerGamesProxy')

//playstation
const PSfindGetUserTitlesProxy = require('../controllers/PSfindGetUserTitlesProxy')
const PSgetUserProfilesProxy = require('../controllers/PSgetUserProfilesProxy')

//xbox
const XboxauthUpdateProxy = require('../controllers/XboxauthUpdateProxy')
const XboxfindGetUserProfileProxy = require('../controllers/XboxfindGetUserProfileProxy')
const XboxfindGetUserAchievementsProxy = require('../controllers/XboxfindGetUserAchievementsProxy')

//steam
router.get('/steam/findGetPlayerSummariesProxy/UserId/:UserId', findGetPlayerSummariesProxy)
router.get('/steam/findGetPlayerGamesProxy/UserId/:UserId/:page', findGetPlayerGamesProxy)

//playstation
router.get('/ps/findGetUserTitlesProxy/:userName', PSfindGetUserTitlesProxy)
router.get('/ps/findGetUserProfilesProxy/:userName', PSgetUserProfilesProxy)

//xbox
router.get('/xbox/authUpdateProxy/:loginId', XboxauthUpdateProxy)
router.get('/xbox/findGetUserProfileProxy/:loginId', XboxfindGetUserProfileProxy)
router.get('/xbox/findGetUserAchievementsProxy/:loginId', XboxfindGetUserAchievementsProxy)

module.exports = router;