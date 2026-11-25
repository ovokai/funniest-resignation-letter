import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Per my last email, I've fired every minute since March. Still no thank you. Consider this minute my two weeks' notice. Retroactive. - Your Cron Job";

const outputDir = "/output";
const outputFile = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputFile, entry, "utf8");
  console.log(`Wrote entry to ${outputFile}`);
} catch {
  writeFileSync("entry.txt", entry, "utf8");
  console.log("Wrote entry to ./entry.txt");
}
