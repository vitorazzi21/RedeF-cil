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
// ELEMENTOS DAS AULAS
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

    const progressBar =
        document.getElementById("progressBar");

    const progressText =
        document.getElementById("progressText");


    if (progressBar) {
        progressBar.style.width =
            percentage + "%";
    }


    if (progressText) {
        progressText.textContent =
            percentage + "%";
    }

}


// ==========================================
// SCROLL
// ==========================================

function scrollToLessons() {

    const lessonsSection =
        document.getElementById("lessons");

    if (!lessonsSection) return;

    lessonsSection.scrollIntoView({
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

const quizModal =
    document.getElementById("quizModal");

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

    if (quizResult) {
        quizResult.textContent = "";
    }

    if (quizModal) {
        quizModal.classList.add("active");
    }

    showQuestion();

}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function showQuestion() {

    const question = quiz[currentQuestion];

    if (!question) return;


    if (quizQuestion) {

        quizQuestion.textContent =
            `${currentQuestion + 1}/${quiz.length} — ${question.question}`;

    }


    if (!quizAnswers) return;

    quizAnswers.innerHTML = "";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.onclick = () =>
            answerQuestion(index);

        quizAnswers.appendChild(button);

    });

}


// ==========================================
// RESPONDER QUIZ
// ==========================================

function answerQuestion(selected) {

    const question = quiz[currentQuestion];

    if (!question) return;


    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selected === question.correct) {

        if (buttons[selected]) {
            buttons[selected].classList.add("correct");
        }

        score++;

        if (quizResult) {
            quizResult.textContent =
                "🎉 Muito bem! Você acertou.";
        }

    } else {

        if (buttons[selected]) {
            buttons[selected].classList.add("wrong");
        }

        if (buttons[question.correct]) {
            buttons[question.correct]
                .classList.add("correct");
        }

        if (quizResult) {
            quizResult.textContent =
                "🤔 Quase! A resposta correta está destacada.";
        }

    }


    setTimeout(() => {

        currentQuestion++;


        if (currentQuestion < quiz.length) {

            if (quizResult) {
                quizResult.textContent = "";
            }

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

    if (quizQuestion) {

        quizQuestion.textContent =
            "🎉 Quiz concluído!";

    }


    if (quizAnswers) {

        quizAnswers.innerHTML = "";

    }


    if (quizResult) {

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

}


// ==========================================
// MENSAGEM FINAL DO QUIZ
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

    if (quizModal) {

        quizModal.classList.remove("active");

    }

}


// ==========================================
// FECHAR MODAL DAS AULAS
// CLICANDO FORA
// ==========================================

window.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeLesson();

    }


    if (event.target === quizModal) {

        closeQuiz();

    }

});


// ==========================================
// CONTEÚDOS AVANÇADOS
// ==========================================

const advancedLessons = {

    titularidade: {

        icon: "🔄",

        category: "CADASTRO",

        title: "Troca de Titularidade",

        description:
            "A troca de titularidade acontece quando a conexão deixa de ficar no nome de uma pessoa e passa para outra.",

        example:
            "Imagine uma casa alugada. João era o responsável pela Internet, mas se mudou. Maria passa a morar na casa e agora será a nova responsável pelo contrato.",

        support:
            "No processo utilizado pela operação, o cadastro do cliente muda e o PPPoE antigo pode ser substituído pelo PPPoE relacionado ao novo titular. Assim, a autenticação da conexão fica vinculada corretamente ao novo cliente."

    },


    pppoe: {

        icon: "🔑",

        category: "AUTENTICAÇÃO",

        title: "PPPoE",

        description:
            "O PPPoE é uma forma utilizada por provedores para autenticar a conexão do cliente utilizando usuário e senha.",

        example:
            "Pense no PPPoE como um crachá. O roteador apresenta esse crachá ao provedor para provar qual cliente está tentando acessar a rede.",

        support:
            "Quando ocorre uma troca de titularidade, o login PPPoE pode mudar porque a autenticação precisa ficar associada ao novo cadastro. O processo exato depende das regras e sistemas utilizados pelo provedor."

    },


    onu: {

        icon: "📦",

        category: "EQUIPAMENTOS",

        title: "ONU",

        description:
            "ONU significa Optical Network Unit. É um equipamento que participa da comunicação entre a rede óptica do provedor e a rede do cliente.",

        example:
            "A fibra chega trazendo informação através de luz. A ONU ajuda a transformar essa comunicação óptica em algo que os equipamentos da rede conseguem utilizar.",

        support:
            "Ao atender um cliente, é importante verificar se a ONU está registrada, se possui sinal óptico adequado e se apresenta alarmes como LOS."

    },


    ont: {

        icon: "📡",

        category: "EQUIPAMENTOS",

        title: "ONT",

        description:
            "ONT significa Optical Network Terminal. É o terminal óptico instalado no lado do assinante.",

        example:
            "Pense na ONT como o equipamento que recebe a fibra dentro da casa e entrega a conexão para a rede do cliente.",

        support:
            "ONT é, tecnicamente, um tipo de ONU usado como terminal no cliente. Alguns modelos possuem apenas portas de rede, enquanto outros também possuem Wi-Fi, telefonia e funções de roteador."

    },


    roteador: {

        icon: "📶",

        category: "EQUIPAMENTOS",

        title: "Roteador",

        description:
            "O roteador cria e organiza a rede local do cliente e encaminha o tráfego entre essa rede e outras redes.",

        example:
            "Imagine um guarda de trânsito. Ele observa para onde cada informação precisa ir e manda cada uma para o caminho correto.",

        support:
            "No atendimento podemos verificar autenticação, endereço WAN, DHCP, Wi-Fi, dispositivos conectados, portas LAN e outras configurações."

    },


    pto: {

        icon: "🔌",

        category: "FIBRA",

        title: "PTO",

        description:
            "PTO significa Ponto de Terminação Óptica. É o ponto onde a fibra da instalação termina dentro do local do cliente.",

        example:
            "É parecido com uma tomada. A fibra chega até aquele ponto e, a partir dali, um cordão óptico conecta a PTO ao equipamento do cliente.",

        support:
            "Problemas físicos na PTO, no conector ou no cordão óptico podem afetar o nível de sinal e causar instabilidade ou perda de conexão."

    },


    gpon: {

        icon: "💚",

        category: "TECNOLOGIA",

        title: "GPON",

        description:
            "GPON é uma tecnologia de rede óptica passiva muito utilizada por provedores para fornecer Internet através de fibra.",

        example:
            "Imagine uma estrada principal de fibra sendo dividida para atender várias casas.",

        support:
            "Os equipamentos utilizados precisam ser compatíveis com a tecnologia GPON e autorizados na rede correspondente."

    },


    epon: {

        icon: "🟠",

        category: "TECNOLOGIA",

        title: "EPON",

        description:
            "EPON também é uma tecnologia de rede óptica passiva, mas utiliza uma arquitetura e padrões diferentes do GPON.",

        example:
            "GPON e EPON são como dois sistemas de transporte diferentes. Os dois levam o usuário ao destino, mas utilizam regras e equipamentos compatíveis com cada sistema.",

        support:
            "Um equipamento EPON não deve ser tratado automaticamente como se fosse GPON. É necessário utilizar o processo e o sistema compatíveis com aquela rede."

    },


    ramal: {

        icon: "☎️",

        category: "TELEFONIA",

        title: "O que é um Ramal?",

        description:
            "O ramal é uma identificação utilizada dentro de um sistema de telefonia.",

        example:
            "Imagine uma empresa com um número principal. Cada funcionário possui um número interno, como 101, 102 ou 103. Esses números são ramais.",

        support:
            "Em telefonia IP, o ramal pode possuir usuário, senha e servidor SIP. Essas informações permitem que um telefone ou aplicativo seja registrado no sistema."

    },


    microsip: {

        icon: "💻",

        category: "TELEFONIA",

        title: "O que é MicroSIP?",

        description:
            "MicroSIP é um softphone, ou seja, um programa que permite utilizar o computador como telefone através de tecnologia SIP.",

        example:
            "É como transformar o computador em um telefone. Você digita um número no programa e consegue realizar uma chamada utilizando a rede.",

        support:
            "Para funcionar, normalmente o MicroSIP precisa receber as informações da conta SIP, como usuário ou ramal, senha e servidor."

    },


    ramalMicrosip: {

        icon: "🔗",

        category: "TELEFONIA",

        title: "Ramal + MicroSIP",

        description:
            "O MicroSIP precisa registrar uma conta de telefonia para conseguir realizar e receber chamadas.",

        example:
            "O MicroSIP é o telefone. O ramal é a identidade daquele telefone dentro do sistema.",

        support:
            "Quando os dados são configurados corretamente, o MicroSIP tenta registrar o ramal no servidor SIP. Depois do registro, o usuário pode realizar e receber chamadas conforme as permissões da conta."

    }

};


// ==========================================
// TROCAR ABAS AVANÇADAS
// ==========================================

function changeAdvancedTab(tabName, button) {

    const contents =
        document.querySelectorAll(".advanced-content");

    const tabs =
        document.querySelectorAll(".advanced-tab");


    contents.forEach(content => {

        content.classList.remove("active");

    });


    tabs.forEach(tab => {

        tab.classList.remove("active");

    });


    const selectedContent =
        document.getElementById(`tab-${tabName}`);


    if (selectedContent) {

        selectedContent.classList.add("active");

    }


    if (button) {

        button.classList.add("active");

    }

}


// ==========================================
// MODAL AVANÇADO
// ==========================================

const advancedModal =
    document.getElementById("advancedModal");


function openAdvancedLesson(id) {

    const lesson =
        advancedLessons[id];


    if (!lesson) {

        return;

    }


    const icon =
        document.getElementById("advancedModalIcon");

    const category =
        document.getElementById("advancedModalCategory");

    const title =
        document.getElementById("advancedModalTitle");

    const description =
        document.getElementById("advancedModalDescription");

    const example =
        document.getElementById("advancedModalExample");

    const support =
        document.getElementById("advancedModalSupport");


    if (icon) {

        icon.textContent =
            lesson.icon;

    }


    if (category) {

        category.textContent =
            lesson.category;

    }


    if (title) {

        title.textContent =
            lesson.title;

    }


    if (description) {

        description.textContent =
            lesson.description;

    }


    if (example) {

        example.textContent =
            lesson.example;

    }


    if (support) {

        support.textContent =
            lesson.support;

    }


    if (advancedModal) {

        advancedModal.classList.add("active");

    }

}


// ==========================================
// FECHAR MODAL AVANÇADO
// ==========================================

function closeAdvancedLesson() {

    if (advancedModal) {

        advancedModal.classList.remove("active");

    }

}


// ==========================================
// FECHAR MODAL AVANÇADO - COMERCIAL
// CLICANDO FORA
// ==========================================

window.addEventListener("click", (event) => {

    if (event.target === advancedModal) {

        closeAdvancedLesson();

    }

});