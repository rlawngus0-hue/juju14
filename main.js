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

    // Menu Recommendation Logic with Images
    const recommendBtn = document.getElementById('recommend-btn');
    const menuDisplay = document.getElementById('menu-display');

    const menus = [
        { name: '치킨', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80' },
        { name: '삼겹살', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1621919051065-27a3666d9c6c?w=500&q=80' },
        { name: '피자', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80' },
        { name: '마라탕', category: 'CHINESE', img: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?w=500&q=80' },
        { name: '초밥', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80' },
        { name: '김치찌개', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1588675646184-f5b0b0b0b2de?w=500&q=80' },
        { name: '파스타', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=500&q=80' },
        { name: '돈카츠', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1623595110708-76b2f8d70711?w=500&q=80' },
        { name: '떡볶이', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500&q=80' },
        { name: '햄버거', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
        { name: '짜장면', category: 'CHINESE', img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500&q=80' },
        { name: '보쌈', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1628106278729-2895690b639e?w=500&q=80' },
        { name: '쌀국수', category: 'ASIAN', img: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=500&q=80' },
        { name: '텐동', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?w=500&q=80' },
        { name: '라멘', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&q=80' },
        { name: '스테이크', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=500&q=80' },
        { name: '불고기', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1634024823521-396a92849b25?w=500&q=80' },
        { name: '탄탄면', category: 'CHINESE', img: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?w=500&q=80' },
        { name: '규동', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=500&q=80' },
        { name: '감바스', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1604152135912-04a002e7a695?w=500&q=80' }
    ];

    if (recommendBtn && menuDisplay) {
        const getRandomMenu = () => menus[Math.floor(Math.random() * menus.length)];

        const displayMenu = (menu, isFinal = false) => {
            menuDisplay.innerHTML = `
                <div class="result-card ${isFinal ? 'final-anim' : ''}">
                    <div class="result-img-wrapper">
                        <img src="${menu.img}" alt="${menu.name}" class="result-img">
                    </div>
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
                        displayMenu(getRandomMenu(), true);
                        recommendBtn.disabled = false;
                    }, 100);
                }
            }, 60);
        });
    }
});