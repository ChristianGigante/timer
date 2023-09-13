const circle = document.querySelector('.circle');
const timerDisplay = document.getElementById('timer-display');
let timeLeft = 10; // Initial time in seconds

function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;

        if (timeLeft >= 0) {
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(timerInterval);
        }

        // Simulate a dropping circle animation
        const translateY = (10 - timeLeft) * 10; // Adjust the value for animation speed
        circle.style.transform = `translateY(${translateY}px)`;
    }, 1000);
}

startTimer();
