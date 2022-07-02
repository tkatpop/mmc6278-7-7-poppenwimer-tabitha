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

//Start Button
var quiz = document.getElementById('quiz');
var quizBtn = document.createElement('button');
var btnText = document.createTextNode('Start Quiz!');
quizBtn.appendChild(btnText);
quizBtn.setAttribute('id', 'start-quiz');
quiz.appendChild(quizBtn);

//Start Button Clicked
quizBtn.onclick = function(e){

    //Remove Start Button

    //Create Score Variable
    var currentScore = 0

    //*******Run through all questions *******/



    //******* Create Question P and Answer Buttons *******/
        //Question P
        var quizQuestion = document.createElement('p');
        var questionText = document.createTextNode(questionsArr[0].question);
        quizQuestion.appendChild(questionText);
        quiz.appendChild(quizQuestion);

        //Button Div
        var optionsDiv = document.createElement('div');
        quiz.appendChild(optionsDiv);

        // //Buttons Under Div
        for(var i = 0; i < questionsArr[0].options.length; i++){
            var oBtn = document.createElement('button');
            oBtn.textContent = questionsArr[0].options[i];
            optionsDiv.appendChild(oBtn);
        }

    //Timer//
    var timerEl = document.createElement('p');
    var timerText = document.createTextNode('30');
    timerEl.appendChild(timerText)
    quiz.appendChild(timerEl);
    
    var intervalId = setInterval(function(){
        timerEl.textContent = Number(timerEl.textContent) - 1
        if(timerEl.textContent === '0'){
            clearInterval(intervalId)
        }
    }, 1000)


    //Onclick Options Button
    optionsDiv.onclick = function(g){
        //How to extract text from button
        if(g.target.textContent == questionsArr[0].answer){
            currentScore ++
        }

    }
}

