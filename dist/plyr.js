!function(e,t){"use strict";"function"==typeof define&&define.amd?define(null,function(){t(e,document)}):"object"==typeof module?module.exports=t(e,document):e.plyr=t(e,document)}(this,function(e,t){"use strict";function n(){var e=['<div class="plyr__controls">','<div class="plyr__progress">','<label for="seek{id}" class="plyr__sr-only">Seek</label>','<input id="seek{id}" class="plyr__progress--seek" type="range" min="0" max="100" step="0.5" value="0" data-plyr="seek">','<progress class="plyr__progress--played" max="100" value="0">',"<span>0</span>% "+N.i18n.played,"</progress>",'<progress class="plyr__progress--buffer" max="100" value="0">',"<span>0</span>% "+N.i18n.buffered,"</progress>","</div>",'<span class="plyr__controls--left">'];return o(N.controls,"restart")&&e.push('<button type="button" data-plyr="restart">','<svg><use xlink:href="#'+N.iconPrefix+'-restart" /></svg>','<span class="plyr__sr-only">'+N.i18n.restart+"</span>","</button>"),o(N.controls,"rewind")&&e.push('<button type="button" data-plyr="rewind">','<svg><use xlink:href="#'+N.iconPrefix+'-rewind" /></svg>','<span class="plyr__sr-only">'+N.i18n.rewind+"</span>","</button>"),o(N.controls,"play")&&e.push('<button type="button" data-plyr="play">','<svg><use xlink:href="#'+N.iconPrefix+'-play" /></svg>','<span class="plyr__sr-only">'+N.i18n.play+"</span>","</button>",'<button type="button" data-plyr="pause">','<svg><use xlink:href="#'+N.iconPrefix+'-pause" /></svg>','<span class="plyr__sr-only">'+N.i18n.pause+"</span>","</button>"),o(N.controls,"fast-forward")&&e.push('<button type="button" data-plyr="fast-forward">','<svg><use xlink:href="#'+N.iconPrefix+'-fast-forward" /></svg>','<span class="plyr__sr-only">'+N.i18n.forward+"</span>","</button>"),o(N.controls,"current-time")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+N.i18n.currentTime+"</span>",'<span class="plyr__time--current">00:00</span>',"</span>"),o(N.controls,"duration")&&e.push('<span class="plyr__time">','<span class="plyr__sr-only">'+N.i18n.duration+"</span>",'<span class="plyr__time--duration">00:00</span>',"</span>"),e.push("</span>",'<span class="plyr__controls--right">'),o(N.controls,"mute")&&e.push('<button type="button" data-plyr="mute">','<svg class="icon--muted"><use xlink:href="#'+N.iconPrefix+'-muted" /></svg>','<svg><use xlink:href="#'+N.iconPrefix+'-volume" /></svg>','<span class="plyr__sr-only">'+N.i18n.toggleMute+"</span>","</button>"),o(N.controls,"volume")&&e.push('<label for="volume{id}" class="plyr__sr-only">'+N.i18n.volume+"</label>",'<input id="volume{id}" class="plyr__volume" type="range" min="0" max="10" value="5" data-plyr="volume">'),o(N.controls,"captions")&&e.push('<button type="button" data-plyr="captions">','<svg class="icon--captions-on"><use xlink:href="#'+N.iconPrefix+'-captions-on" /></svg>','<svg><use xlink:href="#'+N.iconPrefix+'-captions-off" /></svg>','<span class="plyr__sr-only">'+N.i18n.toggleCaptions+"</span>","</button>"),o(N.controls,"fullscreen")&&e.push('<button type="button" data-plyr="fullscreen">','<svg class="icon--exit-fullscreen"><use xlink:href="#'+N.iconPrefix+'-exit-fullscreen" /></svg>','<svg><use xlink:href="#'+N.iconPrefix+'-enter-fullscreen" /></svg>','<span class="plyr__sr-only">'+N.i18n.toggleFullscreen+"</span>","</button>"),e.push("</span>","</div>"),e.join("")}function r(t,n){N.debug&&e.console&&console[n?"warn":"log"](t)}function a(){var e,n,r,a=navigator.userAgent,s=navigator.appName,i=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",i="11;"):-1!==(n=a.indexOf("MSIE"))?(s="IE",i=a.substring(n+5)):-1!==(n=a.indexOf("Chrome"))?(s="Chrome",i=a.substring(n+7)):-1!==(n=a.indexOf("Safari"))?(s="Safari",i=a.substring(n+7),-1!==(n=a.indexOf("Version"))&&(i=a.substring(n+8))):-1!==(n=a.indexOf("Firefox"))?(s="Firefox",i=a.substring(n+8)):(e=a.lastIndexOf(" ")+1)<(n=a.lastIndexOf("/"))&&(s=a.substring(e,n),i=a.substring(n+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(r=i.indexOf(";"))&&(i=i.substring(0,r)),-1!==(r=i.indexOf(" "))&&(i=i.substring(0,r)),o=parseInt(""+i,10),isNaN(o)&&(i=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),{name:s,version:o,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform),touch:"ontouchstart"in t.documentElement}}function s(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function i(e){if(!t.querySelectorAll('script[src="'+e+'"]').length){var n=t.createElement("script");n.src=e;var r=t.getElementsByTagName("script")[0];r.parentNode.insertBefore(n,r)}}function o(e,t){return Array.prototype.indexOf&&-1!=e.indexOf(t)}function l(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?\^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function u(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,a=e[n],s=a.parentNode,i=a.nextSibling;r.appendChild(a),i?s.insertBefore(r,i):s.appendChild(r)}}function c(e){for(var t=e.parentNode;e.firstChild;)t.insertBefore(e.firstChild,e);t.removeChild(e)}function p(e){e&&e.parentNode.removeChild(e)}function d(e,t){e.insertBefore(t,e.firstChild)}function f(e,t){for(var n in t)e.setAttribute(n,"boolean"==typeof t[n]&&t[n]?"":t[n])}function m(e,n,r){var a=t.createElement(e);f(a,r),d(n,a)}function y(e){return e.replace(".","")}function b(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function v(e,t){return e?e.classList?e.classList.contains(t):new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className):!1}function g(e,t,n){e&&w(e,t,n,!0)}function h(e,t,n){e&&w(e,t,n,!1)}function k(e,t,n,r){g(e,t,function(t){n&&n.apply(e,[t]),r.apply(e,[t])})}function w(e,t,n,r){var a=t.split(" ");if(e instanceof NodeList)for(var s=0;s<e.length;s++)e[s]instanceof Node&&w(e[s],arguments[1],arguments[2],arguments[3]);else for(var i=0;i<a.length;i++)e[r?"addEventListener":"removeEventListener"](a[i],n,!1)}function T(e,t,n){if(e&&t){var r=new CustomEvent(t,n);e.dispatchEvent(r)}}function x(e,t){return e?(t="boolean"==typeof t?t:!e.getAttribute("aria-pressed"),e.setAttribute("aria-pressed",t),t):void 0}function _(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function F(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},F(e[n],t[n])):e[n]=t[n];return e}function C(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},n="webkit moz o ms khtml".split(" ");if("undefined"!=typeof t.cancelFullScreen)e.supportsFullScreen=!0;else for(var r=0,a=n.length;a>r;r++){if(e.prefix=n[r],"undefined"!=typeof t[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof t.msExitFullscreen&&t.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(e){switch("undefined"==typeof e&&(e=t.body),this.prefix){case"":return t.fullscreenElement==e;case"moz":return t.mozFullScreenElement==e;default:return t[this.prefix+"FullscreenElement"]==e}},e.requestFullScreen=function(e){return"undefined"==typeof e&&(e=t.body),""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]()},e.cancelFullScreen=function(){return""===this.prefix?t.cancelFullScreen():t[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?t.fullscreenElement:t[this.prefix+"FullscreenElement"]}),e}function E(){var t={supported:function(){if(!("localStorage"in e))return!1;try{e.localStorage.setItem("___test","OK");var t=e.localStorage.getItem("___test");return e.localStorage.removeItem("___test"),"OK"===t}catch(n){return!1}return!1}()};return t}function S(F){function S(e){if(!Ce.usingTextTracks&&"video"===Ce.type&&Ce.supported.full&&(Ce.subcount=0,e="number"==typeof e?e:Ce.media.currentTime,Ce.captions[Ce.subcount])){for(;O(Ce.captions[Ce.subcount][0])<e.toFixed(1);)if(Ce.subcount++,Ce.subcount>Ce.captions.length-1){Ce.subcount=Ce.captions.length-1;break}if(Ce.media.currentTime.toFixed(1)>=L(Ce.captions[Ce.subcount][0])&&Ce.media.currentTime.toFixed(1)<=O(Ce.captions[Ce.subcount][0])){Ce.currentCaption=Ce.captions[Ce.subcount][1];var t=Ce.currentCaption.trim();Ce.captionsContainer.innerHTML!=t&&(Ce.captionsContainer.innerHTML="",Ce.captionsContainer.innerHTML=t)}else Ce.captionsContainer.innerHTML=""}}function M(){Ce.buttons.captions&&(b(Ce.container,N.classes.captions.enabled,!0),N.captions.defaultActive&&(b(Ce.container,N.classes.captions.active,!0),x(Ce.buttons.captions,!0)))}function L(e){var t=[];return t=e.split(" --> "),V(t[0])}function O(e){var t=[];return t=e.split(" --> "),V(t[1])}function V(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function q(e){return Ce.container.querySelectorAll(e)}function H(e){return q(e)[0]}function R(){try{return e.self!==e.top}catch(t){return!0}}function j(){function e(e){9===e.which&&Ce.isFullscreen&&(e.target!==r||e.shiftKey?e.target===n&&e.shiftKey&&(e.preventDefault(),r.focus()):(e.preventDefault(),n.focus()))}var t=q("input:not([disabled]), button:not([disabled])"),n=t[0],r=t[t.length-1];g(Ce.container,"keydown",e)}function D(e,t){if("string"==typeof t)m(e,Ce.media,{src:t});else if(t.constructor===Array)for(var n=t.length-1;n>=0;n--)m(e,Ce.media,t[n])}function B(){var e=N.html;r("Injecting custom controls"),e||(e=n()),e=l(e,"{seektime}",N.seekTime),e=l(e,"{id}",Math.floor(1e4*Math.random()));var a;if(null!==N.selectors.controls.container&&(a=N.selectors.controls.container,"string"==typeof selector&&(a=t.querySelector(a))),a instanceof HTMLElement||(a=Ce.container),a.insertAdjacentHTML("beforeend",e),N.tooltips)for(var s=q(N.selectors.labels),i=s.length-1;i>=0;i--){var o=s[i];b(o,N.classes.hidden,!1),b(o,N.classes.tooltip,!0)}}function Y(){try{return Ce.controls=H(N.selectors.controls.wrapper),Ce.buttons={},Ce.buttons.seek=H(N.selectors.buttons.seek),Ce.buttons.play=H(N.selectors.buttons.play),Ce.buttons.pause=H(N.selectors.buttons.pause),Ce.buttons.restart=H(N.selectors.buttons.restart),Ce.buttons.rewind=H(N.selectors.buttons.rewind),Ce.buttons.forward=H(N.selectors.buttons.forward),Ce.buttons.fullscreen=H(N.selectors.buttons.fullscreen),Ce.buttons.volume=H(N.selectors.buttons.volume),Ce.buttons.mute=H(N.selectors.buttons.mute),Ce.buttons.captions=H(N.selectors.buttons.captions),Ce.checkboxes=q('[type="checkbox"]'),Ce.progress={},Ce.progress.container=H(N.selectors.progress.container),Ce.progress.buffer={},Ce.progress.buffer.bar=H(N.selectors.progress.buffer),Ce.progress.buffer.text=Ce.progress.buffer.bar&&Ce.progress.buffer.bar.getElementsByTagName("span")[0],Ce.progress.played={},Ce.progress.played.bar=H(N.selectors.progress.played),Ce.progress.played.text=Ce.progress.played.bar&&Ce.progress.played.bar.getElementsByTagName("span")[0],Ce.volume=H(N.selectors.buttons.volume),Ce.duration=H(N.selectors.duration),Ce.currentTime=H(N.selectors.currentTime),Ce.seekTime=q(N.selectors.seekTime),!0}catch(e){return r("It looks like there is a problem with your controls html",!0),$(!0),!1}}function W(){b(Ce.container,P.selectors.container.replace(".",""),Ce.supported.full)}function $(e){e?Ce.media.setAttribute("controls",""):Ce.media.removeAttribute("controls")}function z(e){var t=N.i18n.play;"undefined"!=typeof N.title&&N.title.length&&(t+=", "+N.title),Ce.supported.full&&Ce.buttons.play&&Ce.buttons.play.setAttribute("aria-label",t),e instanceof HTMLElement&&e.setAttribute("title",N.i18n.frameTitle.replace("{title}",N.title))}function K(){if(!Ce.media)return r("No audio or video element found",!0),!1;if(Ce.supported.full&&(b(Ce.container,N.classes.type.replace("{0}",Ce.type),!0),b(Ce.container,N.classes.stopped,N.autoplay),b(Ce.container,N.classes.isIos,Ce.browser.ios),b(Ce.container,N.classes.isTouch,Ce.browser.touch),"video"===Ce.type)){var e=t.createElement("div");e.setAttribute("class",N.classes.videoWrapper),u(Ce.media,e),Ce.videoContainer=e}o(N.types.embed,Ce.type)?(U(),Ce.embedId=null):N.autoplay&&ee()}function U(){for(var n=t.createElement("div"),r=Ce.embedId,a=Ce.type+"-"+Math.floor(1e4*Math.random()),s=q('[id^="'+Ce.type+'-"]'),o=s.length-1;o>=0;o--)p(s[o]);if(b(Ce.media,N.classes.videoWrapper,!0),b(Ce.media,N.classes.embedWrapper,!0),"youtube"===Ce.type)Ce.media.appendChild(n),n.setAttribute("id",a),"object"==typeof YT?J(r,n):(i(N.urls.youtube.api),e.onYouTubeReadyCallbacks=e.onYouTubeReadyCallbacks||[],e.onYouTubeReadyCallbacks.push(function(){J(r,n)}),e.onYouTubeIframeAPIReady=function(){e.onYouTubeReadyCallbacks.forEach(function(e){e()})});else if("vimeo"===Ce.type){var l=t.createElement("iframe");l.loaded=!1,g(l,"load",function(){l.loaded=!0}),f(l,{src:"https://player.vimeo.com/video/"+r+"?player_id="+a+"&api=1&badge=0&byline=0&portrait=0&title=0",id:a,webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:"",frameborder:0}),Ce.supported.full?(n.appendChild(l),Ce.media.appendChild(n)):Ce.media.appendChild(l),"$f"in e||i(N.urls.vimeo.api);var u=e.setInterval(function(){"$f"in e&&l.loaded&&(e.clearInterval(u),G.call(l))},50)}}function X(){Fe(),z(H("iframe"))}function J(t,n){"timer"in Ce||(Ce.timer={}),Ce.embed=new YT.Player(n.id,{videoId:t,playerVars:{autoplay:0,controls:Ce.supported.full?0:1,rel:0,showinfo:0,iv_load_policy:3,cc_load_policy:N.captions.defaultActive?1:0,cc_lang_pref:"en",wmode:"transparent",modestbranding:1,disablekb:1,origin:"*"},events:{onReady:function(t){var n=t.target;Ce.media.play=function(){n.playVideo(),Ce.media.paused=!1},Ce.media.pause=function(){n.pauseVideo(),Ce.media.paused=!0},Ce.media.stop=function(){n.stopVideo(),Ce.media.paused=!0},Ce.media.duration=n.getDuration(),Ce.media.paused=!0,Ce.media.currentTime=n.getCurrentTime(),Ce.media.muted=n.isMuted(),T(Ce.media,"timeupdate"),e.clearInterval(Ce.timer.buffering),Ce.timer.buffering=e.setInterval(function(){Ce.media.buffered=n.getVideoLoadedFraction(),T(Ce.media,"progress"),1===Ce.media.buffered&&(e.clearInterval(Ce.timer.buffering),T(Ce.media,"canplaythrough"))},200),X(),be()},onStateChange:function(t){var n=t.target;switch(e.clearInterval(Ce.timer.playing),t.data){case 0:Ce.media.paused=!0,T(Ce.media,"ended");break;case 1:Ce.media.paused=!1,Ce.media.seeking=!1,T(Ce.media,"play"),T(Ce.media,"playing"),Ce.timer.playing=e.setInterval(function(){Ce.media.currentTime=n.getCurrentTime(),T(Ce.media,"timeupdate")},100);break;case 2:Ce.media.paused=!0,T(Ce.media,"pause")}}}})}function G(){Ce.embed=$f(this),Ce.embed.addEvent("ready",function(){Ce.media.play=function(){Ce.embed.api("play"),Ce.media.paused=!1},Ce.media.pause=function(){Ce.embed.api("pause"),Ce.media.paused=!0},Ce.media.stop=function(){Ce.embed.api("stop"),Ce.media.paused=!0},Ce.media.paused=!0,Ce.media.currentTime=0,X(),Ce.embed.api("getCurrentTime",function(e){Ce.media.currentTime=e,T(Ce.media,"timeupdate")}),Ce.embed.api("getDuration",function(e){Ce.media.duration=e,be()}),Ce.embed.addEvent("play",function(){Ce.media.paused=!1,T(Ce.media,"play"),T(Ce.media,"playing")}),Ce.embed.addEvent("pause",function(){Ce.media.paused=!0,T(Ce.media,"pause")}),Ce.embed.addEvent("playProgress",function(e){Ce.media.seeking=!1,Ce.media.currentTime=e.seconds,T(Ce.media,"timeupdate")}),Ce.embed.addEvent("loadProgress",function(e){Ce.media.buffered=e.percent,T(Ce.media,"progress"),1===parseInt(e.percent)&&T(Ce.media,"canplaythrough")}),Ce.embed.addEvent("finish",function(){Ce.media.paused=!0,T(Ce.media,"ended")})})}function Q(){if("video"===Ce.type){H(N.selectors.captions)||Ce.videoContainer.insertAdjacentHTML("afterbegin",'<div class="'+y(N.selectors.captions)+'"><span></span></div>'),Ce.captionsContainer=H(N.selectors.captions).querySelector("span"),Ce.usingTextTracks=!1,Ce.media.textTracks&&(Ce.usingTextTracks=!0);for(var e,t="",n=Ce.media.childNodes,a=0;a<n.length;a++)"track"===n[a].nodeName.toLowerCase()&&(e=n[a].kind,("captions"===e||"subtitles"===e)&&(t=n[a].getAttribute("src")));if(Ce.captionExists=!0,""===t?(Ce.captionExists=!1,r("No caption track found")):r("Caption track found; URI: "+t),Ce.captionExists){for(var s=Ce.media.textTracks,i=0;i<s.length;i++)s[i].mode="hidden";if(M(Ce),("IE"===Ce.browser.name&&Ce.browser.version>=10||"Firefox"===Ce.browser.name&&Ce.browser.version>=31||"Chrome"===Ce.browser.name&&Ce.browser.version>=43||"Safari"===Ce.browser.name&&Ce.browser.version>=7)&&(r("Detected unsupported browser for HTML5 captions - using fallback"),Ce.usingTextTracks=!1),Ce.usingTextTracks){r("TextTracks supported");for(var o=0;o<s.length;o++){var l=s[o];("captions"===l.kind||"subtitles"===l.kind)&&g(l,"cuechange",function(){Ce.captionsContainer.innerHTML="",this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&Ce.captionsContainer.appendChild(this.activeCues[0].getCueAsHTML().trim())})}}else if(r("TextTracks not supported so rendering captions manually"),Ce.currentCaption="",Ce.captions=[],""!==t){var u=new XMLHttpRequest;u.onreadystatechange=function(){if(4===u.readyState)if(200===u.status){var e,t=[],n=u.responseText;t=n.split("\n\n");for(var a=0;a<t.length;a++)e=t[a],Ce.captions[a]=[],Ce.captions[a]=e.split("\n");Ce.captions.shift(),r("Successfully loaded the caption file via AJAX")}else r("There was a problem loading the caption file via AJAX",!0)},u.open("get",t,!0),u.send()}if("Safari"===Ce.browser.name&&Ce.browser.version>=7){r("Safari 7+ detected; removing track from DOM"),s=Ce.media.getElementsByTagName("track");for(var c=0;c<s.length;c++)Ce.media.removeChild(s[c])}}else b(Ce.container,N.classes.captions.enabled)}}function Z(){if(Ce.supported.full&&("audio"!=Ce.type||N.fullscreen.allowAudio)&&N.fullscreen.enabled){var e=A.supportsFullScreen;e||N.fullscreen.fallback&&!R()?(r((e?"Native":"Fallback")+" fullscreen enabled"),b(Ce.container,N.classes.fullscreen.enabled,!0)):r("Fullscreen not supported and fallback disabled"),x(Ce.buttons.fullscreen,!1),j(),N.fullscreen.hideControls&&b(Ce.container,N.classes.fullscreen.hideControls,!0)}}function ee(){"play"in Ce.media&&Ce.media.play()}function te(){"pause"in Ce.media&&Ce.media.pause()}function ne(e){e===!0?ee():e===!1?te():Ce.media[Ce.media.paused?"play":"pause"]()}function re(e){"number"!=typeof e&&(e=N.seekTime),se(Ce.media.currentTime-e)}function ae(e){"number"!=typeof e&&(e=N.seekTime),se(Ce.media.currentTime+e)}function se(e){var t=0,n=Ce.media.paused;"number"==typeof e?t=e:"object"!=typeof e||"input"!==e.type&&"change"!==e.type||(t=e.target.value/e.target.max*Ce.media.duration),0>t?t=0:t>Ce.media.duration&&(t=Ce.media.duration);try{Ce.media.currentTime=t.toFixed(1)}catch(a){}if(o(N.types.embed,Ce.type)){switch(Ce.type){case"youtube":Ce.embed.seekTo(t);break;case"vimeo":Ce.embed.api("seekTo",t.toFixed(0))}n&&te(),T(Ce.media,"timeupdate"),Ce.media.seeking=!0}r("Seeking to "+Ce.media.currentTime+" seconds"),S(t)}function ie(){b(Ce.container,N.classes.playing,!Ce.media.paused),b(Ce.container,N.classes.stopped,Ce.media.paused)}function oe(n){function r(){b(Ce.container,N.classes.hover,!0),e.clearTimeout(i),o||(i=e.setTimeout(function(){b(Ce.container,N.classes.hover,!1)},2e3))}function a(e){o="mouseenter"===e.type}var s=A.supportsFullScreen;n&&n.type===A.fullScreenEventName?Ce.isFullscreen=A.isFullScreen(Ce.container):s?(A.isFullScreen(Ce.container)?A.cancelFullScreen():A.requestFullScreen(Ce.container),Ce.isFullscreen=A.isFullScreen(Ce.container)):(Ce.isFullscreen=!Ce.isFullscreen,Ce.isFullscreen?(g(t,"keyup",le),t.body.style.overflow="hidden"):(h(t,"keyup",le),t.body.style.overflow="")),b(Ce.container,N.classes.fullscreen.active,Ce.isFullscreen),Ce.isFullscreen?Ce.container.setAttribute("tabindex","-1"):Ce.container.removeAttribute("tabindex"),j(Ce.isFullscreen),x(Ce.buttons.fullscreen,Ce.isFullscreen);var i,o=!1;N.fullscreen.hideControls&&(b(Ce.controls,N.classes.hover,!1),w(Ce.controls,"mouseenter mouseleave",a,Ce.isFullscreen),w(Ce.container,"mousemove",r,Ce.isFullscreen)),T(Ce.container,Ce.isFullscreen?"enterfullscreen":"exitfullscreen")}function le(e){27===(e.which||e.charCode||e.keyCode)&&Ce.isFullscreen&&oe()}function ue(e){if("boolean"!=typeof e&&(e=!Ce.media.muted),x(Ce.buttons.mute,e),Ce.media.muted=e,o(N.types.embed,Ce.type)){switch(Ce.type){case"youtube":Ce.embed[Ce.media.muted?"mute":"unMute"]();break;case"vimeo":Ce.embed.api("setVolume",Ce.media.muted?0:parseFloat(N.volume/10))}T(Ce.media,"volumechange")}}function ce(t){if("undefined"==typeof t&&(t=N.storage.enabled&&E().supported?e.localStorage[N.storage.key]||N.volume:N.volume),t>10&&(t=10),0>t&&(t=0),Ce.media.volume=parseFloat(t/10),N.volume=t,o(N.types.embed,Ce.type)){switch(Ce.type){case"youtube":Ce.embed.setVolume(100*Ce.media.volume);break;case"vimeo":Ce.embed.api("setVolume",Ce.media.volume)}T(Ce.media,"volumechange")}Ce.media.muted&&t>0&&ue()}function pe(){var t=Ce.media.muted?0:10*Ce.media.volume;Ce.supported.full&&Ce.volume&&(Ce.volume.value=t),N.storage.enabled&&E().supported&&e.localStorage.setItem(N.storage.key,t),b(Ce.container,N.classes.muted,0===t),Ce.supported.full&&Ce.buttons.mute&&x(Ce.buttons.mute,0===t)}function de(e){Ce.supported.full&&Ce.buttons.captions&&("boolean"!=typeof e&&(e=-1===Ce.container.className.indexOf(N.classes.captions.active)),Ce.captionsEnabled=e,x(Ce.buttons.captions,Ce.captionsEnabled),b(Ce.container,N.classes.captions.active,Ce.captionsEnabled),T(Ce.container,Ce.captionsEnabled?"captionsenabled":"captionsdisabled"))}function fe(e){var t="waiting"===e.type;clearTimeout(Ce.loadingTimer),Ce.loadingTimer=setTimeout(function(){b(Ce.container,N.classes.loading,t)},t?250:0)}function me(e){var t=Ce.progress.played.bar,n=Ce.progress.played.text,r=0;if(e)switch(e.type){case"timeupdate":case"seeking":r=_(Ce.media.currentTime,Ce.media.duration),"timeupdate"==e.type&&Ce.buttons.seek&&(Ce.buttons.seek.value=r);break;case"change":case"input":r=e.target.value;break;case"playing":case"progress":t=Ce.progress.buffer.bar,n=Ce.progress.buffer.text,r=function(){var e=Ce.media.buffered;return e&&e.length?_(e.end(0),Ce.media.duration):"number"==typeof e?100*e:0}()}t&&(t.value=r),n&&(n.innerHTML=r)}function ye(e,t){if(t){isNaN(e)&&(e=0),Ce.secs=parseInt(e%60),Ce.mins=parseInt(e/60%60),Ce.hours=parseInt(e/60/60%60);var n=parseInt(Ce.media.duration/60/60%60)>0;Ce.secs=("0"+Ce.secs).slice(-2),Ce.mins=("0"+Ce.mins).slice(-2),t.innerHTML=(n?Ce.hours+":":"")+Ce.mins+":"+Ce.secs}}function be(){if(Ce.supported.full){var e=Ce.media.duration||0;!Ce.duration&&N.displayDuration&&Ce.media.paused&&ye(e,Ce.currentTime),Ce.duration&&ye(e,Ce.duration)}}function ve(e){ye(Ce.media.currentTime,Ce.currentTime),e&&"timeupdate"==e.type&&Ce.media.seeking||me(e)}function ge(e){if("undefined"!=typeof e)return void he(e);var t;switch(Ce.type){case"youtube":t=Ce.embed.getVideoUrl();break;case"vimeo":Ce.embed.api("getVideoUrl",function(e){t=e});break;default:t=Ce.media.currentSrc}return t||""}function he(n){if(!("undefined"!=typeof n&&"sources"in n&&n.sources.length))return void r("Invalid source format",!0);if(te(),"youtube"===Ce.type?(Ce.embed.destroy(),e.clearInterval(Ce.timer.buffering),e.clearInterval(Ce.timer.playing)):"video"===Ce.type&&Ce.videoContainer&&p(Ce.videoContainer),p(Ce.media),"type"in n&&(Ce.type=n.type,"video"===Ce.type)){var a=n.sources[0];"type"in a&&o(N.types.embed,a.type)&&(Ce.type=a.type)}switch(Ce.supported=I.supported(Ce.type),Ce.type){case"video":Ce.media=t.createElement("video");break;case"audio":Ce.media=t.createElement("audio");break;case"youtube":case"vimeo":Ce.media=t.createElement("div"),Ce.embedId=n.sources[0].src}d(Ce.container,Ce.media),o(N.types.html5,Ce.type)&&(N.crossorigin&&Ce.media.setAttribute("crossorigin",""),N.autoplay&&Ce.media.setAttribute("autoplay",""),"poster"in n&&Ce.media.setAttribute("poster",n.poster),N.loop&&Ce.media.setAttribute("loop","")),Ce.container.className=Ce.originalClassName,b(Ce.container,N.classes.fullscreen.active,Ce.isFullscreen),b(Ce.container,N.classes.captions.active,Ce.captionsEnabled),W(),N.autoplay=n.autoplay||N.autoplay,o(N.types.html5,Ce.type)&&D("source",n.sources),K(),o(N.types.html5,Ce.type)&&("tracks"in n&&D("track",n.tracks),Ce.media.load(),be(),Fe()),N.autoplay&&ee(),"title"in n&&(N.title=n.title,z())}function ke(e){"video"===Ce.type&&Ce.media.setAttribute("poster",e)}function we(){function n(){var e=Ce.media.paused;e?ee():te();var t=Ce.buttons[e?"play":"pause"],n=Ce.buttons[e?"pause":"play"];if(n){var r=v(t,N.classes.tabFocus);setTimeout(function(){n.focus(),r&&(b(t,N.classes.tabFocus,!1),b(n,N.classes.tabFocus,!0))},100)}}function r(){var e=t.activeElement;e&&e!=t.body?t.querySelector&&(e=t.querySelector(":focus")):e=null;for(var n in Ce.buttons){var r=Ce.buttons[n];b(r,N.classes.tabFocus,r===e)}}var a="IE"==Ce.browser.name?"change":"input";g(e,"keyup",function(e){var t=e.keyCode?e.keyCode:e.which;9==t&&r()}),g(t.body,"click",function(){b(H("."+N.classes.tabFocus),N.classes.tabFocus,!1)});for(var s in Ce.buttons){var i=Ce.buttons[s];g(i,"blur",function(){b(i,"tab-focus",!1)})}k(Ce.buttons.play,"click",N.listeners.play,n),k(Ce.buttons.pause,"click",N.listeners.pause,n),k(Ce.buttons.restart,"click",N.listeners.restart,se),k(Ce.buttons.rewind,"click",N.listeners.rewind,re),k(Ce.buttons.forward,"click",N.listeners.forward,ae),k(Ce.buttons.seek,a,N.listeners.seek,se),k(Ce.volume,a,N.listeners.volume,function(){ce(Ce.volume.value)}),k(Ce.buttons.mute,"click",N.listeners.mute,ue),k(Ce.buttons.fullscreen,"click",N.listeners.fullscreen,oe),A.supportsFullScreen&&g(t,A.fullScreenEventName,oe),g(Ce.buttons.captions,"click",de),"video"===Ce.type&&N.click&&g(Ce.videoContainer,"click",function(){Ce.media.paused?ee():Ce.media.ended?(se(),ee()):te()})}function Te(){g(Ce.media,"timeupdate seeking",ve),g(Ce.media,"timeupdate",S),g(Ce.media,"durationchange loadedmetadata",be),g(Ce.media,"ended",function(){"video"===Ce.type&&(Ce.captionsContainer.innerHTML=""),ie()}),g(Ce.media,"progress playing",me),g(Ce.media,"volumechange",pe),g(Ce.media,"play pause",ie),g(Ce.media,"waiting canplay seeked",fe),g(Ce.media,N.events.join(" "),function(e){T(Ce.container,e.type)})}function xe(){if(!Ce.init)return null;if(Ce.container.setAttribute("class",y(N.selectors.container)),Ce.init=!1,p(H(N.selectors.controls.wrapper)),"youtube"===Ce.type)return void Ce.embed.destroy();"video"===Ce.type&&(p(H(N.selectors.captions)),c(Ce.videoContainer)),$(!0);var e=Ce.media.cloneNode(!0);Ce.media.parentNode.replaceChild(e,Ce.media)}function _e(){if(Ce.init)return null;A=C(),Ce.browser=a(),Ce.media=Ce.container.querySelectorAll("audio, video, div")[0],Ce.originalClassName=Ce.container.className;var e=Ce.media.tagName.toLowerCase();if("div"===e?(Ce.type=Ce.media.getAttribute("data-type"),Ce.embedId=Ce.media.getAttribute("data-video-id"),Ce.media.removeAttribute("data-type"),Ce.media.removeAttribute("data-video-id")):(Ce.type=e,N.crossorigin=null!==Ce.media.getAttribute("crossorigin"),N.autoplay=N.autoplay||null!==Ce.media.getAttribute("autoplay"),N.loop=N.loop||null!==Ce.media.getAttribute("loop")),Ce.supported=I.supported(Ce.type),W(),!Ce.supported.basic)return!1;if(r(Ce.browser.name+" "+Ce.browser.version),K(),o(N.types.html5,Ce.type)){if(!Ce.supported.full)return void(Ce.init=!0);Fe(),z()}Ce.init=!0}function Fe(){if(!Ce.supported.full)return r("No full support for this media type ("+Ce.type+")",!0),p(H(N.selectors.controls.wrapper)),void $(!0);var e=!q(N.selectors.controls.wrapper).length;e&&B(),Y()&&(e&&we(),Te(),$(),Z(),Q(),ce(),pe(),ve(),ie())}var Ce=this;return Ce.container=F,_e(),Ce.init?{media:Ce.media,play:ee,pause:te,restart:se,rewind:re,forward:ae,seek:se,source:ge,poster:ke,setVolume:ce,togglePlay:ne,toggleMute:ue,toggleCaptions:de,toggleFullscreen:oe,isFullscreen:function(){return Ce.isFullscreen||!1},support:function(e){return s(Ce,e)},destroy:xe,restore:_e}:{}}var A,N,I={},P={enabled:!0,debug:!1,autoplay:!1,loop:!1,seekTime:10,volume:5,click:!0,tooltips:!1,displayDuration:!0,iconPrefix:"icon",selectors:{container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr] .sr-only, label .sr-only",buttons:{seek:'[data-plyr="seek"]',play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',forward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',volume:'[data-plyr="volume"]',captions:'[data-plyr="captions"]',fullscreen:'[data-plyr="fullscreen"]'},progress:{container:".plyr__progress",buffer:".plyr__progress--buffer",played:".plyr__progress--played"},captions:".plyr__captions",currentTime:".plyr__time--current",duration:".plyr__time--duration"},classes:{videoWrapper:"plyr__video-wrapper",embedWrapper:"plyr__video-embed",type:"plyr--{0}",stopped:"plyr--stopped",playing:"plyr--playing",muted:"plyr--muted",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",hidden:"plyr__sr-only",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",active:"plyr--fullscreen-active",hideControls:"plyr--fullscreen--hide-controls"},tabFocus:"tab-focus"},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,hideControls:!0,allowAudio:!1},storage:{enabled:!0,key:"plyr_volume"},controls:["restart","rewind","play","fast-forward","current-time","duration","mute","volume","captions","fullscreen"],i18n:{restart:"Restart",rewind:"Rewind {seektime} secs",play:"Play",pause:"Pause",forward:"Forward {seektime} secs",played:"played",buffered:"buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",toggleMute:"Toggle Mute",toggleCaptions:"Toggle Captions",toggleFullscreen:"Toggle Fullscreen",frameTitle:"Player for {title}"},types:{embed:["youtube","vimeo"],html5:["video","audio"]},urls:{vimeo:{api:"https://cdn.plyr.io/froogaloop/1.0.0/plyr.froogaloop.js"},youtube:{api:"https://www.youtube.com/iframe_api"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,forward:null,mute:null,volume:null,captions:null,fullscreen:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","emptied"]};return I.supported=function(e){var n,r,s=a(),i="IE"===s.name&&s.version<=9,o=/iPhone|iPod/i.test(navigator.userAgent),l=!!t.createElement("audio").canPlayType,u=!!t.createElement("video").canPlayType;switch(e){case"video":n=u,r=n&&!i&&!o;break;case"audio":n=l,r=n&&!i;break;case"vimeo":case"youtube":n=!0,r=!i&&!o;break;default:n=l&&u,r=n&&!i}return{basic:n,full:r}},I.setup=function(e,n){var r=[];if("string"==typeof e?e=t.querySelectorAll(e):e instanceof HTMLElement?e=[e]:e instanceof NodeList||"string"==typeof e||("undefined"==typeof n&&"object"==typeof e&&(n=e),e=t.querySelectorAll(P.selectors.container)),N=F(P,n),!N.enabled||!I.supported().basic||!e.length)return!1;for(var a=e.length-1;a>=0;a--){var s=e[a];if("undefined"==typeof s.plyr){var i=new S(s);s.plyr=Object.keys(i).length?i:!1,T(s,"setup",{plyr:s.plyr})}r.push(s.plyr)}return r;
},I}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,"CustomEvent"in window||(window.CustomEvent=e)}();