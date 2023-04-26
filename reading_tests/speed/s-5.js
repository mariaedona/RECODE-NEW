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
        question: "Q1. What is the primary cause of the IT skills shortage?",
        a: "Lack of job opportunities",
        b: "Inadequate compensation",
        c: "Rapid technological change",
        d: "Poor education system",
        correct: "c",
    },
    {
        question: "Q2. What can governments and organizations do to address the skills shortage?",
        a: "Invest in education and training programs",
        b: "Focus on remote work",
        c: "Increase salaries and benefits",
        d: "Only hire experienced professionals",
        correct: "a",
    },
    {
        question: "Q3. How can organizations tap into a broader talent pool?",
        a: "By creating exclusive workplaces",
        b: "By relying on a narrow pool of candidates",
        c: "By focusing on diversity and inclusion",
        d: "By only hiring local candidates",
        correct: "c",
    },
    {
        question: "Q4. What is upskilling and reskilling?",
        a: "Providing job opportunities to experienced professionals",
        b: "Hiring new employees with the exact skills needed",
        c: "Investing in education and training programs for existing employees",
        d: "Focusing on diversity and inclusion",
        correct: "c",
    },
    {
        question: "Q5. How can remote work help address the skills shortage?",
        a: "By limiting the talent pool to local candidates",
        b: "By making it harder for employees to collaborate and communicate",
        c: "By expanding the talent pool beyond local candidates",
        d: "By reducing productivity and efficiency",
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
    
    
    
    
    