import I18n from "react-native-i18n";
import en from "./locales/en";
import zh from "./locales/zh";
import Session from "../api/session";

// 首选默认语言
I18n.defaultLocale = "en";

// 按这样的（en_US en.js）顺序去查找文件
I18n.fallbacks = true;

I18n.translations = { en, zh };

/**
 * 切换语言
 * @param {*} language
 */
export async function setLanguage(language) {
  I18n.locale = language;
  // 存储到本地
  await Session.setLanguage(language);
}

export function getI18n() {
  return I18n;
}

export default I18n;
