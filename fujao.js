const botao = document.getElementById('fujao');
const sfx = new Audio('assets/audio/cancel.mp3')

botao.addEventListener('mouseover', () => {
    sfx.play('assets/audio/cancel.mp3');
  // 1. Calcular a largura e altura disponível na janela (viewport)
  // Subtraímos o tamanho do botão para ele não sair parcialmente da tela
  const abaixaLargura = window.innerWidth - botao.offsetWidth;
  const abaixaAltura = window.innerHeight - botao.offsetHeight;

  // 2. Gerar posições aleatórias
  const novaPosicaoX = Math.floor(Math.random() * abaixaLargura);
  const novaPosicaoY = Math.floor(Math.random() * abaixaAltura);

  // 3. Aplicar as novas coordenadas ao estilo do botão
  botao.style.left = `${novaPosicaoX}px`;
  botao.style.top = `${novaPosicaoY}px`;
});