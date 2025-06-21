(function () {
  const sukunaPlayers = {};

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
    onEat: function (player) {
      ModAPI.sendMessage(player, "💀 You feel Sukuna's presence awaken inside you...");
      sukunaPlayers[player.name] = true;
      player.setSpeed(1.5);
      player.setAttackPower(2.0);
      player.setResistance(0.5);
      player.setEffect("glow", 20);
      player.giveItem("soul_split_katana", 1);
    }
  });

  ModAPI.onPlayerTick(function (player) {
    if (sukunaPlayers[player.name]) {
      player.setEffect("strength", 2);
      player.setEffect("speed", 1);
      player.setEffect("regeneration", 1);
    }
  });

  ModAPI.createCommand("unsukuna", function (args, player) {
    sukunaPlayers[player.name] = false;
    player.setSpeed(1.0);
    player.setAttackPower(1.0);
    player.setResistance(0.0);
    ModAPI.sendMessage(player, "🧘‍♂️ Sukuna’s influence fades...");
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

  function registerPowers(player) {
    player.loadPower("powers/infinity.json");
    player.loadPower("powers/overtime.json");
    player.loadPower("powers/phantom_applause.json");
    player.loadPower("powers/reverse_cursed_technique.json");
    player.loadPower("powers/six_eyes.json");
    player.loadPower("powers/sixth_sense.json");
    player.loadPower("powers/stun.json");
    player.loadPower("powers/suppressed.json");
    player.loadPower("powers/wing_king.json");
    player.loadPower("powers/zenith_focus.json");
  }

  ModAPI.sendMessage(null, "✅ JJK Mod Initialized – Cursed Energy Online!");
})();