// Draws always-on HUD elements like Yën and ability inputs
onRenderOverlay((ctx, player) => {
  // ======= YËN DISPLAY =========
  let yen = player.getData("yen") || 0;
  let yenX = 20;
  let yenY = 20;

  // Draw the Yën label image
  ctx.drawImage("textures/hud/yen_label.png", yenX, yenY, 100, 32);

  // Draw the Yën number
  ctx.fillStyle = "#ff3e3e";
  ctx.font = "bold 20px Arial";
  ctx.fillText(`${yen}`, yenX + 110, yenY + 24);

  // ======= ABILITY INPUT ICONS =========
  let inputs = ["c", "p", "k", "u"];
  let iconX = 20;
  let iconY = ctx.getHeight() - 60;
  let spacing = 60;

  inputs.forEach((key, i) => {
    ctx.drawImage(`textures/hud/inputs/input_${key}.png`, iconX + i * spacing, iconY, 48, 48);
  });
});
