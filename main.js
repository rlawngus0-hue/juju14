
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Theme logic
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        htmlElement.classList.add('light-theme');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('light-theme');
        const isLight = htmlElement.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
    });

    const getRandomColor = () => {
        const hue = Math.floor(Math.random() * 360);
        return `oklch(70% 0.25 ${hue})`;
    };

    const generatePowerballNumbers = () => {
        const whiteBalls = new Set();
        while (whiteBalls.size < 5) {
            whiteBalls.add(Math.floor(Math.random() * 69) + 1);
        }
        
        const powerball = Math.floor(Math.random() * 26) + 1;

        return {
            whiteBalls: Array.from(whiteBalls).sort((a, b) => a - b),
            powerball: powerball
        };
    };

    const displayNumbers = (numbers) => {
        lottoNumbersContainer.innerHTML = '';
        
        // Display white balls
        numbers.whiteBalls.forEach((number, index) => {
            const numberEl = document.createElement('div');
            numberEl.classList.add('lotto-ball');
            numberEl.textContent = number;
            numberEl.style.backgroundColor = getRandomColor();
            numberEl.style.animationDelay = `${index * 0.1}s`;
            lottoNumbersContainer.appendChild(numberEl);
        });

        // Display Powerball
        const powerballEl = document.createElement('div');
        powerballEl.classList.add('lotto-ball', 'powerball');
        powerballEl.textContent = numbers.powerball;
        powerballEl.style.animationDelay = `${numbers.whiteBalls.length * 0.1}s`;
        lottoNumbersContainer.appendChild(powerballEl);
    };

    generateBtn.addEventListener('click', () => {
        const numbers = generatePowerballNumbers();
        displayNumbers(numbers);
    });

    // Initial generation
    const initialNumbers = generatePowerballNumbers();
    displayNumbers(initialNumbers);
});
