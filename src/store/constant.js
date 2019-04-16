/**
 * 全局对象管理，维护全局只有一个
 * 1. nim 网易IM对象
 * 2. chatroom 聊天室
 * 3. sound 声音
 * 4. application 系统常量，从API加载
 */

const constant = {
  cache: {},
  theme: {
    night: "night",
    daytime: "daytime"
  }
};

export default constant;
