const STORE = {
    questions: [
        {
            title: 'What is my name?',
            answers: ['Mario', 'Travis'],
        },

        {
            title: 'What is my location?',
            answers: ['Brazil', 'USA'],
        },

        {
            title: 'What is my location?',
            answers: ['Brazil', 'USA'],
        },

        {
            title: 'What is my location?',
            answers: ['Brazil', 'USA'],
        },

        {
            title: 'What is my location?',
            answers: ['Brazil', 'USA'],
        },
    ],

    score: 0,
    currentQuestion: 0,
    view: 'landing',
}

function startQuiz() {
    STORE.view = 'question';
    renderQuiz();
}



function answerQuestion() {
    STORE.view = 'feedback';
}

function correctAnswer(){

}

function currentScore(){

}

function

function nextQuestion() {
    if (STORE.questions.length > STORE.currentQuestion) {
        STORE.view = 'question';
    }
    else {
        STORE.view = 'results';
    }
}

function renderQuiz() {
    $('.mainSection').hide();
    $('.' + STORE.view).show();
}

function listenEvents() {

}


$(listenEvents)