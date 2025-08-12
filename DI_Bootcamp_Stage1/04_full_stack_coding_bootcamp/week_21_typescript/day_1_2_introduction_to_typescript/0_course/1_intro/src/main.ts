/* npm init -g typescript
tsc --init
npx tsc --init //without error
npm install typescript
tsc // pour lancer les fichiers
tsc -w   (watching) // pour lancer à chaque changements

AJOUT / NO COMMENT dans le tsconfig.json:
"rootDir": "./src",     // pour indiquer le dossier source
"outDir": "./dist",     // pour mettre les fichiers compilés dans un dossier dist
"noEmitOnError": true  //NE COMPILE PAS SI IL Y A UNE ERREUR

https://aka.ms/tsconfig 

lorsque l'on lance le fichier (dossiers base: src:) nom.ts>> tsc dans le terminal il crée dans le dossier dist les fichiers compilés (base: nom.d.ts, nom.d.ts.map, nom.js, nom.js.map)
*/

let a = 6;

// a = "a" //error