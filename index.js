let homeNum = document.getElementById("home-num")
console.log(homeNum)

let home = 0

function Score1() {
    home += 1
    homeNum.textContent = home
    console.log(home)
}

function Score2() {
    home += 2
    homeNum.textContent = home
    console.log(home)
}

function Score3() {
    home += 3
    homeNum.textContent = home
    console.log(home)
}

let guestNum = document.getElementById("guest-num")
console.log(guestNum)

let guest = 0

function Gscore1() {
    guest += 1
    guestNum.textContent = guest
}

function Gscore2() {
    guest += 2
    guestNum.textContent = guest
}

function Gscore3() {
    guest += 3
    guestNum.textContent = guest
}
