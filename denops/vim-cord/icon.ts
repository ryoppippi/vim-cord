import {
  availableIconPacks,
  generateManifest,
  type IconPackValue,
} from "npm:material-icon-theme";

const iconPacks: Array<IconPackValue> = availableIconPacks;

console.log("Available icon packs:", iconPacks);

const manifest = generateManifest({
  // activeIconPack: "vue",
});

// https://esm.sh/material-icon-theme@5.10.0/icons/prettier.svg
