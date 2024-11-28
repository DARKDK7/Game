// Get Elements
const startGameBtn = document.getElementById('start-game');
const storeBtn = document.getElementById('store-btn');
const settingsBtn = document.getElementById('settings-btn');
const backButtons = document.querySelectorAll('.back-btn');

// Pages
const mainMenu = document.getElementById('main-menu');
const store = document.getElementById('store');
const settings = document.getElementById('settings');

// Show and Hide Pages
function showPage(pageToShow) {
    mainMenu.classList.add('hidden');
    store.classList.add('hidden');
    settings.classList.add('hidden');
    pageToShow.classList.remove('hidden');
}

// Button Events
startGameBtn.addEventListener('click', () => {
    alert('Game Starting!');
});

storeBtn.addEventListener('click', () => showPage(store));
settingsBtn.addEventListener('click', () => showPage(settings));

// Back Buttons Logic
backButtons.forEach(button => {
    button.addEventListener('click', () => showPage(mainMenu));
});
