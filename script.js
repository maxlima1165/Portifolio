document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const hiddenContent = item.querySelector('.hidden');
        if (hiddenContent) {
            hiddenContent.classList.toggle('show');
        }
    });
});
