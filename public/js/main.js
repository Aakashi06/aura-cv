document.addEventListener("DOMContentLoaded", function() {
    const templateButtons = document.querySelectorAll(".template-button");
    const previewButtons = document.querySelectorAll(".preview-button");
    const filterButtons = document.querySelectorAll(".filter");
    const templateCards = document.querySelectorAll(".template-card");

    // Open link in new tab
    templateButtons.forEach(button => {
        button.addEventListener("click", () => {
            const link = button.getAttribute("data-link");
            window.open(link, "_blank");
        });
    });

    

    // Filter templates based on category
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.getAttribute("data-filter");

            // Update active filter button
            document.querySelectorAll(".filter.active").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show or hide templates based on filter selection
            templateCards.forEach(card => {
                if (filter === "all" || card.classList.contains(filter)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Show all templates by default
    document.querySelector(".filter[data-filter='all']").click();
});
