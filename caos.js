window.addEventListener('load', () => {
  const images = document.querySelectorAll('img.misc');
  const positionedElements = [];
  const maxAttempts = 50; // Limite de tentativas para evitar loops infinitos

  images.forEach(img => {
    let attempts = 0;
    let placed = false;

    // Garante que a imagem tenha o estilo básico
    img.style.position = 'absolute';

    while (!placed && attempts < maxAttempts) {
      // 1. Gera coordenadas aleatórias
      const maxX = window.innerWidth - img.offsetWidth;
      const maxY = window.innerHeight - img.offsetHeight;
      
      const x = Math.floor(Math.random() * Math.max(0, maxX));
      const y = Math.floor(Math.random() * Math.max(0, maxY));

      const rectA = {
        left: x,
        top: y,
        right: x + img.offsetWidth,
        bottom: y + img.offsetHeight
      };

      // 2. Verifica colisão com imagens já posicionadas
      const collision = positionedElements.some(rectB => {
        // Adicionamos uma margem de 20px para garantir que não fiquem "perto"
        const margin = 20; 
        return !(rectA.right + margin < rectB.left || 
                 rectA.left - margin > rectB.right || 
                 rectA.bottom + margin < rectB.top || 
                 rectA.top - margin > rectB.bottom);
      });

      if (!collision || attempts === maxAttempts - 1) {
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        img.style.rotate = `${y}deg`;
        positionedElements.push(rectA);
        placed = true;
      }

      attempts++;
    }
  });
});


