const quizData = [
    {
        question: "what is the most used programming language in 2022?",
        a: "javascript",
        b: "python",
        c: "c",
        d: "c++",
        correct: "a",

    },
    {
        question: "How oid is florin?",
        a: "10",
        b: "15",
        c: "30",
        d: "16",
        correct: "c",

    },
    {
        question: "who is the prime misnister of india?",
        a: "amit shah",
        b: "narendra modi",
        c: "rahul gandhi",
        d: "abdul kalam",
        correct: "b",
    },
    {
        question: "when is javasvript launched",
        a: "1995",
        b: "1997",
        c: "2002",
        d: "1899",
        correct: "b",
    },
    {
        question: "HTML stands for?",
        a: "Hyper Text Markup Language",
        b: "Cascading Style Sheet",
        c: "Hyper Text Transfer Protocol",
        d: "Jason Object Notation",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.getElementsByName("answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

const a_val = document.getElementById("a");
const b_val = document.getElementById("b");
const c_val = document.getElementById("c");
const d_val = document.getElementById("d");

let currentQuiz = 0;
let score = 0;
let currentQuizData = quizData[currentQuiz];

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    a_val.value = currentQuizData.a;

    b_text.innerText = currentQuizData.b;
    b_val.value = currentQuizData.b;

    c_text.innerText = currentQuizData.c;
    c_val.value = currentQuizData.c;

    d_text.innerText = currentQuizData.d;
    d_val.value = currentQuizData.d;


}

function getSelected() {
    let answer = undefined;
    answerEls.forEach(element => {
        if (element.checked) {
            answer = element.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    //check to see the answer
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        console.log(score)
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly
            at ${score}/${quizData.length} questions.</h2>`;
        }
    }
});
