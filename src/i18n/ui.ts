export const languages = {
    de: 'Deutsch',
    en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

const de = {
    'site.name': 'Dummy Neurochirurgie-Praxis',
    'site.description': 'Neurochirurgische Praxis (Platzhaltertext)',
    'nav.skip': 'Zum Hauptinhalt springen',
    'nav.language': 'Sprache wählen',
    'nav.main': 'Hauptnavigation',
    'nav.menu': 'Menü',
    'nav.home': 'Startseite',
    'nav.impressum': 'Impressum',
    'impressum.placeholder': 'Platzhalter: Das Impressum muss vor der Veröffentlichung ergänzt werden.',
    'cta.book': 'Termin buchen',
    'hero.eyebrow': 'Neurochirurgie',
    'hero.title': 'Facharztpraxis André Roth',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'hours.title': 'Öffnungszeiten',
    'hours.text': '01.November 2026 bis 15.Januar 2027.',
    'hours.title.new': 'Neue Öffnungszeiten ab 18.01.2027',
    'hours.text.new': '',
    'hours.caption': 'Öffnungszeiten nach Wochentag',
    'hours.day': 'Tag',
    'hours.time': 'Zeit',
    'hours.note': 'nach Vereinbarung',
    'hours.closed': 'Geschlossen',
    'day.monday': 'Montag',
    'day.tuesday': 'Dienstag',
    'day.wednesday': 'Mittwoch',
    'day.thursday': 'Donnerstag',
    'day.friday': 'Freitag',
    'day.saturday': 'Samstag',
    'day.sunday': 'Sonntag',
};

export type UIKey = keyof typeof de;

const en: Record<UIKey, string> = {
    'site.name': 'Dummy Neurosurgery Practice',
    'site.description': 'Neurosurgery practice (placeholder text)',
    'nav.skip': 'Skip to main content',
    'nav.language': 'Choose language',
    'nav.main': 'Main navigation',
    'nav.menu': 'Menu',
    'nav.home': 'Home',
    'nav.impressum': 'Legal notice',
    'impressum.placeholder': 'Placeholder: The legal notice must be completed before publication.',
    'cta.book': 'Book appointment',
    'hero.eyebrow': 'Neurosurgery',
    'hero.title': 'André Roth Specialist Practice',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'hours.title': 'Opening hours',
    'hours.text': '01.November 2026 to 15.January 2027.',
    'hours.title.new': 'New opening hours from 18.01.2027',
    'hours.text.new': '',
    'hours.caption': 'Opening hours by day of the week',
    'hours.day': 'Day',
    'hours.time': 'Hours',
    'hours.note': 'By appointment',
    'hours.closed': 'Closed',
    'day.monday': 'Monday',
    'day.tuesday': 'Tuesday',
    'day.wednesday': 'Wednesday',
    'day.thursday': 'Thursday',
    'day.friday': 'Friday',
    'day.saturday': 'Saturday',
    'day.sunday': 'Sunday',
};

export const ui: Record<Lang, Record<UIKey, string>> = { de, en };
