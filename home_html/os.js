const sistema = document.getElementById('sistema-operacional');
const btn_fechar_os = document.getElementById('fechar-os');
const btn_abrir_os = document.getElementById('abrir-os');
const sfx_cancel = new Audio('/assets/audio/cancel.mp3');
const sfx_confirm = new Audio('/assets/audio/click.mp3')
const canvas = document.getElementById('quadro');
const sfx_win = new Audio('/assets/audio/win_start.mp3')

let dragging = false;
let offsetX, offsetY;

sistema.addEventListener("mousedown", (e) =>{
    dragging = true;

    offsetX = e.clientX - sistema.offsetLeft;
    offsetY = e.clientY - sistema.offsetTop;
});

document.addEventListener("mousemove", (e) =>{
    if (dragging){
        sistema.style.left = `${e.clientX - offsetX}px`;
        sistema.style.top = `${e.clientY - offsetY}px`;
    }
});

canvas.addEventListener("mousemove", () =>{
    dragging = false;
})

document.addEventListener("mouseup", () => {
  dragging = false;
  sistema.style.opacity = "1";
});

btn_fechar_os.addEventListener("click", () =>{
    sfx_cancel.play();
    sistema.style.display = 'none';
})

btn_abrir_os.addEventListener("click", () =>{
    sfx_confirm.play();
    sistema.style.display = 'block';
})

/*----------Notepad*/

const btn_fechar_note = document.getElementById('btn-fechar-notepad');
const notepad = document.getElementById('notepad');
const btn_abrir_note = document.getElementById('btn-abrir-notepad');

btn_fechar_note.addEventListener("click", () =>{
    sfx_cancel.play();
    notepad.style.display = 'none';
})

btn_abrir_note.addEventListener("click", () =>{
    sfx_confirm.play();
    notepad.style.display = 'block';
})

/*---paint*/
const fechar_paint = document.getElementById('btn-fechar-paint');
const ctx = canvas.getContext('2d');
let desenhando = false;
const paint = document.getElementById('paint');
const abrir_paint = document.getElementById('abrir-paint');

abrir_paint.addEventListener("click", () =>{
    sfx_confirm.play();
    paint.style.display = 'block';
})


fechar_paint.addEventListener("click", () =>{
    sfx_cancel.play();
    paint.style.display = 'none';
})

// Configurações iniciais do traço
ctx.lineCap = 'round'; // Ponta do pincel arredondada
ctx.lineJoin = 'round';

function iniciar(e) {
    desenhando = true;
    desenhar(e); // Inicia o ponto onde clicou
}

function parar() {
    desenhando = false;
    ctx.beginPath(); // Reseta o caminho para não ligar traços soltos
}

function desenhar(e) {
    if (!desenhando) return;

    // Pega as cores e tamanhos dos inputs
    ctx.strokeStyle = document.getElementById('cor').value;
    ctx.lineWidth = 5;

    // Localização do mouse relativa ao canvas
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function limpar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Ouvintes de eventos
canvas.addEventListener('mousedown', iniciar);
canvas.addEventListener('mousemove', desenhar);
canvas.addEventListener('mouseup', parar);