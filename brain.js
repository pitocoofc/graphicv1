// brain.js - Dicionário Nexos AI v1.5 (GitHub Pages Expanded)
const brain = [
    // --- SAUDAÇÕES E EDUCAÇÃO ---
    {
        inputs: ["oi", "olá", "ola", "opa", "eai", "ei", "salve", "yo", "fala", "oii", "e aí", "beleza", "blz", "oopa"],
        outputs: [
            "Olá! Tudo certo por aqui. O que vamos construir hoje?",
            "Opa, salve! Precisa de uma mão no projeto?",
            "Fala! Nexos AI pronta. O que tem em mente?",
            "Oi! Tudo ótimo. Como posso ser útil agora?"
        ]
    },
    {
        inputs: ["bom dia", "boa tarde", "boa noite", "bmd", "btarde", "bnoite", "saudações", "bom-dia", "boa-noite"],
        outputs: [
            "Bom dia! Que a lógica esteja com você hoje.",
            "Boa tarde! Hora perfeita para testar novos scripts.",
            "Boa noite! Madrugada é a hora oficial dos devs, o que vamos fzr?"
        ]
    },

    // --- SCRIPTS PRONTOS (EXEMPLOS DE CÓDIGO) ---
    {
        inputs: ["script de girar", "girar objeto", "como rotacionar", "codigo girar", "rotacao script"],
        outputs: [
            "Aqui está um script de rotação contínua:\n<pre>function update() {\n  // Gira no eixo Y\n  this.rotation.y += 0.02;\n}</pre>",
            "Para girar suavemente, use:\n<pre>function update() {\n  this.rotation.x += 0.01;\n  this.rotation.z += 0.01;\n}</pre>"
        ]
    },
    {
        inputs: ["script de pular", "como pular", "codigo pulo", "pulo script", "jump script"],
        outputs: [
            "Para um pulo simples, verifique a tecla Espaço:\n<pre>function update() {\n  if(input.isKeyDown(' ')) {\n    player.velocity.y = 5;\n  }\n}</pre>",
            "Dica: Certifique-se de que a gravidade está ativa nas configurações globais!"
        ]
    },
    {
        inputs: ["mudar cor", "color script", "codigo cor", "cor aleatoria"],
        outputs: [
            "Você pode mudar a cor via script assim:\n<pre>this.material.color = 'rgb(255, 0, 0)'; // Vermelho</pre>",
            "Para uma cor aleatória ao clicar:\n<pre>function onClick() {\n  this.material.color = '#' + Math.floor(Math.random()*16777215).toString(16);\n}</pre>"
        ]
    },
    {
        inputs: ["seguir player", "ia inimigo", "perseguir", "script seguir"],
        outputs: [
            "Para o objeto olhar para o player:\n<pre>function update() {\n  this.lookAt(player.position);\n  this.translateZ(0.05);\n}</pre>"
        ]
    },

    // --- CONFIGURAÇÕES DO MOTOR (TUTORIAIS) ---
    {
        inputs: ["sky", "céu", "fundo", "360", "hdri", "mudar fundo"],
        outputs: [
            "Para mudar o céu: \n1. Vá no Explorer.\n2. Selecione 'Sky'.\n3. No painel de propriedades, cole a URL de uma imagem 360.",
            "Dica: Use o site Polyhaven para baixar HDRIs gratuitas e use o link da imagem aqui!"
        ]
    },
    {
        inputs: ["luz", "iluminação", "escuro", "brilho", "light"],
        outputs: [
            "Você pode adicionar uma 'PointLight' para iluminar áreas específicas ou mexer na 'AmbientLight' para o brilho geral.",
            "Se o jogo estiver muito escuro, tente aumentar a intensidade da luz principal no Explorer."
        ]
    },
    {
        inputs: ["colisao", "atravessar", "parede", "fisica", "physics"],
        outputs: [
            "Para um objeto não ser atravessado, ele precisa ter a propriedade 'Static' ou 'Kinematic' ativada no painel de Física.",
            "Se o player estiver atravessando o chão, verifique se o chão tem um Collider ativado!"
        ]
    },

    // --- GÍRIAS E REAÇÕES NEXOS ---
    {
        inputs: ["mano", "véi", "cara", "caraca", "vish", "nossa", "eita", "uai", "pode crer", "pdc", "na moral", "demorou", "tá ligado", "entendi"],
        outputs: [
            "Pode crer, mano! O foco agora é no projeto.",
            "Na moral, esse projeto vai ficar top. O que vem agora?",
            "Entendido! Vamos seguir com a produção.",
            "Com certeza, tá ligado que aqui a gente não para."
        ]
    },
    {
        inputs: ["top", "massa", "legal", "daora", "brabo", "arretado", "show", "incrível", "mando bem", "bom trabalho"],
        outputs: [
            "Valeu! O mérito é seu por estar criando.",
            "Obrigado! Fico feliz que tenha gostado do resultado.",
            "Massa demais! Vamos elevar o nível desse jogo.",
            "Brabo! Próximo passo: dominar o motor!"
        ]
    },

    // --- ERROS E DEBUG ---
    {
        inputs: ["bug", "erro", "parou", "não funciona", "bugou", "console"],
        outputs: [
            "Calma! Aperte F12 e veja se há erros em vermelho no Console.",
            "A maioria dos bugs é apenas um '}' faltando no script. Vamos revisar?",
            "Se o objeto sumiu, verifique se a posição dele não foi para o infinito no script!"
        ]
    },

    // --- LOGICA DE RESPOSTA CURTA ---
    {
        inputs: ["sim", "s", "claro", "bora", "partiu", "quero"],
        outputs: ["Fechado! Vamos nessa.", "Beleza, mãos à obra!"]
    },
    {
        inputs: ["não", "n", "nem", "cancelar"],
        outputs: ["Entendido. Vou ficar no aguardo.", "Sem problemas, você manda."]
    }
];

export default brain;
