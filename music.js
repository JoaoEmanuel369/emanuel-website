const musica = new Audio('assets/audio/meubichinhodecaixa.mp3');
const btn = document.getElementById('btn-musica')
musica.loop = true;

musica.volume = 0.3;

const img = document.getElementById('boxy');
const box = document.getElementById('boxy2');

// 1. Tenta recuperar o tempo de onde parou
const tempoSalvo = localStorage.getItem('musica-tempo');
if (tempoSalvo) {
    musica.currentTime = parseFloat(tempoSalvo);
}

// 2. Salva o tempo atual a cada segundo
setInterval(() => {
    localStorage.setItem('musica-tempo', musica.currentTime);
}, 1000);

// 3. Função para dar o Play (Precisa de um clique do usuário!)
btn.addEventListener('click', () => {
    musica.play();
    img.style.display = 'block';
    box.style.display = 'block';
}, { once: true }); // Executa apenas uma vez