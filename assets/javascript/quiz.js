$(document).ready(function() {

    // VARIABLES
    var countdown = 20;
    var intervalId = 0;
    var correct = 0;
    var message;
    var result;
    var answers;

    // TIMER
    intervalId = setInterval(decrement, 1000);

    // FUNCTIONS
    function decrement() {
        countdown--;
        $("#time-remaining").text(countdown);
        if (countdown === 0 ) { // if time runs out
            clearInterval(intervalId);
            showAlert();
        } // end if
    }; // end function

    function showAlert() {
        // hide timer-section and post alert
        $(".timer-section").hide();
        var messageDiv = "<div id='message'>";
        var alert = "<h5>Let's see how you did.</h5><p>&nbsp;</p></div>";
        $(".results-section").append(messageDiv);
        $("#message").append(alert);
        // setTimeOut for 2 seconds and then show results
        setTimeout(function() {
            showResults()}, 2000);
        } // end showAlert

    function showResults () {
        if ($('#inlineRadio1').is(':checked')) {
            correct++; } 
        if ($('#inlineRadio6').is(':checked')) {
            correct++; } 
        if ($('#inlineRadio11').is(':checked')) {
            correct++; } 
        if (correct === 1) {
            message = "<h5>You have " + correct + " correct answer.</h5>";
        } else if (correct === 2) {
            message = "<h5><b>You have " + correct + " correct answers.</h5>";
        } else if (correct === 3) {
            message = "<h5>Congrats! Your choices are all correct.</h5>";
        } else {
            message = "<h5>Your choices are all incorrect.</h5>";
        } 

        // display the result
        answers = "<p>The correct answers are Michelle Obama, John Kani, and Nathan Lane";
        result = message + answers;
        $("#message").html(result);
    } // end showResults

    // run the timer
    decrement();

});