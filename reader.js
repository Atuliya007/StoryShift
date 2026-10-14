
// const investigateBtn = document.getElementById("investigateBtn");
// const ignoreBtn = document.getElementById("ignoreBtn");

// investigateBtn.addEventListener("click", function () {
//     alert("You arrive at the old library. A light flickers in the top window. Your adventure continues...");
// });

// ignoreBtn.addEventListener("click", function () {
//     alert("You return to bed. At sunrise, another envelope appears. This time, it contains a photograph of you sleeping...");
// });


const investigateBtn = document.getElementById("investigateBtn");
const ignoreBtn = document.getElementById("ignoreBtn");
const storyOutcome = document.getElementById("storyOutcome");

investigateBtn.addEventListener("click", function () {
    storyOutcome.innerHTML = `
        <h2>The Old Library</h2>
        <p>You reach the old library just before sunrise.</p>
        <p>A light flickers in the top window. The door is slightly open.</p>
        <p>Someone inside whispers your name...</p>
    `;
});

ignoreBtn.addEventListener("click", function () {
    storyOutcome.innerHTML = `
        <h2>The Next Morning</h2>
        <p>You ignore the mysterious message and return to bed.</p>
        <p>At sunrise, another envelope appears beside your bed.</p>
        <p>Inside it is a photograph of you sleeping. How did someone take it?</p>
    `;
});