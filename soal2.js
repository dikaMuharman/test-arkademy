function validUsername(username) {
    return (/^([a-z]|\.){8}$/.test(username));
}
function validEmail(email){
    return (/^([a-zA-Z0-9]){4,}(?=.+[\.@])/.test(email));
}
console.log(validUsername('dikaMuha'));
console.log(validUsername('dika.mkl'));
console.log(validEmail('aku@aku.com'));
console.log(validEmail('kamu@aku.com'));