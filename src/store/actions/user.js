/**
 * 用户actions
 * action 统一返回一个promise
 */

import { observable, action } from "mobx";
import userStore from "../stores/user";
import UserService from "../../api/userService";

class Actions {
  @observable userStore;

  @action
  getCurrUserInfo = async () => {
    const user = await UserService.getCurrUserInfo();
    userStore.myInfo = user;
    return user;
  };
}

export default new Actions();
