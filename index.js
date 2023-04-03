let homeScore = 0;
let guestScore = 0;
let homePointsText = document.querySelector('.home .points-text');
let guestPointsText = document.querySelector('.guest .points-text');

function addPoints1(team) {
    if (team === "home") {
        homeScore += 1;
        homePointsText.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 1;
        guestPointsText.textContent = guestScore;
    }
}

function addPoints2(team) {
    if (team === "home") {
        homeScore += 2;
        homePointsText.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 2;
        guestPointsText.textContent = guestScore;
    }
}

function addPoints3(team) {
    if (team === "home") {
        homeScore += 3;
        homePointsText.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += 3;
        guestPointsText.textContent = guestScore;
    }
}

function clearScore(team) {
    if (team === 'home') {
        homeScore = 0;
        homePointsText.textContent = 0;
    } else if (team === 'guest') {
        guestScore = 0;
        guestPointsText.textContent = 0;
    }
}
