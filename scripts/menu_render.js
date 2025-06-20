// Flag to track if the skill menu is open
let skillMenuOpen = false;

// Keybind to toggle the skill menu (L key)
onKeyPressed("L", () => {
  skillMenuOpen = !skillMenuOpen;
});

// Draw the skill menu panel
onRenderScreen((ctx) => {
  if (!skillMenuOpen) return;

  let panelWidth = 300;
  let panelHeight = 300;
  let x = ctx.getWidth() / 2 - panelWidth / 2;
  let y = ctx.getHeight() / 2 - panelHeight / 2;

  // Draw the skill menu image
  ctx.drawImage("textures/ui/skill_menu_panel.png", x, y, panelWidth, panelHeight);
});
