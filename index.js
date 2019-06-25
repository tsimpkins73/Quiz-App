const STORE = {
    questions: [
        {
            title: `Whose catchphrase is 'It's clobberin'' time?`,
            choices: ['Thing', 'Venom', 'Hulk', 'Dr. Strange'],
            answer: 'Thing'
        },

        {
            title: `Which of These Villians was a member of the original Sinister Six?`,
            choices: ['Scorpion', 'Magneto', 'Sentry', 'Galactus'],
            answer: 'Scorpion'
        },

        {   title: `Which antihero is known as the 'Merc with a Mouth'?`,
            choices: ['Molecule Man', 'Deadpool', 'Captain America', 'Dum Dum Dugan'],
            answer: 'Deadpool'
        },

        {
            title: `What metal alloy is bonded to Wolverine's skeleton?`,
            choices: ['Tin', 'Adamantium', 'Vibranium', 'Unobtanium'],
            answer: 'Adamantium'
        },

        {
            title: `Black Panther hails from what fictional African nation?`,
            choices: ['Wakanada', 'Asgard', 'Wakanda', 'Vormir'],
            answer: 'Wakanda'
        },

        {
            title: `Norrin Radd is better known by what superhero name?`,
            choices: ['Silver Surfer', 'Winter Soldier', 'Kraven the Hunter', 'Captain America'],
            answer: 'Silver Surfer'
        },

        {
            title: `Nick Fury is a leading agent for what espionage agency?`,
            choices: ['CIA', 'SHIELD', 'UN', 'KGB'],
            answer: 'SHIELD'
        },

        {
            title: `Dormammu is primarily an enemy of which Marvel hero?`,
            choices: ['Spider-Man', 'Dr. Strange', 'Nick Fury', 'Cable'],
            answer: 'Dr. Strange'
        },

        {
            title: `What kind of radiation turned Bruce Banner into the Hulk?`,
            choices: ['Microwaves', 'Gamma Rays', 'Cosmic', 'Vita-Rays'],
            answer: 'Gamma Rays'
        },
        {
            title: `Who portrayed Gamora in 2014's Guardians of the Galaxy?`,
            choices: ['Scarlett Johanson', 'Zoe Saldana', 'Robert Downey Jr.', 'Zendaya'],
            answer: 'Gamma Rays'
        },
    ],

    score: 0,
    currentQuestion: 0,
    }

const score_count_Bar = `<div class="score">Your Score: ${currentScore}</div>
<div class="questionNumber">Question ${questionNumber} of ${STORE.questions.length}</div>`

function startQuizButton() {
    $(".landing").submit(function (event) {
        event.preventDefault();
        console.log("startQuizButton is Running");
        $(this).closest('section').toggleClass("landing");
        $(this).closest('section').toggleClass("question");
        renderQuestion(0);
      });
}

function answerButton() {
    $("#question").submit(function (event) {
        event.preventDefault();
        const question = STORE.questions[currentQuestion];
        const answer = $("input[name='answer']:checked").val();
        console.log("Question Button is Running");
        if (answer === question.answer) {
            correctChoice();
        }
        else {
            incorrectFeedback();
        }
      });
}


function correctChoice(){
    correctAnswerScore();
    correctAnswerFeedback();
}

function currentScore(){

}

function renderQuestion(i){
    console.log("Render Question is Running");
var currentQuestion= STORE.questions[i];
var questionNumber = i + 1;
var currentScore = STORE.score/STORE.questions.length;
$(`.question`).html(`${score_count_Bar}
<h1 id="HeaderText">Quiz Question ${questionNumber}</h1>            
<br>
    <form class="question">${currentQuestion.title}<br>
        <br>
        <input type="radio" name="answer" value="${currentQuestion.choices[0]}" checked>${currentQuestion.choices[1]}<br>
        <br>
        <input type="radio" name="answer" value="${currentQuestion.choices[1]}">${currentQuestion.choices[1]}<br>
        <br>
        <input type="radio" name="answer" value="${currentQuestion.choices[2]}">${currentQuestion.choices[2]}<br>
        <br>
        <input type="radio" name="answer" value="${currentQuestion.choices[3]}">${currentQuestion.choices[3]}<br>
        <br>
        <button type="submit" name="Submit Answer" value="Submit Answer">SUBMIT ANSWER</button>
        <br>`
);
}

function correctAnswerScore(){
    ++STORE.score;
}

function correctAnswerFeedback(){
    $(`.question`).html(`${score_count_Bar}
    <h1 id="HeaderText">Correct!</h1>            
    <br>
    <p class="question">Great answer, True Believer! Prepare for the next question!`);
    <button type="submit" name="Next Question" value="Next Question">NEXT QUESTION</button>
}

function nextQuestionButton() {
    $("#question").submit(function (event) {
        event.preventDefault();
        STORE.currentQuestion++;
    if (STORE.questions.length > STORE.currentQuestion) {
        renderQuestion(STORE.currentQuestion);
    }
    else {
        renderResults();
    }
});
}

function renderResults(){
    
}

function renderQuiz() {
    ;
    $('.' + STORE.view).show();
}

function listenEvents() {
    startQuizButton();
    nextQuestionButton();

}

$(listenEvents);
