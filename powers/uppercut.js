// /abilities/uppercut.js

// Cooldown check (1.0s = 1000ms)
if (player.data.lastUppercut && Date.now() - player.data.lastUppercut < 1000) return;
player.data.lastUppercut = Date.now();

// Uppercut stats (match JSON)
const range = 2.0;
const damage = 9;
const knockback = 1.2;

// Hit the nearest enemy with a strong uppercut
player.attackNearestEntity(range, damage, knockback);

// Play the big boom sound
player.playSound("minecraft:entity.iron_golem.attack");

// Add explosion particles
world.spawnParticle("minecraft:explosion", player.getPosition(), 15);
