function submitQuiz() {
    var questionDivs = document.getElementsByClassName("form-radio");
    var numberOfQuestions = questionDivs.length;
    var questionsList = []
    var userPoints = 0;
    var maximumPoints = 0;
    //var userAnswersList = [];
    console.log("Number of questions:", numberOfQuestions);
    class question {
        constructor(questionDiv) {
            this.questionDiv = questionDiv;
        }
        getBestAnswerAndUserAnswer() {
            var bestAnswerValue = 0;
            //user answer and best answer element
            var userAnswer;
            var bestAnswer; 
            //get every label element under divs of questions 
            var labelsUnderQuestionDiv = this.questionDiv.getElementsByTagName("label"); 
            for (var n = 0; n < labelsUnderQuestionDiv.length; n++) {
                //get the input element inside label
                var option = labelsUnderQuestionDiv[n].getElementsByTagName("input")[0];
                var optionValue = Number(option.value)
                if (option.checked) { //get the parent of the element if it is checked
                    //userAnswersList.push(option)
                    userAnswer = option;
                }
                var valueOfOption = optionValue;
                if (valueOfOption > bestAnswerValue) {
                    //bestAnswerValue = valueOfOption;
                    bestAnswerValue = optionValue;
                    bestAnswer = option;
                }
            }
            return [bestAnswer, userAnswer]
        }
        bestAnswer() {
            return this.getBestAnswerAndUserAnswer()[0];
        }
        userAnswer() {
            return this.getBestAnswerAndUserAnswer()[1];
        }
        userPoint() {
            // catch undefiened here
            //if this.userAnswer
            try {
                return Number(this.userAnswer().value);
            } catch (err) {
                //this.showMessage(err.message)
                this.showMessage("please choose an answer")
            }
        }

        pointsAvaible() {
            return Number(this.bestAnswer().value);
        }
        isUserAnswerBestAnswer() {
            return this.userPoint() == this.pointsAvaible();
        }
        bestAnswerString() {
            return this.bestAnswer().parentNode.innerHTML;
        }
        higlightBestAnswer() {
            this.bestAnswer().parentNode.style.fontWeight = "600";
        }
        showMessage(message) {
            var message = String(message)
            var newText = document.createElement("div");
            newText.style.color = "red"
            newText.innerHTML = message;
            newText.style.transition = "2s"
            this.questionDiv.appendChild(newText);
            setTimeout(function(){ newText.style.opacity= "0";} , 300);
            setTimeout(function(){ newText.style.display= "none";}, 2000);
        }
        
    }
    for (var i = 0; i < numberOfQuestions; i++) { //for every question
        var theQuestion = new question(questionDivs[i]);
        console.log(questionDivs[i]);
        console.log(theQuestion.userAnswer());
        console.log(theQuestion.userPoint());
        console.log(theQuestion.pointsAvaible());
        userPoints += (theQuestion.userPoint());
        maximumPoints += theQuestion.pointsAvaible();
    }

    var userScorePercantage = ((userPoints/maximumPoints)*100)
    userScoreReport(userScorePercantage);

    function userScoreReport(userScorePercantage) {
        var quizScoreElement = document.getElementById("userScore");
        console.log("quiz score", quizScoreElement);
        //change image and return the string specific to that image
        quizScoreElement.innerHTML = Math.round(userScorePercantage) + "%" + "<br>" + changeImage(userScorePercantage)
    }
}


function changeImage(userScorePercantage){
    var image = document.getElementById("ib-image");
    var imageText 
    console.log(image)
    console.log("user score", (userScorePercantage))
    if (userScorePercantage >= 90){
        console.log("change the image")
        image.src = "https://www.saintjoanantida.org/uploaded/photos/ib-lp-pos-en.png"
        imageText = "You seem like the perfect candidate!"
    }
    else if (userScorePercantage >= 50){
        image.src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/STUDENTS_STUDYING_AT_CATHEDRAL_SENIOR_HIGH_SCHOOL_IN_NEW_ULM%2C_MINNESOTA._THE_TOWN_IS_A_COUNTY_SEAT_TRADING_CENTER_OF..._-_NARA_-_558209.jpg"
        imageText = "You seem like a potential IB student, however you will have to work hard!"
    }
    else if (userScorePercantage >= 0){
        image.src = "https://cdn.pixabay.com/photo/2015/06/27/13/36/blind-823530_1280.png"
        imageText = "You didn't get a good score, but who knows? Try to see the IB counsellors and talk to students to see if you are up to the task!"
    }
    else {
        imageText = "Can't decide, you will have to make your own mind"
    }
    return imageText
}