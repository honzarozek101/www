import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      production: "tnsgl-4qaaa-aaaal-asw7q-cai"  // Tvůj satellite ID z Juno Console
    },
    source: "build"  // Nahraje soubory z build/ složky (index.html + JS/CSS)
  }
});
