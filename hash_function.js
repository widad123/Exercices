
var RIPEMD160 = require("crypto-js/ripemd160");
var SHA256 = require("crypto-js/sha256");

//clé publique aléatoirement
function genererPublicKey(nombre) {
    return Math.ceil(nombre*Math.random(0,32767)%17);
}

let publicKey=genererPublicKey(30);

//fonction de hashage

function adresseBitcoin(publicKey) {
    return RIPEMD160(SHA256(publicKey))  ;
}

console.log(adresseBitcoin(publicKey));

