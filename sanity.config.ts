import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID || import.meta.env.PUBLIC_SANITY_PROJECT_ID || "missingproject";
const dataset = import.meta.env.SANITY_STUDIO_DATASET || import.meta.env.PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
	name: "bleskoff",
	title: "BleskOFF — управление сайтом",
	projectId,
	dataset,
	plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: "2026-07-20" })],
	schema: { types: schemaTypes },
	document: {
		actions: (actions, context) =>
			["siteSettings", "homepage"].includes(context.schemaType)
				? actions.filter(({ action }) => action !== "delete" && action !== "duplicate")
				: actions,
	},
});
