var questions = [{
    "title": "Are you willing to write in English",
    "answers": [
        ["Yes", 10],
        ["Maybe",5],
        ["No", 0]
    ],
}, {
    "title": "Mah",
    "answers": [
        ["Yes", 10],
        ["No", 0]
    ]
}]
for (x in questions){
    var question = questions[x]
    var questionTitle = question["title"]
    var questionAnswers = question["answers"]
    createQuestion(question,questionTitle,questionAnswers)
} 
function  createQuestion(questionAnswers,questionAnswers){
    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("class","form-radio form-radio-block")
    var questionTitleandQuestionDiv = document.createElement("div")
    questionTitleandQuestionDiv.setAttribute("class","form-radio-legend question")

    questionDiv.appendChild(questionDiv,questionTitleandQuestionDiv)
}