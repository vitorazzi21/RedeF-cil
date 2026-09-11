// ==========================================
// AULAS BÁSICAS
// ==========================================

const lessons = {
  1: {
    icon: "🏠",
    number: "AULA 01",
    title: "IP Privado",
    description:
      "O IP privado é a identificação usada pelos equipamentos dentro de uma rede interna.",

    example:
      "Imagine que a AW Fibra possui vários departamentos. Cada departamento representa uma rede e cada pessoa ou equipamento dentro dele possui uma identificação própria. Essa identificação representa o IP privado.",

    technical:
      "O IP privado é utilizado dentro da rede local. Exemplos comuns são 192.168.x.x, 10.x.x.x e 172.16.x.x até 172.31.x.x."
  },

  2: {
    icon: "🌎",
    number: "AULA 02",
    title: "IP Público",
    description:
      "O IP público é o endereço utilizado para representar uma conexão quando ela acessa a Internet.",

    example:
      "Imagine que cada departamento precisa sair da empresa para acessar a Internet. O IP público funciona como o ingresso ou endereço utilizado nessa saída.",

    technical:
      "O IP público é utilizado para comunicação com a Internet. Em uma conexão residencial, o cliente pode receber um IP público diretamente ou compartilhar um IP por meio de CGNAT."
  },

  3: {
    icon: "🔄",
    number: "AULA 03",
    title: "NAT",
    description:
      "O NAT organiza a comunicação entre os equipamentos da rede interna e a Internet.",

    example:
      "Imagine que várias pessoas de um departamento precisam sair pela mesma porta para acessar a Internet. O NAT organiza quem está saindo e para onde a resposta precisa voltar.",

    technical:
      "NAT significa Network Address Translation. Ele realiza a tradução entre endereços privados e públicos, permitindo que vários dispositivos utilizem uma mesma saída para a Internet."
  },

  4: {
    icon: "🎫",
    number: "AULA 04",
    title: "IP Público Dinâmico",
    description:
      "Um IP público dinâmico é um endereço que pode mudar ao longo do tempo.",

    example:
      "Imagine que o ingresso utilizado pelo departamento para entrar na Internet não é permanente. Em determinado momento, ele pode receber outro ingresso. Isso representa um IP público dinâmico.",

    technical:
      "No modelo dinâmico, o endereço IP público é atribuído pelo provedor e pode ser alterado. Por isso, o cliente pode ter um IP público hoje e outro posteriormente."
  },

  5: {
    icon: "👨‍👩‍👧‍👦",
    number: "AULA 05",
    title: "CGNAT",
    description:
      "O CGNAT permite que vários clientes compartilhem um mesmo endereço IPv4 público.",

    example:
      "Imagine vários departamentos da AW Fibra querendo acessar a Internet, mas utilizando o mesmo ingresso público. Na nossa analogia, o Gerente Gabriel representa o mecanismo que organiza esse compartilhamento.",

    technical:
      "CGNAT significa Carrier-Grade NAT. Ele é utilizado pelo provedor para permitir que vários clientes compartilhem um mesmo IPv4 público, utilizando diferentes portas para identificar cada conexão."
  },

  6: {
    icon: "🔑",
    number: "AULA 06",
    title: "Login",
    description:
      "O login é utilizado para identificar e autenticar a conexão do cliente.",

    example:
      "Imagine que cada departamento precisa apresentar uma identificação antes de poder utilizar a rede. O login funciona como essa identificação para permitir que a conexão seja autenticada.",

    technical:
      "Em conexões que utilizam PPPoE, o cliente utiliza credenciais de autenticação, normalmente usuário e senha, para estabelecer a sessão com o provedor."
  }
};


// ==========================================
// CONTROLE DAS AULAS
// ==========================================

let currentLesson = null;

function openLesson(id) {
  const lesson = lessons[id];

  if (!lesson) {
    console.error("Aula não encontrada:", id);
    return;
  }

  currentLesson = id;

  document.getElementById("modalIcon").textContent = lesson.icon;
  document.getElementById("modalNumber").textContent = lesson.number;
  document.getElementById("modalTitle").textContent = lesson.title;
  document.getElementById("modalDescription").textContent =
    lesson.description;
  document.getElementById("modalExample").textContent = lesson.example;
  document.getElementById("modalTechnical").textContent =
    lesson.technical;

  document.getElementById("lessonModal").classList.add("active");

  document.body.classList.add("modal-open");
}


function closeLesson() {
  document.getElementById("lessonModal").classList.remove("active");

  document.body.classList.remove("modal-open");

  currentLesson = null;
}


function finishLesson() {
  if (!currentLesson) return;

  const card = document.querySelector(
    `.lesson-card[data-lesson="${currentLesson}"]`
  );

  if (card) {
    card.classList.add("completed");
  }

  updateProgress();

  closeLesson();
}


// ==========================================
// PROGRESSO
// ==========================================

function updateProgress() {
  const totalLessons = Object.keys(lessons).length;

  const completedLessons = document.querySelectorAll(
    ".lesson-card.completed"
  ).length;

  const percentage = Math.round(
    (completedLessons / totalLessons) * 100
  );

  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }

  if (progressText) {
    progressText.textContent = `${percentage}%`;
  }
}


// ==========================================
// ROLAR ATÉ AS AULAS
// ==========================================

function scrollToLessons() {
  const lessonsSection = document.getElementById("lessons");

  if (lessonsSection) {
    lessonsSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}


// ==========================================
// QUIZ
// ==========================================

const quiz = [
  {
    question:
      "Dentro da nossa analogia da AW Fibra, o que representa o IP privado?",

    answers: [
      "O ingresso para a Internet",
      "A identificação interna do equipamento",
      "O endereço do provedor",
      "O servidor da Internet"
    ],

    correct: 1
  },

  {
    question:
      "Na nossa analogia, o que representa o IP público?",

    answers: [
      "A identificação interna",
      "O computador do cliente",
      "O ingresso/endereço utilizado para acessar a Internet",
      "O cabo de rede"
    ],

    correct: 2
  },

  {
    question:
      "Qual é a função do NAT?",

    answers: [
      "Aumentar a velocidade da Internet",
      "Organizar a comunicação entre a rede interna e a Internet",
      "Criar uma rede Wi-Fi",
      "Trocar a senha do roteador"
    ],

    correct: 1
  },

  {
    question:
      "O que acontece com um IP público dinâmico?",

    answers: [
      "Ele nunca muda",
      "Ele só funciona dentro da residência",
      "Ele pode mudar ao longo do tempo",
      "Ele é sempre privado"
    ],

    correct: 2
  },

  {
    question:
      "Na analogia, quem representa o CGNAT?",

    answers: [
      "O roteador",
      "O servidor",
      "O Gerente Gabriel",
      "O computador"
    ],

    correct: 2
  },

  {
    question:
      "Qual é a função do login em uma conexão PPPoE?",

    answers: [
      "Identificar e autenticar a conexão",
      "Aumentar o Wi-Fi",
      "Criar um IP privado",
      "Trocar automaticamente o roteador"
    ],

    correct: 0
  }
];


let currentQuestion = 0;
let score = 0;


// ==========================================
// INICIAR QUIZ
// ==========================================

function startQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("quizModal").classList.add("active");

  document.body.classList.add("modal-open");

  showQuestion();
}


// ==========================================
// MOSTRAR PERGUNTA
// ==========================================

function showQuestion() {
  const question = quiz[currentQuestion];

  if (!question) {
    finishQuiz();
    return;
  }

  document.getElementById("quizQuestion").textContent =
    question.question;

  const answersContainer =
    document.getElementById("quizAnswers");

  answersContainer.innerHTML = "";

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.textContent = answer;

    button.onclick = () => answerQuestion(index);

    answersContainer.appendChild(button);
  });

  document.getElementById("quizResult").textContent =
    `Pergunta ${currentQuestion + 1} de ${quiz.length}`;
}


// ==========================================
// RESPONDER QUIZ
// ==========================================

function answerQuestion(answerIndex) {
  const question = quiz[currentQuestion];

  if (answerIndex === question.correct) {
    score++;
  }

  currentQuestion++;

  showQuestion();
}


// ==========================================
// FINALIZAR QUIZ
// ==========================================

function finishQuiz() {
  const result = document.getElementById("quizResult");

  if (score === quiz.length) {
    result.textContent =
      `🎉 Parabéns! Você acertou ${score} de ${quiz.length}!`;
  } else if (score >= 4) {
    result.textContent =
      `👏 Muito bem! Você acertou ${score} de ${quiz.length}.`;
  } else if (score >= 2) {
    result.textContent =
      `👍 Está no caminho! Você acertou ${score} de ${quiz.length}.`;
  } else {
    result.textContent =
      `📚 Vale revisar as aulas. Você acertou ${score} de ${quiz.length}.`;
  }

  document.getElementById("quizQuestion").textContent =
    "Quiz finalizado!";

  document.getElementById("quizAnswers").innerHTML = `
    <button onclick="closeQuiz()">Fechar</button>
    <button onclick="startQuiz()">Fazer novamente</button>
  `;
}


// ==========================================
// FECHAR QUIZ
// ==========================================

function closeQuiz() {
  document.getElementById("quizModal").classList.remove("active");

  document.body.classList.remove("modal-open");
}


// ==========================================
// FECHAR MODAIS CLICANDO FORA
// ==========================================

window.addEventListener("click", function (event) {
  const lessonModal = document.getElementById("lessonModal");
  const quizModal = document.getElementById("quizModal");
  const advancedModal = document.getElementById("advancedModal");

  if (event.target === lessonModal) {
    closeLesson();
  }

  if (event.target === quizModal) {
    closeQuiz();
  }

  if (event.target === advancedModal) {
    closeAdvancedLesson();
  }
});


// ==========================================
// TECLA ESC
// ==========================================

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLesson();
    closeQuiz();
    closeAdvancedLesson();
  }
});


// ==========================================
// NÍVEL AVANÇADO
// ==========================================

const advancedLessons = {

  titularidade: {
    icon: "🔄",
    category: "CADASTRO",
    title: "Troca de Titularidade",

    description:
      "A troca de titularidade acontece quando a responsabilidade pela conexão passa de um cliente para outro.",

    example:
      "Imagine que uma conexão está cadastrada para uma pessoa, mas outra pessoa passa a ser responsável pelo endereço. É como trocar o nome responsável pelo departamento.",

    support:
      "No suporte, é importante verificar os dados do novo titular e realizar o procedimento correto para que a conexão continue funcionando."
  },

  pppoe: {
    icon: "🔑",
    category: "AUTENTICAÇÃO",
    title: "PPPoE",

    description:
      "PPPoE é um protocolo utilizado para estabelecer uma sessão de conexão através de autenticação.",

    example:
      "Imagine que o cliente precisa apresentar um usuário e uma senha antes de receber autorização para utilizar a conexão.",

    support:
      "No suporte, o login PPPoE é importante para autenticar a conexão do cliente e pode estar relacionado ao cadastro e à titularidade."
  },

  onu: {
    icon: "📦",
    category: "EQUIPAMENTOS",
    title: "ONU",

    description:
      "A ONU recebe o sinal óptico da rede de fibra e disponibiliza a conexão para os equipamentos do cliente.",

    example:
      "Imagine a ONU como o equipamento que recebe a informação que chega pela fibra e prepara essa conexão para ser utilizada pelo cliente.",

    support:
      "No suporte, é importante observar o estado do equipamento e os indicadores ópticos para identificar possíveis problemas."
  },

  ont: {
    icon: "📡",
    category: "EQUIPAMENTOS",
    title: "ONT",

    description:
      "A ONT é um equipamento óptico instalado no lado do cliente e pode integrar funções de rede.",

    example:
      "Imagine uma ONT como um equipamento que recebe a fibra e, dependendo do modelo, já possui funções que normalmente seriam realizadas por outros equipamentos.",

    support:
      "No suporte, é importante identificar qual equipamento está instalado e quais funções ele possui."
  },

  roteador: {
    icon: "📶",
    category: "EQUIPAMENTOS",
    title: "Roteador",

    description:
      "O roteador organiza a rede local e distribui a conexão para os dispositivos do cliente.",

    example:
      "Imagine o roteador como o responsável por organizar quem dentro da casa ou empresa vai utilizar a conexão.",

    support:
      "No suporte, podemos verificar Wi-Fi, dispositivos conectados, configurações, sinais e comunicação com outros equipamentos."
  },

  pto: {
    icon: "🔌",
    category: "FIBRA",
    title: "PTO",

    description:
      "A PTO é o ponto onde a fibra óptica termina dentro da instalação do cliente.",

    example:
      "Imagine a PTO como o ponto de chegada da fibra dentro do imóvel, onde a conexão óptica é entregue para o equipamento.",

    support:
      "No suporte, a PTO faz parte da análise da instalação física da fibra e pode ser importante em casos de problemas ópticos."
  },

  gpon: {
    icon: "💚",
    category: "TECNOLOGIA",
    title: "GPON",

    description:
      "GPON é uma tecnologia de rede óptica passiva utilizada para entregar conexão através de fibra óptica.",

    example:
      "Imagine uma estrutura onde uma única rede óptica é distribuída para vários clientes através de equipamentos e divisões da rede.",

    support:
      "No suporte, é importante identificar a tecnologia utilizada pelo cliente para evitar procedimentos incompatíveis."
  },

  epon: {
    icon: "🟠",
    category: "TECNOLOGIA",
    title: "EPON",

    description:
      "EPON é outra tecnologia de rede óptica passiva utilizada para conectar clientes através de fibra.",

    example:
      "Imagine uma estrada de fibra com uma tecnologia diferente da utilizada em uma rede GPON. Os equipamentos precisam ser compatíveis com essa tecnologia.",

    support:
      "No suporte, clientes da Rede Dax podem utilizar equipamentos EPON e possuem um processo específico de liberação."
  },

  ramal: {
    icon: "☎️",
    category: "TELEFONIA",
    title: "O que é Ramal?",

    description:
      "O ramal funciona como uma identificação interna utilizada pelo sistema de telefonia.",

    example:
      "Imagine que cada pessoa dentro de uma empresa possui um número interno para receber e realizar ligações.",

    support:
      "No suporte, o ramal é utilizado para identificar a extensão de telefonia do cliente."
  },

  microsip: {
    icon: "💻",
    category: "TELEFONIA",
    title: "O que é MicroSIP?",

    description:
      "MicroSIP é um aplicativo que permite utilizar o computador para realizar e receber chamadas VoIP.",

    example:
      "Imagine transformar o computador em um telefone utilizando um programa e uma conexão de rede.",

    support:
      "No suporte, o MicroSIP pode ser configurado utilizando os dados do ramal para registrar a telefonia."
  },

  ramalMicrosip: {
    icon: "🔗",
    category: "TELEFONIA",
    title: "Ramal + MicroSIP",

    description:
      "O MicroSIP utiliza as informações do ramal para realizar o registro da telefonia.",

    example:
      "O ramal funciona como a identificação e o MicroSIP funciona como o telefone utilizado pelo computador.",

    support:
      "No suporte, é necessário conferir os dados do ramal e verificar se o MicroSIP está corretamente registrado."
  }
};


// ==========================================
// ABAS DO NÍVEL AVANÇADO
// ==========================================

function changeAdvancedTab(tab, button) {
  document
    .querySelectorAll(".advanced-tab")
    .forEach((btn) => btn.classList.remove("active"));

  document
    .querySelectorAll(".advanced-content")
    .forEach((content) => content.classList.remove("active"));

  button.classList.add("active");

  const selectedTab = document.getElementById(`tab-${tab}`);

  if (selectedTab) {
    selectedTab.classList.add("active");
  }
}


// ==========================================
// ABRIR AULA AVANÇADA
// ==========================================

function openAdvancedLesson(id) {
  const lesson = advancedLessons[id];

  if (!lesson) {
    console.error("Aula avançada não encontrada:", id);
    return;
  }

  document.getElementById("advancedModalIcon").textContent =
    lesson.icon;

  document.getElementById("advancedModalCategory").textContent =
    lesson.category;

  document.getElementById("advancedModalTitle").textContent =
    lesson.title;

  document.getElementById("advancedModalDescription").textContent =
    lesson.description;

  document.getElementById("advancedModalExample").textContent =
    lesson.example;

  document.getElementById("advancedModalSupport").textContent =
    lesson.support;

  document.getElementById("advancedModal").classList.add("active");

  document.body.classList.add("modal-open");
}


// ==========================================
// FECHAR AULA AVANÇADA
// ==========================================

function closeAdvancedLesson() {
  document
    .getElementById("advancedModal")
    .classList.remove("active");

  document.body.classList.remove("modal-open");
}


// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  updateProgress();
});