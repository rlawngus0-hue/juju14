document.addEventListener('DOMContentLoaded', () => {
    // Theme logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        htmlElement.classList.add('light-theme');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        if (themeToggle) themeToggle.textContent = '🌙';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('light-theme');
            const isLight = htmlElement.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeToggle.textContent = isLight ? '☀️' : '🌙';
        });
    }

    // Menu Recommendation Logic
    const recommendBtn = document.getElementById('recommend-btn');
    const menuDisplay = document.getElementById('menu-display');

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
        { name: '스테이크', category: 'WESTERN' },
        { name: '불고기', category: 'KOREAN' },
        { name: '탄탄면', category: 'CHINESE' },
        { name: '규동', category: 'JAPANESE' },
        { name: '감바스', category: 'WESTERN' }
    ];

    if (recommendBtn && menuDisplay) {
        const getRandomMenu = () => menus[Math.floor(Math.random() * menus.length)];

        const displayMenu = (menu) => {
            menuDisplay.innerHTML = `
                <div class="result-card">
                    <p class="result-category">${menu.category}</p>
                    <h2 class="result-menu">${menu.name}</h2>
                </div>
            `;
        };

        recommendBtn.addEventListener('click', () => {
            recommendBtn.disabled = true;
            let count = 0;
            const interval = setInterval(() => {
                displayMenu(getRandomMenu());
                count++;
                if (count >= 15) {
                    clearInterval(interval);
                    setTimeout(() => {
                        displayMenu(getRandomMenu());
                        recommendBtn.disabled = false;
                    }, 100);
                }
            }, 60);
        });
    }
});