function myBrowser() {
  var userAgent = navigator.userAgent.toLowerCase(); //取得浏览器的userAgent字符串
  var isOpera = userAgent.indexOf("opera") > -1; //判断是否Opera浏览器
  var isIE = userAgent.indexOf("compatible") > -1
    && userAgent.indexOf("msie") > -1 && !isOpera; //判断是否IE浏览器
  var isEdge = userAgent.indexOf("edge") > -1; //判断是否IE的Edge浏览器
  var isFF = userAgent.indexOf("firefox") > -1; //判断是否Firefox浏览器
  var isSafari = userAgent.indexOf("safari") > -1
    && userAgent.indexOf("chrome") == -1; //判断是否Safari浏览器
  var isChrome = userAgent.indexOf("chrome") > -1
    && userAgent.indexOf("safari") > -1; //判断Chrome浏览器
  const isQuarak = userAgent.indexOf("quark") > -1; //判断是否Quark浏览器
  const isDingTalk = userAgent.indexOf("dingtalk") > -1; //判断是否DingTalk内置浏览器
  const isWx = userAgent.indexOf("micromessenger") > -1; //判断是否微信内置浏览器
  const isAlipay = userAgent.indexOf("alipayclient") > -1; //判断是否支付宝内置浏览器

  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return "IE7";
    } else if (fIEVersion == 8) {
      return "IE8";
    } else if (fIEVersion == 9) {
      return "IE9";
    } else if (fIEVersion == 10) {
      return "IE10";
    } else if (fIEVersion == 11) {
      return "IE11";
    } else {
      return "0";
    }//IE版本过低
  }
  if (isOpera) {
    return "Opera";
  }
  if (isEdge) {
    return "Edge";
  }
  if (isFF) {
    return "FF";
  }
  if (isSafari) {
    return "Safari";
  }
  if (isChrome) {
    return "Chrome";
  }
  if (isQuarak) {
    return "Quark";
  }
  if (isDingTalk) {
    return "DingTalk";
  }
  if (isWx) {
    return "weixin";
  }
  if (isAlipay) {
    return "Alipay";
  }

}