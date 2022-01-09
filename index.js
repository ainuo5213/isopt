/**
 * 是否是空对象或空数组
 * @param {Object} obj 对象或数组
 * @returns boolean
 */
function isEmpty(obj) {
    if (isArray(obj)) {
        return obj.length === 0;
    }
    return Object.getOwnPropertyNames(obj).length === 0;
}

/**
 * 是否是闰年
 * @param {number} year 年份
 * @returns boolean
 */
function isLeap(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}

/**
 * 是否是false的值
 * @param {any} value 任何数据
 * @returns boolean
 */
function isFalse(value) {
    const falseValues = ['', 0, false, NaN, undefined, null];
    for (let i = 0; i < falseValues.length; i++) {
        const element = falseValues[i];
        if (Object.is(element, value)) {
            return false;
        }
    }

    return isEmpty(value);
}

/**
 * 是否是邮箱
 * @param {string} value 字符串
 * @returns boolean
 */
function isEmail(value) {
    const reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return reg.test(value);
}

/**
 * 是否是手机号
 * @param {string} value 字符串
 * @returns boolean
 */
function isCellphone(value) {
    const reg = /^[1][3578][0-9]\d{8}$/;
    return reg.test(value);
}

/**
 * 是否是html标签
 * @param {string} value 字符串
 * @returns boolean
 */
function isHTML(value) {
    const reg = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
    return reg.test(value);
}

/**
 * 是否是中文
 * @param {string} value 字符串
 * @returns boolean
 */
function isChinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/;
    return reg.test(value);
}

/**
 * 是否是JSON字符串
 * @param {string} value 字符串
 * @returns boolean
 */
function isJSON(value) {
    try {
        const result = JSON.parse(value);
        return isArray(result) || isObject(result);
    } catch {
        return false;
    }
}

/**
 * 是否是对象
 * @param {any} value 数据
 * @returns boolean
 */
function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 * 是否是数组
 * @param {any} value 数据
 * @returns boolean
 */
function isArray(value) {
    return Object.prototype.toString.call(value) === "[object Array]";
}

/**
 * 是否是浏览器环境
 * @returns boolean
 */
function isBrowser() {
    return typeof window !== "undefined";
}

/**
 * 是否是windows环境
 * @returns boolean
 */
function isWindows() {
    if (!isBrowser()) {
        return require("os").platform().toLocaleLowerCase() === "win32";
    }

    const userAgent = window.navigator.userAgent.toLowerCase();

    return userAgent.indexOf("windows nt") >= 0;
}

/**
 * 是否是iphone os环境
 * @returns boolean
 */
function isIPhone() {
    if (!isBrowser()) {
        return false;
    }

    const userAgent = window.navigator.userAgent.toLowerCase();

    return userAgent.indexOf("iphone os") >= 0;
}

/**
 * 是否是mac os环境
 * @returns boolean
 */
function isMac() {
    if (!isBrowser()) {
        return require("os").platform().toLocaleLowerCase() === "darwin";
    }

    const userAgent = window.navigator.userAgent.toLowerCase();

    return !isIPhone() && userAgent.indexOf("mac os x") >= 0;
}

/**
 * 是否是微信环境
 * @returns boolean
 */
function isWeixin() {
    if (!isBrowser()) {
        return false;
    }

    const userAgent = window.navigator.userAgent.toLowerCase();
    return userAgent.indexOf("micromessenger") >= 0;
}

/**
 * 是否是原始类型的值
 * @param {any} value 数据
 * @returns boolean
 */
function isPrimitive(value) {
    const primitives = ["string", "symbol", "number", "boolean", "undefined", "bigint"];
    return primitives.indexOf(typeof value) >= 0;
}

/**
 * 是否是大写字母
 * @param {string} value 数据
 * @returns boolean
 */
function isUpperCased(value) {
    return value === value.toUpperCase();
}

/**
 * 是否是小写字母
 * @param {string} value 数据
 * @returns boolean
 */
function isLowerCased(value) {
    return value === value.toLowerCase();
}

module.exports = {
    isEmpty,
    isCellphone,
    isEmail,
    isChinese,
    isFalse,
    isHTML,
    isLeap,
    isJSON,
    isArray,
    isObject,
    isBrowser,
    isWindows,
    isMac,
    isIPhone,
    isWeixin,
    isPrimitive,
    isUpperCased,
    isLowerCased
}