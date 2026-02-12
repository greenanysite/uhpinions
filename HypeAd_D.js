var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
function checkCookies(){var e,t,n,r=document.cookie.split(";");for(e=0;e<r.length;e++){t=r[e].substr(0,r[e].indexOf("="));n=r[e].substr(r[e].indexOf("=")+1);t=t.replace(/^\s+|\s+$/g,"");if(t=="hype"){var n=JSON.parse(unescape(n));return n}}}function updateAdv(e,t,n,r){var i=(new Date).getTime();i+=3600*n*1e3;r.push({active:e,expire:i,adq:t});var r=JSON.stringify(r);setCookie("hype",r,ex_hours)}function setCookie(e,t,n){var r=new Date;var i=r.getTime();i+=3600*n*1e3;r.setTime(i);var s=escape(t)+(n==null?"":"; expires="+r.toUTCString());document.cookie=e+"="+s}function addDefaults(e,t){var n=checkCookies()||[];var r=1;for(var i=0;i<n.length;i++){if(n[i].adq==e){r=0}}if(r==1){updateAdv(0,e,t,n)}}function getAdqs(){if(adq!==0){addDefaults(adq,nadqt)}var e=checkCookies()||[];var t="";for(var n=0;n<e.length;n++){var r=timeSince(e[n].expire);if(r<1||r===undefined){e.splice(e[n],1)}else{t+='.setTargeting("dq_'+e[n].adq+'", "0") '}}e=JSON.stringify(e);setCookie("hype",e,ex_hours);return t}function timeSince(e){var t=Math.floor((e-new Date)/1e3),n=Math.floor(t/60);if(n>1){return n}}function showAd(e){var t=getAdqs()||"";document.write("<scr"+'ipt src="https://web.archive.org/web/20160329230904/http://www.googletagservices.com/tag/js/gpt.js"> googletag.pubads().definePassback("/90345015/'+e+'", ['+w+", "+h+"])"+t+".display(); </scr"+"ipt>")}function GetCookie(e){var t=e+"=";var n=t.length;var r=document.cookie.length;var i=0;while(i<r){var s=i+n;if(document.cookie.substring(i,s)==t)return getCookieVal(s);i=document.cookie.indexOf(" ",i)+1;if(i==0)break}return null}function SetCookie(e,t){var n=SetCookie.arguments;var r=SetCookie.arguments.length;var i=r>2?n[2]:null;var s="/";var o=r>4?n[4]:null;var u=r>5?n[5]:false;document.cookie=e+"="+escape(t)+(i==null?"":"; expires="+i.toGMTString())+(s==null?"":"; path="+s)+(o==null?"":"; domain="+o)+(u==true?"; secure":"")}function DeleteCookie(e){var t=new Date;t.setTime(t.getTime()-1);var n=GetCookie(e);document.cookie=e+"="+n+"; expires="+t.toGMTString()}function amt(){var e=GetCookie("count");if(e==null){SetCookie("count","1");return 1}else{var t=parseInt(e)+1;DeleteCookie("count");SetCookie("count",t,exp);return e}}function getCookieVal(e){var t=document.cookie.indexOf(";",e);if(t==-1)t=document.cookie.length;return unescape(document.cookie.substring(e,t))}var ex_hours=8;var adq=adq||0,nadqt=nadqt||3;var cb=Math.round(Math.random()*9999999999);var ga=ga||0,trys=trys||3,w=w||300,h=h||250;var exp=new Date;var au=au||"hypeDefault";var dq=getAdqs()||"";document.write("<scr"+'ipt src="https://web.archive.org/web/20160329230904/http://www.googletagservices.com/tag/js/gpt.js"> googletag.pubads().definePassback("/90345015/'+au+'", ['+w+", "+h+"])"+dq+".display(); </scr"+"ipt>");if(ga===0){if(trys!==2){amt();var tc=parseInt(GetCookie("count"));_qoptions={qacct:"p-WJNstg8xeFK58"};document.write("<sc"+'ript type="text/javascript" src="https://web.archive.org/web/20160329230904/http://edge.quantserve.com/quant.js"></scr'+"ipt>");document.write('<noscript><img src="https://web.archive.org/web/20160329230904/http://pixel.quantserver.com/pixel/p-WJNstg8xeFK58" style="display:none;" border="0" height="1" width="1" alt="" /></noscript>')}document.write('<script type="text/javascript" src="https://web.archive.org/web/20160329230904/http://tags.hypeads.org/defaults/ga.js"><'+"/script>");ga=1}
}

/*
     FILE ARCHIVED ON 23:09:04 Mar 29, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:41:45 Feb 12, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.77
  exclusion.robots: 0.054
  exclusion.robots.policy: 0.038
  esindex: 0.014
  cdx.remote: 20.992
  LoadShardBlock: 208.94 (3)
  PetaboxLoader3.datanode: 191.369 (4)
  PetaboxLoader3.resolve: 109.846 (2)
  load_resource: 125.714
*/