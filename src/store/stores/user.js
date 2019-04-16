import { observable, action } from "mobx";

class Stores {
  @observable myInfo = null;

  @action
  reset = () => {
    this.myInfo = {};
  };
}
const st = new Stores();
st.reset();

export default st;
