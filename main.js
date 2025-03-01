function toggleLights() {
    const fanous = document.querySelector('.fanous');
    const ramadanText = document.querySelector('.ramadan-text');
    const crescentMoon = document.querySelector('.crescent-moon');
    const starsContainer = document.querySelector('.stars');

    fanous.classList.toggle('off');
    fanous.classList.toggle('on');

    if (fanous.classList.contains('on')) {
        ramadanText.style.opacity = "1";
        ramadanText.style.transform = "translateY(150px)";
        
        crescentMoon.style.opacity = "1";
        crescentMoon.style.transform = "translateY(150px)";

        createStars(); 
    } else {
        ramadanText.style.opacity = "0";
        ramadanText.style.transform = "translateY(-100px)";
        
        crescentMoon.style.opacity = "0";
        crescentMoon.style.transform = "translateY(-100px)";

        clearStars(); 
    }
}

function createStars() {
    const starsContainer = document.querySelector('.stars');
    starsContainer.innerHTML = ''; 

    for (let i = 0; i < 90; i++) { 
        let star = document.createElement('span');
        star.classList.add('star');
        
        let randomX = Math.random() * window.innerWidth; 
        let randomY = Math.random() * window.innerHeight * 0.5; 
        let randomSize = Math.random() * 20 + 10; 

        star.style.left = `${randomX * 0.5}px`;
        star.style.top = `${randomY}px`;
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;
        
        setTimeout(() => {
            star.style.opacity = "1";
            star.style.transform = "translateY(150px)";
        }, 100);

        starsContainer.appendChild(star);
    }
}

function clearStars() {
    document.querySelector('.stars').innerHTML = ''; 
}
