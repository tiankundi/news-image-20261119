// news-image-20261119 entry (Node 22, standard library only).
// The entry image is entry.png beside this file; the program copies it to
// /output/entry.png (or MAKEFUN_OUTPUT_DIR when set, for local runs).
// Deterministic: a plain copy, so every run writes identical bytes.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
