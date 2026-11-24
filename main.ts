import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Worst App Idea Ever Pitched — one sentence, at most 240 characters.
const PITCH =
  "SnailMail lets busy executives hire a trained snail to hand-deliver urgent emails, because nothing says 'this deadline matters' like a mollusk arriving three weeks late with your quarterly report strapped to its shell.";

function main(): void {
  // The grader sets MAKEFUN_OUTPUT_DIR; never resolve output from process.cwd().
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, PITCH, "utf8");
  // The VM shell's umask 0007 would leave mode 660; the grader reads as another user.
  chmodSync(outPath, 0o644);
}

main();
