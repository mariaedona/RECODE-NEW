//Quiz Timer
const startingMinutes = 0;

let time = startingMinutes + 60;

const countdownEl = document.getElementById('timer');

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds:seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
    if (time < 0){
        clearInterval(updateCountdown);
        countdownEl.innerHTML = "0:00";
        if (score >= 3) {
            quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Great Job! <br> <img src="pictures/5-3.png" class="great"> </h2> <button id="submit" class="submit"><a href="../../index.html">Home</a></button>
        <style> 
        .ending {
            background: #fff;
            border-style: groove;
            text-align: center;
            padding: 5px;
            margin-bottom: 10px;
        }
        .great { 
            height: auto;
            width: 200px;
        }
        .submit{
            background-color: #8266ff;
            color: #fff;
            border: none;
            display: block;
            width: 100px;
            cursor: pointer;
            text-decoration: none;
            font-size: 1.1rem;
            font-family: inherit;
            padding: 10px;
            border-radius: 5px;
        }
        </style>`
        } else {
            quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Better luck Next time! <br> <img src="pictures/2-1.png" class="good"> </h2> <button id="submit" class="submit">Home</button>

        <style> 
        .ending {
            background: #fff;
            border-style: groove;
            text-align: center;
            padding: 5px;
            margin-bottom: 10px;
        }
        .good {
            height: auto;
            width: 200px;
        }
        .submit{
            background-color: #8266ff;
            color: #fff;
            border: none;
            display: block;
            width: 100px;
            cursor: pointer;
            text-decoration: none;
            font-size: 1.1rem;
            font-family: inherit;
            padding: 10px;
            border-radius: 5px;
        }
        </style>`
        }
    }
}

//Quiz
const quizData = [
    {
        question: "Q1. What was the nineteenth-century optical toy that featured a picture disk held by two strings?",
        a: "Thaumatrope",
        b: "Phantom Troupe",
        c: "Tropethauma",
        d: "Taumatrope",
        correct: "a",
    },
    {
        question: "Q2. The Phenakistoscope is also known as the?",
        a: "Fantacape",
        b: "Fantascope",
        c: "Fantascope",
        d: "Fantascape",
        correct: "b",
    },
    {
        question: "Q3. Which of the following succeeded the zoetrope in 1877 by replacing the latter's narrow vertical slits with an inner circle of angled mirrors instead.",
        a: "praxinoscupe",
        b: "praxinoscape",
        c: "praxiscope",
        d: "praxinoscope",
        correct: "d",
    },
    {
        question: "Q4. Which of the statements is true?",
        a: "The camera was an image projection device developed in 1603.",
        b: "The magic lantern was an image projection device developed in 1603.",
        c: "The magic lantern was used by people to see in the dark when they can’t see anything.",
        d: "None of the Above.",
        correct: "b",
    },
    {
        question: "Q5. What does CGI mean?",
        a: "Computer graphic International",
        b: "Counter ghoul incorporated",
        c: "Computer generated imagery",
        d: "Computer government image",
        correct: "c",
    },
    ];

//Quiz Computation
        const quiz = document.getElementById("quiz");
        const answerElements = document.querySelectorAll(".answer");
        const questionElement = document.getElementById("qst");
        const a_text = document.getElementById("a_text");
        const b_text = document.getElementById("b_text");
        const c_text = document.getElementById("c_text");
        const d_text = document.getElementById("d_text");
        const submitButton = document.getElementById("submit");
        const nextButton = document.getElementById("next");
        let currentQuiz = 0;
        let score = 0;
        const deselectAnswers = () => {
            answerElements.forEach((answer) => (answer.checked = false));
        };
        const getSelected = () => {
            let answer;
            answerElements.forEach((answerElement) => {
                if (answerElement.checked) answer = answerElement.id;
            });
            return answer;
        };
        const loadQuiz = () => {
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];
        questionElement.innerText = currentQuizData.question;
            a_text.innerText = currentQuizData.a;
            b_text.innerText = currentQuizData.b;
            c_text.innerText = currentQuizData.c;
            d_text.innerText = currentQuizData.d;
        }; 
        
        loadQuiz();
        nextButton.style.visibility = 'hidden';
        submitButton.addEventListener("click", () => {
            const answer = getSelected();
            if (answer) {
            if (answer === quizData[currentQuiz].correct) score++;
            currentQuiz++;
            submitButton.style.visibility = 'hidden'
            nextButton.style.visibility = 'visible'
            }
            }
        );
            
        nextButton.addEventListener("click", () => {
            if (currentQuiz < quizData.length) loadQuiz(); 
            else if (score >= 3) {
                quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Great Job! <br> <img src="pictures/5-3.png" class="great"> </h2>
            <style> 
            .ending {
                background: #fff;
                border-style: groove;
                text-align: center;
                padding: 5px;
                margin-bottom: 10px;
            }
            .great { 
                height: auto;
                width: 200px;
            }
            .submit{
                background-color: #8266ff;
                color: #fff;
                border: none;
                display: block;
                width: 100px;
                cursor: pointer;
                text-decoration: none;
                font-size: 1.1rem;
                font-family: inherit;
                padding: 10px;
                border-radius: 5px;
            }
            </style>`
            } else {
                quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Better luck Next time! <br> <img src="pictures/2-1.png" class="good"> </h2> 
    
            <style> 
            .ending {
                background: #fff;
                border-style: groove;
                text-align: center;
                padding: 5px;
                margin-bottom: 10px;
            }
            .good {
                height: auto;
                width: 200px;
            }
            .submit{
                background-color: #8266ff;
                color: #fff;
                border: none;
                display: block;
                width: 100px;
                cursor: pointer;
                text-decoration: none;
                font-size: 1.1rem;
                font-family: inherit;
                padding: 10px;
                border-radius: 5px;
            }
            </style>`
            }
            submitButton.style.visibility = 'visible'
            nextButton.style.visibility = 'hidden'
        });
    
    
    
    
    