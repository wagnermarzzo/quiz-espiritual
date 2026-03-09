const landing = document.getElementById('landing');
const quiz = document.getElementById('quiz');
const results = document.getElementById('results');
const startBtn = document.getElementById('startQuizBtn');
const quizForm = document.getElementById('quizForm');
const resultText = document.getElementById('resultText');
const offerBtn = document.getElementById('offerBtn');
const upsellBtn = document.getElementById('upsellBtn');

// Começa o quiz
startBtn.addEventListener('click', () => {
  landing.classList.add('hidden');
  quiz.classList.remove('hidden');
});

// Calcula resultado do quiz
quizForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(quizForm);
  let score = 0;
  for(let pair of formData.entries()) {
    score += parseInt(pair[1]);
  }

  let message = '';
  if(score <= 6) {
    message = 'Vínculo emocional ativo: As chances de reconciliação são boas. Esteja aberto(a) à comunicação.';
  } else if(score <= 10) {
    message = 'Indecisão com possíveis interferências externas: Chances médias. Avalie influências externas antes de agir.';
  } else {
    message = 'Energia emocional enfraquecida: As chances são baixas. Uma leitura espiritual pode ajudar a identificar bloqueios.';
  }

  resultText.textContent = message;
  quiz.classList.add('hidden');
  results.classList.remove('hidden');
});

// Botão de oferta → abre WhatsApp (exemplo)
offerBtn.addEventListener('click', () => {
  const text = encodeURIComponent("Olá, quero receber minha leitura espiritual completa sobre reconciliação.");
  window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
  upsellBtn.classList.remove('hidden');
});

// Upsell → WhatsApp
upsellBtn.addEventListener('click', () => {
  const text = encodeURIComponent("Olá, quero receber a análise espiritual profunda.");
  window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
});
