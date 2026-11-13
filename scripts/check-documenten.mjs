// Controleert vóór elke build of alle documenten waarnaar de site linkt echt in
// public/documenten/ staan, en meldt bestanden die nergens meer gebruikt worden.
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const source = readFileSync(join(root, "src/data/site.ts"), "utf8");
const referenced = new Set([...source.matchAll(/\$\{DOCS\}\/([^`"]+)/g)].map((m) => m[1]));
const present = new Set(readdirSync(join(root, "public/documenten")));

const missing = [...referenced].filter((f) => !existsSync(join(root, "public/documenten", f)));
const unused = [...present].filter((f) => !referenced.has(f));

if (unused.length) console.warn(`Niet gekoppelde documenten (mogen weg als ze vervangen zijn):\n  ${unused.join("\n  ")}`);
if (missing.length) {
  console.error(`Ontbrekende documenten in public/documenten/:\n  ${missing.join("\n  ")}`);
  process.exit(1);
}
console.log(`Documenten in orde: ${referenced.size} gekoppeld, allemaal aanwezig.`);
