import qs from "qs";
import Restful from "./restful";

class UserService {
  /**
   * 获取用户详情
   */
  async getCurrUserInfo() {
    return Restful.get("/users/me");
  }

  /**
   * 设置语言
   * @param {*} language
   */
  async setLanguage(language) {
    return Restful.put(`/users/language?language=${language}`, { language });
  }

  /**
   * 修改密码
   * @param {*} code          验证码
   * @param {*} newPassword   新密码
   * @param {*} oldPassword   旧密码
   */
  async modifyPassword({ code, newPassword, oldPassword }) {
    return Restful.put("/users/password", { code, newPassword, oldPassword });
  }

  /**
   * 用户收藏公司
   * request: /v1.0.0/users/employers/{employerId}/following
   * method: POST
   * @param employerId - employerId
   */
  async followCompany(employerId) {
    return Restful.post(`/users/employers/${employerId}/following`);
  }

  /**
   * 查询收藏的公司
   * request: /v1.0.0/users/employers/following
   * method: GET
   * @param param - param
   */
  async queryFollowedCompanys(param) {
    return Restful.get(
      `/users/employers/following?${qs.stringify(param, {
        arrayFormat: "repeat"
      })}`
    );
  }
}

export default new UserService();
