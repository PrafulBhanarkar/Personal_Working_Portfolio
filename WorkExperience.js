document.querySelectorAll(".section-heading").forEach(heading => {
    heading.addEventListener("click", () => {
        const content = heading.nextElementSibling;

        if (content.style.height && content.style.height !== "0px") {
            // Collapse
            content.style.height = content.scrollHeight + "px";
            requestAnimationFrame(() => {
                content.style.height = "0px";
            });
        } else {
            // Expand
            content.style.height = content.scrollHeight + "px";
        }

        // Reset height after animation
        content.addEventListener("transitionend", function () {
            if (content.style.height !== "0px") {
                content.style.height = "auto";
            }
        }, { once: true });
    });
});