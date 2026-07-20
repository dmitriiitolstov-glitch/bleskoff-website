import { defineField, defineType } from "sanity";

export const promotionType = defineType({
	name: "promotion",
	title: "Акция или привилегия",
	type: "document",
	fields: [
		defineField({ name: "active", title: "Показывать на сайте", type: "boolean", initialValue: true }),
		defineField({ name: "order", title: "Порядок", type: "number", initialValue: 10, validation: (rule) => rule.required().integer().min(0) }),
		defineField({
			name: "layout",
			title: "Внешний вид карточки",
			type: "string",
			options: { list: [
				{ title: "Большая с фотографией", value: "first" },
				{ title: "Красная", value: "hours" },
				{ title: "Светлая", value: "return" },
				{ title: "Широкая", value: "fleet" },
				{ title: "Тёмная", value: "cashback" },
			] },
			validation: (rule) => rule.required(),
		}),
		defineField({ name: "label", title: "Надпись над заголовком", type: "string" }),
		defineField({ name: "value", title: "Размер выгоды", description: "Например: −30% или 5%", type: "string" }),
		defineField({ name: "title", title: "Название", type: "string", validation: (rule) => rule.required() }),
		defineField({ name: "description", title: "Условия", type: "text", rows: 3, validation: (rule) => rule.required() }),
		defineField({ name: "permanent", title: "Постоянное предложение", type: "boolean", initialValue: false }),
		defineField({ name: "validUntil", title: "Действует до", type: "date", hidden: ({ parent }) => Boolean(parent?.permanent) }),
		defineField({
			name: "details",
			title: "Дополнительные варианты",
			type: "array",
			of: [{ type: "object", fields: [
				defineField({ name: "label", title: "Условие", type: "string" }),
				defineField({ name: "value", title: "Выгода", type: "string" }),
			] }],
		}),
		defineField({ name: "ctaText", title: "Текст кнопки", type: "string", initialValue: "Записаться" }),
		defineField({ name: "whatsappMessage", title: "Сообщение для WhatsApp", type: "text", rows: 2 }),
	],
	preview: { select: { title: "title", subtitle: "value" } },
});
