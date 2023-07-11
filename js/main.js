/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

document.getElementById("send").addEventListener("click", function () {

    const selectNumber = document.getElementById("select-number").value
    console.log(selectNumber)
    const selectResults = document.getElementById("select-results").value

    randomNumber()
    console.log(number)

    let sum = parseInt(number) + parseInt(selectNumber)

    console.log(sum)

    let results = ""

    if (sum % 2 == 0) {
        console.log("pari")
        results = "pari"
    } else {
        console.log("dispari")
        results = "dispari"
    }

    console.log(results)
    console.log(selectResults)

    if (selectResults === results) {
        console.log("Hai vinto!")
        document.getElementById("show-results").innerHTML = "Hai vinto!"
    } else {
        console.log("Hai perso!")
        document.getElementById("show-results").innerHTML = "Hai perso!"
    }
});

function randomNumber() {
    number = Math.round(Math.random() * 4) + 1;
    return number
}

/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (una parola 
che si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto). */

document.getElementById("check").addEventListener("click", function () {
    const letterArray = []
    const wordToCheck = document.getElementById("word-to-check").value
    console.log(wordToCheck)

    for (i = wordToCheck.length - 1; i >= 0; i--) {
        const singleLetter = wordToCheck[i]
        console.log(singleLetter)
        letterArray.push(singleLetter)
    }

    const reverseWord = letterArray.join("")
    console.log(reverseWord)

    if (wordToCheck === reverseWord) {
        console.log("si")
        document.getElementById("answer").innerHTML = "Si!"
    } else {
        console.log("no")
        document.getElementById("answer").innerHTML = "No!"
    }

});








