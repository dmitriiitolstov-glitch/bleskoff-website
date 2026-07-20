import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
	name: "siteSettings",
	title: "Настройки сайта и SEO",
	type: "document",
	groups: [
		{ name: "seo", title: "SEO", default: true },
		{ name: "contacts", title: "Контакты" },
		{ name: "social", title: "Социальные сети" },
	],
	fields: [
		defineField({ name: "siteName", title: "Название сайта", type: "string", group: "seo", validation: (rule) => rule.required() }),
		defineField({ name: "seoTitle", title: "Заголовок в поиске", description: "Желательно до 60 символов", type: "string", group: "seo", validation: (rule) => rule.required().max(65) }),
		defineField({ name: "seoDescription", title: "Описание в поиске", description: "Желательно 120–160 символов", type: "text", rows: 3, group: "seo", validation: (rule) => rule.required().max(180) }),
		defineField({ name: "canonicalUrl", title: "Основной адрес сайта", type: "url", group: "seo" }),
		defineField({ name: "ogImage", title: "Изображение для мессенджеров и соцсетей", type: "image", options: { hotspot: true }, group: "seo" }),
		defineField({ name: "noIndex", title: "Скрыть сайт от поисковиков", type: "boolean", initialValue: false, group: "seo" }),
		defineField({ name: "phone", title: "Телефон", type: "string", group: "contacts", validation: (rule) => rule.required() }),
		defineField({ name: "whatsapp", title: "WhatsApp без пробелов и плюса", type: "string", group: "contacts", validation: (rule) => rule.required() }),
		defineField({ name: "email", title: "Почта", type: "string", group: "contacts", validation: (rule) => rule.email() }),
		defineField({ name: "address", title: "Адрес", type: "string", group: "contacts", validation: (rule) => rule.required() }),
		defineField({ name: "workingHours", title: "Режим работы", type: "string", group: "contacts" }),
		defineField({ name: "bookingUrl", title: "Ссылка онлайн-записи", type: "url", group: "contacts" }),
		defineField({ name: "mapsUrl", title: "Ссылка на карту", type: "url", group: "contacts" }),
		defineField({
			name: "geo",
			title: "Координаты",
			type: "object",
			group: "contacts",
			fields: [
				defineField({ name: "latitude", title: "Широта", type: "number" }),
				defineField({ name: "longitude", title: "Долгота", type: "number" }),
			],
		}),
		defineField({ name: "telegramUrl", title: "Telegram", type: "url", group: "social" }),
		defineField({ name: "vkUrl", title: "VK", type: "url", group: "social" }),
		defineField({ name: "dzenUrl", title: "Дзен", type: "url", group: "social" }),
	],
	preview: { prepare: () => ({ title: "Настройки сайта и SEO" }) },
});
