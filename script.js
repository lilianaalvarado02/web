document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    
    envelope.addEventListener('click', function() {
        this.classList.toggle('open');
        
        // Resetear si se vuelve a hacer clic
        if (!this.classList.contains('open')) {
            setTimeout(() => {
                this.style.transform = 'none';
            }, 800);
        }
    });
});