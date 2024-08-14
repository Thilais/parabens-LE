const questions = [
    { question: "Lê, feliz vidaaaaaaaaaaaaaa! Te desejo muitas coisas boas nesse ciclo, que você seja muito feliz, realize seus sonhos e objetivos. É muito bom poder trabalhar (e implicar nas horas vagas) com você e ter a oportunidade de aprender tanto com o profissional e pessoa que és.E claro, te desejo muitos trios elétricos para você correr atrás e que um dia você venha vivenciar o maior carnaval do mundo, o de Recife. Aproveite de montão o seu dia e seja muito feliz sempre! <3", answers: ["Jean", "Karinne", "Gui"], correct: 1 },
    { question: "Viva Leandro! Que hoje sua estrela brilhe ainda mais forte e que sua alegria contagie a todos. Você merece demais. Prazer ter você por aqui, sua energia é muito boa, sorte de quem te tem por perto. Aprovei muito seu novo ano, recarregue-se de novos sonhos, projetos e afetos potentes. Parabéns!", answers: ["Gui", "Will", "Bia"], correct: 0 },
    { question: "1- Feliz aniversário, Lê! Tudo de melhor sempre na sua vida, que consiga realizar todos os seus sonhos, você é uma pessoa maravilhosa. Aproveite bastante o seu dia.// 2- Feliz aniversário, Lê!!! Que você continue com o seu alto astral e dando boas risadas nesse ano que se inicia. Que venham momentos memoráveis e muitas realizações! ", answers: ["Jean e Bia", "Ca e Thi", "Alê e Luiza"], correct: 2 },
    { question: "UNIQUE! Thats what you are! Sei lá, Lê, eu ouço Alien Superstar e lembro de você??????? Parabénsssss, Le! Que este seja o inicio de um novo ciclo cheio de felicidades, amor, paz, sonhos realizados, enfim, tudo de mais ICONIC possível!!!! Que felicidade ter você por aqui! ❤️🥳🎉", answers: ["Jessica", "Bia", "Will"], correct: 1 },
    { question: "Lê, feliz aniversário! Parabéns. Há quem dissesse que eu iria esquecer de escrever essa mensagem! Mas a grande verdade é que você é inesquecível para mim! Te desejo muitas felicidades. Obrigado por fazer parte da minha jornada na Santo Caos <3", answers: ["Thi", "Gui", "Will"], correct: 2 },
    { question: "1-Lehhhh!! Parabens meu amor, tudo de mais lindo na sua vida.Que seus dias sejam sempre cheio de felicidades. Sorte a nossa ter voce aqui, com essa risada maravilhosaaa rs//2-Feliz aniversário, Le! Que venham muitas conquistas, caminhos abertos e sucesso. Um privilégio poder conviver contigo! ", answers: ["Ale e Will", "Jeh e Daniel", "Thi e Gui"], correct: 1 },
    { question: "Lee, feliz aniversário! Que seu novo ciclo seja leve e de ótimas energias, assim como você é! Le, você tem uma vibe única que contagia quem está por perto. É muito bom todas as vezes que nos encontramos; queria ter mais oportunidades. Sorte de quem te tem por perto! Te admiro muito e adoro sempre te ouvir quando você traz suas visões e perspectivas sobre as coisas. Feliz vida! Viva você! Aproveite o seu dia!", answers: ["Camila", "Luiza", "Bárbara"], correct: 2 },
    { question: "1-Lêêê parabéns, leonino!! Muita luz, saúde e close. Que seu novo ano seja muito legal, com muitas conquistas aventuras e aprendizados. Axé!  // 2-Feliz aniversário, querido! Muitas alegrias pra você e um novo ciclo de todas as coisas boas que te fazem feliz! Que a vida te dê muitos motivos pra agradecer. É muito bom dividir um pouco dos dias com você! Beijos", answers: ["Dri e Daniel", "Camila e Dri", "Daniel e Bia"], correct: 1 },
];


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start-container').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const buttons = document.querySelectorAll('.btn');
    
    questionElement.textContent = questions[currentQuestionIndex].question;
    buttons.forEach((button, index) => {
        button.textContent = questions[currentQuestionIndex].answers[index];
    });
}

function selectAnswer(index) {
    const feedbackElement = document.getElementById('feedback');
    const correctIndex = questions[currentQuestionIndex].correct;
    const correctAnswer = questions[currentQuestionIndex].answers[correctIndex];
    
    if (index === correctIndex) {
        feedbackElement.textContent = "Uhuu, acertou!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = `Poxa, errou! A resposta certa era: ${correctAnswer}`;
        feedbackElement.style.color = "red";
    }
}

function nextQuestion() {
    const feedbackElement = document.getElementById('feedback');
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        feedbackElement.textContent = "";
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    
    // Atualiza o span com o score
    document.getElementById('score').textContent = score;

    // Como são sempre 8 perguntas, não há necessidade de atualizar o número total de perguntas
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('start-container').classList.remove('hidden');
}


