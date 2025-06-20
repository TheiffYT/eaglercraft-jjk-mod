// /powers/black_flash.js

// Optional cooldown so they can’t spam Black Flash
if (player.data.lastBlackFlash && Date.now() - player.data.lastBlackFlash < 10000) {
  player.sendMessage("⏳ Your cursed energy hasn't realigned yet...");
  return;
}
player.data.lastBlackFlash = Date.now();

// POWERFUL HIT
player.sendMessage("💥 BLACK FLASH ACTIVATED!");
player.attackNearestEntity(3.5, 20, 2.5); // Massive hit: range, damage, knockback

// RED PARTICLE SHOCKWAVE
for (let i = 0; i < 360; i += 10) {
  let rad = i * (Math.PI / 180);
  let x = Math.cos(rad) * 1.5;
  let z = Math.sin(rad) * 1.5;
  world.spawnParticle("minecraft:redstone", {
    x: player.getX() + x,
    y: player.getY() + 1,
    z: player.getZ() + z,
    r: 0.1,
    g: 0,
    b: 0,
    size: 1
  }, 1);
}

// SCREEN FLASH + PARTICLES
hud.flashScreen("red", 0.3);
world.spawnParticle("minecraft:explosion", player.getPosition(), 40);
world.spawnParticle("minecraft:smoke", player.getPosition(), 20);
world.spawnParticle("minecraft:crit", player.getPosition(), 20);

// EPIC SOUND
player.playSound("minecraft:entity.lightning_bolt.impact");
player.playSound("minecraft:entity.generic.explode");
player.playSound("minecraft:entity.ender_dragon.growl");
