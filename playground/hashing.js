const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');


var data = {
    id: 20
};

var token = jwt.sign(data, '123abc');
var decoded = jwt.verify(token, '123abc')
console.log(token, decoded);


/////////////////////////////////////////////////////////////////////////////////////////////////
// var message = 'I am user no 3';

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Message: ${hash}`);

// var data = {
//     id: 4
// }

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'aSecretString').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'aSecretString').toString();
// if (token.hash === resultHash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was chnaged!');
// }