//for quiz
const quizData = [
    {
        question: "Q1. Why is computer useful for digital systems?",
        a: "Because computers use internet connection to access the internet",
        b: "Because computers use digits to represent information that’s why they’re called digital system",
        c: "Because computers use electricity to run",
        d: "Because computer is a device that accepts information and manipulates it for some result based on a program, software, or sequence of instructions on how the data is to be processed.",
        correct: "b",
        explanation: "Correct Answer: B \nIt is stated in Paragraph 1 that Computers today use digits to represent information that's why they're called digital systems.",
    },
    {
        question: "Q2. On computer networks, the bits are communicated by?",
        a: "Data, Wi-Fi or Data",
        b: "Wave, Wind or Fog",
        c: "Light, voltages or sound",
        d: "None of the Above",
        correct: "C",
        explanation: "Correct Answer: C\nIt is stated in Paragraph 3 that computer networks the bits are communicated by light, voltages or sound",
    },
    {
        question: "Q3. What is usually stored in a memory cell inside a computer?",
        a: "Bug",
        b: "Bit",
        c: "Bag",
        d: "Bet",
        correct: "b",
        explanation: "Correct Answer: B\nIn Paragraph 2, It says that a bit is usually stored in a memory cell inside a computer.",
    },
    {
        question: "Q4. What is the simplest and most common way to represent digits? ",
        a: "System",
        b: "Computer System",
        c: "Digital System",
        d: "Binary Number System",
        correct: "d",
        explanation: "Correct Answer: D\nIt is stated in Paragraph 1 that the simplest and most common way to represent digits is the binary number system.",
    },
    {
        question: "Q5. What are simple machines and they need very exact instructions to make them do complex tasks?",
        a: "Cumpoters",
        b: "Cemputers",
        c: "Computers",
        d: "Camputers",
        correct: "c",
        explanation: "Correct Answer: C\nIn Paragraph 4, It says that Computers are simple machines, and they need very exact instructions to make them do complex tasks.",
    },
    ];
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
                quiz.innerHTML = `<h2 class="ending">You answered ${score}/${quizData.length} questions correctly, Great Job! <br> <img src="pictures/5-3.png" class="great"> </h2>
            <style> 
            .ending {
                background: #fff;
                border-style: groove;
                text-align: center;
                padding: 5px;
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
    
    
    
    
    