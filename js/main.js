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








