/**
 * todo: utils 方法里面的要全部翻译、还有一下提醒
 * 多语言配置，配置规则，按模块开头+下划线+类型+具体的key，每个模块写在一起，不要分开，不好找。eg:
 * 1. menu_nav_bottom_job
 * 2. menu_nav_bottom_chat
 * 3. menu_nav_bottom_dynamic
 * 4. menu_nav_bottom_resume
 * 5. menu_nav_bottom_mine
 * 6. page_login_text_title
 * 7. page_login_btn_login
 * 8. page_login_btn_sendcode
 * 9. page_login_link_forgot
 * 10.page_login_link_register
 * 11.page_login_tab_phone
 * 12.page_login_tab_password
 * 13.page_login_ph_phone
 * 14.page_login_ph_code
 * 15.page_login_ph_username
 * 16.page_login_ph_password
 *
 * 模块：跟进业务来定, 可以直接根据页面来划分，每个页面起一个，eg:
 * global    全局
 * page_login     登录模块
 * page_settings  设置模块
 * ...
 *
 * 类型：不同类型的消息
 * menu  菜单
 * label 标签, 主要用在表单
 * op    操作，弹框提示
 * btn   按钮名称
 * text  文本
 * tab   tab
 * link  链接名称
 * tips  tooltips
 * alt   alt
 * ph    placeholder
 * err   错误消息类
 */
export default {
  language: "中文",
  network_not_good: "网络状况不佳",
  loading_text: "加载中...",

  tips_withdraw_title: "提示",
  server_is_error: "服务器错误，请稍后重试",
  network_is_bad: "服务器没有响应，请稍后重试",
  network_not_good_tips: "当前网络不稳定，请检查网络连接",

  // 全局的写在最前面
  menu_nav_bottom_home: "首页",
  menu_nav_bottom_me: "我的",
  menu_nav_bottom_quotes: "行情",
  menu_nav_bottom_trade: "交易",
  menu_nav_bottom_funds: "资金"
};
