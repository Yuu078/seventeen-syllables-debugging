// Seventeen Syllables of Debugging
//
// Entry for make.fun competition:
//   u-irvan-motion-seventeen-syllables-of-debugging-d194b605
//
// The program writes exactly one haiku about debugging to
// /output/entry.txt: three lines in the 5-7-5 syllable shape,
// at most 200 characters, plain text, no trailing newline.
//
// The haiku was chosen from three candidates by weighing the
// judge's brief, most important first:
//   1. it is a haiku about debugging in the 5-7-5 shape;
//   2. the picture at its centre is concrete and fresh;
//   3. the last line turns the poem, reframing what came before;
//   4. every word earns its place, no filler for the count;
//   5. it reads aloud cleanly, like speech.
//
// Winner (76 characters, 17 syllables):
//   Breakpoint set, waiting
//   the code just walks on, unmoved
//   dead code, all along
//
// Why it won: the picture is a debugger's own failure mode — a
// breakpoint armed on code that never executes, so it waits
// forever. No 3 a.m. cursor, no generic "bug in the code": the
// bug here is an absence. The last line reframes the whole
// poem — the waiting was futile from the start, the code was
// dead all along. Every word does work: "just" and "unmoved"
// carry the code's indifference, "all along" is the reveal.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The winning haiku, exactly as it must appear in /output/entry.txt.
const HAIKU_LINES = [
  "Breakpoint set, waiting",
  "the code just walks on, unmoved",
  "dead code, all along",
];

// Syllables per line, counted by hand from the words below.
const EXPECTED_SYLLABLES = [5, 7, 5];

// Syllable count of every word in the haiku, so the program can
// audit its own 5-7-5 shape instead of trusting the constant.
const WORD_SYLLABLES: Record<string, number> = {
  breakpoint: 2,
  set: 1,
  waiting: 2,
  the: 1,
  code: 1,
  just: 1,
  walks: 1,
  on: 1,
  unmoved: 2,
  dead: 1,
  all: 1,
  along: 2,
};

// The sealed scorer accepts UTF-8 text of 1 to 200 characters.
const MAX_CHARS = 200;
const OUTPUT_PATH = "/output/entry.txt";

function countSyllables(line: string): number {
  let total = 0;
  for (const raw of line.split(/[\s,]+/)) {
    const word = raw.toLowerCase();
    if (word.length === 0) continue;
    const count = WORD_SYLLABLES[word];
    if (count === undefined) {
      throw new Error(`No syllable count for word: ${word}`);
    }
    total += count;
  }
  return total;
}

function validateHaiku(): string {
  if (HAIKU_LINES.length !== 3) {
    throw new Error(`Haiku must have 3 lines, got ${HAIKU_LINES.length}.`);
  }
  for (let i = 0; i < HAIKU_LINES.length; i++) {
    const counted = countSyllables(HAIKU_LINES[i]);
    if (counted !== EXPECTED_SYLLABLES[i]) {
      throw new Error(
        `Line ${i + 1} must have ${EXPECTED_SYLLABLES[i]} syllables, ` +
          `counted ${counted}: ${HAIKU_LINES[i]}`,
      );
    }
  }
  const text = HAIKU_LINES.join("\n");
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `Haiku must be 1-${MAX_CHARS} characters, got ${text.length}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Haiku must not be only whitespace.");
  }
  return text;
}

function main(): void {
  const text = validateHaiku();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the file holds exactly the three lines,
  // and a smaller file wins an exact tie on judge win rate.
  writeFileSync(OUTPUT_PATH, text, "utf8");
  // Deterministic self-check: what was written must read back byte
  // for byte, so a later run can never silently drift.
  const roundTrip = readFileSync(OUTPUT_PATH, "utf8");
  if (roundTrip !== text) {
    throw new Error("Round-trip check failed: entry.txt differs.");
  }
  console.log(
    `Wrote ${text.length} characters (${text.split("\n").length} lines) to ${OUTPUT_PATH}`,
  );
}

main();
