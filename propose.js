const acceptBtn = document.getElementById("btn1");
const btn = document.getElementById("btn2");

function moveButton() {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const x = Math.random() * maxX * 1.02;
    const y = Math.random() * maxY * 1.02;

    btn.style.position = "absolute"; // ensure positioning
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// Desktop (hover)
btn.addEventListener("mouseover", moveButton);

// Mobile (touch)
btn.addEventListener("touchstart", moveButton);

// Optional: works for both (modern way)
btn.addEventListener("pointerenter", moveButton);

btn.addEventListener("click", (e) => {
    e.preventDefault();
});


acceptBtn.addEventListener("click", () => {
    acceptBtn.innerText = "❤️ Yay!";
    setTimeout(() => {
        window.location.href = "accept.html";
    }, 1000);
});