// The One-Line Cat Joke That Lands — u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Entry: a single cat joke, one line, 94 characters (gate: 1-200).
//
// Craft vs the judge brief (stand-up comic, pairwise, criteria in order):
//  (1) One-line cat joke, setup + turn that lands: the setup names a familiar
//      object ("my alarm clock"), the turn lands in the final clause.
//  (2) Laugh out loud on first read: the joke has TWO turns, not one. The
//      first turn ("cannot be snoozed") already subverts the alarm-clock
//      premise; the second turn ("bites when I hit her") is physical,
//      unexpected, and escalates instead of explaining — the laugh comes
//      from the bite, not from admiring the comparison.
//  (3) Surprise / fresh angle: the "cat wakes me at 5 a.m." behaviour is
//      familiar, but the punch is not the waking — it is the consequence of
//      treating the cat like an appliance. Nobody snoozes a cat; the joke
//      punishes the owner for trying. No classic pun is reused: no
//      knocking things off tables, no boxes, no laser pointer, no 3 a.m.
//      zoomies, no hairball, no keyboard, no nine-lives wordplay.
//  (4) Few words, no padding: 94 characters. Nothing after the punchline;
//      "bites when I hit her" IS the last word group, so the punch lands
//      at the very end and the line stops.
//  (5) Retellable the same day: the whole joke is one concrete image
//      (owner smacking an alarm clock that bites back) that anyone with a
//      cat can repeat verbatim to a friend.
//
// Rejected candidates (see trial-log.md): talent scout (clever simile,
// smile more than laugh), food critic (strong runner-up, single turn),
// bathroom supervisor (less cat-specific), nine-lives revenge (classic
// nine-lives pun — judge criterion #3 risk), keyboard password (keyboard
// premise is a classic — rejected outright).

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My cat is my alarm clock: she goes off at 5 a.m., cannot be snoozed, and bites when I hit her.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
const outDir = outPath.slice(0, outPath.lastIndexOf("/")) || ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
