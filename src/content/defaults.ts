export type Service = {
	index: string;
	title: string;
	lead: string;
	description: string;
	image: string;
};

export type Program = {
	id: string;
	number: string;
	tab: string;
	title: string;
	items: string[];
};

export type Promotion = {
	layout: "first" | "hours" | "return" | "fleet" | "cashback";
	label?: string;
	value?: string;
	title: string;
	description: string;
	permanent: boolean;
	validUntil?: string;
	details?: { label: string; value: string }[];
	ctaText: string;
	whatsappMessage: string;
};

export type Faq = { question: string; answer: string };

export const defaultSettings = {
	siteName: "BleskOFF",
	seoTitle: "BleskOFF — детейлинг и мойка в Санкт-Петербурге",
	seoDescription: "Премиальный детейлинг, полировка, защитная плёнка, химчистка и мойка автомобиля в Московском районе Санкт-Петербурга.",
	canonicalUrl: "https://blesk-off.ru/",
	ogImage: "/images/gallery-1.jpg",
	noIndex: false,
	phone: "+7 (812) 214-86-16",
	phoneHref: "+78122148616",
	whatsapp: "79812602735",
	email: "info@blesk-off.ru",
	address: "ул. Типанова, 23 к.2 · паркинг −1",
	workingHours: "Ежедневно, 9:00–21:00",
	bookingUrl: "https://online.rocketwash.me/?id=107920",
	mapsUrl: "https://yandex.ru/maps/?rtext=~59.851322%2C30.318243",
	geo: { latitude: 59.851322, longitude: 30.318243 },
	telegramUrl: "https://t.me/bleskOFF_DS",
	vkUrl: "https://vk.com/bleskoff_detailing?from=groups",
	dzenUrl: "https://dzen.ru/bleskoff_detailing",
};

export const defaultHomepage = {
	eyebrow: "Московский район · Санкт-Петербург",
	title: "Детейлинг и мойка",
	accent: "без лишнего",
	lead: "Бережно восстанавливаем и защищаем автомобиль. Объясняем каждый этап, фиксируем стоимость и отвечаем за результат.",
	image: "/images/gallery-1.jpg",
	primaryCtaLabel: "Рассчитать стоимость",
	primaryCtaUrl: "https://wa.me/79812602735?text=Здравствуйте!%20Хочу%20рассчитать%20стоимость%20детейлинга",
};

export const defaultServices: Service[] = [
	{ index: "01", title: "Полировка кузова", lead: "Вернуть глубину цвета.", description: "Убираем паутину, мелкие царапины и тусклость лака без лишнего вмешательства.", image: "/images/service-polish.jpg" },
	{ index: "02", title: "Защитная плёнка", lead: "Защитить зоны риска.", description: "Сохраняем кузов от сколов, пескоструя и реагентов без изменения внешнего вида.", image: "/images/service-film.jpg" },
	{ index: "03", title: "Керамика и защита ЛКП", lead: "Закрепить результат.", description: "Защищаем блеск и упрощаем регулярный уход за кузовом в городских условиях.", image: "/images/service-ceramic.jpg" },
	{ index: "04", title: "Химчистка салона", lead: "Обновить интерьер.", description: "Удаляем пятна, запахи и следы эксплуатации, бережно работая с каждым материалом.", image: "/images/service-interior.jpg" },
	{ index: "05", title: "Реставрация кожи", lead: "Вернуть аккуратный вид.", description: "Восстанавливаем цвет и фактуру локально, сохраняя заводской характер салона.", image: "/images/service-leather.jpg" },
	{ index: "06", title: "Детейлинг-мойка", lead: "Очистить без компромиссов.", description: "Безопасная мойка кузова, дисков, проёмов и сложных зон по детальному регламенту.", image: "/images/service-wash.jpg" },
];

export const defaultPrograms: Program[] = [
	{ id: "new-car", number: "01", tab: "После покупки", title: "Защита нового автомобиля", items: ["Осмотр кузова и лёгкая корректирующая полировка", "Оклейка зон риска полиуретановой плёнкой", "Керамическое покрытие кузова", "Антидождь на стёкла и детейлинг салона"] },
	{ id: "restore", number: "02", tab: "Вторая молодость", title: "Глубокое восстановление", items: ["Химическая очистка кузова и дисков", "Глубокая полировка от паутины и царапин", "Локальное восстановление сколов и кожи", "Защитное покрытие кузова и салона"] },
	{ id: "sale", number: "03", tab: "Перед продажей", title: "Автомобиль дороже на фото и вживую", items: ["Деликатная мойка и лёгкая полировка", "Химчистка салона и багажника", "Очистка дисков, арок и дверных проёмов", "Финальная консервация и подготовка к съёмке"] },
];

export const defaultPromotions: Promotion[] = [
	{ layout: "first", label: "До 1 августа 2026", value: "−30%", title: "Первый визит", description: "Скидка на услуги автомойки для новых гостей BleskOFF.", permanent: false, validUntil: "2026-08-01", ctaText: "Записаться с выгодой", whatsappMessage: "Здравствуйте! Хочу записаться по акции «Первый визит −30%»" },
	{ layout: "hours", label: "До 1 августа 2026", value: "−20%", title: "Счастливые часы", description: "На услуги автомойки ежедневно с 12:00 до 15:00.", permanent: false, validUntil: "2026-08-01", ctaText: "Записаться", whatsappMessage: "Здравствуйте! Хочу записаться по акции «Счастливые часы −20%»" },
	{ layout: "return", label: "До 1 августа 2026", value: "−15%", title: "Вернитесь за 21 день", description: "Скидка на повторное посещение автомойки в течение 21 дня.", permanent: false, validUntil: "2026-08-01", ctaText: "Записаться", whatsappMessage: "Здравствуйте! Хочу записаться по акции «Повторный визит −15%»" },
	{ layout: "fleet", label: "Постоянная программа", title: "Личный автопарк", description: "Привезите автомобили семьи или компании в один день.", permanent: true, details: [{ label: "2 автомобиля", value: "−15%" }, { label: "3 автомобиля", value: "−20%" }], ctaText: "Уточнить условия", whatsappMessage: "Здравствуйте! Хочу узнать условия программы «Личный автопарк»" },
	{ layout: "cashback", label: "Для постоянных гостей", value: "5%", title: "Кэшбэк", description: "Возвращаем часть стоимости услуг для следующих визитов.", permanent: true, ctaText: "Уточнить условия", whatsappMessage: "Здравствуйте! Хочу узнать условия кэшбэка BleskOFF" },
];

export const defaultFaqs: Faq[] = [
	{ question: "Цена изменится в процессе?", answer: "Нет, состав работ и стоимость согласовываем до начала. Если обнаружится скрытая проблема, сначала покажем её и предложим варианты — решение всегда остаётся за вами." },
	{ question: "Можно наблюдать за работой?", answer: "Процессы в студии контролируются камерами. Для длительных работ можно заранее договориться о фото- и видеоотчёте ключевых этапов." },
	{ question: "Парковка во время визита платная?", answer: "Для гостей BleskOFF парковка в бизнес-центре бесплатная. Студия находится на уровне −1." },
	{ question: "Вы работаете с юридическими лицами?", answer: "Да. Работаем по договору, предоставляем закрывающие документы и обсуждаем удобный формат расчётов." },
	{ question: "Как понять, какая услуга нужна?", answer: "Пришлите несколько фотографий при дневном свете или приезжайте на осмотр. Мы объясним состояние поверхностей и предложим решение без лишних процедур." },
];
