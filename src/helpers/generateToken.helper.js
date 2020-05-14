const {sign} = require('jsonwebtoken');
const {TOKEN_SECRET} = require('../config');

module.exports = function(_id){
    return sign({_id},TOKEN_SECRET,{expiresIn:'4h'});
}