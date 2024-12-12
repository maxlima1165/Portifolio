document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
        const hiddenContent = item.querySelector('.hidden');
        if (hiddenContent) {
            hiddenContent.classList.toggle('show');
        }
    });
});


window.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.service-item img');
    const windowHeight = window.innerHeight;

    images.forEach(img => {
        const position = img.getBoundingClientRect().top;

        // Verifica se a imagem está visível na tela
        if (position < windowHeight - 100) {
            img.classList.add('fade-in'); // Adiciona a classe de animação
        }
    });
});
