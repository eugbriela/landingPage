let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('menu nav a');

window.onscroll = () =>{
    let menu = document.getElementById('menu');
    menu.classList.toggle('sticky', window.scrollY > 100);

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('menu nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}

//eng
var tentativas=0;
function abrir() {
    var resp = confirm("Tem certeza que deseja iniciar?");

    if (resp == true) {
        alert("Vamos lá!");
        var nome = "";

        while (nome == "") {
            nome = prompt("\nDigite seu nome:");
        }

        iniciarSimulado(nome);
        tentativas++;
    } else {
        alert("Você cancelou a operação!");
    }
}


function iniciarSimulado(nome) {
    document.getElementById('content-summary').style.display = 'none';
    document.getElementById('iniciar').style.display = 'none';
    document.getElementById('pessoa').style.display = 'block';
    document.getElementById('simulado').style.display = 'flex';

    var pessoa = document.getElementById('pessoa');
    pessoa.innerHTML = `Respondente: ${nome}`;

    iniciar();
}

const banco = [
    {
        questao: "Qual é a principal atividade na fase de requisitos do desenvolvimento de software?",
        alternativa: ["Implementação", "Análise", "Testes", "Manutenção"],
        resposta: "Análise"
    },
    {
        questao: "O que é um diagrama de sequência?",
        alternativa: ["Classes", "Testes", "Iterações", "Banco"],
        resposta: "Iterações"
    },
    {
        questao: "O que é TDD?",
        alternativa: ["Ágil", "Programação", "Testes", "Ciclo"],
        resposta: "Testes"
    },
    {
        questao: "O que é padrão MVC?",
        alternativa: ["Ordenação", "Linguagem", "Refatoração", "Arquitetura"],
        resposta: "Arquitetura"
    },
    {
        questao: "O que é UML?",
        alternativa: ["Modelagem", "Linguagem", "Testes", "Programação"],
        resposta: "Modelagem"
    }
];

let atual = 0;
let pontos = 0;

function iniciar() {
    const questaoElement = document.getElementById("questao");
    const alternativaElement = document.getElementById("alternativa");
    const questao = banco[atual];

    questaoElement.textContent = questao.questao;
    alternativaElement.innerHTML = "";

    questao.alternativa.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.style.background = '#ffff';
        button.onclick = () => verificar(option, button);
        alternativaElement.appendChild(button);
    });
}

function verificar(resposta, botao) {
    const questao = banco[atual];

    if (resposta === questao.resposta) {
        pontos++;
    }

    colorir(resposta);
}

function colorir(resposta) {
    const btns = document.querySelectorAll('#alternativa button');
    btns.forEach(button => {
        if (button.textContent === resposta) {
            button.style.background = '#969091';
        } else {
            button.style.background = '#ffff';
        }
    });
}

function verPosicao() {
    atual++;
    if (atual < banco.length) {
        iniciar();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const simulado = document.getElementById("simulado");
    simulado.innerHTML = `
    <h2>Resultado do Simulado</h2>
    <p>Você acertou ${pontos} de ${banco.length} perguntas.</p>
    <button onclick="location.reload()">Recomeçar</button>`;
}

iniciar();

//web
var tentativas1=0;
function abrir1() {
    var resp = confirm("Tem certeza que deseja iniciar?");

    if (resp == true) {
        alert("Vamos lá!");
        var nome1 = "";

        while (nome1 == "") {
            nome1 = prompt("\nDigite seu nome:");
        }

        iniciarSimulado1(nome1);
        tentativas1++;
    } else {
        alert("Você cancelou a operação!");
    }
}

function iniciarSimulado1(nome1) {
    document.getElementById('content-summary1').style.display = 'none';
    document.getElementById('iniciar1').style.display = 'none';
    document.getElementById('pessoa1').style.display = 'block';
    document.getElementById('simulado1').style.display = 'flex';

    var pessoa1 = document.getElementById('pessoa1');
    pessoa1.innerHTML = `Respondente: ${nome1}`;

    iniciar1();
}

const banco1 = [
    {
        questao1: "Qual é a linguagem de marcação padrão para desenvolvimento web?",
        alternativa1: ["HTML", "CSS", "JavaAcript", "Python"],
        resposta1: "HTML"
    },
    {
        questao1: "O que é um framework de desenvolvimento web?",
        alternativa1: ["Software", "Linguagem", "Banco", "Estrutura"],
        resposta1: "Estrutura"
    },
    {
        questao1: "Qual é a principal função do CSS no desenvolvimento web?",
        alternativa1: ["Estruturação", "Comportamento", "Estilo", "Funcionalidade"],
        resposta1: "Estilo"
    },
    {
        questao1: "O que é responsividade em web design?",
        alternativa1: ["Flexibilidade", "Velocidade", "Segurança", "Eficiência"],
        resposta1: "Flexibilidade"
    },
    {
        questao1: "Qual é a função do JavaScript no desenvolvimento web?",
        alternativa1: ["Estilo", "Comportamento", "Estruturação", "Layout"],
        resposta1: "Comportamento"
    }
];

let atual1 = 0;
let pontos1 = 0;

function iniciar1() {
    const questaoElement1 = document.getElementById("questao1");
    const alternativaElement1 = document.getElementById("alternativa1");
    const questao1 = banco1[atual1];

    questaoElement1.textContent = questao1.questao1;
    alternativaElement1.innerHTML = "";

    questao1.alternativa1.forEach(option1 => {
        const button1 = document.createElement("button");
        button1.textContent = option1;
        button1.style.background = '#ffff';
        button1.onclick = () => verificar1(option1, button1);
        alternativaElement1.appendChild(button1);
        
    });
}

function verificar1(resposta1, botao1) {
    const questao1 = banco1[atual1];

    if (resposta1 === questao1.resposta1) {
        pontos1++;
    }

    colorir1(resposta1);
}

function colorir1(resposta1) {
    const btns1 = document.querySelectorAll('#alternativa1 button');
    btns1.forEach(button1 => {
        if (button1.textContent === resposta1) {
            button1.style.background = '#969091';
        } else {
            button1.style.background = '#ffff';
        }
    });
}

function verPosicao1() {
    atual1++;
    if (atual1 < banco1.length) {
        iniciar1();
    } else {
        mostrarResultado1();
    }
}

function mostrarResultado1() {
    const simulado1 = document.getElementById("simulado1");
    simulado1.innerHTML = `
    <h2>Resultado do Simulado</h2>
    <p>Você acertou ${pontos1} de ${banco1.length} perguntas.</p>
    <button onclick="location.reload()">Recomeçar</button>`;
}

iniciar1();

//met
var tentativas2=0;

function abrir2() {
    var resp = confirm("Tem certeza que deseja iniciar?");

    if (resp == true) {
        alert("Vamos lá!");
        var nome2 = "";

        while (nome2 == "") {
            nome2 = prompt("\nDigite seu nome:");
        }

        iniciarSimulado2(nome2);
        tentativas2++;
    } else {
        alert("Você cancelou a operação!");
    }
}

function iniciarSimulado2(nome2) {
    document.getElementById('content-summary2').style.display = 'none';
    document.getElementById('iniciar2').style.display = 'none';
    document.getElementById('pessoa2').style.display = 'block';
    document.getElementById('simulado2').style.display = 'flex';

    var pessoa2 = document.getElementById('pessoa2');
    pessoa2.innerHTML = `Respondente: ${nome2}`;

    iniciar2();
}

const banco2 = [
    {
        questao2: "O que é um objetivo específico em um projeto de pesquisa?",
        alternativa2: ["Propósito", "Método", "Resultado", "Meta"],
        resposta2: "Verde"
    },
    {
        questao2: "Qual é a diferença entre pesquisa qualitativa e quantitativa?",
        alternativa2: ["Dados", "Método", "Resultado", "Análise"],
        resposta2: "Método"
    },
    {
        questao2: "O que é um referencial teórico?",
        alternativa2: ["Fonte", "Fundamentação", "Hipótese", "Conclusão"],
        resposta2: "Fundamentação"
    },
    {
        questao2: "Qual não é uma característica da metodologia científica?",
        alternativa2: ["Subjetiva", "Sistemática", "Reprodutível", "Rigorosa"],
        resposta2: "Rigorosa"
    },
    {
        questao2: "Qual não é um tipo de amostragem probabilística?",
        alternativa2: ["Aleatória", "Estratificada", "Sistemática", "Conveniente"],
        resposta2: "Sistemática"
    }
];

let atual2 = 0;
let pontos2 = 0;

function iniciar2() {
    const questaoElement2 = document.getElementById("questao2");
    const alternativaElement2 = document.getElementById("alternativa2");
    const questao2 = banco2[atual2];

    questaoElement2.textContent = questao2.questao2;
    alternativaElement2.innerHTML = "";

    questao2.alternativa2.forEach(option2 => {
        const button2 = document.createElement("button");
        button2.textContent = option2;
        button2.style.background = '#ffff';
        button2.onclick = () => verificar2(option2, button2);
        alternativaElement2.appendChild(button2);
    });
}

function verificar2(resposta2, botao2) {
    const questao2 = banco2[atual2];

    if (resposta2 === questao2.resposta2) {
        pontos2++;
    }

    colorir2(resposta2);
}

function colorir2(resposta2) {
    const btns2 = document.querySelectorAll('#alternativa2 button');
    btns2.forEach(button2 => {
        if (button2.textContent === resposta2) {
            button2.style.background = '#969091';
        } else {
            button2.style.background = '#ffff';
        }
    });
}

function verPosicao2() {
    atual2++;
    if (atual2 < banco2.length) {
        iniciar2();
    } else {
        mostrarResultado2();
    }
}

function mostrarResultado2() {
    const simulado2 = document.getElementById("simulado2");
    simulado2.innerHTML = `
    <h2>Resultado do Simulado</h2>
    <p>Você acertou ${pontos2} de ${banco2.length} perguntas.</p>
    <button onclick="location.reload()">Recomeçar</button>`;
}

iniciar2();

function mostrarResultadoFinal() {
    const resultado = document.getElementById("resultado");
    if(tentativas2==0||tentativas1==0||tentativas==0){
        alert("Você não fez todos os simulados!");
    }
    else {
        resultado.innerHTML = `
        <h2>Resultado Final</h2>
        <p>Eng - Você acertou ${pontos} e errou ${5-pontos} perguntas.</p>
        <p>Web - Você acertou ${pontos1} e errou ${5-pontos1} perguntas.</p>
        <p>Met - Você acertou ${pontos2} e errou ${5-pontos2} perguntas.</p>
        `;
    }
    
}


