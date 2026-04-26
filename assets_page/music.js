const musica = new Audio('/assets/audio/caim.mp3');
musica.loop = true;
musica.volume = 0.3;

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
document.addEventListener('click', () => {
    musica.play();
}, { once: true }); // Executa apenas uma vez