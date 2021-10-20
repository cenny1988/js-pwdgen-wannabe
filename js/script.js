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
let number = 21;
let password = `${yourName}${yourSurname}${yourFavoriteColor}${number}`
document.getElementById("my_box").innerHTML = 
`La password assegnata &egrave;:
 ${password}
 `
 
