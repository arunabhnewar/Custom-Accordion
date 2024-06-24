document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelectorAll(".device_accordion .device_heading")
    .forEach(function (heading) {
      heading.addEventListener("click", function () {
        // Toggle the active class on the clicked heading
        this.classList.toggle("active");

        // Toggle the display of the next element (contents)
        let nextElement = this.nextElementSibling;

        if (nextElement.style.display === "block") {
          nextElement.style.display = "none";
        } else {
          nextElement.style.display = "block";
        }

        // Hide all other contents
        document
          .querySelectorAll(".device_accordion .device_contents")
          .forEach(function (content) {
            if (content !== nextElement) {
              content.style.display = "none";
            }
          });

        // Remove the active class from all other headings
        document
          .querySelectorAll(".device_accordion .device_heading")
          .forEach(function (sibling) {
            if (sibling !== heading) {
              sibling.classList.remove("active");
            }
          });
      });
    });
});
