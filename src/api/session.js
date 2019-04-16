import Token from "../common/token";

const USER = "user";
const IS_LOGIN = "isLogin";
const LANGUAGE = "language";
const THEME = "theme";
const ACCESS_TOKEN_OBJECT = "accessTokenObject";
const REFRESH_TOKEN_OBJECT = "refreshTokenObject";

/**
 * session管理
 * 主要是登录信息保存
 */
class Session {
  async setIsLogin(value) {
    return global.storage.save({ key: IS_LOGIN, data: value });
  }

  async isLogin() {
    return global.storage
      .load({ key: IS_LOGIN })
      .catch(() => Promise.resolve(false));
  }

  async setUser(user) {
    return global.storage.save({ key: USER, data: user });
  }

  async getUser() {
    return global.storage
      .load({ key: USER })
      .catch(() => Promise.resolve(null));
  }

  async setLanguage(language) {
    return global.storage.save({ key: LANGUAGE, data: language });
  }

  async getLanguage() {
    return global.storage
      .load({ key: LANGUAGE })
      .catch(() => Promise.resolve(null));
  }

  async setTheme(theme) {
    return global.storage.save({ key: THEME, data: theme });
  }

  async getTheme() {
    return global.storage
      .load({ key: THEME })
      .catch(() => Promise.resolve(null));
  }

  async getToken() {
    const token = await this.getAccessToken();
    return token ? token.token : null;
  }

  /**
   * 获取access token对象
   */
  async getAccessToken() {
    const token = await global.storage
      .load({ key: ACCESS_TOKEN_OBJECT })
      .catch(() => Promise.resolve(null));
    if (token) {
      const json = token;
      return new Token(json.token, json.expireTime);
    }
    return null;
  }

  /**
   * 保存access token对象
   * 过期时间，因网络延迟等，将实际过期时间提前60秒，以防止临界点
   * @param {*} accessToken
   * @param {*} expiresIn 过期时间，秒
   */
  async saveAccessToken(accessToken, expiresIn) {
    const expireTime =
      Date.now() + (expiresIn > 0 ? expiresIn - 60 : 7200 - 60) * 1000;
    return this.setAccessToken(accessToken, expireTime);
  }

  async setAccessToken(accessToken, expireTime) {
    const token = new Token(accessToken, expireTime);
    await global.storage.save({ key: ACCESS_TOKEN_OBJECT, data: token });
    return token;
  }

  /**
   * 获取refresh token对象
   */
  async getRefreshToken() {
    const token = await global.storage
      .load({ key: REFRESH_TOKEN_OBJECT })
      .catch(() => Promise.resolve(null));
    if (token) {
      const json = token;
      return new Token(json.token, json.expireTime);
    }
    return null;
  }

  /**
   * 保存refresh token对象
   * 过期时间，将实际过期时间提前60秒，以防止临界点
   * 默认一个星期过期
   * @param {*} freshToken
   */
  async saveRefreshToken(freshToken) {
    const expireTime = Date.now() + (7 * 24 * 60 * 60 - 60) * 1000;
    const token = new Token(freshToken, expireTime);
    await global.storage.save({ key: REFRESH_TOKEN_OBJECT, data: token });
    return token;
  }

  async clear() {
    try {
      global.storage.remove({ key: IS_LOGIN });
      global.storage.remove({ key: USER });
      global.storage.remove({ key: ACCESS_TOKEN_OBJECT });
      global.storage.remove({ key: REFRESH_TOKEN_OBJECT });
      return Promise.resolve(true);
    } catch (e) {
      return Promise.reject(e);
    }
  }
}

export default new Session();
