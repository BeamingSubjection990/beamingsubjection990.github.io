


document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".content");
    const originalText = textElement.innerHTML;
    
    // Clear text initially
    textElement.innerHTML = "";
    
    let i = 0;
    
    // Function to simulate typing, treating HTML tags as single characters
    function typeWriter() {
        if (i < originalText.length) {
            textElement.innerHTML += originalText.charAt(i);
            i++;
            // Randomize typing speed for realism
            setTimeout(typeWriter, Math.random() * 50 + 30);
        }
    }
    
    // Start after a slight delay
    setTimeout(typeWriter, 1000);
});



/* BOOT SEQUENCE LOGIC */
document.addEventListener("DOMContentLoaded", () => {
    // 1. Select the lines
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const line4 = document.getElementById("line4");
    const bootScreen = document.getElementById("boot-screen");

    // 2. Define the timeline (in milliseconds)
    setTimeout(() => { line1.style.display = "block"; }, 500);  // Show Line 1 after 0.5s
    setTimeout(() => { line2.style.display = "block"; }, 1500); // Show Line 2 after 1.5s
    setTimeout(() => { line3.style.display = "block"; }, 2500); // Show Line 3 after 2.5s
    setTimeout(() => { line4.style.display = "block"; }, 3500); // Show Line 4 after 3.5s

    // 3. Fade out the whole screen after 4.5 seconds
    setTimeout(() => {
        bootScreen.classList.add("fade-out");
    }, 4500);
});