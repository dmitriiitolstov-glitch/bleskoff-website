import { defineField, defineType } from "sanity";

export const homepageType = defineType({
	name: "homepage",
	title: "Первый экран",
	type: "document",
	fields: [
		defineField({ name: "eyebrow", title: "Строка над заголовком", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "title", title: "Основной заголовок", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "accent", title: "Красная строка заголовка", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "lead", title: "Описание", type: "text", rows: 3, validation: (rule) => rule.required() }),
		defineField({ name: "image", title: "Фотография", type: "image", options: { hotspot: true } }),
		defineField({ name: "imagePath", title: "Резервное изображение", type: "string", readOnly: true, hidden: true }),
		defineField({ name: "primaryCtaLabel", title: "Текст основной кнопки", type: "string" }),
		defineField({ name: "primaryCtaUrl", title: "Ссылка основной кнопки", type: "url" }),
	],
	preview: { prepare: () => ({ title: "Первый экран" }) },
});
