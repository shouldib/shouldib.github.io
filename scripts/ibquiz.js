function submitQuiz() {
    var questionDivs = document.getElementsByClassName("form-radio");
    var numberOfQuestions = questionDivs.length;
    console.log("Number of questions:", numberOfQuestions);
    var maxValueOfAnswersList = [];
    var userAnswersList = [];
    var userAnswersClassList = [];
    class question {
        constructor(bestAnswer, userAnswer){
            this.bestAnswer = bestAnswer;
            this.userAnswer = userAnswer;
        }
        getUserAnswer(){
            //var labelsUnderQuestionDiv = .getElementsByTagName("label"); //get every label element under divs of questions 
            //var 

        }
        userPoint(){
            return Number(this.userAnswer.value);
        }
        pointsAvaible(){
            return Number(this.bestAnswer.value);
        }
        isUserAnswerBestAnswer(){
            return this.userPoint() == this.pointsAvaible();
        }
        bestAnswerString(){
            return this.bestAnswer.parentNode.innerHTML;
        }
        higlightBestAnswer(){
            this.bestAnswer.parentNode.style.fontWeight = "600";
        }
    }
    for (var i = 0; i < numberOfQuestions; i++) { //for every question
        var labelsUnderQuestionDiv = questionDivs[i].getElementsByTagName("label"); //get every label element under divs of questions 
        //the max value avaible in a question
        var maxValueOfTheQuestion = 0; //these two
        var userAnswer; //these two are the same latter one is for class const.
        var bestAnswer;
        
        //ittirate through every label inside question divs
        for (var n = 0; n < labelsUnderQuestionDiv.length; n++) {
            //get the input element inside label
            var option = labelsUnderQuestionDiv[n].getElementsByTagName("input")[0];
            if (option.checked){ //get the parent of the element if it is checked
                userAnswersList.push(option)
                userAnswer = option;
            }
            var valueOfOption = Number(option.value);
            console.log(valueOfOption)
            if (valueOfOption > maxValueOfTheQuestion) {
                maxValueOfTheQuestion = valueOfOption;
                bestAnswer = option;
            }
        }
        if (isNaN(userAnswer)){
            
        }
        var questionObject = new question(bestAnswer, userAnswer);
        console.log("max value of the question is", maxValueOfTheQuestion);
        maxValueOfAnswersList.push(maxValueOfTheQuestion);
        userAnswersClassList.push(questionObject);

    }

    console.log(maxValueOfAnswersList) ;
    console.log("totalPointsAvaible is:", totalPointsAvaible);
    console.log("User answers:", userAnswersList);
    for (var x=0; x < numberOfQuestions; x++){
        if (maxValueOfAnswersList[x]==userAnswersList[x].value){
            console.log("user answer", x+1 , "is the correct answer");
        }
    }
    console.log("class list:", userAnswersClassList);
    var totalPointsAvaible = 0; 
    var userTotalPoint = 0;
    for (var x=0; x < userAnswersClassList.length; x++){ //itirate through the user answers list
        totalPointsAvaible += userAnswersClassList[x].pointsAvaible();
        userTotalPoint += userAnswersClassList[x].userPoint();
        console.log("Question", x+1, "is", userAnswersClassList[x].isUserAnswerBestAnswer());
        userAnswersClassList[x].higlightBestAnswer()
        
    }
    var userScorePercantage = (userTotalPoint/totalPointsAvaible*100);
    var userScoreReport = ("You scored "+ String(userScorePercantage)+ "%");
    console.log(userScoreReport);
    var quizScoreElement = document.getElementById("userScore");
    console.log(quizScoreElement);
    //change image and return the string specific to that image
    quizScoreElement.innerHTML = userScoreReport + "<br>" + changeImage(userScorePercantage);
    //make the right answer bold

}       
function changeImage(userScorePercantage){
    var image = document.getElementById("ib-image");
    var imageText 
    console.log(image)
    console.log("user score", userScorePercantage)
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