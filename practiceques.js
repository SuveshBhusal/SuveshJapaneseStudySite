function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var correct = 0;

    if (question1 == "いきました" || question1 == "行きました") {
        correct++;
    }
    if (question2 == "たべました") {
        correct++;
    }
    if (question3 == "りょうりしました") {
        correct++;
    }
    if (question4 == "うたいました") {
        correct++;
    }
    if (question5 == "のみました") {
        correct++;
    }
    if (question6 == "ききました") {
        correct++;
    }
    if (question7 == "はなしました") {
        correct++;
    }
    if (question8 == "よみました") {
        correct++;
    }
    if (question9 == "おきました") {
        correct++;
    }
    if (question10 == "しました") {
        correct++;
    }

    document.getElementById("after_submit1").style.visibility = "visible";

    document.getElementById("number_correct1").innerHTML =
        "You got " + correct + " correct.";
}

function check1() {
    var question1 = document.quiz2.question1.value;
    var question2 = document.quiz2.question2.value;
    var question3 = document.quiz2.question3.value;
    var question4 = document.quiz2.question4.value;
    var question5 = document.quiz2.question5.value;
    var question6 = document.quiz2.question6.value;
    var question7 = document.quiz2.question7.value;
    var question8 = document.quiz2.question8.value;
    var question9 = document.quiz2.question9.value;
    var question10 = document.quiz2.question10.value;
    var correct = 0;

    if (question1 == "いって") {
        correct++;
    }
    if (question2 == "たべて") {
        correct++;
    }
    if (question3 == "りょうりして") {
        correct++;
    }
    if (question4 == "うたって") {
        correct++;
    }
    if (question5 == "のんで") {
        correct++;
    }
    if (question6 == "きいて") {
        correct++;
    }
    if (question7 == "はなして") {
        correct++;
    }
    if (question8 == "よんで") {
        correct++;
    }
    if (question9 == "おきて") {
        correct++;
    }
    if (question10 == "しして") {
        correct++;
    }

    document.getElementById("after_submit2").style.visibility = "visible";

    document.getElementById("number_correct2").innerHTML =
        "You got " + correct + " correct.";
}