// game.js
const questions = [
    {
        question: "ما هو اختراع الهاتف؟",
        answers: ["ألكسندر جراهام بيل", "توماس إديسون", "ماري كوري", "إسحاق نيوتن"],
        correct: 0
    },
    {
        question: "في أي سنة تم إرسال الإنسان الأول إلى الفضاء؟",
        answers: ["1961", "1975", "1980", "1955"],
        correct: 0
    }
];

let currentQuestion = 0;

const questionElement = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer');

function loadQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answerButtons.forEach((button, index) => {
        button.textContent = current.answers[index];
        button.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selected) {
    const current = questions[currentQuestion];
    if (selected === current.correct) {
        alert("إجابة صحيحة!");
    } else {
        alert("إجابة خاطئة!");
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("لقد أكملت اللعبة!");
    }
}

loadQuestion();
