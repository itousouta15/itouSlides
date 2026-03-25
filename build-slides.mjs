import { spawn } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { resolve } from "node:path";

const repoRoot = process.cwd();
const slidesRoot = resolve(repoRoot, "slides");
const outRoot = resolve(repoRoot, "public", "talks");

rmSync(outRoot, { recursive: true, force: true });

const dirs = await readdir(slidesRoot, { withFileTypes: true });
const targets = dirs
	.filter(dir => dir.isDirectory())
	.map(dir => dir.name)
	.filter(slug => existsSync(resolve(slidesRoot, slug, "slides.md")));

const runBuild = (slug, index) => {
	const entry = resolve(slidesRoot, slug, "slides.md");
	const outDir = resolve(outRoot, slug);
	const base = `/talks/${slug}/`;
	const port = 3030 + index;
	const args = ["exec", "slidev", "build", entry, "--out", outDir, "--base", base, "--download", "true", "--port", String(port)];

	console.log(`building ${slug}...`);
	console.log(`entry: ${entry}`);
	console.log(`out:   ${outDir}`);
	console.log(`command: pnpm ${args.join(" ")}\n`);

	return new Promise(resolveBuild => {
		const child = spawn("pnpm", args, {
			stdio: "inherit",
			cwd: repoRoot
		});

		child.on("close", code => resolveBuild({ slug, code: code ?? 1 }));
		child.on("error", () => resolveBuild({ slug, code: 1 }));
	});
};

const results = await Promise.all(targets.map(runBuild));
const failed = results.filter(result => result.code !== 0).map(result => result.slug);

if (failed.length) {
	console.error("\nfailed decks:", failed.join(", "));
	process.exit(1);
}
