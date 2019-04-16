import { Platform } from "react-native";

/**
 * 现在只有开发环境和生产环境，所以只需要两个环境的配置就好了
 */

let env = "online";

if (__DEV__) {
  env = "dev";
}

/**
 * 单独模块的配置，比如：
 * 1. IM模块的独立配置
 * 2. 邮件模块独立配置
 * ...
 */
const appConfig = {
  dev: {},
  online: {}
};

const platformConfig = {
  ios: {
    xapp: "GibM39ZE42ugzk7StXVS",
    xversion: "1.0.0"
  },
  android: {
    xapp: "1Wc2BAdLILp4hZ8LnFCL",
    xversion: "1.0.0"
  }
};

/**
 * 基本配置，全局公用的
 */
const base = {
  dev: {
    serverURL: "http://218.28.139.122:9998/v1.0.0"
  },
  online: {
    serverURL: "http://api.hex.com/v1.0.0"
  }
};

export default Object.assign(
  base[env],
  appConfig[env],
  platformConfig[Platform.OS.toLowerCase()]
);
