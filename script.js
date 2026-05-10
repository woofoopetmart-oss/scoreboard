let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')
function Render() {
    homeScoreEl.textContent = homeScore < 10 ? '0' + homeScore : homeScore
    
    guestScoreEl.textContent = guestScore < 10 ? '0' + guestScore : guestScore
}
function homeAdd1() {
    homeScore += 1
    Render()
}
function homeAdd2() {
    homeScore += 2
    Render()
}
function homeAdd3() {
    homeScore += 3
    Render()
}
function guestAdd1() {
    guestScore += 1
    Render()
}
function guestAdd2() {
    guestScore += 2
    Render()
}
function guestAdd3() {
    guestScore += 3
    Render()
}
Render()
