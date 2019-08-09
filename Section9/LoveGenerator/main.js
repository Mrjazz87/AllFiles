function LoveCalculator(e) {
    e.preventDefault();

    var randomNums = Math.random();
    love = randomNums * 100;
    love = Math.floor(love) + 1;
    alert("Your Love score is: " +
        love);
}

var submit = document.getElementById('submit');

submit.addEventListener('click', LoveCalculator);

document.querySelector("li a").style.color = "red";