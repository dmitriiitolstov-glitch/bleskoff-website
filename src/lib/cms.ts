import { createClient } from "@sanity/client";
import type { Faq, Program, Promotion, Service } from "../content/defaults";

export type CmsContent = {
	settings?: Record<string, any>;
	homepage?: Record<string, any>;
	services?: Service[];
	promotions?: Promotion[];
	programs?: Program[];
	faqs?: Faq[];
};

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
const configured = /^[a-z0-9]+$/.test(projectId || "");

const query = `{
  "settings": *[_type == "siteSettings" && _id == "siteSettings"][0]{
    siteName, seoTitle, seoDescription, canonicalUrl, noIndex, phone, whatsapp, email,
    address, workingHours, bookingUrl, mapsUrl, geo, telegramUrl, vkUrl, dzenUrl,
    "ogImage": ogImage.asset->url
  },
  "homepage": *[_type == "homepage" && _id == "homepage"][0]{
    eyebrow, title, accent, lead, primaryCtaLabel, primaryCtaUrl,
    "image": coalesce(image.asset->url, imagePath)
  },
  "services": *[_type == "service" && active != false] | order(order asc){
    index, title, "slug": slug.current, lead, description, priceFrom, priceLead, duration,
    outcomes, included, priceOptions, process, comparisonCaption, faqs, seoTitle, seoDescription,
    "image": coalesce(image.asset->url, imagePath),
    "beforeImage": beforeImage.asset->url,
    "afterImage": afterImage.asset->url
  },
  "promotions": *[_type == "promotion" && active != false] | order(order asc){
    layout, label, value, title, description, permanent, validUntil, details, ctaText, whatsappMessage
  },
  "programs": *[_type == "program" && active != false] | order(order asc){
    "id": coalesce(slug.current, _id), number, tab, title, items
  },
  "faqs": *[_type == "faq" && active != false] | order(order asc){ question, answer }
}`;

export async function getCmsContent(): Promise<CmsContent | null> {
	if (!configured) return null;

	try {
		const client = createClient({ projectId, dataset, apiVersion: "2026-07-20", useCdn: false, perspective: "published" });
		return await client.fetch<CmsContent>(query);
	} catch (error) {
		console.warn("Sanity content is unavailable; using local fallback content.", error);
		return null;
	}
}

export const isCmsConfigured = configured;
