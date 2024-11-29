let playerXP = 0;
let currentLevel = 0;
const totalLevels = 50;
let timeLeft = 15;
let timer;

const questions = {}; // سيتم تحميل الأسئلة من ملف JSON

function loadQuestions() {
    fetch('questions.json')
        .then((response) => response.json())
        .then((data) => {
            questions.levels = data.levels;
        });
}

function playSound(type) {
    const audio = new Audio(`assets/${type}.mp3`);
    audio.play();
}

function saveProgress() {
    localStorage.setItem("playerXP", playerXP);
    localStorage.setItem("currentLevel", currentLevel);
}

function loadProgress() {
    const savedXP = localStorage.getItem("playerXP");
    const savedLevel = localStorage.getItem("currentLevel");
    if (savedXP) playerXP = parseInt(savedXP, 10);
    if (savedLevel) currentLevel = parseInt(savedLevel, 10);
}

// شاشات التفاعل
document.getElementById("start-game").addEventListener("click", () => {
    document.getElementById("main-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    startGame();
});
