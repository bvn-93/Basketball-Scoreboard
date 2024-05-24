let homePoints = 0
let guestPoints = 0


let homescore = document.getElementById("home-score")
let guestscore = document.getElementById("guest-score")

// home score
function addonePoint() {
    homePoints += 1
    homescore.textContent = homePoints
}

function addtwoPoints() {
    homePoints += 2
    homescore.textContent = homePoints
}

function addthreePoints() {
    homePoints += 3
    homescore.textContent = homePoints
}

// guest score

function addonepoinGuest(){
    guestPoints += 1
    guestscore.textContent = guestPoints
}

function addtwopointsGuest() {
    guestPoints += 2
    guestscore.textContent = guestPoints
}

function addthreepointsGuest() {
    guestPoints += 3
    guestscore.textContent = guestPoints
}


