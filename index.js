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

//Current score
var currentScore = 0
var scoreEl = document.createElement('p');

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
    quiz.removeChild(quizBtn);
    // quizBtn.style.display = 'none'

    //Create Score Variable
    var currentScore = 0

    //The current question
    var currentQ = 0;

    displayQuestion(currentQ)

    function displayQuestion(currentQ) {

        if(currentQ < questionsArr.length){

            //******* Create Question P and Answer Buttons *******/
                //Question P
                var quizQuestion = document.createElement('p');
                var questionText = document.createTextNode(questionsArr[currentQ].question);
                quizQuestion.appendChild(questionText);
                quiz.appendChild(quizQuestion);
        
                //Button Div
                var optionsDiv = document.createElement('div');
                quiz.appendChild(optionsDiv);
        
                // //Buttons Under Div
                for(var i = 0; i < questionsArr[currentQ].options.length; i++){
                    var oBtn = document.createElement('button');
                    oBtn.textContent = questionsArr[currentQ].options[i];
                    optionsDiv.appendChild(oBtn);
                }
        
                //Update Current Question 
                currentQ ++
        

                //******Timer *****/
                    //Timer Element
                    var timerEl = document.createElement('p');
                    var timerText = document.createTextNode('30');
                    timerEl.appendChild(timerText)
                    quiz.appendChild(timerEl);
                    
                    //Counts down Timer
                    var intervalId = setInterval(function(){
                        timerEl.textContent = Number(timerEl.textContent) - 1

                        //Clear interval
                        if(timerEl.textContent === '0'){
                        clearInterval(intervalId)
                        quiz.removeChild(quizQuestion)
                        quiz.removeChild(optionsDiv)
                        quiz.removeChild(timerEl)
                        

                        //Show next question
                        displayQuestion(currentQ)
                        }

                    }, 1000)

                //******END OF QUESTION *****/
                    //******BUTTON CLICK END *****/
                    optionsDiv.onclick = function(g){
                    //Check if answer is correct
                    if(g.target.textContent == questionsArr[currentQ - 1].answer){
                        currentScore ++
                        console.log(currentScore)
                    }
                    
                    //Remove previous question
                    quiz.removeChild(quizQuestion)
                    quiz.removeChild(optionsDiv)
                    quiz.removeChild(timerEl)

                    //Show next question
                    displayQuestion(currentQ)

                    //End timer
                    clearInterval(intervalId)
                    }
        }else{
            //*********END OF QUIZ*******/
                //Calculate Score//
                currentScore = Math.round((currentScore/questionsArr.length) * 100)

                //Display Previous Score//
                // var scoreEl = document.createElement('p');
                var scoreText = document.createTextNode(currentScore +'%');
                scoreEl.appendChild(scoreText)
                quiz.appendChild(scoreEl)

                //Display Start Quiz Button//
                var quizBtn = document.createElement('button');
                var btnText = document.createTextNode('Start Quiz!');
                quizBtn.appendChild(btnText);
                quizBtn.setAttribute('id', 'start-quiz');
                quiz.appendChild(quizBtn);
                // quizBtn.style.display = 'block'
                
            
        }
    }
}

