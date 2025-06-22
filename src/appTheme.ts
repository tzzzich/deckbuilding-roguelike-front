import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";

export const appTheme = deepMerge(grommet, {
  global: {
    colors: {
      brand: "#3C7EFF",
      "background-back": "#0E1012",
    },
    font: {
      family: "Roboto, sans-serif",
      size: "14px",
      height: "20px",
    },
  },
  button: {
    border: { radius: "8px" },
    padding: { vertical: "8px", horizontal: "16px" },
  },
});
