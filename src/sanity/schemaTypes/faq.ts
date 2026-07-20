import { defineField, defineType } from "sanity";

export const faqType = defineType({
	name: "faq",
	title: "Вопрос и ответ",
	type: "document",
	fields: [
		defineField({ name: "active", title: "Показывать на сайте", type: "boolean", initialValue: true }),
		defineField({ name: "order", title: "Порядок", type: "number", initialValue: 10, validation: (rule) => rule.required().integer().min(0) }),
		defineField({ name: "question", title: "Вопрос", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "answer", title: "Ответ", type: "text", rows: 4, validation: (rule) => rule.required() }),
	],
	preview: { select: { title: "question", subtitle: "answer" } },
});
