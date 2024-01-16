const axios = require('axios').default;
const config = require('../config/index');
let TOKEN = null;

exports.authenticate = async () => {
    try {
        if (TOKEN) {
            return TOKEN;
        }

        const response = await axios.post(`${config.lookerURL}/login`, null, {
            params: {
                client_id: config.lookerClientId,
                client_secret: config.lookerSecreteKey
            }
        });

        if (response.status === 200) {
            const token = response.data.access_token || null;
            console.log('Access Token:', token);
            TOKEN = token; // Cache the token for reuse
            return token;
        } else {
            TOKEN = null;
            throw new Error(`Authentication failed with status code: ${response.status}`);
        }
    } catch (error) {
        console.error('Error during authentication:', error.message);
        TOKEN = null;
        throw error;
    }
}