$(document).ready(function() {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
        var audio = document.getElementById("birthday-audio");
        var isAudioPlayed = false; // Track if audio has been played

        // Make it hidden on first time
        hideButton();

        // Debug: Check if audio is loaded
        audio.onloadeddata = function() {
            console.log("Audio file is loaded and ready to play.");
        };

        // Check if the audio can be played
        audio.onerror = function() {
            console.error("Error loading audio file.");
        };

        // Add a button or touch event to trigger audio playback
        $("#playAudioButton").on("click", function() {
            playAudio();
        });

        flame.on({
            click: function () {
                // Debug: Log click event
                console.log("Candle clicked");

                // Ensure the audio is ready to be played
                if (audio.readyState >= 2 && !isAudioPlayed) {
                    playAudio();
                }

                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();

                // Show the button after 5 seconds
                showButton();

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

function playAudio() {
    audio.play()
        .then(() => {
            console.log("Playing audio");
            isAudioPlayed = true;
        })
        .catch((error) => {
            console.error("Error playing audio:", error);
            // Fallback mechanism: Display a message or button to allow manual audio playback
            $("#audioFallback").show();
        });
}

// Show the button with opacity 0 to 100%
function showButton() {
    setTimeout(function() {
      var button = document.getElementById("button_go");
      button.style.display = "block";
      button.style.opacity = 0;
      var interval = setInterval(function() {
        button.style.opacity = parseFloat(button.style.opacity) + 0.1;
        if (button.style.opacity >= 1) {
          clearInterval(interval);
        }
      }, 100);
    }, 5000);
  }

// Hide the button
function hideButton() {
    var button = document.getElementById("button_go");
    button.style.display = "none";
}
