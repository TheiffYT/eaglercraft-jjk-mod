function use(event) {
  const user = event.source.getEntity();
  const target = event.target;

  // Check cursed energy
  if (user.getData("cursed_energy") >= 10) {
    // Drain energy
    user.setData("cursed_energy", user.getData("cursed_energy") - 10);

    // Apply damage and knockback
    if (target && target.damage) {
      target.damage(10);
      target.knockback(user, 1.5);
    }

    // Play sound and particles
    playSoundAt("cursed_punch_hit", user.getPosition());
    spawnParticle("cursed_hit", target.getPosition());

  } else {
    // Not enough energy
    playSoundAt("error", user.getPosition());
    showTitle(user, "Not enough cursed energy!", "", 10, 30, 10);
  }
}
