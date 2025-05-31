const toggleBtn = document.getElementById("toggle-ingredients");
const ingredients = document.getElementById("ingredients");

toggleBtn.addEventListener("click", () => {
  ingredients.classList.toggle("hidden");
  toggleBtn.textContent = ingredients.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-step");
const steps = document.querySelectorAll("#stepList li");
const progress = document.getElementById("progress");

let currentStep = -1;

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  currentStep = 0;
  highlightStep();
});

nextBtn.addEventListener("click", () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    highlightStep();
  } else {
    nextBtn.disabled = true;
    nextBtn.textContent = "Done!";
  }
});

function highlightStep() {
  steps.forEach((step, index) => {
    step.style.background = index === currentStep ? "#f1c40f" : "";
  });
  progress.style.width = ((currentStep + 1) / steps.length) * 100 + "%";
}
