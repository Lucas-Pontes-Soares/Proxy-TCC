const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

module.exports = findGetPlayerSummariesProxy = async(req, res) => {
    const steamId = req.params.steamId

    try {
        let dados = await fetch(`${process.env.URLBackend}/steam/findGetPlayerSummaries/UserId/${steamId}/`, {
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