function DrifterBot(lowPower), structure) {
  if (lowPower.days > 7) {
    structure.attack()
  } else {
    structure.ignore()
  }
};
