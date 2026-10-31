// Display welcome message
window.addEventListener("load", function () {
    alert("Welcome to Shubham's Personal Portfolio!");
});

// Live date and time
function updateClock() {
    const clock = document.getElementById("liveClock");

    if (clock) {
        const now = new Date();

        clock.innerHTML =
            "Current Date & Time: " + now.toLocaleString();
    }
}

// Update clock every second
updateClock();
setInterval(updateClock, 1000);
// jQuery animation
$(document).ready(function () {
    $("#animatedTitle").hide();

    setTimeout(function () {
        $("#animatedTitle").fadeIn(2000);
    }, 100);
});