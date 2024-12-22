export const i18nConfig = {
  locales: [
    { name: 'English', code: 'en', iso: 'en-US', alpha2: 'GB-UKM', file: 'en.json', rtl: false },
    { name: 'German', code: 'de', iso: 'de-DE', alpha2: 'DE', file: 'de.json', rtl: false }
  ],
  defaultLocale: 'en',
  detectBrowserLanguage: {
    alwaysRedirect: true,
    redirectOn: 'all',
    fallbackLocale: 'en',
    cookieKey: 'mtavault-lang'
  },
  strategy: 'no_prefix',
  lazy: true
};