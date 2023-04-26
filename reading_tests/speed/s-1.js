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
    }
}

//Quiz
const quizData = [
    {
        question: "Q1. How many steps do you need to create personal blog?",
        a: "Five",
        b: "Six",
        c: "Seven",
        d: "Eight",
        correct: "d",
    },
    {
        question: "Q2. What are the most two popular blogging platforms?",
        a: "Blogger.com and Blogdetik.com",
        b: "Joomla.com and Wordpress.com",
        c: "Wordpress.com and Blogger.com",
        d: "Blogdetik.com and Joomla.com",
        correct: "C",
    },
    {
        question: "Q3. What do you do after preparing a personal computer/laptop and turn it on?",
        a: "Install the modem into the computer",
        b: "Open browser software in the computer",
        c: "Select your domain, theme and others options",
        d: "Register for an account and create your blog",
        correct: "a",
    },
    {
        question: "Q4. What do you do after opening a browser software based on the text?",
        a: "Select your domain",
        b: "Register for an account",
        c: "Choose a free blogging platform",
        d: "Start blogging",
        correct: "c",
    },
    {
        question: "Q5. What are the important things you need to create personal blog ?",
        a: "Personal Computer/Laptop",
        b: "Internet Connection and Modem",
        c: "Blogging Platform ",
        d: "All of the Above",
        correct: "d",
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
        const expl = document.getElementById("explanation");
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
            expl.style.visibility = 'hidden'
            expl.innerText = currentQuizData.explanation;
        }; 
    
        const showExpl = () => {
            expl.style.visibility = 'visible'
            expl.innerText = currentQuizData.explanation;
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
            showExpl();
            }
            }
        );
            
        nextButton.addEventListener("click", () => {
            if (currentQuiz < quizData.length) loadQuiz(); 
            else if (score >= 3) {
                quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Great Job! <br> <img src="pictures/5-3.png" class="great"> </h2> <button id="submit" class="submit">Home</button>
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
                quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Better luck Next time! <br> <img src="pictures/2-1.png" class="good"> </h2> <button id="submit" class="submit"><a href="../../index.html">Home</a></button>
    
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
    
    
    
    
    