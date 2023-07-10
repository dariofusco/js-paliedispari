document.getElementById("send").addEventListener("click", function () {

    const selectNumber = document.getElementById("select-number").value
    console.log(selectNumber)
    const selectResults = document.getElementById("select-results").value

    randomNumber()
    console.log(number)

    let sum = parseInt(number) + parseInt(selectNumber)

    console.log(sum)

    if (sum % 2 == 0) {
        console.log("pari")
        let results = "pari"
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





