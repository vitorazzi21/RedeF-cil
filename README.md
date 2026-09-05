# 🌐 Rede Fácil

O **Rede Fácil** é uma plataforma educativa e interativa criada para ensinar conceitos de redes, Internet, telefonia e suporte técnico de forma **simples, visual e intuitiva**.

O projeto foi pensado principalmente para pessoas que **não possuem conhecimento técnico em redes**, como profissionais do setor comercial, atendimento, novos colaboradores de provedores de Internet e estudantes que estão começando na área.

A proposta é transformar termos técnicos que parecem complicados em explicações fáceis, utilizando **analogias do dia a dia, exemplos visuais, cards interativos, fluxos e quizzes**.

---

## 🎯 Objetivo

No ambiente de um provedor de Internet, é comum pessoas de diferentes áreas precisarem entender conceitos técnicos.

Termos como:

- IP Público
- IP Privado
- NAT
- CGNAT
- PPPoE
- Login
- Ramal
- MicroSIP
- ONU
- ONT
- PTO
- GPON
- EPON

podem parecer difíceis para quem não trabalha diretamente com redes.

O Rede Fácil foi criado para resolver esse problema.

A ideia é:

> **Primeiro entender o conceito de forma simples. Depois conhecer o nome técnico.**

---

# 🧠 Como funciona o aprendizado

O projeto utiliza uma metodologia baseada em **analogia + explicação simples + informação técnica**.

Por exemplo:

### 🏠 IP Privado

Em vez de começar com uma explicação complexa sobre endereçamento IP:

> **IP Privado = número do apartamento**

Depois o usuário entende que o IP privado é utilizado para identificar dispositivos dentro de uma rede local.

---

### 🌎 IP Público

> **IP Público = endereço do prédio**

Depois é explicado que o IP público representa a conexão perante a Internet.

---

### 🔄 NAT

> **NAT = porteiro**

O usuário entende que o NAT realiza a tradução entre endereços da rede local e a comunicação com a Internet.

---

### 👨‍👩‍👧‍👦 CGNAT

> **CGNAT = várias pessoas compartilhando um endereço externo**

Depois é apresentada a explicação técnica sobre o compartilhamento de endereços IPv4 públicos.

---

# 📚 Nível Básico

O primeiro módulo foi desenvolvido para construir uma base sobre redes.

O usuário aprende:

```text
🌐 Como funciona a Internet

🏠 IP Privado

🌎 IP Público

🔄 NAT

🔑 Login

👨‍👩‍👧‍👦 CGNAT
```

O funcionamento da Internet é apresentado de maneira visual:

```text
📱 Cliente
   ↓
📡 Roteador
   ↓
🏢 Provedor
   ↓
🌐 Internet
   ↓
🖥️ Servidor
```

O objetivo é fazer com que uma pessoa sem conhecimento técnico consiga visualizar o caminho básico de uma comunicação.

---

# 🧠 Quiz

Depois das primeiras aulas, o usuário pode realizar um quiz para testar seus conhecimentos.

O sistema apresenta perguntas relacionadas aos conceitos estudados e informa imediatamente se a resposta está correta.

Ao final, o usuário recebe sua pontuação.

Exemplo:

```text
Qual endereço identifica normalmente
um aparelho dentro da sua rede?

A) IP Privado
B) IP Público
C) DNS
D) Servidor
```

O sistema também possui uma barra de progresso para mostrar a evolução do usuário.

---

# 🚀 Nível Avançado

Depois de aprender os conceitos básicos, o usuário pode acessar o módulo:

> **🚀 Nível Avançado — Rede e Suporte**

Essa área aproxima o aprendizado da realidade encontrada em um provedor de Internet.

São apresentados conceitos relacionados a:

- Autenticação;
- PPPoE;
- Troca de titularidade;
- Equipamentos;
- Fibra óptica;
- GPON;
- EPON;
- Telefonia;
- Atendimento e suporte.

---

# 🔄 Troca de Titularidade

O projeto explica de maneira simples o que acontece quando uma conexão passa de um cliente para outro.

Exemplo:

```text
CLIENTE ANTIGO
      ↓
Contrato antigo
      ↓
PPPoE antigo


        🔄


CLIENTE NOVO
      ↓
Novo cadastro
      ↓
Novo PPPoE
```

A ideia é explicar que, dependendo do processo utilizado pelo provedor, o login PPPoE pode ser alterado para que a autenticação fique vinculada corretamente ao novo cliente.

---

# 🔑 PPPoE

O PPPoE é explicado como uma forma de autenticação da conexão.

Uma analogia utilizada pelo projeto é:

> **PPPoE = crachá de identificação**

O roteador utiliza informações de autenticação, como usuário e senha, para estabelecer a conexão com a rede do provedor.

Exemplo:

```text
📡 Roteador
     ↓
🔑 Login + Senha
     ↓
🖥️ Servidor do provedor
     ↓
✅ Autenticado
     ↓
🌐 Internet
```

---

# ☎️ Módulo de Telefonia

O Rede Fácil também possui uma área específica para explicar conceitos básicos de telefonia IP.

São apresentados:

- Ramal;
- MicroSIP;
- Conta SIP;
- Registro;
- Funcionamento básico de uma ligação.

---

## ☎️ O que é um Ramal?

O ramal é apresentado como uma identificação utilizada dentro do sistema de telefonia.

Exemplo:

```text
Número principal
       ↓
Empresa
       ↓
├── Ramal 101
├── Ramal 102
└── Ramal 103
```

A analogia facilita a compreensão de que cada usuário ou telefone pode possuir uma identificação própria dentro do sistema.

---

# 💻 O que é MicroSIP?

O MicroSIP é explicado como um **telefone dentro do computador**.

Ele é um softphone utilizado para realizar e receber chamadas através da rede.

De forma simples:

```text
💻 Computador
     ↓
📞 MicroSIP
     ↓
🔑 Ramal / Conta SIP
     ↓
🖥️ Sistema de telefonia
     ↓
☎️ Ligação
```

O objetivo do módulo é deixar claro que:

> **MicroSIP é o programa utilizado para telefonia.**

Enquanto:

> **Ramal é a identificação/conta utilizada dentro do sistema de telefonia.**

---

# 📦 Equipamentos

O módulo avançado apresenta os principais equipamentos encontrados em uma instalação de Internet.

São abordados:

### 📦 ONU

Equipamento relacionado à comunicação óptica entre a rede do provedor e o cliente.

### 📡 ONT

Terminal óptico localizado no lado do cliente.

### 📶 Roteador

Equipamento responsável por organizar e distribuir a conexão para os dispositivos do cliente.

### 🔌 PTO

Ponto de Terminação Óptica, onde a fibra termina na instalação do cliente.

O projeto utiliza explicações simples antes de apresentar os detalhes técnicos.

---

# 💚 GPON x 🟠 EPON

Um dos objetivos do módulo avançado é mostrar que existem diferentes tecnologias de rede óptica.

O projeto apresenta uma comparação simplificada:

```text
🟢 GPON
Rede óptica
     ↓
Equipamentos compatíveis
     ↓
Processo GPON


🟠 EPON
Rede óptica
     ↓
Equipamentos compatíveis
     ↓
Processo EPON
```

Para o público não técnico, o projeto utiliza a expressão:

> **Roteador GPON**

ou

> **Roteador EPON**

quando essa é a forma mais fácil de identificar o equipamento utilizado no atendimento.

Para usuários que desejarem aprofundar o conhecimento, existe a possibilidade de apresentar posteriormente uma explicação técnica sobre a diferença entre **tecnologia óptica e função de roteamento**.

---

# 🟠 Área Especial — Rede Dax

O projeto possui uma área específica destinada aos clientes da **Rede Dax**.

Essa área foi criada porque esses clientes possuem um processo de atendimento diferente do fluxo tradicional apresentado no módulo GPON.

Para facilitar o entendimento de pessoas do comercial e atendimento, a explicação é apresentada de maneira simples:

```text
CLIENTE REDE TRADICIONAL
        ↓
🟢 GPON
        ↓
Processo tradicional


CLIENTE REDE DAX
        ↓
🟠 Roteador EPON
        ↓
Processo específico
        ↓
Liberação em sistema próprio
        ↓
Suporte
```

---

# 🟠 Processo simplificado para clientes Dax

Quando um cliente da Rede Dax entra em contato, o profissional deve primeiro identificar que ele pertence a essa rede.

O fluxo apresentado no projeto é:

```text
1️⃣ Identificar o cliente

        ↓

2️⃣ Verificar que pertence à Rede Dax

        ↓

3️⃣ Identificar o equipamento EPON

        ↓

4️⃣ Utilizar o processo/sistema específico

        ↓

5️⃣ Realizar a liberação do equipamento

        ↓

6️⃣ Validar a conexão
```

A intenção não é ensinar procedimentos internos confidenciais, mas criar uma **visão geral do processo** para que profissionais de outras áreas entendam por que um cliente Dax pode seguir um fluxo diferente.

---

# 🏢 Público-alvo

O Rede Fácil foi desenvolvido principalmente para:

- 👨‍💼 Profissionais do comercial;
- 🎧 Atendentes de suporte;
- 👨‍💻 Técnicos iniciantes;
- 🎓 Estudantes de redes;
- 🏢 Funcionários de provedores;
- 👥 Pessoas que desejam entender melhor como funciona a Internet.

O conteúdo pode ser utilizado como material de apoio para **treinamentos internos e onboarding de novos colaboradores**.

---

# 🎨 Conceito visual

O design foi inspirado em plataformas educativas simples.

A interface utiliza:

- Cards;
- Emojis;
- Ícones;
- Cores;
- Animações;
- Fluxogramas;
- Modais;
- Quizzes;
- Barra de progresso.

A ideia é criar uma experiência parecida com um **site educativo infantil**, porém com conteúdo voltado para adultos e profissionais.

---

# 📱 Responsividade

O projeto foi desenvolvido para funcionar em:

```text
💻 Desktop

📱 Smartphone

📲 Tablet
```

Os elementos são reorganizados automaticamente de acordo com o tamanho da tela.

---

# 🛠️ Tecnologias

O projeto utiliza tecnologias básicas do desenvolvimento Web:

```text
HTML5
CSS3
JavaScript
```

Não são necessários frameworks ou bibliotecas externas para executar a versão atual.

---

# 📂 Estrutura do projeto

```text
rede-facil/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Responsável pela estrutura e conteúdo da aplicação.

### `style.css`

Responsável pelo design, responsividade, animações e aparência dos componentes.

### `script.js`

Responsável pelas interações, aulas, modais, progresso, quiz e conteúdos avançados.

### `README.md`

Documentação e apresentação do projeto.

---

# 🚀 Como executar

Clone ou baixe o projeto.

Abra a pasta no **Visual Studio Code**.

Certifique-se de que os arquivos estejam organizados:

```text
rede-facil/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Depois abra o arquivo:

```text
index.html
```

diretamente no navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code.

---

# 🔮 Futuras melhorias

O projeto pode receber novos módulos futuramente:

```text
📡 Wi-Fi 2.4 GHz x 5 GHz

🌐 DNS

📍 DHCP

📦 Pacotes

🛣️ Roteamento

🔌 Cabo de rede

💡 Fibra óptica

🏢 OLT

📶 Sinal óptico

🚪 Portas TCP/UDP

🎮 Ping

🛣️ Traceroute

🔐 Firewall

🌍 IPv4 x IPv6

📞 Telefonia IP

🧰 Diagnóstico de problemas
```

Também podem ser adicionados:

- Sistema de pontuação;
- Certificados;
- Conquistas;
- Mais quizzes;
- Simuladores de rede;
- Animações de pacotes;
- Fluxos interativos;
- Modo Comercial;
- Modo Suporte;
- Modo Técnico.

---

# 🎯 Visão do projeto

O **Rede Fácil** nasceu com uma proposta simples:

> **Explicar tecnologia complexa de uma maneira que qualquer pessoa consiga entender.**

O projeto busca aproximar pessoas não técnicas do universo de redes, permitindo que elas entendam primeiro **o que está acontecendo** e só depois aprendam **como aquilo é chamado tecnicamente**.

A ideia é que alguém que nunca estudou redes consiga entrar no site e, depois de alguns minutos, compreender conceitos que antes pareciam complicados.

---

## 🌐 Rede Fácil

**Redes parecem complicadas até alguém explicar de um jeito simples.**
