import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const output = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(output, { recursive: true });
writeFileSync(join(output, 'entry.txt'), 'One star. My human served dinner a minute late. I knocked his water glass off the table; apparently only one of us is allowed to make a scene.');
