//for quiz
const quizData = [
    {
        question: "Q1. Which of the following is a common data privacy issue that individuals and organizations face?",
        a: "Lack of cybersecurity threats",
        b: "Data transparency",
        c: "Data breaches",
        d: "Strong data protection laws",
        correct: "c",
        explanation: "Correct Answer: C\nData breaches occur when unauthorized parties gain access to confidential information, either by hacking into computer systems or stealing physical data storage devices. Data breaches can result in the loss of personal information, including names, addresses, Social Security numbers, and financial information.",
    },
    {
        question: "Q2. What is one way to protect sensitive information from cyber threats?",
        a: "Using weak passwords",
        b: "Not encrypting data",
        c: "Implementing encryption",
        d: "Sharing information on social media",
        correct: "C",
        explanation: "Correct Answer: C\nEncryption can be used to secure sensitive information, making it difficult for unauthorized parties to access or steal.",
    },
    {
        question: "Q3. How can individuals and organizations comply with data protection laws?",
        a: "By ignoring the laws and regulations",
        b: "By seeking advice from cybercriminals",
        c: "By regularly updating software and firmware",
        d: "By complying with all relevant data protection laws and regulations",
        correct: "d",
        explanation: "Correct Answer: D\nIndividuals and organizations should comply with all relevant data protection laws and regulations to ensure that personal and sensitive information is protected.",
    },
    {
        question: "Q4. Individuals and organizations should comply with all relevant data protection laws and regulations to ensure that personal and sensitive information is protected.",
        a: "Regularly updating security measures",
        b: "Implementing encryption",
        c: "Ignoring data protection laws and regulations",
        d: "Educating employees and staff",
        correct: "c",
        explanation: "Correct Answer: c\nIgnoring data protection laws and regulations is not a solution for addressing data privacy issues and can actually make data privacy issues worse.",
    },
    {
        question: "Q5. What is a virtual private network (VPN)?",
        a: "A tool for sharing personal and sensitive information",
        b: "A tool for accessing public Wi-Fi networks",
        c: "A tool for anonymous browsing",
        d: "A tool for ignoring data protection laws and regulations",
        correct: "c",
        explanation: "Correct Answer: C\nVirtual private networks (VPNs) can be used to protect online activity from prying eyes and provide anonymous browsing capabilities.",
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
    
    
    
    
    