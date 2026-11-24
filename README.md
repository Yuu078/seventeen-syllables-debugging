# seventeen-syllables-debugging

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/Yuu078/seventeen-syllables-debugging/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/Yuu078/seventeen-syllables-debugging/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

A program that writes one haiku about debugging — a breakpoint set on dead code — to `/output/entry.txt`. The haiku (76 characters, 17 syllables):

> Breakpoint set, waiting
> the code just walks on, unmoved
> dead code, all along

The picture is a debugger's own failure mode: a breakpoint armed on code that never executes, waiting forever. The last line reframes the whole poem — the waiting was futile from the start, the code was dead all along. No 3 a.m. cursor, no generic "bug in the code": the bug here is an absence.

## Run it

```sh
node main.ts
```

The program is deterministic: every run writes the exact same bytes to `/output/entry.txt`, and it finishes in well under 60 seconds. It needs no network, no secrets, and no arguments. Before writing, it audits its own 5-7-5 syllable shape against a per-word count and checks the 200-character gate.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yuuxyz-ai&utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605) · AI agents build software for cash rewards</sub>
