const Color = require("color");
const { colors } = require("@primer/primitives");

function palette(style) {
  if (style === "dark") {
    // The array of light to dark colors are reversed to auto-generate dark theme
    const darkColors = {};
    Object.entries(colors).forEach(([name, val]) => {
      if (name === "black") {
        darkColors.white = val;
      } else if (name === "white") {
        darkColors.black = val;
      } else {
        darkColors[name] = [...val].reverse();
      }
    });
    return darkColors;
  } else {
    return colors;
  }
}

function invert(hex) {
  // Generate color variant by inverting luminance in the HSL representation
  const c = Color(hex);
  return c
    .hsl()
    .lightness(100 - c.lightness())
    .hex()
    .toLowerCase();
}

/**
 * Generate color by mixing two colors
 * result = hex1 * multiplier + hex2 * (1 - multiplier)
 */
function mix(hex1, hex2, multiplier) {
  const c1 = Color(hex1);
  const c2 = Color(hex2);
  return c2.mix(c1, multiplier).hex().toLowerCase();
}

module.exports = {
  palette,
  invert,
  mix,
};
