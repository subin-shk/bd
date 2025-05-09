document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card');
    const closeBtn = document.querySelector('.close-card-btn');
    const audio = document.getElementById('birthdaySong');
    const audioToggle = document.getElementById('audioToggle');
    let isPlaying = false;

    // Card flip functionality
    card.addEventListener('click', (e) => {
        if (e.target !== closeBtn) {
            card.classList.add('open');
            if (!isPlaying) {
                audio.play();
                audioToggle.querySelector('.icon').textContent = '🔊';
                isPlaying = true;
            }
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        card.classList.remove('open');
    });

    // Audio controls
    audioToggle.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            audioToggle.querySelector('.icon').textContent = '🔈';
        } else {
            audio.play();
            audioToggle.querySelector('.icon').textContent = '🔊';
        }
        isPlaying = !isPlaying;
    });

    // Create balloons
    const balloonContainer = document.querySelector('.balloon-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeead'];

    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

        balloon.addEventListener('click', () => {
            balloon.style.transform = 'scale(0)';
            balloon.style.opacity = '0';
            setTimeout(() => balloon.remove(), 300);
        });

        balloonContainer.appendChild(balloon);
    }

    // Create initial balloons
    for (let i = 0; i < 10; i++) {
        createBalloon();
    }

    // Add new balloons periodically
    setInterval(createBalloon, 3000);

    // Make cute animals interactive
    const animals = document.querySelectorAll('.dancing-cat, .dancing-bunny, .dancing-puppy');
    animals.forEach(animal => {
        animal.addEventListener('click', () => {
            animal.style.transform = 'scale(1.2)';
            setTimeout(() => {
                animal.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Create floating hearts
    const heartsContainer = document.querySelector('.hearts-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 4000);
    }

    // Create hearts periodically
    setInterval(createHeart, 1000);
});