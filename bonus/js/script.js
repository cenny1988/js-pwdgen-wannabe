// sercizio di oggi: (insicurissimo) password generator
// nome repo: js-pwdgen-wannabe


// Chiedi all’utente il suo nome
let yourName = prompt("Please enter your name")

// poi chiedi il suo cognome
let yourSurname = prompt("Please enter your surname")

// poi chiedi il suo colore preferito
let yourFavoriteColor = prompt("Please enter your favorite color now")

// Debug in console per output
console.log(yourName)
console.log(yourSurname)
console.log(yourFavoriteColor)

// Infine scrivi sulla pagina 
//“La password assegnata è: 
// nomecognomecolorepreferito21"
document.getElementById("my_box").innerHTML = 
`La password assegnata &egrave;:
 ${yourName}${yourSurname}${yourFavoriteColor}21
 `

//  Debug password lowercase in console
let password = `${yourName}${yourSurname}${yourFavoriteColor}`;
console.log(password.toLowerCase());

// questa è solo una prova 
document.getElementById("my_newbox").innerHTML = 
`La password assegnata tutta in minuscolo &egrave;:
 ${yourName.toLowerCase()}${yourSurname.toLowerCase()}${yourFavoriteColor.toLowerCase()}21;
 `

// questa è un'altra prova 
 document.getElementById("my_finalbox").innerHTML = 
`La password assegnata tutta in minuscolo &egrave;:
 ${password.toLowerCase()}21;
 `
 

