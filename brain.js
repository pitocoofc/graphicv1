// brain.js - O dicionário da sua IA
const brain = [
    {
        inputs: ["oi", "olá", "ola", "opa", "eai"],
        outputs: [
            "Olá, tudo bem? O que você precisa?",
            "Opa, tudo bem com você? Precisa de algo?",
            "Salve! Como posso ajudar no seu projeto hoje?"
        ]
    },
    {
        inputs: ["quem é você", "o que voce faz", "sua função"],
        outputs: [
            "Eu sou o assistente inteligente do Studio. Posso gerar scripts e configurar o seu cenário!",
            "Sou sua IA de auxílio. Peça para eu criar um script de girar ou pular!"
        ]
    },
    {
        inputs: ["girar", "rotação", "rodar"],
        outputs: [
            "Para girar um objeto, use: \n\nfunction update() {\n  objeto.rotation.y += 0.05;\n}",
            "Você pode adicionar um script de rotação no Explorer! Quer que eu gere um completo?"
        ]
    }
];

// Exporta para o arquivo da IA conseguir ler
export default brain;
