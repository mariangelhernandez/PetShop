var $an = jQuery.noConflict();
$an(document).ready(function() {

    // Add smooth scrolling to all links
    $an("a, area").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $an('html, body').animate({
                scrollTop: $an(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


$an(document).ready(function() {
    $an("button").click(function() {
        alert($an("div").scrollTop() + " px");
    });
});