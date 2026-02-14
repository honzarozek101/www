module.exports = {
  satellite: {
    ids: {
      production: "qchr-wyaa-aaaa-aswwa-cai"  // Tvůj satellite ID
    },
    source: "build",  // Nahraje soubory z build/ složky (index.html zde + JS/CSS)
    // Pokud chceš kořen: source: "."
    predeploy: ["npm run build"],  // Spustí build před deployem
    ignore: ["**/*.map", ".git/", "node_modules/"]  // Ignoruj nepotřebné
  }
};
