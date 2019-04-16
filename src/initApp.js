import { AsyncStorage } from "react-native";
import Storage from "react-native-storage";
import DeviceInfo from "react-native-device-info";
import Session from "./api/session";
import I18n from "./i18n";
import stores from "./store";

/**
 * 获取系统语言
 */
export function getDeviceLocale() {
  const locale = DeviceInfo.getDeviceLocale();
  if (locale.toLowerCase().indexOf("en") >= 0) {
    return "en";
  }
  return "zh";
}

/**
 * 初始化本地存储器
 */
export function initStorage() {
  // 配置本地存储
  const storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,
    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,
    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,
    // 读写时在内存中缓存数据。默认启用。
    enableCache: true
    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // 或是写到另一个文件里，这里require引入
    // sync: require('你可以另外写一个文件专门处理sync')
  });
  // 在全局范围内创建一个（且只有一个）storage实例，方便直接调用
  global.storage = storage;
}

/**
 * 初始化主题
 * 注意：必须先初始化本地存储
 */
export function initTheme() {
  return Session.getTheme().then(theme => {
    if (theme) {
      stores.settingsAction.setTheme(theme);
    }
    return Promise.resolve(true);
  });
}

/**
 * 初始化用户首先语言环境
 * 参考 https://www.jianshu.com/p/4dc5612854eb
 */
export function initLanguage() {
  return Session.getLanguage().then(language => {
    if (language) {
      I18n.locale = language;
    } else {
      I18n.locale = getDeviceLocale();
    }
    // 存储到本地
    Session.setLanguage(I18n.locale);
    return Promise.resolve(true);
  });
}

export default function initApp() {
  initStorage();
  initTheme();
  initLanguage();
}
