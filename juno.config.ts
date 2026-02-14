module.exports = {
  satellite: {
    ids: {
      production: "tnsgl-4qaaa-aaaal-asw7q-cai"  // Tvůj satellite ID z Juno Console
    },
    source: "build",  // Nahraje z build/ (index.html + JS/CSS); změň na "." pro kořen, pokud statický
    predeploy: ["npm run build"],  // Spustí build (pokud máš package.json)
    ignore: ["**/*.map", ".git/", "node_modules/"]  // Ignoruj nepotřebné pro úsporu cyklů
  },
  automation: {
    github: {
      repositories: [
        {
          owner: "honzarozek101",  // Tvůj GitHub username
          name: "www",  // Název repozitáře
          refs: ["main"]  // Branch pro auto-deploy
        }
      ]
    }
  }
};
