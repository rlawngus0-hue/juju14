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

    // Menu Recommendation Logic with High-Quality Images
    const recommendBtn = document.getElementById('recommend-btn');
    const menuDisplay = document.getElementById('menu-display');

    const menus = [
        { name: '치킨', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80' },
        { name: '삼겹살', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80' },
        { name: '피자', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1593504049359-74330189a355?w=800&q=80' },
        { name: '마라탕', category: 'CHINESE', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80' },
        { name: '초밥', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80' },
        { name: '김치찌개', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1583219483746-b5b46f94c7ee?w=800&q=80' },
        { name: '파스타', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80' },
        { name: '돈카츠', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=800&q=80' },
        { name: '떡볶이', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1623961990059-28355e22c889?w=800&q=80' },
        { name: '햄버거', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80' },
        { name: '짜장면', category: 'CHINESE', img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&q=80' },
        { name: '보쌈', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1601356616077-6957284f729c?w=800&q=80' },
        { name: '쌀국수', category: 'ASIAN', img: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80' },
        { name: '텐동', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1615361200141-f4500043e957?w=800&q=80' },
        { name: '라멘', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80' },
        { name: '스테이크', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80' },
        { name: '불고기', category: 'KOREAN', img: 'https://images.unsplash.com/photo-1634024823521-396a92849b25?w=800&q=80' },
        { name: '탄탄면', category: 'CHINESE', img: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&q=80' },
        { name: '규동', category: 'JAPANESE', img: 'https://images.unsplash.com/photo-1552611052-33e04de081de?w=800&q=80' },
        { name: '감바스', category: 'WESTERN', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?w=800&q=80' }
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