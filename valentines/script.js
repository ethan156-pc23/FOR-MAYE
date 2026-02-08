const envelopeContainer = document.getElementById('envelope-container');
const letterContainer = document.getElementById('letter-container');
const letterWindow = document.querySelector('.letter-window');

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const title = document.getElementById('letter-title');
const catImg = document.getElementById('letter-cat');
const buttonsContainer = document.getElementById('letter-buttons');
const finalText = document.getElementById('final-text');

// 1. Open Envelope Logic
envelopeContainer.addEventListener('click', () => {
    envelopeContainer.style.display = 'none';
    letterContainer.style.display = 'flex';
    
    // Slight delay to allow display:flex to register before animating
    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);
});

let yesScale = 1;

// 2. No Button - Growth Logic
noBtn.addEventListener('click', () => {
    yesScale += 0.35; // Grow significantly each time
    yesBtn.style.transform = `scale(${yesScale})`;
});

// 3. Yes Button - Success Logic
yesBtn.addEventListener('click', () => {
    title.textContent = "I LOVE YOU MAYE <3";
    
    // Switch to the celebratory gif
    catImg.src = "cat yipee.gif"; 
    
    // Reveal final details
    buttonsContainer.style.display = "none";
    finalText.style.display = "block";
});