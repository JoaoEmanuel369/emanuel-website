const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


function playSound() {
  const audio = document.getElementById("myAudio");
  audio.play(); // Starts playback
}

function audiocancel() {
  const audio = document.getElementById("myAudio2");
  audio.play(); // Starts playback
}

function copiarTexto() {
  // 1. Pega o texto do elemento
  var texto = document.getElementById("textoParaCopiar").innerText;
  
  // 2. Usa a API do Clipboard para copiar
  navigator.clipboard.writeText(texto).then(() => {
    alert("Texto copiado para a área de transferência!");
  }).catch(err => {
    console.error('Erro ao copiar: ', err);
  });
}

const button = document.getElementById('myhover');
const audio = document.getElementById('hoverSound');

// Play sound on mouse enter
button.addEventListener('mouseenter', () => {
  audio.currentTime = 0; // Reset to start if already playing
  audio.play();
});

// Optional: Stop sound when mouse leaves
button.addEventListener('mouseleave', () => {
  audio.pause();
});

$(document).ready(function() {
  const audio = $("#hoverSound")[0]; // Get the DOM element from jQuery object
  
  $("#myhover").mouseenter(function() {
    audio.currentTime = 0;
    audio.play();
  });
});

