const questions = [
    {
        question: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_uJaBu-kwf2g6JDfVnHQPCyFm-jFs12eQw&s",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 0,
        correctAnswerImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZNrRfZ3f_1HM0ysJY0U_bwG1exjYFQT399_d8LQTiPCpDYNOZZ0H6nnZ0MA57PfBI25E&usqp=CAU"
    },
    {
        question: "https://i.ytimg.com/vi/Svv8adsRCY0/hqdefault.jpg",
        answers: ["Charmander", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 0,
        correctAnswerImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODCA1AzibzgMKAoV9CLIPI76pMQO_MWvHuA&s"
    },
    {
        question: "https://preview.redd.it/whos-that-pokemon-its-charizard-v0-ovw7glsr22w81.jpg?width=640&crop=smart&auto=webp&s=85e23d813432d03ef63dcc7ee680b30c46fef9f4",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 1,
        correctAnswerImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlQKFvQPGyphZ0RX5JskuURS8cJKKtNLl4UQ&s"
    },
    {
        question: "https://i.ytimg.com/vi/-EyeGROXZmo/maxresdefault.jpg",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 3,
        correctAnswerImg:"https://preview.redd.it/ctea5owccxt11.jpg?width=640&crop=smart&auto=webp&s=25d54531c6400beadced9e3a3831db6908e75826"
    },
    {
        question: "https://i.ytimg.com/vi/JtM4p0phtio/maxresdefault.jpg",
        answers: ["Pikachu", "Charlizard","Bulbasaur","Venusaur"],
        correctAnswer: 0,
        correctAnswerImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjJuWeY5_2YEmUt4cRrVKCRCVR_L35JO4n_A&s"
    }
];
const questionContainer = document.getElementById('question-container');
// Carrega perguntas na página
function loadQuestions() {
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.id = `question-${index}`;
        div.innerHTML = `<img src="${q.question}" alt="">`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}">${answer}
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
            selectedAnswer.parentElement.style.color = 'green';
            selectedAnswer.parentElement.innerHTML += "<span>Correct Answer</span>"
        }
        else{
            // let img = document.createElement('img');
            let span = document.createElement('span');
            span.classList.toggle('showAnswer');
            span.id = index;
            span.innerHTML = "Show";
            // img.src = q.correctAnswerImg;
            // document.getElementById(`question-${index}`).appendChild(img);
            selectedAnswer.parentElement.style.color = 'red';
            selectedAnswer.parentElement.appendChild(span);
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
    document.getElementById('respostasErradas').style.display = 'block';
}


questionContainer.addEventListener('click',showAnswer);

function showAnswer(e){
    if(e.target.tagName == "SPAN"){
        let img = document.createElement('img');
        img.src = questions[parseInt(e.target.id)].correctAnswerImg;
        e.target.parentElement.appendChild(img)
    }
}

window.onload = loadQuestions;