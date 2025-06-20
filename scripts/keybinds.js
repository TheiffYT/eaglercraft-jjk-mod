// Full keybinds.js

// Register PUNCH
keybind.register("p", () => {
  runScript("abilities/punch.js");
  runScript("scripts/combo.js", { input: "p" });
});

// Register JUMP input (used for combo sequence, doesn't make you jump here)
keybind.register(" ", () => {
  runScript("scripts/combo.js", { input: "space" });
});

// Register UPPERCUT
keybind.register("u", () => {
  runScript("abilities/uppercut.js");
  runScript("scripts/combo.js", { input: "u" });
});

// Register KICK
keybind.register("k", () => {
  runScript("abilities/kick.js");
  runScript("scripts/combo.js", { input: "k" });
});
