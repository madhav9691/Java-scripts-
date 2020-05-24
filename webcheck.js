let userEmail = 'LCO123'
let password = 'lcosahi1234'

let userChecker = function(myString){
if ((myString.includes(123))&&(myString.length >= 6)){
    return true
}
return false
}
let passChecker = function(pass){
    if ((pass.includes(1234))&&(pass.length >= 8)){
        return true
    }
    return false
    }   

console.log(passChecker(password));

