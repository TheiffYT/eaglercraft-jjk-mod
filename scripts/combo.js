// combo.js

let comboSequence = [];
let comboTimeout;

function registerComboInput(input) {
  comboSequence.push(input);

  // Reset if no input in 1 sec
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

// Receive input from keybinds
registerComboInput(input);
