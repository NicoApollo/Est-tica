document.addEventListener('DOMContentLoaded', () => {
    // Controle do Carrossel Infinito
    const track = document.querySelector('.carrossel-track');
    const container = document.querySelector('.carrossel-container');

    if (container && track) {
        container.addEventListener('mouseenter', () => {
            track.style.animationPlayState = 'paused';
        });
        container.addEventListener('mouseleave', () => {
            track.style.animationPlayState = 'running';
        });
    }

    // Lógica para os Modais (Pop-ups) se existirem na página
    const closeBtns = document.querySelectorAll('.close-modal, .close-video, .close-profile');
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay, .video-modal, .profile-modal');
            if(modal) modal.style.display = 'none';
            
            // Se for vídeo, pausa ao fechar
            const video = modal.querySelector('video');
            if(video) {
                video.pause();
                video.src = "";
            }
        });
    });
});