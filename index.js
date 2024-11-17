let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let countHome = 0
let countGuest = 0

scoreHome.textContent = 0
scoreGuest.textContent = 0

function add1Home(score) {
    countHome += 1
    score.textContent = countHome
}

function add2Home(score) {
    countHome += 2
    score.textContent = countHome
}

function add3Home(score) {
    countHome += 3
    score.textContent = countHome
}



function add1Guest(score) {
    countGuest += 1
    score.textContent = countGuest
}

function add2Guest(score) {
    countGuest += 2
    score.textContent = countGuest
}

function add3Guest(score) {
    countGuest += 3
    score.textContent = countGuest
}

let restartBtn = document.getElementById("restart-btn")
let totalHome = document.getElementById("score-total-home")
let totalGuest = document.getElementById("score-total-guest")
let totalHomeCount = 0
let totalGuestCount = 0

totalHome.textContent = 0
totalGuest.textContent = 0

function restart() {
    if (scoreHome.textContent > scoreGuest.textContent) {
        totalHomeCount += 1
        totalHome.textContent = totalHomeCount
    } else if (scoreHome.textContent < scoreGuest.textContent) {
        totalGuestCount += 1
        totalGuest.textContent = totalGuestCount
    }
    count = 0
    scoreHome.textContent = count
    scoreGuest.textContent = count
}