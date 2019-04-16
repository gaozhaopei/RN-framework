/**
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
  language: "English",
  network_not_good: "Poor network condition",
  loading_text: "loading...",

  // 全局的写在最前面
  menu_nav_bottom_home: "Home",
  menu_nav_bottom_me: "Me",
  menu_nav_bottom_quotes: "Quotes",
  menu_nav_bottom_trade: "Trade",
  menu_nav_bottom_funds: "Funds"
};
