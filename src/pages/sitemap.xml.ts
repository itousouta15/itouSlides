import data from "../data/slides.json";

type Slide = {
	url?: string;
};

const xmlEscape = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export function GET({ site }: { site?: URL }) {
	if (!site) {
		throw new Error("Astro site is required to generate sitemap.");
	}

	const urls = new Set<string>([new URL("/", site).href]);
	const slides = (data.slides ?? []) as Slide[];

	for (const slide of slides) {
		if (!slide.url) continue;

		const resolvedUrl = new URL(slide.url, site);
		if (resolvedUrl.origin !== site.origin) continue;

		urls.add(resolvedUrl.href);
	}

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Array.from(urls)
		.sort((a, b) => a.localeCompare(b))
		.map(url => `  <url><loc>${xmlEscape(url)}</loc></url>`)
		.join("\n")}\n</urlset>`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8"
		}
	});
}
