$(document).ready(function(event) {
    $("#formBlanks form").submit(function(event) {
        var weatherInput = parseInt($("#weather").val());
        var environmentInput = parseInt($("#environment").val());
        var moodInput = parseInt($("#mood").val());
        var distanceInput = parseInt($("#distance").val());
        var foodInput = parseInt($("#food").val());

        console.log("This is weather input: " + weatherInput);
        console.log("This is environment input: " + environmentInput);
        console.log("This is mood input: " + moodInput);
        console.log("This is distance input: " + distanceInput);
        console.log("This is food input: " + foodInput);

        var sumTotal = weatherInput + environmentInput + moodInput + distanceInput + foodInput;

        console.log("This is the total sum: " + sumTotal)

        if (sumTotal <= 8 && sumTotal >= 5) {
            $("#Results1").show();
            $("#Answer").show();
            $("#formBlanks").hide();
            alert("This is option1");
        } else if ( sumTotal > 8 && sumTotal <= 12) {
            $("#Results2").show();
            $("#Answer").show();
            $("#formBlanks").hide();
            alert("This is option2");
        } else if ( sumTotal > 12 ) {
            $("#Results3").show();
            $("#Answer").show();
            $("#formBlanks").hide();
            alert("This is option3");
        } else {
            alert("You didn't select enough answers, please select them now.")
        };

        event.preventDefault();        
    });
});