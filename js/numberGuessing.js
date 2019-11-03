var bucket = 0;
$(document).ready(function() {
    $(function(){
        $("#countstroke").keyup(function(){
            $("#count").text("Count: " + (++bucket));
        });
    });
});