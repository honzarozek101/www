import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      production: "tnsgl-4qaaa-aaaal-asw7q-cai"  // Tvůj satellite ID
    },
    source: "build",  // Nahraje z build/ složky (index.html + JS/CSS)
    predeploy: ["npm run build"]  // Spustí build
  },
  automation: {
    github: {
      repositories: [
        {
          owner: "honzarozek101",  // Tvůj username
          name: "www",  // Název repo
          refs: ["main"]
        }
      ]
    }
  }
});
