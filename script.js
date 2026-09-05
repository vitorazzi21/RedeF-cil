// ==========================================
// CONTEÚDO DAS AULAS
// ==========================================

const lessons = {

    1: {
        icon: "🏠",
        number: "AULA 01",
        title: "IP Privado",

        description:
            "É o endereço que identifica um aparelho dentro da sua própria rede. Ele normalmente não é usado diretamente para identificar sua casa na Internet.",

        example:
            "Imagine um prédio. Cada apartamento possui um número. O IP privado funciona de maneira parecida: ele identifica cada aparelho dentro da sua rede.",

        technical:
            "Exemplos comuns são 192.168.1.10, 192.168.1.20 e 10.0.0.5."
    },

    2: {
        icon: "🌎",
        number: "AULA 02",
        title: "IP Público",

        description:
            "É o endereço usado para identificar sua conexão perante a Internet.",

        example:
            "Se o IP privado é o número do apartamento, o IP público é como o endereço do prédio inteiro.",

        technical:
            "O IP público é fornecido ou associado pelo provedor e pode ser compartilhado quando a conexão está atrás de CGNAT."
    },

    3: {
        icon: "🔄",
        number: "AULA 03",
        title: "NAT",

        description:
            "NAT é uma tecnologia que permite que vários aparelhos da sua rede utilizem uma conexão com a Internet através de um endereço público.",

        example:
            "Imagine um porteiro. Ele sabe qual pessoa mora em cada apartamento e consegue encaminhar as entregas para o lugar certo.",

        technical:
            "NAT significa Network Address Translation. Ele traduz informações entre endereços privados e públicos."
    },

    4: {
        icon: "🔑",
        number: "AULA 04",
        title: "Login",

        description:
            "O login é uma forma de identificar e autenticar o cliente na rede do provedor.",

        example:
            "Pense em uma catraca. Você apresenta sua identificação para provar que possui autorização para entrar.",

        technical:
            "Em conexões PPPoE, por exemplo, o roteador pode utilizar usuário e senha para autenticar a conexão no servidor do provedor."
    },

    5: {
        icon: "👨‍👩‍👧‍👦",
        number: "AULA 05",
        title: "CGNAT",

        description:
            "CGNAT permite que vários clientes compartilhem um mesmo endereço IPv4 público.",

        example:
            "Imagine vários prédios utilizando o mesmo endereço principal. Cada apartamento continua sendo diferente, mas o endereço externo é compartilhado.",

        technical:
            "CGNAT significa Carrier-Grade NAT. A faixa 100.64.0.0/10 é reservada para uso em redes desse tipo."
    }

};


// ==========================================
// ELEMENTOS
// ==========================================

const modal = document.getElementById("lessonModal");

const modalIcon = document.getElementById("modalIcon");
const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalExample = document.getElementById("modalExample");
const modalTechnical = document.getElementById("modalTechnical");


// ==========================================
// ABRIR AULA
// ==========================================

let currentLesson = null;

function openLesson(id) {

    const lesson = lessons[id];

    if (!lesson) return;

    currentLesson = id;

    modalIcon.textContent = lesson.icon;

    modalNumber.textContent = lesson.number;

    modalTitle.textContent = lesson.title;

    modalDescription.textContent = lesson.description;

    modalExample.textContent = lesson.example;

    modalTechnical.textContent = lesson.technical;

    modal.classList.add("active");

}


// ==========================================
// FECHAR AULA
// ==========================================

function closeLesson() {

    modal.classList.remove("active");

}


// ==========================================
// FINALIZAR AULA
// ==========================================

function finishLesson() {

    if (!currentLesson) return;

    const card = document.querySelector(
        `[data-lesson="${currentLesson}"]`
    );

    if (card) {

        card.classList.add("completed");

        const button = card.querySelector("button");

        if (button) {
            button.textContent = "✓ Aprendido";
        }

    }

    updateProgress();

    closeLesson();

}


// ==========================================
// PROGRESSO
// ==========================================

function updateProgress() {

    const completed =
        document.querySelectorAll(".lesson-card.completed").length;

    const total = 5;

    const percentage =
        Math.round((completed / total) * 100);

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").textContent =
        percentage + "%";

}


// ==========================================
// SCROLL
// ==========================================

function scrollToLessons() {

    document.getElementById("lessons").scrollIntoView({
        behavior: "smooth"
    });

}


// ==========================================
// QUIZ
// ==========================================

const quiz = [

    {
        question:
            "Qual endereço identifica normalmente um aparelho dentro da sua rede?",

        answers: [
            "IP Privado",
            "IP Público",
            "IP do YouTube",
            "IP do servidor DNS"
        ],

        correct: 0
    },

    {
        question:
            "O que representa melhor o IP público?",

        answers: [
            "O número do apartamento",
            "O endereço do prédio",
            "A senha do Wi-Fi",
            "O nome do celular"
        ],

        correct: 1
    },

    {
        question:
            "O que o NAT faz?",

        answers: [
            "Aumenta a velocidade da Internet",
            "Troca a senha do Wi-Fi",
            "Faz tradução entre endereços de rede",
            "Instala fibra óptica"
        ],

        correct: 2
    },

    {
        question:
            "O que é CGNAT?",

        answers: [
            "Um tipo de cabo",
            "Vários clientes compartilhando um IP público",
            "Uma senha de Wi-Fi",
            "Um servidor de jogos"
        ],

        correct: 1
    },

    {
        question:
            "Para que serve o login em uma conexão PPPoE?",

        answers: [
            "Identificar/autenticar o cliente",
            "Aumentar o sinal Wi-Fi",
            "Trocar o canal do roteador",
            "Medir a velocidade"
        ],

        correct: 0
    }

];


let currentQuestion = 0;
let score = 0;

const quizModal = document.getElementById("quizModal");

const quizQuestion =
    document.getElementById("quizQuestion");

const quizAnswers =
    document.getElementById("quizAnswers");

const quizResult =
    document.getElementById("quizResult");


// ==========================================
// INICIAR QUIZ
// ==========================================

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    quizResult.textContent = "";

    quizModal.classList.add("active");

    showQuestion();

}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function showQuestion() {

    const question = quiz[currentQuestion];

    quizQuestion.textContent =
        `${currentQuestion + 1}/${quiz.length} — ${question.question}`;

    quizAnswers.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.onclick = () =>
            answerQuestion(index);

        quizAnswers.appendChild(button);

    });

}


// ==========================================
// RESPONDER
// ==========================================

function answerQuestion(selected) {

    const question = quiz[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selected === question.correct) {

        buttons[selected].classList.add("correct");

        score++;

        quizResult.textContent =
            "🎉 Muito bem! Você acertou.";

    } else {

        buttons[selected].classList.add("wrong");

        buttons[question.correct].classList.add("correct");

        quizResult.textContent =
            "🤔 Quase! A resposta correta está destacada.";

    }


    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < quiz.length) {

            quizResult.textContent = "";

            showQuestion();

        } else {

            finishQuiz();

        }

    }, 1200);

}


// ==========================================
// FINAL DO QUIZ
// ==========================================

function finishQuiz() {

    quizQuestion.textContent =
        "🎉 Quiz concluído!";

    quizAnswers.innerHTML = "";

    quizResult.innerHTML = `
        Você acertou <strong>${score}</strong>
        de <strong>${quiz.length}</strong> perguntas.
        <br><br>
        ${getQuizMessage()}
        <br><br>

        <button
            class="primary-button"
            onclick="closeQuiz()">

            Fechar

        </button>
    `;

}


// ==========================================
// MENSAGEM FINAL
// ==========================================

function getQuizMessage() {

    if (score === 5) {

        return "🏆 Excelente! Você já está dominando os conceitos básicos.";

    }

    if (score >= 3) {

        return "👏 Muito bom! Você já entendeu bastante coisa.";

    }

    return "💪 Continue estudando. Redes ficam fáceis quando você entende os conceitos básicos.";

}


// ==========================================
// FECHAR QUIZ
// ==========================================

function closeQuiz() {

    quizModal.classList.remove("active");

}


// ==========================================
// FECHAR MODAL CLICANDO FORA
// ==========================================

window.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeLesson();

    }

    if (event.target === quizModal) {

        closeQuiz();

    }

});