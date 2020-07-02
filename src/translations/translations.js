import LocalizedStrings from 'react-native-localization';

export const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    common: {
      name: 'React Native Boiler Plate',
    },
  },
  hi: {
    common: {
      name: 'रिएक्ट नेटिव बॉयलर प्लेट हिंदी में',
    },
  },
};

export default new LocalizedStrings(translations);
