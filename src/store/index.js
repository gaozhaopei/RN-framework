// import stores
import settingsStore from "./stores/settings";
import userStore from "./stores/user";
import exchangeUserStore from "./stores/exchangeUser";
import exchangeUserAction from "./actions/exchangeUser";
// import actions
import settingsAction from "./actions/settings";
import userAction from "./actions/user";

export default {
  // stores
  exchangeUserStore,
  settingsStore,
  userStore,
  // actions
  exchangeUserAction,
  settingsAction,
  userAction
};
