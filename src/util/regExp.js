/**
 * 正则配置
 * 用户名正则，4到16位（字母，数字，下划线，减号）
 * 手机
 * 邮箱
 * 身份证
 * IPv4地址
 * 营业执照,三证合一的是18位
 * 金额，允许两位小数
 * 只能为中文
 * 正整数
 * 正整数和0
 * 护照
 * 密码
 */

export default {
  userName: /^[a-zA-Z0-9_-]{2,255}$/,
  phone: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
  email: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  bizLience: /^([0-9a-zA-Z]{18}$|\d{15}$)/,
  money: /^\d+(\.\d{1,2})?$/,
  cn: /^[\u4e00-\u9fa5]+$/,
  number: /^[1-9]\d*$/,
  numberExtra: /^[0-9]\d*$/,
  passport: /^1[45][0-9]{7}$|G[0-9]{8}$|P\.[0-9]{7}$|S[0-9]{7,8}$|D[0-9]{7,8}$/,
  password: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/,
  nameExtra: /^[\u4e00-\u9fa5_a-zA-Z0-9 ]+$/
};
