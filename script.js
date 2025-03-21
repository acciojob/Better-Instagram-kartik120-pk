const images = document.querySelectorAll(".image");

let draggedItem = null;

images.forEach((image) => {
    image.addEventListener("dragstart", (event) => {
        draggedItem = event.target;
        event.dataTransfer.setData("text/html", draggedItem.outerHTML);
        setTimeout(() => (draggedItem.style.display = "none"), 0);
    });

    image.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    image.addEventListener("drop", (event) => {
        event.preventDefault();
        if (draggedItem !== event.target) {
            let temp = draggedItem.style.backgroundImage;
            draggedItem.style.backgroundImage = event.target.style.backgroundImage;
            event.target.style.backgroundImage = temp;
        }
        draggedItem.style.display = "block";
        draggedItem = null;
    });

    image.addEventListener("dragend", () => {
        if (draggedItem) draggedItem.style.display = "block";
    });
});
