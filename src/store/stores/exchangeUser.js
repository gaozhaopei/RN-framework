/*
 *
 * exchangeUser API 數據處理
 * */

import { observable, action } from "mobx";

class Stores {
  @observable advertList = [];

  @observable announcementList = [];

  @action
  reset = () => {
    this.advertList = [];
    this.announcementList = [];
  };
}
const st = new Stores();

st.reset();

export default st;
