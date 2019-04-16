import moment from "moment";
import Ii8n from "../i18n";

const util = {};
let isCalled = false;
let timer = null;

/* eslint-disable */
util.encode = function(_map, _content) {
  _content = `${_content}`;
  if (!_map || !_content) {
    return _content || "";
  }
  return _content.replace(_map.r, $1 => {
    const _result = _map[!_map.i ? $1.toLowerCase() : $1];
    return _result != null ? _result : $1;
  });
};

util.simpleClone = obj => {
  var cache = [];
  var strObj = JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  return JSON.parse(strObj);
};

util.object2query = function(obj) {
  const keys = Object.keys(obj);
  const queryArray = keys.map(
    item => `${item}=${encodeURIComponent(obj[item])}`
  );
  return queryArray.join("&");
};

util.debounce = function(idle, action) {
  var last;
  return (function() {
    clearTimeout(last);
    last = setTimeout(function() {
      action();
    }, idle);
  })();
};

util.countWordLength = function(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 128) {
      count += 1;
    } else {
      count += 2;
    }
  }
  return count;
};

util.shortenWord = function(word, maxLen = 20) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 128) {
      count += 1;
    } else {
      count += 2;
    }
    if (count > maxLen) {
      return word.substr(0, i - 1) + "...";
    }
  }
  return word;
};

/**
 * 时间转时间戳
 * @param {*} date
 */
util.dateToTimestamp = function(date) {
  return moment(date).format("X");
};

/**
 * 时间戳转时间
 * @param {*} timestamp
 */
util.timestampToDate = function(timestamp) {
  return moment(timestamp * 1000);
};

/**
 * 时间转短时间格式
 * @param {*} timestamp
 */
util.dateToShortString = function(date) {
  return moment(date).format("YYYY-MM-DD");
};

/**
 * 时间戳转短时间格式
 * @param {*} timestamp
 */
util.timestampToShortString = function(timestamp) {
  return moment(timestamp * 1000).format("YYYY-MM-DD");
};

/**
 * 时间转长时间格式
 * @param {*} timestamp
 */
util.dateToLongString = function(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

/**
 * 时间年月格式
 * @param {*} timestamp
 */
util.dateToYMString = function(date) {
  return moment(date).format("YYYY-MM");
};

/**
 * 时间年月格式
 * @param {*} timestamp
 */
util.dateToYM1String = function(date) {
  return moment(date).format("YYYY/MM");
};

/**
 * 时间戳转长时间格式
 * @param {*} timestamp
 */
util.timestampToLongString = function(timestamp) {
  return moment(timestamp * 1000).format("YYYY-MM-DD HH:mm:ss");
};

/**
 * 时间转当地时间格式
 * @param {*} timestamp
 */
util.dateToLocalString = function(date) {
  return moment(date).format("YYYY-MM-DD HH:mm:ss");
};

/**
 * 时间转当地时间格式
 * @param {*} timestamp
 */
util.dateToLocalString1 = function(date) {
  return moment(date).format("YYYY-MM-DD HH:mm");
};

/**
 * 时间戳转当地时间格式
 * @param {*} timestamp
 */
util.timestampToLocalString = function(timestamp) {
  return moment(timestamp * 1000).format("YYYY-MM-DD HH:mm:ss");
};

util.getAge = birthday => {
  let pickDate = moment();
  let diffDay = pickDate.diff(moment(birthday), "days");
  let year = 0;
  if (diffDay && diffDay > 0) {
    year = parseInt(diffDay / 365);
  } else {
    year = 0;
  }
  return year;
};

util.getYesrBetween = (time1, time2) => {
  let pickDate = moment(time2);
  let diffDay = pickDate.diff(moment(time1), "days");
  let year = 0;
  if (diffDay && diffDay > 0) {
    year = Math.round(diffDay / 365);
  } else {
    year = 0;
  }
  return year;
};

util.tryJSONParse = function(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    return null;
  }
};

util.HandlerOnceTap = (functionTobeCalled, interval = 600) => {
  if (!isCalled) {
    isCalled = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      isCalled = false;
    }, interval);
    return functionTobeCalled();
  }
};

util.onCheckVersion = (onlineVersionArray, currentVersionArray) => {
  if (
    parseInt(onlineVersionArray[0], 10) < parseInt(currentVersionArray[0], 10)
  ) {
    return false;
  } else if (
    parseInt(onlineVersionArray[0], 10) === parseInt(currentVersionArray[0], 10)
  ) {
    if (
      parseInt(onlineVersionArray[1], 10) < parseInt(currentVersionArray[1], 10)
    ) {
      return false;
    } else if (
      parseInt(onlineVersionArray[1], 10) ===
      parseInt(currentVersionArray[1], 10)
    ) {
      if (
        parseInt(onlineVersionArray[2], 10) <
        parseInt(currentVersionArray[2], 10)
      ) {
        return false;
      } else if (
        parseInt(onlineVersionArray[2], 10) ===
        parseInt(currentVersionArray[2], 10)
      ) {
        return false;
      }
    }
  }
  return true;
};

util.calLength = cityName => {
  let len = 58;
  if (cityName.length <= 3) {
    len = 34;
  } else if (cityName.length <= 5 && cityName.length > 3) {
    len = 40;
  } else {
    len = 44;
  }
  if (Ii8n.locale.indexOf("zh") > -1) {
    if (cityName.length <= 2) {
      len = 36;
    } else if (cityName.length === 3) {
      len = 48;
    } else {
      len = 58;
    }
  }
  return len;
};

/**
 * 标准化电话号码，因为已经有了区号，所以要把前面的0去掉
 * eg：08964663362 -> 8964663362
 * @param {*} phone
 */
util.normalizePhone = (phone, region) => {
  if (!phone) {
    return phone;
  }
  let result = phone.trim();
  switch (region) {
    case "86":
    case "855":
      // 柬埔寨的电话号码
      if (result.indexOf("0") === 0) {
        result = result.substr(1);
      }
      break;
    default:
      break;
  }
  return result;
};

export default util;
