const quizData = [
    {
        question: "Qual é a tradução de 'apple'?",
        options: ["Banana", "Maçã", "Laranja", "Uva"],
        correct: 1
    },
    {
        question: "Qual é o plural de 'child'?",
        options: ["Childs", "Children", "Childes", "Childer"],
        correct: 1
    },
    {
        question: "Qual é o verbo no passado de 'go'?",
        options: ["Goed", "Go", "Went", "Gone"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.innerHTML = '';

    currentQuiz.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.style.cursor = 'pointer';
        li.addEventListener('click', () => selectOption(index));
        optionsEl.appendChild(li);
    });
}

function selectOption(selected) {
    const correct = quizData[currentQuestion].correct;
    if (selected === correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
    optionsEl.style.display = 'none';
    nextBtn.style.display = 'none';
}

loadQuestion();