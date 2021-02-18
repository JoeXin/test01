(function () {
  var ua = window.navigator.userAgent.toLowerCase();
  var isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
  var isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);
  var isWechat = ua.indexOf('micromessenger') > -1;
  var isMobile = isAndroid || isIOS;
  var isPC = !isMobile;
  var isMac = /macintosh|mac os x/i.test(ua) && !isIOS;
  var isWindows = /windows|win32/i.test(ua);
  var isDouyin = ua.indexOf('aweme') > -1;
  var isToutiao = ua.indexOf('newsarticle') > -1;
  var isHuoshan = ua.indexOf('live_stream') > -1;
  var isXigua = ua.indexOf('videoarticle') > -1;
  var isByteDance = isDouyin || isToutiao || isHuoshan || isXigua;
  var isIpad = (ua.indexOf('ipad') > -1) ||
    (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1 && !window.MSStream);
  var isLightHouse = ua.indexOf('lighthouse') > -1;
  window.__Env__ = {
    ua: ua,
    isAndroid: isAndroid,
    isIOS: isIOS,
    isWechat: isWechat,
    isMobile: isMobile,
    isPC: isPC,
    isMac: isMac,
    isWindows: isWindows,
    isDouyin: isDouyin,
    isToutiao: isToutiao,
    isHuoshan: isHuoshan,
    isXigua: isXigua,
    isByteDance: isByteDance,
    isIpad: isIpad,
    isLightHouse: isLightHouse,
  };
})();