


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



