import React, {createContext, useState, useEffect} from 'react';
import translations, {DEFAULT_LANGUAGE} from '../translations/translations';
import AsyncStorage from '@react-native-community/async-storage';
import * as RNLocalize from 'react-native-localize';
import storageKeys from '../constants/storageKeys';

export const LocalizationContext = createContext({
  translations,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

export const LocalizationProvider = ({children}) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const setLanguage = (language) => {
    translations.setLanguage(language);
    setAppLanguage(language);
    AsyncStorage.setItem(storageKeys.SETTINGS.LANGUAGE, language);
  };

  useEffect(() => {
    initializeAppLanguage();
  }, []);

  const initializeAppLanguage = async () => {
    const currentLanguage = await AsyncStorage.getItem(
      storageKeys.SETTINGS.LANGUAGE,
    );
    if (!currentLanguage) {
      let localeCode = DEFAULT_LANGUAGE;
      const supportedLocaleCodes = translations.getAvailableLanguages();

      const phoneLocaleCodes = RNLocalize.getLocales().map(
        (locale) => locale.languageCode,
      );

      phoneLocaleCodes.some((code) => {
        if (supportedLocaleCodes.includes(code)) {
          localeCode = code;
          return true;
        }
      });
      setLanguage(localeCode);
    } else {
      setLanguage(currentLanguage);
    }
  };

  return (
    <LocalizationContext.Provider
      value={{
        translations,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}>
      {children}
    </LocalizationContext.Provider>
  );
};
