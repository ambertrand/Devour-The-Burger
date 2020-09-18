// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".devour-burger").on("click", function (event) {
        const id = $(this).data("id");
        const newDevoured = !$(this).data("devoured");

        let newDevouredBurger = {
            devoured: newDevoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredBurger
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".burgerBtn").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-btn").on("click", function (event) {
        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
