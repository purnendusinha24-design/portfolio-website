// year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// tiny poem generator
const plantInput = document.getElementById("plantInput");
const animalInput = document.getElementById("animalInput");
const poemOutput = document.getElementById("poemOutput");
const makeBtn = document.getElementById("makePoemBtn");
const resetBtn = document.getElementById("resetPoemBtn");

function makePoem() {
  const plant = (plantInput.value || "sunflower").trim();
  const animal = (animalInput.value || "fox").trim();

  const lines = [
    `In a field of ${plant}s, quiet and bright,`,
    `A lone ${animal} wanders at the edge of night.`,
    `Code hums softly like crickets in air,`,
    `Debugging dreams with thoughtful care.`,
  ];

  poemOutput.textContent = lines.join("\n");
}

if (makeBtn && resetBtn && poemOutput) {
  makeBtn.addEventListener("click", makePoem);

  resetBtn.addEventListener("click", () => {
    plantInput.value = "";
    animalInput.value = "";
    poemOutput.textContent = "";
  });
}
