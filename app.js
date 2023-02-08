const questions = [
    {
        question: "What is the capital of France?",
        answers: [
          "Paris",
          "London",
          "Rome",
          "Berlin"
        ],
        correctAnswer: "Paris"
      },
      {
        question: "What is the largest ocean in the world?",
        answers: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Arctic Ocean",
          "Pacific Ocean"
        ],
        correctAnswer: "Pacific Ocean"
      },
      {
        question: "Who is the most handsome person in the world?",
        answers: [
          "Zayn Malik",
          "Shah Rukh Khan",
          "James Bond",
          "Rupesh Khadka"
        ],
        correctAnswer: "Rupesh Khadka"
      },
      {
        question: "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
        answers: [
          "Sound",
          "Remote control",
          "Color balance",
          "High voltage"
        ],
        correctAnswer: "High voltage"
      },
      {
        question: "What country has the highest life expectancy? ",
        answers: [
          "Hong Kong",
          "Swizerland",
          "Nepal",
          "Finland"
        ],
        correctAnswer: "Hong Kong"
      },
      {
        question: "What is the most common surname in the United States?",
        answers: [
          "Peterson",
          "James",
          "Smith",
          "Johnson"
        ],
        correctAnswer: "Smith"
      },
      {
        question: "What year was the United Nations established?",
        answers: [
          "1988",
          "1944",
          "1976",
          "1945"
        ],
        correctAnswer: "1945"
      },
      {
        question: " What is part of a database that holds only one type of information?",
        answers: [
          "Report",
          "Record",
          "File",
          "Field"
        ],
        correctAnswer: "Field"
      },
      {
        question: " In which decade with the first transatlantic radio broadcast occur?",
        answers: [
          "1850s",
          "1860s",
          "1870s",
          "1900s"
        ],
        correctAnswer: "Field"
      },
      {
        question: " 'OS' computer abbreviation usually means ?",
        answers: [
          "Order of Significance",
          "Open Software",
          "Operating System",
          "Optical Sensor"
        ],
        correctAnswer: "Operating System"
      },
      {
        question: "  '.MOV' extension refers usually to what kind of file?",
        answers: [
          "Image file",
          "Animation/movie file",
          "Audio file",
          "MS Office document"
        ],
        correctAnswer: "Animation/movie file"
      },
      {
        question: " In which decade was the SPICE simulator introduced ?",
        answers: [
          "1950s",
          "1960s",
          "1970s",
          "1980s"
        ],
        correctAnswer: "1970s"
      },
]

let presentQuestion = 0

let presentScore = 0

let question = document.querySelector('#question')
question.textContent = questions[presentQuestion].question

for(let i=0; i<4; i++){

  document.querySelector('#option-'+ i ).textContent = questions[presentQuestion].answers[i]
}


    const allOption = document.querySelectorAll('.option')
    allOption.forEach((e)=>{
            e.addEventListener('click', function(btn){
               
                 if (btn.target.textContent === questions[presentQuestion].correctAnswer) {
                  btn.target.style.backgroundColor = 'green'
                  setTimeout(() => {
                    
                    presentScore++;
                    btn.target.style.backgroundColor = 'rgb(171, 163, 163)'
                    presentQuestion++;
                    question.textContent = questions[presentQuestion].question
                    for(let i=0; i<4; i++){
                        
                        document.querySelector('#option-'+ i ).textContent = questions[presentQuestion].answers[i]
                    }
                }, 1000);
                }
                    else if(btn.target.textContent != questions[presentQuestion].correctAnswer){
                          btn.target.style.backgroundColor = 'red'
                          setTimeout(() => {
                            btn.target.style.backgroundColor = 'rgb(171, 163, 163)'
                            presentQuestion++;
                            for(let i=0; i<4; i++){
                        
                                document.querySelector('#option-'+ i ).textContent = questions[presentQuestion].answers[i]
                            }
                            
                          }, 1000);
                    }
                    if(presentQuestion  ===  9 ){
                        const options = document.querySelector('.mainclass')
                        options.innerHTML = `
                         <div class="btn m2"><button onclick="location.reload()">Play Again</button></div>
                         <div class="score m3"><h2>Your score is <span class="main-score">${presentScore}</span> out of 10 question.</h2></div>
                        `
                    }
                        

        })

        })