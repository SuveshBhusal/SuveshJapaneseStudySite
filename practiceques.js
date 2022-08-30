function check() {
    var question1 = document.jquiz.jquestion1.value;
    var correct = 0;

    if (question1 == "いきました") {
        correct++;
    }
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = "Correct";
}