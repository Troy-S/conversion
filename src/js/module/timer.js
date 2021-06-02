function startCountdown(dur, display) {
    // Vars we're using
    let timer = dur,
        mins,
        secs;

    // Holds our countdown
    const countDown = setInterval(function() {
        // Parsing values
        mins = parseInt(timer / 60, 10);
        secs = parseInt(timer % 60, 10);
        // Ternary conditional
        mins = mins < 10 ? '0' + mins : mins;
        secs = secs < 10 ? '0' + secs : secs;
        // Update content
        display.textContent = mins + ':' + secs;
        // If timer reaches 0 clear the setInterval
        if (--timer < 0) {
            clearInterval(countDown);

            const email = document.querySelector('body > div > div > div.modal > div > input');
            email.style.pointerEvents = 'none';
            email.style.backgroundColor = '#E5E5E5';

            const discountButton = document.querySelector('body > div > div > div.modal > div > button');
            discountButton.style.cursor = 'pointer';
            discountButton.innerText = 'DISCOUNT EXPIRED';
        }
    }, 1000);
}

// Onload execute these params..
window.onload = function() {
    const twoMins = 60 * 2,
        display = document.querySelector('#timer');
    startCountdown(twoMins, display);
};