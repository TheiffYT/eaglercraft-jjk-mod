// /abilities/kick.js

// Cooldown check (0.8s = 800ms)
if (player.data.lastKick && Date.now() - player.data.lastKick < 800) return;
player.data.lastKick = Date.now();

// Kick stats
const range = 2.5;
const damage = 8;
const knockback = 1.8;

player.attackNearestEntity(range, damage, knockback);

// Sound + Particle
player.playSound("minecraft:entity.blaze.hurt");
world.spawnParticle("minecraft:cloud", player.getPosition(), 10);
