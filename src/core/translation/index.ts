import i18n from 'i18next'

// hermes doesn't support PluralRules
// https://github.com/facebook/hermes/blob/main/doc/IntlAPIs.md#not-yet-supported
import 'intl-pluralrules'

import ar from '$src/core/translation/ar.json'

const resources = {
  ar: {
    translation: ar,
  },
}

i18n.init({
  returnNull: false,
  lng: 'ar',
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
  parseMissingKeyHandler: (key, defaultValue) => {
    if (defaultValue !== undefined) {
      return defaultValue
    }
    throw new Error(`${key} translation not found`)
  },
  resources,
})

export default i18n
