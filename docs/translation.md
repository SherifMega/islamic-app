## Current Supported Languages
- [Arabic](/src/core/translation/ar.json)

## Note
Try to modularize the translation when adding new keys in translation files to be related to specific modules or generic.

for example for quran module and generic action
```JSON
{
  "actions": {
    "cancel": "Cancel"
  },
  "quran": {
    "aya": "Aya"
  }
}
```

## How to use
```ts
import i18n from '$src/core/translation'

<Text>{i18n.t('KEY_TO_TRANSLATE')}</Text>
```

* [i18next](https://www.i18next.com/)
  - [plurals](https://www.i18next.com/translation-function/plurals)
  - [objects-and-arrays](https://www.i18next.com/translation-function/objects-and-arrays)
  - [interpolation-unescape](https://www.i18next.com/translation-function/interpolation#unescape)