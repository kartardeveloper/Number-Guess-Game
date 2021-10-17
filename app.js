const form = document.querySelector('.form'),
      minSpan = document.querySelector('.min'),
      maxSpan = document.querySelector('.max'),
      guessInput = document.querySelector('.guess-input'),
      submitBtn = document.querySelector('.submit-btn'),
      message = document.querySelector('.message');

let min = 1,
    max = 10,
    guessLeft = 3,
    winningNum = generateRandomNumber();

minSpan.innerText = min;
maxSpan.innerText = max;
guessInput.focus();


form.addEventListener('submit' , function(e) {
    let guessInputValue = parseInt(guessInput.value);
    console.log(parseInt(guessInputValue));

    if(isNaN(guessInputValue) === true || guessInputValue < min || guessInputValue > max) {
        giveMessage(`Enter a value between ${min} and ${max} to play the game.` , 'red')
    } else {
        guessLeft -= 1;
        guessInput.value = '';

        if(guessInputValue === winningNum) {
            giveMessage(`You win the game! The correct Number is ${winningNum}.` , 'green');
            reloadPage();
        } else if(guessLeft === 0) {
            giveMessage(`You lose the game! The correct Number is ${winningNum}.` , 'red');
            reloadPage();
        } else {
            giveMessage(`It's not correct! You have ${guessLeft} guesses left.` , 'yellow');
        }
        
    }
    e.preventDefault();
})


function giveMessage(msg , color) {
    message.innerText = msg;
    message.style.color = color;
}

function reloadPage() {
    submitBtn.setAttribute('value' , 'PLAY AGAIN')
    if(submitBtn.getAttribute('value') === 'PLAY AGAIN') {
        guessInput.disabled = true;
        submitBtn.addEventListener('click' , (e) => {
            window.location.reload();
            e.preventDefault();
        })
    }
}

function generateRandomNumber() {
    return Math.floor(Math.random()*((max-min+min))+min)
}