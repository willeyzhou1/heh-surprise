const image = document.querySelector(".image");
const description = document.querySelector(".description");
const yesButton = document.querySelector(".button.yes");
const noButton = document.querySelector(".button.no");
let buttonTextSize = 20;

async function handleButton(button) {
    if(button == yesButton) {
        image.src = "./assets/piplup-happy.jpg";
        description.innerHTML = "YIPPEEEEEEEE :DDDD say leth bbygurl";
    }
    else {
        image.src = "./assets/piplup-angry.gif";

        description.innerHTML = "Don't even think about it."
    }
}

function handleMouseOverOnce() {
    handleButton(noButton);
    noButton.removeEventListener("mouseover", handleMouseOverOnce);
}

yesButton.addEventListener("click", () => {
    handleButton(yesButton);
    noButton.style.visibility = "hidden";
    yesButton.style.visibility = "hidden";
});

noButton.addEventListener("mouseover", handleMouseOverOnce);

noButton.addEventListener("click", () => {
    description.innerHTML = "sory this button doesnt work ;(( press the other one!!!!!!"
    yesButton.style.width = `${yesButton.offsetWidth + 25}px`;
    yesButton.style.height = `${yesButton.offsetHeight + 25}px`;
    buttonTextSize += 5;
    yesButton.style.fontSize = buttonTextSize + "px";
})