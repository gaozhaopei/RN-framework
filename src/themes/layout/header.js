/**
 * header部分的样式
 */
import { RVW, RFT, headerHeight } from "../../common";

export function getHeaderStyle(theme) {
  return {
    theme,
    bgColor: theme.primaryBgColor,
    tabBar: {
      height: 12 * RVW,
      backgroundColor: "#fff"
    },
    tabLabel: {
      lineHeight: 9 * RVW,
      fontSize: 3.6 * RFT
    },
    wrapper: {
      height: headerHeight,
      backgroundColor: theme.primaryBgColor,
      borderBottomWidth: 0,
      borderBottomColor: theme.primaryBgColor,
      paddingTop: headerHeight - 44
    },

    center: {
      color: "#fff",
      fontSize: 18
    },
    centerBlack: {
      color: theme.labelFontColor,
      fontSize: 18
    },
    rightBtn: {
      color: theme.labelFontColor,
      fontSize: 15
    },
    icon: {
      width: 30
    },
    iconSlim: {
      fontSize: 6 * RFT
    },
    buttonGroup: {
      top: 2 * RVW,
      width: 30 * RVW,
      height: 8 * RVW,
      borderRadius: 6
    }
  };
}
