import { defineField, defineType } from "sanity";

export const serviceType = defineType({
	name: "service",
	title: "Услуга",
	type: "document",
	fields: [
		defineField({ name: "active", title: "Показывать на сайте", type: "boolean", initialValue: true }),
		defineField({ name: "order", title: "Порядок", type: "number", initialValue: 10, validation: (rule) => rule.required().integer().min(0) }),
		defineField({ name: "index", title: "Номер", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "title", title: "Название", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "slug", title: "Адрес страницы", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
		defineField({ name: "lead", title: "Короткий акцент", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "description", title: "Описание", type: "text", rows: 3, validation: (rule) => rule.required() }),
		defineField({ name: "image", title: "Фотография", type: "image", options: { hotspot: true } }),
		defineField({ name: "imagePath", title: "Резервное изображение", type: "string", readOnly: true, hidden: true }),
	],
	preview: { select: { title: "title", subtitle: "lead", media: "image" } },
});
