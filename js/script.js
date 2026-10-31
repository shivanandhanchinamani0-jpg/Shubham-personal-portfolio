
$(document).ready(function () {

    $("#contactForm").submit(function (event) {

        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let subject = $("#subject").val().trim();
        let message = $("#message").val().trim();

        if (name === "" || email === "" ||
            subject === "" || message === "") {

            $("#formStatus")
                .text("Please fill in all the fields.")
                .css("color", "red");

            return;
        }

        $("#formStatus")
            .text("Thank you, " + name +
            "! Your message has been submitted successfully.")
            .css("color", "#38bdf8");

        $("#contactForm")[0].reset();

    });

});