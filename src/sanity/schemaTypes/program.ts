import { defineField, defineType } from "sanity";

export const programType = defineType({
	name: "program",
	title: "Программа детейлинга",
	type: "document",
	fields: [
		defineField({ name: "active", title: "Показывать на сайте", type: "boolean", initialValue: true }),
		defineField({ name: "order", title: "Порядок", type: "number", initialValue: 10, validation: (rule) => rule.required().integer().min(0) }),
		defineField({ name: "number", title: "Номер", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "tab", title: "Короткое название вкладки", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "title", title: "Заголовок программы", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "slug", title: "Идентификатор", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
		defineField({ name: "items", title: "Состав работ", type: "array", of: [{ type: "string" }], validation: (rule) => rule.required().min(1) }),
	],
	preview: { select: { title: "title", subtitle: "tab" } },
});
