export const i18nConfig = {
  locales: [
    /**
     * name: In english, please.
     * code: only used internally
     * tag: BCP 47 language tag, used for date formatting
     * alpha2: ISO 3166-1 code, used for the flag representation
     * file: yes
     * rtl: Does the language use (R)ight (T)o (L)eft text direction?
     */
    { name: 'English', code: 'en', tag: 'en-US', alpha2: 'GB-UKM', file: 'en.json', rtl: false },
    { name: 'German', code: 'de', tag: 'de-DE', alpha2: 'DE', file: 'de.json', rtl: false },
    { name: 'Portuguese', code: 'pt', tag: 'pt-BR', alpha2: 'PT', file: 'pt-br.json', rtl: false },
    { name: 'Russian', code: 'ru', tag: 'ru-RU', alpha2: 'RU', file: 'ru.json', rtl: false }
  ],
  defaultLocale: 'en',
  detectBrowserLanguage: {
    alwaysRedirect: true,
    redirectOn: 'all',
    fallbackLocale: 'en',
    cookieKey: 'mtavault-lang'
  },
  vueI18n: './i18n/locales/i18n.config.ts',
  strategy: 'no_prefix',
  lazy: true
};