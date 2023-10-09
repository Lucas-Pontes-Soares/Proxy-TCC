const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

module.exports = PSgetUserProfilesProxy = async(req, res) => {
    try {
        let dados = await fetch(`${process.env.URLBackend}/ps/findGetUserProfiles/${req.params.userName}`, {
            method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
        }) 
        dados = await dados.json()
        res.json({success: true, message: dados});
    } catch (error) {
        console.log("erro " + error)
    }
}