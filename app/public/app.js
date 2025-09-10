let questions = [];
let selectedQuestions = [];
let index = 0;
let score = 0;
let total = 0;

async function loadQuestions() {
  try {
    const res = await fetch("/data/questions.json");
    questions = await res.json();
    shuffle(questions);
    showStartScreen();
  } catch (err) {
    document.getElementById("quiz-container").innerHTML =
      `<p>Error loading questions: ${err}</p>`;
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function showStartScreen() {
  const container = document.getElementById("question-area");
  const controls = document.getElementById("controls");
  const result = document.getElementById("result");
  result.classList.add("hidden");
  container.innerHTML = `
    <div class="start-screen">
      <h2>Welcome!</h2>
      <p>Select how many questions you want to practice:</p>
      <input type="number" id="num-questions" min="1" max="${questions.length}" value="${questions.length}" />
      <button id="start-btn">Start Quiz</button>
    </div>
  `;
  controls.innerHTML = "";
  document.getElementById("start-btn").addEventListener("click", startQuiz);
}

function startQuiz() {
  const numInput = document.getElementById("num-questions");
  total = Math.min(
    parseInt(numInput.value) || questions.length,
    questions.length,
  );
  shuffle(questions);
  selectedQuestions = questions.slice(0, total);
  index = 0;
  score = 0;
  renderQuestion();
}

function renderQuestion() {
  const container = document.getElementById("question-area");
  const controls = document.getElementById("controls");
  const result = document.getElementById("result");
  result.classList.add("hidden");
  controls.innerHTML = "";

  if (index >= total) {
    container.innerHTML = `
      <div class="summary">
        <h2>Quiz Complete!</h2>
        <p>Your score: ${score} / ${total}</p>
        <button id="restart">Restart</button>
      </div>`;
    document
      .getElementById("restart")
      .addEventListener("click", showStartScreen);
    return;
  }

  const q = selectedQuestions[index];
  container.innerHTML = `
    <div class="question">
      <h3>Question ${index + 1} of ${total}</h3>
      <p>${escapeHtml(q.question)}</p>
      <ul class="choices">
        ${q.choices.map((c, i) => `<li class="choice"><label><input type="radio" name="choice" value="${i}" /> ${escapeHtml(c)}</label></li>`).join("")}
      </ul>
    </div>
  `;

  const submit = document.createElement("button");
  submit.textContent = "Submit";
  submit.addEventListener("click", onSubmit);
  controls.appendChild(submit);

  const skip = document.createElement("button");
  skip.textContent = "Skip";
  skip.style.marginLeft = "8px";
  skip.addEventListener("click", () => {
    index++;
    renderQuestion();
  });
  controls.appendChild(skip);
}

function onSubmit() {
  const selected = document.querySelector('input[name="choice"]:checked');
  const result = document.getElementById("result");

  if (!selected) {
    result.textContent = "⚠️ Please select an answer or click Skip.";
    result.className = "feedback incorrect";
    result.classList.remove("hidden");
    return;
  }

  const q = selectedQuestions[index];
  const chosen = Number(selected.value);
  if (chosen === q.correct) {
    score++;
    let text = "✅ Correct!";
    if (q.explanation) {
      text += `<br><span class='explanation'>${escapeHtml(q.explanation)}</span>`;
    }
    result.innerHTML = text;
    result.className = "feedback correct";
    result.classList.remove("hidden");
    index++;
    setTimeout(renderQuestion, 1200);
  } else {
    let text = `❌ Incorrect — correct answer: ${escapeHtml(q.choices[q.correct])}`;
    if (q.explanation) {
      text += `<br><span class='explanation'>${escapeHtml(q.explanation)}</span>`;
    }
    result.innerHTML = text;
    result.className = "feedback incorrect";
    result.classList.remove("hidden");
    // Show Next button only for incorrect answer
    const controls = document.getElementById("controls");
    controls.innerHTML = "";
    const next = document.createElement("button");
    next.textContent = "Next";
    next.addEventListener("click", () => {
      index++;
      renderQuestion();
    });
    controls.appendChild(next);
  }
}

function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (s) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[s],
  );
}

window.addEventListener("DOMContentLoaded", loadQuestions);
