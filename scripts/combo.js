let comboSequence = [];
let comboTimeout;

function registerComboInput(input) {
  comboSequence.push(input);

  // Reset if no input for 1 second
  if (comboTimeout) clearTimeout(comboTimeout);
  comboTimeout = setTimeout(() => {
    comboSequence = [];
  }, 1000);

  const comboStr = comboSequence.join(" ");
  if (comboStr === "p space u k") {
    runScript("abilities/black_flash.js");
    comboSequence = [];
  }
}
