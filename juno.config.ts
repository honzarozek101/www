name: Deploy to Juno

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Check out the repo
        uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 18  # Uprav na tvou verzi

      - name: Install Juno CLI
        run: npm install -g @junobuild/cli  # Instaluje CLI pro hosting deploy

      - name: Install Dependencies
        run: npm ci  # Pokud máš package.json; jinak smaž

      - name: Build
        run: npm run build  # Vytvoří build/; smaž, pokud statický

      - name: List files for debug
        run: ls -la build/ || ls -la .  # Ukáže soubory v build/ nebo kořeni

      - name: Deploy to Juno
        run: npx juno hosting deploy  # Použije CLI přímo (s configem); env JUNO_TOKEN
        env:
          JUNO_TOKEN: ${{ secrets.JUNO_TOKEN }}
