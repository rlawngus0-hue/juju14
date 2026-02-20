document.addEventListener('DOMContentLoaded', () => {
    const recommendBtn = document.getElementById('recommend-btn');
    const menuDisplay = document.getElementById('menu-display');
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

    const menus = [
        { name: '치킨', category: 'KOREAN' },
        { name: '삼겹살', category: 'KOREAN' },
        { name: '피자', category: 'WESTERN' },
        { name: '마라탕', category: 'CHINESE' },
        { name: '초밥', category: 'JAPANESE' },
        { name: '김치찌개', category: 'KOREAN' },
        { name: '파스타', category: 'WESTERN' },
        { name: '돈카츠', category: 'JAPANESE' },
        { name: '떡볶이', category: 'KOREAN' },
        { name: '햄버거', category: 'WESTERN' },
        { name: '짜장면', category: 'CHINESE' },
        { name: '보쌈', category: 'KOREAN' },
        { name: '쌀국수', category: 'ASIAN' },
        { name: '텐동', category: 'JAPANESE' },
        { name: '라멘', category: 'JAPANESE' },
        { name: '스테이크', category: 'WESTERN' }
    ];

    const getRandomMenu = () => {
        const randomIndex = Math.floor(Math.random() * menus.length);
        return menus[randomIndex];
    };

    const displayMenu = (menu) => {
        menuDisplay.innerHTML = `
            <div class="result-card">
                <p class="result-category">${menu.category}</p>
                <h2 class="result-menu">${menu.name}</h2>
            </div>
        `;
    };

    recommendBtn.addEventListener('click', () => {
        // Simple shuffle animation
        let count = 0;
        const interval = setInterval(() => {
            displayMenu(getRandomMenu());
            count++;
            if (count > 10) {
                clearInterval(interval);
                displayMenu(getRandomMenu());
            }
        }, 50);
    });
});
