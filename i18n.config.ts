import ruRule from "./rules/ru";

export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false,
  pluralRules: {
    'ru': ruRule
  }
}))