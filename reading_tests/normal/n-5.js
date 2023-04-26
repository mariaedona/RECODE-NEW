//for quiz
const quizData = [
    {
        question: "Q1. What is the primary cause of the IT skills shortage?",
        a: "Lack of job opportunities",
        b: "Inadequate compensation",
        c: "Rapid technological change",
        d: "Poor education system",
        correct: "c",
        explanation: "Correct Answer: C \nThe IT industry is facing a skills shortage due to the rapid pace of technological change, which has outpaced the ability of the education system to keep up. This means that there is a gap between the skills that employers need and the skills that job seekers possess.",
    },
    {
        question: "Q2. What can governments and organizations do to address the skills shortage?",
        a: "Invest in education and training programs",
        b: "Focus on remote work",
        c: "Increase salaries and benefits",
        d: "Only hire experienced professionals",
        correct: "a",
        explanation: "Correct Answer: A\nOne solution to the skills shortage is for governments and organizations to invest in education and training programs. This can include formal education, such as computer science degrees, as well as more informal training opportunities, such as coding bootcamps.",
    },
    {
        question: "Q3. How can organizations tap into a broader talent pool?",
        a: "By creating exclusive workplaces",
        b: "By relying on a narrow pool of candidates",
        c: "By focusing on diversity and inclusion",
        d: "By only hiring local candidates",
        correct: "c",
        explanation: "Correct Answer: B\nOrganizations can tap into a broader talent pool by focusing on diversity and inclusion. This means actively recruiting candidates from underrepresented groups and creating inclusive workplaces where everyone can thrive.",
    },
    {
        question: "Q4. What is upskilling and reskilling?",
        a: "Providing job opportunities to experienced professionals",
        b: "Hiring new employees with the exact skills needed",
        c: "Investing in education and training programs for existing employees",
        d: "Focusing on diversity and inclusion",
        correct: "c",
        explanation: "Correct Answer: C\nUpskilling and reskilling involve providing training opportunities and professional development programs to help existing employees acquire new skills and keep up with the latest technological trends.",
    },
    {
        question: "Q5. How can remote work help address the skills shortage?",
        a: "By limiting the talent pool to local candidates",
        b: "By making it harder for employees to collaborate and communicate",
        c: "By expanding the talent pool beyond local candidates",
        d: "By reducing productivity and efficiency",
        correct: "c",
        explanation: "Correct Answer: C\nRemote work can help address the skills shortage by expanding the talent pool beyond local candidates. Organizations can tap into candidates from around the world and fill open positions more quickly.",
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
    
    
    
    
    