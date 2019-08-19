$(document).ready(function() {

    // VARIABLES
    var countdown = 30;
    var intervalId = 0;
    var correct = 0;
    var wrong = 0;

    // TIMER
    intervalId = setInterval(decrement, 1000);

    function decrement() {
        countdown--;
        $("#time-remaining").text(countdown);
        if (countdown === 0 ) { // if time runs out
            clearInterval(intervalId);
        }
    };

    // run the counter
    decrement();

    // count up correct answers
    


});