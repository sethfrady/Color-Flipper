const colors = ["green", "red", "yellow", "purple", "orange", "teal", "blue", "pink", "black", "white"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber]; // changes the body background color image
    color.textContent = colors[randomNumber]; // changes the text only
})


function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}