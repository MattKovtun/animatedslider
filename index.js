const nextButton = document.querySelector(".slider__button_next");
const backgroundOne = document.querySelector("#background_one");
const prevButton = document.querySelector(".slider__button_prev");
const glass = document.querySelector("#glass");
const animateButton = document.querySelector("#animate");


const sceneOne = () => {

    const tl = new TimelineMax();
    tl.to(glass, 0, {y: -150, x: 470})
      .to(glass, 2, {y: 200, x: 470, opacity: 1});

}
const sleepFor = (sleepDuration) => new Promise((res, rej) => window.setTimeout(res, sleepDuration));


nextButton.addEventListener("click", async () => {
    for (let i = 0; i < 80; ++i)
        await swipe(backgroundOne, 10);
    // sceneOne();
});
prevButton.addEventListener("click", async () => {
    for (let i = 0; i < 80; ++i)
        await swipe(backgroundOne, -10);
});

animateButton.addEventListener("click", () => {
    sceneOne();
})


const swipe = async (elem, change) => {
    let pos = window.getComputedStyle(elem, null).backgroundPositionX;
    pos = parseInt(pos.split("px")[0]);
    elem.style.backgroundPositionX = pos - change + 'px';
    await sleepFor(25);
};

