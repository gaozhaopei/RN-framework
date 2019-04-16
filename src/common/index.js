import { Dimensions, PixelRatio, Platform } from "react-native";

/**
 * - dp：RN单位
 * - px：像素点
 * 设备的宽高是： 点（dp）
 * 设备的像素密度：当前dpi / 160 = 当前像素密度；
 * eg: 160 / 160 = 1(密度), 那么 1dp = 1px
 * eg: 380 / 160 = 2(密度), 那么 1dp = 2px
 */

// 设备的宽度
export const deviceWidth = Dimensions.get("window").width;
// 设备的高度
export const deviceHeight = Dimensions.get("window").height;
// 返回字体大小缩放比例
export const fontScale = PixelRatio.getFontScale();
// 当前设备的像素密度
export const pixelRatio = PixelRatio.get();

// 设备的宽度平分100份，做百分比布局有用，eg: 30 * RVW = 30%
export const RVW = deviceWidth / 100;
// 设备的高度平分100份，做百分比布局有用，eg: 60 * RVW = 60%
export const RVH = deviceHeight / 100;

// 暂时不理解这个干嘛？
export const RFT = RVW / fontScale;
// 缩放比例，做自适应，其实说白了就是真实的px
// eg: 设计像素 50px, 自动缩放设置：width: 50 * RPX，如果 pixelRatio = 1, 那么，50 * 1/1 = 50dp = 50px；
// eg: 设计像素 50px, 自动缩放设置：width: 50 * RPX，如果 pixelRatio = 2, 那么，50 * 1/2 = 25dp = 50px；
// 所以，
// 假如 pixelRatio = 1，设计要求边框为 1px，如果设置 width: 1, 那么真实显示是 1 * 1 = 1px
// 假如 pixelRatio = 2，设计要求边框为 1px，如果设置 width: 1, 那么真实显示是 1 * 2 = 2px，这样的话，就很粗了
export const RPX = 1 / pixelRatio;

// ios 是否有刘海
export const hasEar = deviceHeight / deviceWidth > 1.8;
// 头部高度，适配刘海屏
export const iosHeaderHeight = hasEar ? 88 : 64;
export const androidHeaderHeight = 45;
export const headerHeight =
  Platform.OS.toLowerCase() === "android"
    ? androidHeaderHeight
    : iosHeaderHeight;
// 子页面底部高，度适配iPhone刘海屏。当子页面底部有操作按钮的时候需要加上这个距离底部的高度
export const footerHeight =
  Platform.OS.toLowerCase() === "ios" && hasEar ? 34 : 0;

// dp转px
export const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp);
// px转dp
export const px2dp = px => PixelRatio.roundToNearestPixel(px);
// 设备宽度像素
export const DWPX = dp2px(deviceWidth);
// 设备高度像素
export const DHPX = dp2px(deviceHeight);
