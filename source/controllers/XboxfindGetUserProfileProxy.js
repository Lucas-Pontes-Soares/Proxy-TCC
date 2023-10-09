const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

module.exports = XboxfindGetUserProfileProxy = async(req, res) => {
    try {
        let dados = await fetch(`${process.env.URLBackend}/xbox/findGetUserProfile/${req.params.loginId}`, {
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