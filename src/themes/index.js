/**
 * 主题设置
 */

import stores from "../store";
import { theme } from "./theme";
import { getHeaderStyle } from "./layout/header";
import { getTabbarStyle } from "./layout/tabbar";
import { getFooterStyle } from "./layout/footer";
import { getBannerStyle } from "./layout/banner";
import { getContentStyle } from "./layout/content";
import { getGlobalStyle } from "./global";
import { getHomeStyle } from "./pages/home";
import { getMeStyle } from "./pages/me";
import { getQuotesSearchStyle } from "./pages/quotesSearch";
import { getCoinListItemStyle } from "./pages/coinListItem";
/**
 * 新增的样式文件需要在这里配置一下
 */
const styleMapFunc = {
  theme: () => theme[stores.settingsStore.theme],
  global: getGlobalStyle,
  header: getHeaderStyle,
  tabbar: getTabbarStyle,
  footer: getFooterStyle,
  banner: getBannerStyle,
  content: getContentStyle,
  home: getHomeStyle,
  quotesSearch: getQuotesSearchStyle,
  coinListItem: getCoinListItemStyle,
  me: getMeStyle
};

function getStyles(keys, currTheme) {
  const result = {};
  keys.forEach(key => {
    const f = styleMapFunc[key];
    result[`${key}Style`] = f(currTheme);
  });
  return result;
}

function getStyle(key, currTheme) {
  const f = styleMapFunc[key];
  if (f) {
    return f(currTheme);
  }
  return {};
}

function get(key) {
  const currTheme = styleMapFunc.theme();
  if (Array.isArray(key)) {
    return getStyles(key, currTheme);
  }
  return getStyle(key, currTheme);
}

export default {
  get
};
