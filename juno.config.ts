import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      production: "73ble-jqaaa-aaaal-asxrq-cai"  // Tvůj satellite ID z Juno Console
    },
    source: "build"  // Nahraje soubory z build/ složky
  }

