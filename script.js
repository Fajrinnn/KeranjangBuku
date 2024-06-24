const banners = [
    'images/baner1.png',
    'images/baner2.png',
    'images/baner3.png'
];
let currentBannerIndex = 0;

const bannerImg = document.getElementById('banner-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
    currentBannerIndex = (currentBannerIndex === 0) ? banners.length - 1 : currentBannerIndex - 1;
    bannerImg.src = banners[currentBannerIndex];
});

nextBtn.addEventListener('click', () => {
    currentBannerIndex = (currentBannerIndex === banners.length - 1) ? 0 : currentBannerIndex + 1;
    bannerImg.src = banners[currentBannerIndex];
});
// script.js
const profileLink = document.getElementById('profile-link');
profileLink.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah pengalihan standar
    window.location.href = 'profiles/profile.html'; // Mengarahkan ke profile.html
});