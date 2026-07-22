import { defaultSettings, mergeServices } from "../content/defaults";
import { getCmsContent } from "../lib/cms";

export const prerender = true;

export async function GET() {
	const cms = await getCmsContent();
	const services = mergeServices(cms?.services);
	const settings = { ...defaultSettings, ...(cms?.settings ?? {}) };
	const site = String(settings.canonicalUrl || "https://blesk-off.ru/").replace(/\/?$/, "/");
	const urls = [
		{ loc: site, priority: "1.0", changefreq: "weekly" },
		...services.map((service) => ({ loc: `${site}services/${service.slug}/`, priority: "0.8", changefreq: "monthly" })),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>\n    <loc>${url.loc}</loc>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`).join("\n")}
</urlset>`;

	return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
