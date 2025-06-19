(function() {
  ModAPI.addItem("katana", "Katana", "katana_.png", {
    stackSize: 1,
    damage: 8
  });

  ModAPI.addItem("playful_cloud", "Playful Cloud", "playful_cloud.png", {
    stackSize: 1,
    damage: 10
  });

  ModAPI.addItem("cursed_finger", "Cursed Finger", "cursed_finger.png", {
    stackSize: 16,
    edible: true,
    onEat: function(player) {
      ModAPI.sendMessage(player, "You feel overwhelming cursed energy surging...");
      // (function() {
  let sukunaPlayers = {};

  ModAPI.addItem("cursed_finger", "Cursed Finger", "cursed_finger.png", {
    stackSize: 16,
    edible: true,
    onEat: function(player) {
      ModAPI.sendMessage(player, "💀 You feel Sukuna's presence awaken inside you...");

      // Apply Sukuna Mode
      sukunaPlayers[player.name] = true;

      // Give transformation buffs
      player.setSpeed(1.5);      // Faster movement
      player.setAttackPower(2.0); // 2x damage
      player.setResistance(0.5);  // 50% damage resist
      player.setEffect("glow", 20); // glowing cursed aura

      // Optional: Give exclusive item or power
      player.giveItem("soul_split_katana", 1);
    }
  });

  // Optional cursed buff visual feedback
  ModAPI.onPlayerTick(function(player) {
    if (sukunaPlayers[player.name]) {
      player.setEffect("strength", 2);
      player.setEffect("speed", 1);
      player.setEffect("regeneration", 1);
    }
  });

  // Optional command to cancel Sukuna mode
  ModAPI.createCommand("unsukuna", function(args, player) {
    sukunaPlayers[player.name] = false;
    player.setSpeed(1.0);
    player.setAttackPower(1.0);
    player.setResistance(0.0);
    ModAPI.sendMessage(player, "🧘‍♂️ Sukuna’s influence fades...");
  });

  ModAPI.sendMessage(null, "✅ Sukuna Finger Loaded – Transformation Ready");
})();

    }
  });

  ModAPI.addItem("yen", "Yen", "moneys.png", {
    stackSize: 64
  });

  ModAPI.addItem("cursed_womb", "Cursed Womb", "cursed_womb.png", {
    stackSize: 1
  });

  ModAPI.addItem("trap_box", "Cursed Trap Box", "trap_box.png", {
    stackSize: 1
  });

  ModAPI.addItem("soul_split_katana", "Soul Split Katana", "soul_split_katana.png", {
    stackSize: 1,
    damage: 12
  });

  ModAPI.addItem("toji_spear", "Toji's Spear", "toji_spear.png", {
    stackSize: 1,
    damage: 15
  });

  ModAPI.sendMessage(null, "✅ JJK Mod Initialized – Cursed Energy Online!");
})();
