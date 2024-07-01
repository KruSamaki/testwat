document.addEventListener("click", function (event) {
    var menuToggle = document.getElementById("menu-toggle");
    var menuItems = document.querySelector(".menu-items");
    var menuBtn = document.querySelector(".menu-btn");

    if (!menuItems.contains(event.target) && event.target !== menuToggle && event.target !== menuBtn && !menuBtn.contains(event.target)) {
        menuToggle.checked = false;
    }
});

// Touch events for swipe gesture
let startX = 0;
let currentX = 0;
let isSwiping = false;

document.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
    isSwiping = true;
});

document.addEventListener('touchmove', function (e) {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
});

document.addEventListener('touchend', function (e) {
    if (!isSwiping) return;
    isSwiping = false;

    if (startX - currentX > 50) {
        // Swipe left to close
        document.getElementById("menu-toggle").checked = false;
    } else if (currentX - startX > 50) {
        // Swipe right to open
        document.getElementById("menu-toggle").checked = true;
    }
});