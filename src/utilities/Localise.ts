// import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
// import i18n from 'i18n-js';
// import * as Localization from 'expo-localization';
// import { I18nManager } from 'react-native';
// export const translationGetters = {
//   'en-US': () => require('../../assets/Localisation/ru.json'),
//   'ru-RU': () => require('../../assets/Localisation/ru.json'),
// };
// export const IMLocalized = (key, config) => i18n.t(key, config).includes('missing') ? key : i18n.t(key, config);

// export const init = () => {

//   let localeLanguageTag = Localization.locale;
//   let isRTL = Localization.isRTL;
//   IMLocalized.cache.clear();
//   // update layout direction
//   I18nManager.forceRTL(isRTL);
//   // set i18n-js config
//   i18n.translations = {
//     [localeLanguageTag]: translationGetters[localeLanguageTag](),
//   };
//   i18n.locale = localeLanguageTag;
// };
