var bucket = 0;
$(document).ready(function() {
    $(function(){
        $("#countstroke").keyup(function(){
            $("#count").text("Count: " + (++bucket));
        });
    });
});

//------------random number generator----------------------
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}