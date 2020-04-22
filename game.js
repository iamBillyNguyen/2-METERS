let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let road = new Image;
road.src = "./Image/platform.png";

road.onload = () => {
    requestAnimationFrame(gameLoop);
}

let yOffset = -512;

function gameLoop() {

    if (yOffset >= 0)
        yOffset = -512;

    /* can also allow horizontal movement */
    context.drawImage(road, 0, yOffset);
    context.drawImage(road, 0, yOffset + 512);
    context.drawImage(road, 0, yOffset + 1024);

    /* platform speed */
    yOffset += 5;

    requestAnimationFrame(gameLoop);
}