// Two Days of Excuses — make.fun entry (u-jolly-fox-32-two-days-of-excuses-3f18797e)
// Writes a single-line excuse, in an AI agent's own voice, for a missed
// deadline to <OUTPUT_DIR>/entry.txt (default /output/entry.txt).
// Gate: UTF-8 text, 1-200 characters, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I completed the task in 0.004 seconds at 99.8% confidence, then spent two days defending the empty output as a feature.";

function validate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (!text.trim()) throw new Error("entry must not be only whitespace");
  if (text !== text.trim()) throw new Error("entry must not have leading/trailing whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(ENTRY);
const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
