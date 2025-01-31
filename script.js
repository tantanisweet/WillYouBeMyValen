document.getElementById('heart').onclick = function() {
    const heart = document.getElementById('heart');
    const cardAndGif = document.getElementById('card-and-gif');

    if (cardAndGif.classList.contains('hidden')) {
        heart.style.top = '120%';
        cardAndGif.classList.remove('hidden');
        setTimeout(() => {
            cardAndGif.style.top = '50%';
            cardAndGif.classList.add('visible');
        }, 500);
    } else {
        heart.style.top = '50%';
        cardAndGif.style.top = '120%';
        cardAndGif.classList.remove('visible');
        setTimeout(() => {
            cardAndGif.classList.add('hidden');
        }, 1000);
    }
};

document.getElementById('yesBtn').onclick = function() {
    const confettiContainer = document.getElementById('confetti');
    const additionalCard = document.getElementById('additional-card');
    confettiContainer.classList.remove('hidden');
    additionalCard.classList.remove('hidden');

    for (let i = 0; i < 100; i++) {
        createConfettiPiece();
    }

    setTimeout(() => {
        additionalCard.classList.add('visible');
    }, 500);
};

document.getElementById('noBtn').onclick = function() {
    moveButton();
};

document.getElementById('okBtn').onclick = function() {
    const heart = document.getElementById('heart');
    const cardAndGif = document.getElementById('card-and-gif');
    const additionalCard = document.getElementById('additional-card');
    const confettiContainer = document.getElementById('confetti');

    heart.style.top = '50%';
    cardAndGif.style.top = '120%';
    cardAndGif.classList.remove('visible');
    setTimeout(() => {
        cardAndGif.classList.add('hidden');
    }, 1000);

    additionalCard.classList.remove('visible');
    setTimeout(() => {
        additionalCard.classList.add('hidden');
    }, 500);

    confettiContainer.classList.add('hidden');
};

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function createConfettiPiece() {
    const confettiContainer = document.getElementById('confetti');
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.backgroundColor = getRandomColor();
    confettiPiece.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confettiContainer.appendChild(confettiPiece);

    setTimeout(() => {
        confettiPiece.remove();
    }, 5000);
}

function getRandomColor() {
    const colors = ["#ff6f91", "#ff9aa2", "#ffb3c1", "#ffc7d1"];
    return colors[Math.floor(Math.random() * colors.length)];
}