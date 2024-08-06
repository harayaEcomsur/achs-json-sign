const jwt = require('jsonwebtoken');

const secretKey = 'achs2024.'; // clave segura

function signJson(jsonObj) {
    return jwt.sign(jsonObj, secretKey);
}

function verifyToken(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
}

module.exports = { signJson, verifyToken };
