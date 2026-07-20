import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
	S.list()
		.title("BleskOFF")
		.items([
			S.listItem().title("Настройки сайта и SEO").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
			S.listItem().title("Первый экран").child(S.document().schemaType("homepage").documentId("homepage")),
			S.divider(),
			S.documentTypeListItem("service").title("Услуги"),
			S.documentTypeListItem("promotion").title("Акции и привилегии"),
			S.documentTypeListItem("program").title("Программы детейлинга"),
			S.documentTypeListItem("faq").title("FAQ"),
		]);
