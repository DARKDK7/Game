// Get Elements
const startGameBtn = document.getElementById('start-game');
const storeBtn = document.getElementById('store-btn');
const settingsBtn = document.getElementById('settings-btn');
const backButtons = document.querySelectorAll('.back-btn');
const applyCodeBtn = document.getElementById('apply-code-btn');
const codeInput = document.getElementById('code-input');
const codeMessage = document.getElementById('code-message');

// Pages
const mainMenu = document.getElementById('main-menu');
const store = document.getElementById('store');
const settings = document.getElementById('settings');

// Example values for coins and points (replace with actual game data)
let playerCoins = 200;
let playerPoints = 300;

// Show and Hide Pages
function showPage(pageToShow) {
    mainMenu.classList.add('hidden');
    store.classList.add('hidden');
    settings.classList.add('hidden');
    pageToShow.classList.remove('hidden');
}

// Button Events
startGameBtn.addEventListener('click', () => {
    alert('Game Starting!'); // Replace with actual game logic
});

storeBtn.addEventListener('click', () => showPage(store));
settingsBtn.addEventListener('click', () => showPage(settings));

// Back Buttons Logic
backButtons.forEach(button => {
    button.addEventListener('click', () => showPage(mainMenu));
});

// Code Input Logic
applyCodeBtn.addEventListener('click', () => {
    const enteredCode = codeInput.value.trim();
    
    // Check if the entered code is valid
    if (enteredCode === 'DARK77') {
        // Apply the code and give infinite coins and points
        playerCoins = Infinity; // Set to infinite coins
        playerPoints = Infinity; // Set to infinite points

        codeMessage.textContent = 'Code applied successfully! You now have infinite coins and points!';
        codeMessage.style.color = 'green';
    } else {
        codeMessage.textContent = 'Invalid code. Please try again.';
        codeMessage.style.color = 'red';
    }
});
