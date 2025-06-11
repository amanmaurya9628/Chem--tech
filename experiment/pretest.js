/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "1.Which of the following best defines conductance? ",  ///// Write the question inside double quotes
      answers: {
        a: "Resistance to the flow of current",                  ///// Write the option 1 inside double quotes
        b: "Ability of a substance to produce heat",                  ///// Write the option 2 inside double quotes
        c: "Ease with which electric current flows through a substance",                  ///// Write the option 3 inside double quotes
        d: "None of the above"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

    {
     question: "2. The SI unit of conductance is:",  ///// Write the question inside double quotes
      answers: {
        a: "Ohm",                  ///// Write the option 1 inside double quotes
        b: " Volt",                  ///// Write the option 2 inside double quotes
        c: "Siemens",                  ///// Write the option 3 inside double quotes
        d: "Ampere"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },     
    {
      question: "3.Cell constant is defined as:",  ///// Write the question inside double quotes
       answers: {
         a: "Resistance × Conductivity",                  ///// Write the option 1 inside double quotes
         b: "Conductivity × Distance between electrodes",                  ///// Write the option 2 inside double quotes
         c: "Distance between electrodes / Area of cross-section",                  ///// Write the option 3 inside double quotes
         d: "None of the above"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "c"                ///// Write the correct option inside double quotes
     }, 
     {
      question: "4. Which instrument is commonly used to measure conductance",  ///// Write the question inside double quotes
       answers: {
         a: "Ammeter",                  ///// Write the option 1 inside double quotes
         b: "Voltmete",                  ///// Write the option 2 inside double quotes
         c: "Conductometer",                  ///// Write the option 3 inside double quotes
         d: "Potentiometer"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "c"    
         {
      question: "5.  What is the relationship between resistance (R) and conductance (G)",  ///// Write the question inside double quotes
       answers: {
         a: "G = R",                  ///// Write the option 1 inside double quotes
         b: "G = 1/R",                  ///// Write the option 2 inside double quotes
         c: " G = R²",                  ///// Write the option 3 inside double quotes
         d: "G = R × V"                   ///// Write the option 4 inside double quotes
       },
       correctAnswer: "b"    ///// Write the correct option inside double quotes
     }                             ///// To add more questions, copy the section below 
    									                  ///// this line


    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
