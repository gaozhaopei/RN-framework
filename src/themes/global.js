/**
 * 全局
 */
import { footerHeight } from "../common";

const tabHeight = 49;

export function getGlobalStyle(theme) {
  return {
    mbTabbar: {
      marginBottom: tabHeight + footerHeight
    },
    bgColor: theme.primaryBgColor,
    backIconStyle: { width: 18, height: 21 },
    // 1. 布局
    // 2. 边距
    mt5: {
      marginTop: 5
    },
    mt10: {
      marginTop: 10
    },
    mt15: {
      marginTop: 15
    },
    mt20: {
      marginTop: 20
    },
    mt25: {
      marginTop: 25
    },
    mt30: {
      marginTop: 30
    },
    mt40: {
      marginTop: 40
    },
    mt60: {
      marginTop: 60
    },
    mt80: {
      marginTop: 80
    },
    mt100: {
      marginTop: 100
    },
    mb5: {
      marginBottom: 5
    },
    mb10: {
      marginBottom: 10
    },
    mb20: {
      marginBottom: 20
    },
    mb30: {
      marginBottom: 30
    },
    mb40: {
      marginBottom: 40
    },
    mb60: {
      marginBottom: 60
    },
    mb80: {
      marginBottom: 80
    },
    mb100: {
      marginBottom: 100
    },
    ml5: {
      marginLeft: 5
    },
    ml10: {
      marginLeft: 10
    },
    ml15: {
      marginLeft: 15
    },
    ml20: {
      marginLeft: 20
    },
    ml25: {
      marginLeft: 25
    },
    ml40: {
      marginLeft: 40
    },
    mr5: {
      marginRignt: 5
    },
    mr10: {
      marginRignt: 10
    },
    mr15: {
      marginRignt: 15
    },
    mr20: {
      marginRignt: 20
    },
    mr25: {
      marginRignt: 25
    },
    mr40: {
      marginRignt: 40
    },
    paddingR10: {
      paddingRight: 10
    },
    paddingL10: {
      paddingLeft: 10
    },
    paddingV10: {
      paddingVertical: 10
    },
    paddingH10: {
      paddingHorizontal: 10
    },
    paddingR15: {
      paddingRight: 15
    },
    paddingL15: {
      paddingLeft: 15
    },
    paddingV15: {
      paddingVertical: 15
    },
    paddingH15: {
      paddingHorizontal: 15
    },
    paddingR20: {
      paddingRight: 20
    },
    paddingL20: {
      paddingLeft: 20
    },
    paddingV20: {
      paddingVertical: 20
    },
    paddingH20: {
      paddingHorizontal: 20
    },

    // 3. 边框
    // 4. 背景
    // 6. 字体
    // 7. 图标
    // 8. 按钮
    btnContainer: {
      paddingLeft: 17,
      paddingRight: 17
    },
    btn: {
      width: "100%",
      height: 40,
      backgroundColor: theme.primaryButtomBgColor,
      borderRadius: 5
    },
    btnText: {
      color: theme.mediumFontColor,
      fontSize: theme.fontSizeL
    },
    // 9. 头像
    // 10.列表
    listBox: {
      flex: 1
    },
    listItem: {
      justifyContent: "center",
      height: 44,
      paddingLeft: 10,
      paddingRight: 10,
      borderBottomWidth: 1,
      borderBottomColor: theme.mediumListBgColor,
      backgroundColor: theme.primaryListBgColor
    },
    listItemTitle: {
      color: theme.pdFontColor,
      fontSize: theme.fontSizeM
    },
    // 11.面板
    // 12.分页
    // 13.表单
    formContainer: {
      justifyContent: "center",
      backgroundColor: theme.primaryListBgColor
    }
    // 14.微标数
    // 15.卡片
    // 16.标签
    // 17.分割线
    // 18.菜单
  };
}
