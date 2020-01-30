
function cesarCrypt(word,k) {
    let cryptedWord="";
    for (const lettre in word) {
        nb=word.charCodeAt(lettre)-65;
     //   console.log(nb);
        nbKey=nb+k;
      //  console.log(nbKey);
        lettreCrypted=String.fromCharCode(nbKey+65);
     //   console.log(lettreCrypted);
        cryptedWord+=lettreCrypted;
    }
    return cryptedWord;
}




let test=cesarCrypt('abcd',2);
console.log(test);

