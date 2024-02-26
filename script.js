function toggleMenu() {
    var menuOptions = document.getElementById("menuOptions");
    menuOptions.style.display = (menuOptions.style.display === 'block') ? 'none' : 'block';
}
// Set the date and time for the challenge deadline
const deadline = new Date("Feb 21, 2024 20:00:00 GMT+0545").getTime();

// Update the timer every second
const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


    
