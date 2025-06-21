let charged = false;
let chargeTimer = 0;

function use(item, player) {
  if (!charged) {
    charged = true;
    chargeTimer = 8000; // 8 seconds duration
    player.addEffect("speed", 2, 160); // optional buff
    player.playSound("curse_charge");
    player.sendMessage("🖤 You feel cursed energy flowing through you...");
  }
}

function tick(player) {
  if (charged) {
    chargeTimer -= 50;
    if (chargeTimer <= 0) {
      charged = false;
      player.sendMessage("⚠️ Your cursed energy fades.");
    }
  }
}

function isCharged() {
  return charged;
}
