require('dotenv').config({ path: '.env' });

module.exports = {
    mongoURI: 'mongodb://localhost/js-notifications',
    privateKey: process.env.PRIVATE_VAPID_KEY,
    publicKey: process.env.PUBLIC_VAPID_KEY
}
