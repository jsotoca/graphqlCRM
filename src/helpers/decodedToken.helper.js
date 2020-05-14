const {verify} = require('jsonwebtoken');
const {TOKEN_SECRET} =require('../config');

module.exports = function(token){
    return verify(token,TOKEN_SECRET);
}