const loveButton = document.getElementById('love-button');
const messageContainer = document.getElementById('message-container');
const phrases = [
    "Você é a razão do meu sorriso!",
    "Te amo mais do que tudo!",
    "Meu amor por você é infinito!",
    "Você me completa!",
    "Cada momento com você é mágico!",
    "Eu sou feliz só por ter você!",
    "Você é meu mundo!",
    "Sempre vou te amar!",
    "Você é a melhor coisa que já aconteceu comigo!",
    "Nunca vou deixar de te amar!"
];

// Função para exibir uma frase aleatória
function showRandomMessage() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    messageContainer.textContent = randomPhrase;
}

// Evento de clique no botão
loveButton.addEventListener('click', () => {
    // Exibe uma frase aleatória
    showRandomMessage();
});

// Função para criar corações chovendo na tela
function createRainHearts() {
    const heart = document.createElement('div');
    heart.classList.add('rain-heart');
    heart.textContent = '❤️';

    // Posição aleatória no topo da tela
    const leftPosition = Math.random() * window.innerWidth;
    heart.style.left = leftPosition + 'px';
    heart.style.top = '-50px'; // Começa fora da tela

    // Animação de queda
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Dura entre 2 e 5 segundos
    document.body.appendChild(heart);

    // Remove o coração após a animação
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Cria corações chovendo a cada 300ms
setInterval(createRainHearts, 300);
