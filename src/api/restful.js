import { Alert, NetInfo } from "react-native";
import configs from "../configs";
import Ajax from "./ajax";
import Session from "./session";
import I18n from "../i18n";

const LANGUAGE_MAP = {
  en: "en-US",
  zh: "zh-CN",
  km: "km"
};

/**
 * 获取数据
 * 主要是get请求数据
 * 1. 常量没有data
 * 2. 登录没有data
 * 3. 其他情况下都会有data
 */
function getData(res) {
  if (res && res.data) {
    return res.data.data ? res.data.data : res.data;
  }
  return null;
}

/**
 * 获取结果
 * 主要是post、put、delete等操作结果
 */
function getResult(res) {
  return res.data;
}

/**
 * 错误处理
 * // todo: token过期处理
 * @param {*} err
 */
function handlerError(err) {
  if (!err.response) {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        Alert.alert(I18n.t("tips_withdraw_title"), I18n.t("network_is_bad"));
      } else {
        Alert.alert(
          I18n.t("tips_withdraw_title"),
          I18n.t("network_not_good_tips")
        );
      }
    });
    return Promise.reject(err);
  }
  const { status } = err.response;
  const body = err.response.data;
  if (status === 403 || status === 401) {
    // Alert.alert(I18n.t('page_tips_withdraw_title'), body.message);
    // todo: 需要处理退出逻辑
    return Promise.resolve(body);
  }
  if (status <= 504 && status >= 500) {
    console.log("err", err);
    Alert.alert(I18n.t("tips_withdraw_title"), I18n.t("server_is_error"));
    return Promise.resolve(body);
  }
  if (status >= 404 && status < 422) {
    // 这种情况是不允许出现的，所以，这个消息只会给开发者提醒用的
    Alert.alert(
      I18n.t("tips_withdraw_title"),
      `状态：${status}，请确认API地址是否存在！`
    );
    return Promise.resolve(body);
  }
  if (status === 400) {
    // 400状态码返回页面处理
    return Promise.resolve(body);
  }
  // 其他状态码不处理
  // Alert.alert('提示', '状态：' + status + '，网络异常！');
  return Promise.resolve(body);
}

/**
 * 请求API，把结果展平再返回
 */
class Restful {
  constructor() {
    this.ajax = new Ajax(configs.serverURL);
    this.defaultHeader = {
      "X-app": configs.xapp,
      "X-version": configs.xversion,
      "X-language": LANGUAGE_MAP[I18n.locale] || LANGUAGE_MAP.en
    };
    this.ajax.setHeader(this.defaultHeader);
  }

  async setToken(token) {
    this.ajax.setHeader({
      ...this.defaultHeader,
      "X-authorization": token || ""
    });
    return this;
  }

  async getToken() {
    // 调用用户传入的获取token的异步方法，获得token之后使用（并缓存它）。
    const accessToken = await Session.getAccessToken();
    if (!accessToken) {
      return "";
    }
    if (accessToken.isValid()) {
      return accessToken.token;
    }
    return this.freshAccessToken(accessToken);
  }

  /**
   * 刷新access token
   * 不判断refreash token是否过期，如果过期刷新会失败，返回401
   * 因为这里有一点点小问题，store 获取为 undefined
   */
  async freshAccessToken(accessToken) {
    const url = "/passport/token";
    const freshToken = await Session.getRefreshToken();
    if (!freshToken) {
      return accessToken.token;
    }
    const params = {
      access_token: accessToken.token,
      refresh_token: freshToken.token
    };
    const data = await this.ajax
      .post(url, params)
      .then(res => getResult(res), err => handlerError(err));
    await Session.saveRefreshToken(data.refresh_token);
    const newAccessToken = await Session.saveAccessToken(
      data.access_token,
      data.expires_in
    );
    return newAccessToken.token;
  }

  /**
   * 处理token
   */
  async ensureAccessToken() {
    const token = await this.getToken();
    return this.setToken(token);
  }

  async get(url) {
    await this.ensureAccessToken();
    return this.ajax
      .get(url)
      .then(res => getData(res), err => handlerError(err));
  }

  async delete(url) {
    await this.ensureAccessToken();
    return this.ajax
      .delete(url)
      .then(res => getResult(res), err => handlerError(err));
  }

  async post(url, data) {
    await this.ensureAccessToken();
    return this.ajax
      .post(url, data)
      .then(res => getResult(res), err => handlerError(err));
  }

  async put(url, data) {
    await this.ensureAccessToken();
    return this.ajax
      .put(url, data)
      .then(res => getResult(res), err => handlerError(err));
  }

  async formPost(url, data) {
    await this.ensureAccessToken();
    return this.ajax
      .formPost(url, data)
      .then(res => getResult(res), err => handlerError(err));
  }

  async formGet(url) {
    await this.ensureAccessToken();
    return this.ajax
      .formGet(url)
      .then(res => getData(res), err => handlerError(err));
  }

  async upload(url, formData) {
    await this.ensureAccessToken();
    return this.ajax
      .upload(url, formData)
      .then(res => getResult(res), err => handlerError(err));
  }
}

export default new Restful();
