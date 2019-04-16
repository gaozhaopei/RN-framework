/*
 * exchangeUserService Actions
 * */
import { observable, action } from "mobx";
import exchangeUserServiceStore from "../stores/exchangeUser";
import exchangeUserService from "../../api/exchangeUserService";

class Actions {
  @observable exchangeUserServiceStore;

  @action
  querAdvertList = async () => {
    const data = await exchangeUserService.getAdvertList();
    exchangeUserServiceStore.advertList = data;
    return data;
  };

  @action
  querNoticeList = async () => {
    const data = await exchangeUserService.getNoticeList();
    exchangeUserServiceStore.announcementList = data;
    return data;
  };
}

export default new Actions();
