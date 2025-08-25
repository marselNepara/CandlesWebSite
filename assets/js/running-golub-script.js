const img = document.getElementById('banner-img');
const container = document.querySelector('.banner-img-block');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 1.5;
    const centerY = rect.top + rect.height / 1.5;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const maxOffset = 15;

    const moveX = -deltaX / 10;
    const moveY = -deltaY /  10;

    const offsetX = Math.max(-maxOffset, Math.min(maxOffset, moveX));
    const offsetY = Math.max(-maxOffset, Math.min(maxOffset, moveY));

    img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

container.addEventListener('mouseleave', () => {
    img.style.transform = 'translate(0, 0)';
});