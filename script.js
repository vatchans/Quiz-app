const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let quiz=document.getElementById('quiz')

let question=document.getElementById("questionheading")

let optionlist=document.querySelectorAll('.optionlist')

let aoption=document.getElementById('aoption');
let boption=document.getElementById('boption');
let coption=document.getElementById('coption');
let doption=document.getElementById('doption');

let submit=document.getElementById('btn');

let score=0;
let currentquizcount=0;

function loadquiz(){
    deSelect()
   // console.log(currentquizdata)
    let currentquizdata=quizData[currentquizcount];
    question.innerText=currentquizdata.question;
    aoption.innerText=currentquizdata.a;
    boption.innerText=currentquizdata.b;
    coption.innerText=currentquizdata.c;
    doption.innerText=currentquizdata.d;
}
function deSelect() {
    optionlist.forEach(element => element.checked = false)
    
}

function getSelect() {
    let answer;
    optionlist.forEach(element => {

        if (element.checked) {
            answer = element.id;
            // console.log(answer)
            
        }
        
        // console.log(answer)
    })
    return answer;
}

submit.addEventListener('click', function () {
    let answer = getSelect();
    // let answer;
    console.log(answer)
    console.log(quizData)
    console.log(quizData[currentquizcount].correct)
    
    
        if (answer === quizData[currentquizcount].correct) {
            score++;
        }
        currentquizcount++;
        if (currentquizcount < quizData.length) {
            loadquiz();
        }
        else {
            quiz.innerHTML = `
                <h2>You have scored ${score}/${quizData.length}</h1>
                <button class="btn" type="button"id="c" onclick='location.reload()'>Reload</button>
              
                `
        document.body.style.backgroundImage="url('https://i.ibb.co/frqqx3S/glitterimg.jpg')"
        quiz.style.backgroundColor="transparent"
        quiz.style.border="none"
        var c=document.getElementById('c');
        c.style.backgroundColor="green"
        }

})
loadquiz();

console.log(currentquizcount)
