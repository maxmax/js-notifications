require('dotenv').config({ path: '.env' });

module.exports = {
    mongoURI: process.env.MONGODB_URI,
    privateKey: process.env.PRIVATE_VAPID_KEY,
    publicKey: process.env.PUBLIC_VAPID_KEY
}
