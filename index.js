var questionsArr = [
    {
        question: 'What is the first name of both the mother and daughter duo on the show Gilmore Girls?',
        answer: 'Lorelai',
        options: [
            'Mary',
            'Lane',
            'Lorelai',
            'Paris',
        ]
    },
    {
        question: 'What was the name of the prep school Rory attended?',
        answer: 'Chilton',
        options: [
            'Chilton',
            'Franklin',
            'Roosevelt',
            'Chaucer',
        ]
    },
    {
        question: 'What is the name of their family dog?',
        answer: 'Paul Anka',
        options: [
            'Paul Anka',
            'Sebastian Bark',
            'Bob Dylan',
            'Lisa Frank',
        ]
    },
    {
        question: 'What is the name of the restaurant that Luke owns?',
        answer: 'Lukes Diner',
        options: [
            'Williams Diner',
            'Lukes Diner',
            'Stars Hollow Burgers',
            'The Stars Hollow Diner',
        ]
    },
    {
        question: 'What US state is the fictional town of Stars Hollow supposed to be located in?',
        answer: 'Connecticut',
        options: [
            'New Hampshire',
            'Vermont',
            'Connecticut',
            'New York',
        ]
    },
    {
        question: 'Which of the following was NOT a bofriend of Rory?',
        answer: 'Zack',
        options: [
            'Dean',
            'Zack',
            'Logan',
            'Jess',
        ]
    }
]

var quiz = document.getElementById('quiz');
var quizBtn = document.createElement('button');
var btnText = document.createTextNode('Start Quiz');
quizBtn.appendChild(btnText);
quizBtn.setAttribute('id', 'start-quiz');
quiz.appendChild(quizBtn);

