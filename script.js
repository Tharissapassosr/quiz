const perguntas = [
    {
        pergunta: "Quem foi o primeiro imperador romano?",
        opcoes: ["Júlio César", "Otávio Augusto", "Nero", "Calígula"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Augustus_Bevilacqua_Glyptothek_Munich_317.jpg/800px-Augustus_Bevilacqua_Glyptothek_Munich_317.jpg"
    },
    {
        pergunta: "Em que ano ocorreu a queda do Muro de Berlim?",
        opcoes: ["1985", "1987", "1989", "1991"],
        resposta: 2,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Berlin_Wall_Brandenburger_Tor.jpg/800px-Berlin_Wall_Brandenburger_Tor.jpg"
    },
    {
        pergunta: "Quem foi o líder da independência da Índia?",
        opcoes: ["Jawaharlal Nehru", "Mahatma Gandhi", "Indira Gandhi", "Subhas Chandra Bose"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/7/79/Mahatma-Gandhi%2C_studio%2C_1931.jpg"
    },
    {
        pergunta: "Em que ano começou a Primeira Guerra Mundial?",
        opcoes: ["1910", "1914", "1918", "1920"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Infantry_advancing_in_trenches.jpg/800px-Infantry_advancing_in_trenches.jpg"
    },
    {
        pergunta: "Qual civilização construiu Machu Picchu?",
        opcoes: ["Astecas", "Maias", "Incas", "Olmecas"],
        resposta: 2,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/80_-_Machu_Picchu_-_Juin_2009.jpg/800px-80_-_Machu_Picchu_-_Juin_2009.jpg"
    },
    {
        pergunta: "Quem foi o presidente dos EUA durante a Guerra Civil Americana?",
        opcoes: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
        resposta: 2,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Abraham_Lincoln_O-77_matte_collodion_print.jpg"
    },
    {
        pergunta: "Qual império foi governado por Genghis Khan?",
        opcoes: ["Império Romano", "Império Mongol", "Império Otomano", "Império Persa"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/3/39/YuanEmperorAlbumGenghisPortrait.jpg"
    },
    {
        pergunta: "Em que ano o Brasil proclamou a República?",
        opcoes: ["1870", "1889", "1894", "1901"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/16/Proclama%C3%A7%C3%A3o_da_Rep%C3%BAblica.jpg"
    },
    {
        pergunta: "Quem foi o faraó que construiu a Grande Pirâmide de Gizé?",
        opcoes: ["Tutancâmon", "Ramsés II", "Quéops", "Cleópatra"],
        resposta: 2,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg"
    },
    {
        pergunta: "Em que ano ocorreu a Revolução Francesa?",
        opcoes: ["1776", "1789", "1812", "1848"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Prise_de_la_Bastille.jpg"
    },
    {
        pergunta: "Quem foi o explorador que chegou à Índia contornando a África?",
        opcoes: ["Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães", "Pedro Álvares Cabral"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/14/Vasco_da_Gama_-_Museu_Nacional_de_Arte_Antiga.png"
    },
    {
        pergunta: "Qual foi a primeira capital do Brasil?",
        opcoes: ["Rio de Janeiro", "Salvador", "Brasília", "Olinda"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Pelourinho_Salvador_Bahia_Brazil.jpg"
    },
    {
        pergunta: "Quem foi o líder soviético durante a Segunda Guerra Mundial?",
        opcoes: ["Lênin", "Stálin", "Trotsky", "Gorbachev"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/2/25/Joseph_Stalin_in_Front_of_Kremlin_Wall.jpg"
    },
    {
        pergunta: "Em que ano começou a Segunda Guerra Mundial?",
        opcoes: ["1937", "1939", "1941", "1945"],
        resposta: 1,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Invasion_of_Poland%2C_1939.jpg"
    },
    {
        pergunta: "Quem foi a primeira mulher a ganhar um Prêmio Nobel?",
        opcoes: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Florence Nightingale"],
        resposta: 0,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Marie_Curie_c1920.jpg"
    },
    {
        pergunta: "Qual império construiu a Muralha da China?",
        opcoes: ["Dinastia Han", "Dinastia Ming", "Dinastia Qin", "Dinastia Tang"],
        resposta: 2,
        imagem: "https://upload.wikimedia.org/wikipedia/commons/1/10/20090529_Great_Wall_8185.jpg"
    }
];

let indicePergunta = 0;
let pontuacao = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");
const questionImage = document.getElementById("question-image");

function mostrarPergunta() {
    nextBtn.disabled = true;
    const perguntaAtual = perguntas[indicePergunta];
    questionEl.textContent = perguntaAtual.pergunta;
    questionImage.src = perguntaAtual.imagem;
    optionsEl.innerHTML = "";

    perguntaAtual.opcoes.forEach((opcao, index) => {
        const button = document.createElement("button");
        button.textContent = opcao;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selecionarResposta(index, button));
        optionsEl.appendChild(button);
    });
}

function selecionarResposta(index, button) {
    const respostaCorreta = perguntas[indicePergunta].resposta;
    const botoes = document.querySelectorAll(".option-btn");

    botoes.forEach(btn => btn.disabled = true);

    if (index === respostaCorreta) {
        button.classList.add("correct");
        pontuacao++;
    } else {
        button.classList.add("incorrect");
        botoes[respostaCorreta].classList.add("correct");
    }

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
    indicePergunta++;
    if (indicePergunta < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreEl.textContent = `Você acertou ${pontuacao} de ${perguntas.length} questões.`;
}

mostrarPergunta();
