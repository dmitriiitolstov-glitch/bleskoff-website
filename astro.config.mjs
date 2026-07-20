// @ts-check
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "development", process.cwd(), "");
const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET || "production";
const hasSanity = /^[a-z0-9]+$/.test(projectId || "");

const integrations = [react()];

if (hasSanity) {
	integrations.push(
		sanity({
			projectId,
			dataset,
			apiVersion: "2026-07-20",
			useCdn: false,
			studioBasePath: "/studio",
			studioRouterHistory: "hash",
		}),
	);
}

export default defineConfig({
	site: env.PUBLIC_SITE_URL || "https://blesk-off.ru",
	integrations,
});
