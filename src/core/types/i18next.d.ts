import 'i18next'
// to prevent typescript errors
// https://www.i18next.com/overview/typescript
declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false
  }
}
