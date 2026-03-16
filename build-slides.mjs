import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { resolve } from "node:path";

const repoRoot = process.cwd();
const slidesRoot = resolve(repoRoot, "slides");
const outRoot = resolve(repoRoot, "public", "talks");

rmSync(outRoot, { recursive: true, force: true });

const dirs = await readdir(slidesRoot, { withFileTypes: true });
const failed = [];

for (const dir of dirs) {
	if (!dir.isDirectory()) continue;

	const slug = dir.name;
	const entry = resolve(slidesRoot, slug, "slides.md");
	if (!existsSync(entry)) continue;

	const outDir = resolve(outRoot, slug);
	const base = `/talks/${slug}/`;

	console.log(`building ${slug}...`);
	console.log(`entry: ${entry}`);
	console.log(`out:   ${outDir}`);

	const result = spawnSync("pnpm", ["exec", "slidev", "build", entry, "--out", outDir, "--base", base,], {
		stdio: "inherit",
		cwd: repoRoot
	});

	if (result.status !== 0) failed.push(slug);
}

if (failed.length) {
	console.error("\nfailed decks:", failed.join(", "));
	process.exit(1);
}
