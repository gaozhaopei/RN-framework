/**
 * 全局设置，包括
 * 主题
 * 国际化
 */
import { observable } from "mobx";
import constant from "../constant";

class Stores {
  @observable theme = null;

  @observable language = null;

  reset = () => {
    this.theme = constant.theme.night;
    this.language = "en";
  };
}

const st = new Stores();
st.reset();

export default st;
