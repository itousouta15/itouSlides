import { parser } from "@slidev/cli";
import { promises as fs } from "fs";

const entry = process.argv[2] || "slides/apcs-day1-hello/slides.md";
const md = await fs.readFile(entry, "utf8");
const parsed = parser.parseSync(md, entry);

console.log("Total slides:", parsed.slides.length);

const idx = Number(process.argv[3] ?? 15); // default to 15 (1-based-ish for user)
const i = Math.max(0, idx - 1);
if (!parsed.slides[i]) {
	console.error("No slide at index", idx);
	process.exit(2);
}

const slide = parsed.slides[i];
console.log("--- Slide index", i, "(1-based", idx, ") ---");
const lines = slide.raw.split(/\r?\n/);
lines.forEach((l, j) => {
	const n = j + 1;
	console.log(String(n).padStart(4, " "), l);
});
console.log("--- end ---");
