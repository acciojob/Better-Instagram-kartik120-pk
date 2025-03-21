//your code here
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");

    let draggedElement = null;

    images.forEach(image => {
        image.addEventListener("dragstart", (e) => {
            draggedElement = e.target;
            e.target.classList.add("dragging");
        });

        image.addEventListener("dragend", (e) => {
            e.target.classList.remove("dragging");
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();
            if (draggedElement && draggedElement !== e.target) {
                let tempBackground = draggedElement.style.backgroundImage;
                draggedElement.style.backgroundImage = e.target.style.backgroundImage;
                e.target.style.backgroundImage = tempBackground;
            }
        });
    });
});
