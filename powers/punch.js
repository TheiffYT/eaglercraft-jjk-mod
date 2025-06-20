// /abilities/punch.js

// Cooldown check (0.4s = 400ms)
if (player.data.lastPunch && Date.now() - player.data.lastPunch < 400) return;
player.data.lastPunch = Date.now();

// Actual punch stats (match the JSON values)
const range = 2.2;
const damage = 7;
const knockback = 0.6;

// Perform the attack
player.attackNearestEntity(range, damage, knockback);

// Play impact sound
player.playSound("minecraft:entity.player.attack.strong");

// Particle effect
world.spawnParticle("minecraft:crit", player.getPosition(), 10);
