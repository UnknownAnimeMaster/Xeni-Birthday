$(document).ready(function() {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var audio = document.getElementById("birthday-audio");

        // Debug: Check if audio is loaded
        audio.onloadeddata = function() {
            console.log("Audio file is loaded and ready to play.");
        };

        // Check if the audio can be played
        audio.onerror = function() {
            console.error("Error loading audio file.");
        };

        flame.on({
            click: function () {
                // Debug: Log click event
                console.log("Candle clicked");

                // Ensure the audio is ready to be played
                if (audio.readyState >= 2) {
                    console.log("Playing audio");
                    audio.play().catch(function(error) {
                        console.error("Error playing audio:", error);
                    });
                } else {
                    console.error("Audio is not ready to play");
                }

                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("I wish you a happy birthday").delay(750).fadeIn(300);
                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );
            }
        });
    });
});
