const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

module.exports = findGetPlayerGamesProxy = async(req, res) => {
    try {
        let dados = await fetch(`${process.env.URLBackend}/steam/findGetPlayerGames/Userid/${req.params.UserId}/${req.params.page}`, {
            method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
        }) 
        dados = await dados.json()
        res.json({success: false, message: dados});
    } catch (error) {
        console.log("erro " + error)
    }

}