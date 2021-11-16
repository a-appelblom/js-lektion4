# Lektion 4

## Övning

### Använda paket

Skapa en mapp med en HTML-,css- och js-fil.

Kör kommandot `npm init` för att skapa en package.json

Prova att installera några paket och att använda dem

Några exempel är:
DayJS
Axios
RandomColor
cowsay

### Skapa paket

Gå till [NPMJS](https://www.npmjs.com/) och skapa ett konto

Glöm inte att bekräfta mailen du använder annars går det inte att publisera.

Skapa en ny mapp

Skapa minst 1 js-fil. Kan vara bra att iaf tillfälligt ha en HTML-fil för att testa om ni inte är bekväma med node-kommandot.

kör kommandot `npm init` och svara på frågorna.

Skapa en funktion som gör något roligt i din js-fil, det går ju också att importera paket även i detta projekt.

när du känner dig nöjd så kan du logga in på npm i terminalen.

kolla först vem som är inloggad med `npm whoami`, sedan kan du logga in med `npm login`.

Kolla sedan att du är inloggad med `npm whoami` igen.

kör kommandot `npm publish` för att publisera till din npm-profil

### Använd ditt egna paket

Gå tillbaka till din första mapp och installera ditt egna paket.

Kom ihåg att länka in JS-filen från node_modules.

Anropa din eller dina funktioner.

#### Kommentarer

Planerar du att lägga upp detta på github. Glöm inte att skapa en `.gitignore` i din root där du kört git init.

lägg in de filer och mappar ni inte vill ska med till github. Exempelvis node_modules foldern.

När ni hämtar ett projekt från github innehåller det oftast inte node_modules och man måste köra kommandot `npm install`för att installera dem från informationen i projektets package.json.
