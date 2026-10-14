console.log("StoryShift is ready!");


const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {
    document.getElementById("stories").scrollIntoView({
        behavior: "smooth"
    });
});


const startStoryBtn = document.getElementById("startStoryBtn");
const storyReader = document.getElementById("storyReader");

startStoryBtn.addEventListener("click", function () {
    storyReader.hidden = false;

    storyReader.scrollIntoView({
        behavior: "smooth"
    });
});
