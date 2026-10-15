import { defaultLang, languages, type Lang, type UIKey, ui } from './ui';

export const locales = Object.keys(languages) as Lang[];

export function isLang(value: string): value is Lang {
	return (locales as string[]).includes(value);
}

// The default locale has no URL prefix, every other locale does (e.g. /en/).
export function getLangFromPath(pathname: string): Lang {
	const first = pathname.split('/')[1];
	return first && isLang(first) && first !== defaultLang ? first : defaultLang;
}

// Strips any locale prefix from a path, so it can be re-prefixed for another language.
function stripLangPrefix(pathname: string): string {
	const lang = getLangFromPath(pathname);
	if (lang === defaultLang) return pathname;
	return pathname.replace(new RegExp(`^/${lang}(?=/|$)`), '') || '/';
}

export function getLocalizedPath(pathname: string, lang: Lang): string {
	const base = stripLangPrefix(pathname);
	if (lang === defaultLang) return base;
	return base === '/' ? `/${lang}/` : `/${lang}${base}`;
}

export function useTranslations(lang: Lang) {
	return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}
