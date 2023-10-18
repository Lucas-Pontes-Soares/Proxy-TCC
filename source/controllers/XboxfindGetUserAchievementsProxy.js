const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

module.exports = XboxfindGetUserAchievementsProxy = async(req, res) => {
    console.log(req.headers.limit)
    try {
        let dados = await fetch(`${process.env.URLBackend}/xbox/findGetUserAchievements/${req.params.loginId}`, {
            method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
        }) 
        dados = await dados.json()
        res.json({success: true, message: dados.message});
    } catch (error) {
        console.log("erro " + error)
    }
}