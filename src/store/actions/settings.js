import { observable, action } from "mobx";
import settingsStore from "../stores/settings";
import Session from "../../api/session";
import { setLanguage } from "../../i18n";

class Actions {
  @observable settingsStore;

  @action
  switchTheme = async name => this.setTheme(name);

  @action
  setTheme = async name => {
    settingsStore.theme = name;
    await Session.setTheme(name);
    return true;
  };

  @action
  switchLanguage = async lang => {
    await setLanguage(lang);
    settingsStore.language = lang;
    return true;
  };
}

export default new Actions();
