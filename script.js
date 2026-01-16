// CONFIGURAÇÃO DOS SLIDES (Mantenha seus nomes de arquivos aqui)
const slides = [
    { src: "Entrada do restaurante.jpg", text: "Entrada do Restaurante" },
    { src: "Caminho percorrido do drive-thru.jpg", text: "Entrada do nosso Drive-Thru" },
    { src: "Área infantil.jpg", text: "Nossa Área Infantil" },
    { src: "Decoração do restaurante.jpg", text: "Área para tirar suas fotos" },
    { src: "Tamanho do restaurante.jpg", text: "Temos espaço para todas as famílias" },
    { src: "Cárdapio especial hamburguer.jpg", text: "Cardápio de Hamburgueres" },
    { src: "Cardápio especial Sushi.jpg", text: "Cardápio de Sushi" }
];

let indexAtual = 0;

// ENTRAR NO SITE
function entrarNoSite() {
    const nome = document.getElementById("nome-usuario").value;
    if (nome.trim() !== "") {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("conteudo-principal").classList.remove("com-blur");
        document.getElementById("conteudo-principal").style.pointerEvents = "auto";
        document.getElementById("display-nome").innerText = nome;
        document.getElementById("hidden-nome").value = nome;
    }
}

// MOSTRAR FEEDBACK
function mostrarFeedback() {
    document.getElementById("pergunta-feedback").classList.add("hidden");
    const area = document.getElementById("area-feedback-oculta");
    area.classList.remove("hidden");
    area.scrollIntoView({ behavior: 'smooth' });
}

// SLIDER
function mostrarSlide(n) {
    indexAtual = (n + slides.length) % slides.length;
    document.getElementById("slide-img").src = slides[indexAtual].src;
    document.getElementById("slide-text").innerText = slides[indexAtual].text;
}
function mudarSlide(n) { mostrarSlide(indexAtual + n); }
setInterval(() => mudarSlide(1), 5000);

// ESTRELAS
const estrelas = document.querySelectorAll("#star-box i");
estrelas.forEach((star, i) => {
    star.addEventListener("click", (e) => {
        const rect = star.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        let nota = (clickX < rect.width / 2) ? i + 0.5 : i + 1;
        
        document.getElementById("hidden-estrelas").value = nota + " Estrelas";
        document.getElementById("nota-display").innerText = "Nota selecionada: " + nota;
        
        estrelas.forEach((s, idx) => {
            s.className = "far fa-star";
            if (nota >= idx + 1) s.className = "fas fa-star active";
            else if (nota > idx) s.className = "fas fa-star-half-alt active";
        });
    });
});

// CONTADOR E VALIDAÇÃO
document.getElementById('mensagem').addEventListener('input', function() {
    document.getElementById('count').innerText = this.value.length;
});

window.onload = () => mostrarSlide(0);