const questions = [
    {
        question: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_uJaBu-kwf2g6JDfVnHQPCyFm-jFs12eQw&s",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 0
    },
    {
        question: "https://i.ytimg.com/vi/Svv8adsRCY0/hqdefault.jpg",
        answers: ["Charmander", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 0
        
    },
    {
        question: "https://preview.redd.it/whos-that-pokemon-its-charizard-v0-ovw7glsr22w81.jpg?width=640&crop=smart&auto=webp&s=85e23d813432d03ef63dcc7ee680b30c46fef9f4",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 1
    },
    {
        question: "https://i.ytimg.com/vi/-EyeGROXZmo/maxresdefault.jpg",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 3
    },
    {
        question: "https://i.ytimg.com/vi/JtM4p0phtio/maxresdefault.jpg",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 2
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${q.question}" alt="">`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;