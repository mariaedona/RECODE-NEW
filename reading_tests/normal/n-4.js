//for quiz
const quizData = [
    {
        question: "Q1. Which of the following statement is false?",
        a: "A metal machine was found on the seabed in Greece that was more than 2,000 years old.",
        b: "The first computer game was produced in 1962 C.E.",
        c: "People have been using types of computers thousands of years.",
        d: "One such model was so large that it needed a room that was 176 square meters to accommodate it.",
        correct: "d",
        explanation: "Correct Answer: D \nIn the paragraph 2, It says that one such model was so large that it needed a room that was 167 square meters to accommodate it. Which makes this statement false.",
    },
    {
        question: "Q2. Where was the oldest computer found?",
        a: "Seabed in Greece",
        b: "Seabed in Greenland",
        c: "Seabed in Philippines",
        d: "Seabed in Japan",
        correct: "A",
        explanation: "Correct Answer: A\nIt is stated in first paragraph, It says a metal machine was found on the seabed in Greece that was more than 2,000 years old.",
    },
    {
        question: "Q3. The World Wide Web is developed by the British scientist named?",
        a: "Timber Lake",
        b: "Timber Lake",
        c: "Tim Berners Guy",
        d: "Timba Berners Lee",
        correct: "b",
        explanation: "Correct Answer: B\nIt is stated in paragraph 4, It says that in 1990 CE, the British scientist Tim Berners Lee developed the World Wide Web.",
    },
    {
        question: "Q4. How old is the world's oldest computer?",
        a: "4000 years old",
        b: "3000 years old",
        c: "2000 years old",
        d: "None of the Above",
        correct: "c",
        explanation: "Correct Answer: C\nIn the first paragraph, it says a metal machine was found on the seabed in Greece that was more than 2,000 years old. It is believed that this was the first ever computer.",
    },
    {
        question: "Q5. What was the invention that allowed people to use computers at home?",
        a: "Personal Computer",
        b: "Laptop",
        c: "Phone",
        d: "Floppy Disk",
        correct: "a",
        explanation: "Correct Answer: A\nIt is stated in paragraph 3, It says that the first PC (personal computer) was produced in 1974 CE, so people could buy computers to use at home.",
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
    
    
    
    
    