

const screen = document.getElementById("screen");
const backBtn = document.getElementById("backBtn");

let stack = [];

function render(fn) {
  stack.push(fn);
  backBtn.style.display = stack.length > 1 ? "block" : "none";
  fn();
}

function goBack() {
  stack.pop();
  stack[stack.length - 1]();
  backBtn.style.display = stack.length > 1 ? "block" : "none";
}

function show(title, body) {
  screen.innerHTML = `<h3>${title}</h3>${body}`;
}

/* HOME */

function home() {
  show(
    "Select Your Career Goal",
    `
    <div class="option-grid">
      <div class="option-card main" onclick="render(careerGrowth)">📈 Career Growth</div>
      <div class="option-card main" onclick="render(leadership)">💼 Leadership & Confidence</div>
      <div class="option-card main" onclick="render(careerRestart)">🔄 Career Restart</div>
      <div class="option-card main" onclick="render(skillTransition)">🚀 Skill Transition</div>
    </div>
  `,
  );
}

/* CAREER GROWTH */

function careerGrowth() {
  show(
    "Career Growth Journey",
    `
    <div class="option-grid">
      <div class="option-card inner" onclick="render(growthFinish)">🎯 Professional Branding</div>
      <div class="option-card inner" onclick="render(growthFinish)">👩‍💼 Leadership Exposure</div>
      <div class="option-card inner" onclick="render(growthFinish)">🚀 Promotion Readiness</div>
    </div>
  `,
  );
}

function growthFinish() {
  show(
    "Your Growth Roadmap",
    `
    <div class="option-grid">
      <div class="option-card inner">📊 Strategy Coaching</div>
      <div class="option-card inner">🤝 Mentor Support</div>
      <div class="option-card inner">🏆 Leadership Projects</div>
    </div>

    <div class="end-box">
      🎉 Congratulations! You’re on Iron Lady’s Career Growth Track
    </div>
  `,
  );
}

/* LEADERSHIP */

function leadership() {
  show(
    "Leadership Mastery",
    `
    <div class="option-grid">
      <div class="option-card inner" onclick="render(leaderFinish)">🗣️ Communication Mastery</div>
      <div class="option-card inner" onclick="render(leaderFinish)">🧠 Leadership Mindset</div>
      <div class="option-card inner" onclick="render(leaderFinish)">🤝 Personal Mentoring</div>
    </div>
  `,
  );
}

function leaderFinish() {
  show(
    "Leadership Transformation",
    `
    <div class="option-grid">
      <div class="option-card inner">🎤 Public Speaking</div>
      <div class="option-card inner">📈 Strategic Thinking</div>
      <div class="option-card inner">👑 Executive Presence</div>
    </div>

    <div class="end-box">
      🌟 You’re becoming a confident Iron Lady leader!
    </div>
  `,
  );
}

/* CAREER RESTART */

function careerRestart() {
  show(
    "Restart Your Career",
    `
    <div class="option-grid">
      <div class="option-card inner" onclick="render(restartFinish)">📚 Skill Refresh</div>
      <div class="option-card inner" onclick="render(restartFinish)">🎯 Career Planning</div>
      <div class="option-card inner" onclick="render(restartFinish)">💼 Job Readiness</div>
    </div>
  `,
  );
}

function restartFinish() {
  show(
    "Restart Success Path",
    `
    <div class="option-grid">
      <div class="option-card inner">🧩 Resume Building</div>
      <div class="option-card inner">🤝 Interview Coaching</div>
      <div class="option-card inner">🚀 Placement Guidance</div>
    </div>

    <div class="end-box">
      🎯 You’re ready to restart stronger than ever!
    </div>
  `,
  );
}

/* SKILL TRANSITION */

function skillTransition() {
  show(
    "Skill Transition Programs",
    `
    <div class="option-grid">
      <div class="option-card inner" onclick="render(skillFinish)">💬 Communication Skills</div>
      <div class="option-card inner" onclick="render(skillFinish)">🧠 Leadership Skills</div>
      <div class="option-card inner" onclick="render(skillFinish)">📈 Industry Skills</div>
    </div>
  `,
  );
}

function skillFinish() {
  show(
    "Skill Upgrade Journey",
    `
    <div class="option-grid">
      <div class="option-card inner">🎓 Practical Learning</div>
      <div class="option-card inner">📊 Real Projects</div>
      <div class="option-card inner">🤝 Mentor Feedback</div>
    </div>

    <div class="end-box">
      🚀 You’re transforming into a high-impact professional!
    </div>
  `,
  );
}

/* START */

render(home);

