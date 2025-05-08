export const SIDES = {
  ATTACK: "attack",
  DEFEND: "defend",
  UNIVERSAL: "universal",
  BOTH: "both",
};

export const normalizeSide = (side) => {
  if (!side) return SIDES.BOTH; // Default to 'both' if no side is provided
  const normalized = side.toLowerCase();
  if (["a", "attack", "attacker"].includes(normalized)) return SIDES.ATTACK;
  if (["d", "defend", "defender"].includes(normalized)) return SIDES.DEFEND;
  if (["u", "universal", "general"].includes(normalized)) return SIDES.UNIVERSAL;
  return SIDES.BOTH; // Default to 'both' for unrecognized values
};