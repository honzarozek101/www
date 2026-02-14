import { defineConfig } from "@junobuild/config";

export default defineConfig({
  satellite: {
    ids: {
      production: "qchr-wyaa-aaaa-aswwa-cai"  // Tvůj satellite ID
    },
    source: "build",  // Nebo "." pro kořen (nahraje index.html odtud); změň na "dist" pokud tak máš
    predeploy: ["npm run build"],  // Spustí build před deployem (pokud máš package.json)
    ignore: ["**/*.map", ".git/"]  // Ignoruj nepotřebné (volitelné)
  }
});
