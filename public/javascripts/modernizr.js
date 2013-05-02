window.Modernizr=function(n,t,i){function a(n){s.cssText=n}function lt(n,t){return a(h.join(n+";")+(t||""))}function v(n,t){return typeof n===t}function d(n,t){return!!~(""+n).indexOf(t)}function g(n,t){for(var r in n)if(s[n[r]]!==i)return t=="pfx"?n[r]:!0;return!1}function o(n,t){var i=n.charAt(0).toUpperCase()+n.substr(1),r=(n+" "+l.join(i+" ")+i).split(" ");return g(r,t)}function vt(){u.input=function(n){for(var t=0,i=n.length;t<i;t++)et[n[t]]=!!(n[t]in f);return et}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),u.inputtypes=function(n){for(var o=0,r,u,s,h=n.length;o<h;o++)f.setAttribute("type",u=n[o]),r=f.type!=="text",r&&(f.value=y,f.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(u)&&f.style.WebkitAppearance!==i?(e.appendChild(f),s=t.defaultView,r=s.getComputedStyle&&s.getComputedStyle(f,null).WebkitAppearance!=="textfield"&&f.offsetHeight!==0,e.removeChild(f)):/^(search|tel)$/.test(u)||(/^(url|email)$/.test(u)?r=f.checkValidity&&f.checkValidity()===!1:/^color$/.test(u)?(e.appendChild(f),e.offsetWidth,r=f.value!=y,e.removeChild(f)):r=f.value!=y)),ft[n[o]]=!!r;return ft}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var st="2.0.6",u={},ht=!0,e=t.documentElement,yt=t.head||t.getElementsByTagName("head")[0],c="modernizr",rt=t.createElement(c),s=rt.style,f=t.createElement("input"),y=":)",ut=Object.prototype.toString,h=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),l="Webkit Moz O ms Khtml".split(" "),p={svg:"http://www.w3.org/2000/svg"},r={},ft={},et={},ot=[],w,tt=function(n,i,r,u){var s,h,o,f=t.createElement("div");if(parseInt(r,10))while(r--)o=t.createElement("div"),o.id=u?u[r]:c+(r+1),f.appendChild(o);return s=["&shy;","<style>",n,"<\/style>"].join(""),f.id=c,f.innerHTML+=s,e.appendChild(f),h=i(f,n),f.parentNode.removeChild(f),!!h},ct=function(t){if(n.matchMedia)return matchMedia(t).matches;var i;return tt("@media "+t+" { #"+c+" { position: absolute; } }",function(t){i=(n.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position=="absolute"}),i},b=function(){function r(r,u){u=u||t.createElement(n[r]||"div"),r="on"+r;var f=r in u;return f||(u.setAttribute||(u=t.createElement("div")),u.setAttribute&&u.removeAttribute&&(u.setAttribute(r,""),f=v(u[r],"function"),v(u[r],i)||(u[r]=i),u.removeAttribute(r))),u=null,f}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),it={}.hasOwnProperty,k,at,nt;k=v(it,i)||v(it.call,i)?function(n,t){return t in n&&v(n.constructor.prototype[t],i)}:function(n,t){return it.call(n,t)},at=function(i,r){var e=i.join(""),f=r.length;tt(e,function(i,r){for(var e=t.styleSheets[t.styleSheets.length-1],s=e.cssRules&&e.cssRules[0]?e.cssRules[0].cssText:e.cssText||"",h=i.childNodes,o={};f--;)o[h[f].id]=h[f];u.touch="ontouchstart"in n||o.touch.offsetTop===9,u.csstransforms3d=o.csstransforms3d.offsetLeft===9,u.generatedcontent=o.generatedcontent.offsetHeight>=1,u.fontface=/src/i.test(s)&&s.indexOf(r.split(" ")[0])===0},f,r)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",h.join("touch-enabled),("),c,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",h.join("transform-3d),("),c,")","{#csstransforms3d{left:9px;position:absolute}}"].join(""),['#generatedcontent:after{content:"',y,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]),r.flexbox=function(){function u(n,t,i,r){t+=":",n.style.cssText=(t+h.join(i+";"+t)).slice(0,-t.length)+(r||"")}function f(n,t,i,r){n.style.cssText=h.join(t+":"+i+";")+(r||"")}var n=t.createElement("div"),i=t.createElement("div"),r;return u(n,"display","box","width:42px;padding:0;"),f(i,"box-flex","1","width:10px;"),n.appendChild(i),e.appendChild(n),r=i.offsetWidth===42,n.removeChild(i),e.removeChild(n),r},r.canvas=function(){var n=t.createElement("canvas");return!!(n.getContext&&n.getContext("2d"))},r.canvastext=function(){return!!(u.canvas&&v(t.createElement("canvas").getContext("2d").fillText,"function"))},r.webgl=function(){return!!n.WebGLRenderingContext},r.touch=function(){return u.touch},r.geolocation=function(){return!!navigator.geolocation},r.postmessage=function(){return!!n.postMessage},r.websqldatabase=function(){return!!n.openDatabase},r.indexedDB=function(){for(var t=-1,i=l.length;++t<i;)if(n[l[t].toLowerCase()+"IndexedDB"])return!0;return!!n.indexedDB},r.hashchange=function(){return b("hashchange",n)&&(t.documentMode===i||t.documentMode>7)},r.history=function(){return!!(n.history&&history.pushState)},r.draganddrop=function(){return b("dragstart")&&b("drop")},r.websockets=function(){for(var t=-1,i=l.length;++t<i;)if(n[l[t]+"WebSocket"])return!0;return"WebSocket"in n},r.rgba=function(){return a("background-color:rgba(150,255,150,.5)"),d(s.backgroundColor,"rgba")},r.hsla=function(){return a("background-color:hsla(120,40%,100%,.5)"),d(s.backgroundColor,"rgba")||d(s.backgroundColor,"hsla")},r.multiplebgs=function(){return a("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(s.background)},r.backgroundsize=function(){return o("backgroundSize")},r.borderimage=function(){return o("borderImage")},r.borderradius=function(){return o("borderRadius")},r.boxshadow=function(){return o("boxShadow")},r.textshadow=function(){return t.createElement("div").style.textShadow===""},r.opacity=function(){return lt("opacity:.55"),/^0.55$/.test(s.opacity)},r.cssanimations=function(){return o("animationName")},r.csscolumns=function(){return o("columnCount")},r.cssgradients=function(){var n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return a((n+h.join(t+n)+h.join(i+n)).slice(0,-n.length)),d(s.backgroundImage,"gradient")},r.cssreflections=function(){return o("boxReflect")},r.csstransforms=function(){return!!g(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},r.csstransforms3d=function(){var n=!!g(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);return n&&"webkitPerspective"in e.style&&(n=u.csstransforms3d),n},r.csstransitions=function(){return o("transitionProperty")},r.fontface=function(){return u.fontface},r.generatedcontent=function(){return u.generatedcontent},r.video=function(){var i=t.createElement("video"),n=!1,r;try{(n=!!i.canPlayType)&&(n=new Boolean(n),n.ogg=i.canPlayType('video/ogg; codecs="theora"'),r='video/mp4; codecs="avc1.42E01E',n.h264=i.canPlayType(r+'"')||i.canPlayType(r+', mp4a.40.2"'),n.webm=i.canPlayType('video/webm; codecs="vp8, vorbis"'))}catch(u){}return n},r.audio=function(){var i=t.createElement("audio"),n=!1;try{(n=!!i.canPlayType)&&(n=new Boolean(n),n.ogg=i.canPlayType('audio/ogg; codecs="vorbis"'),n.mp3=i.canPlayType("audio/mpeg;"),n.wav=i.canPlayType('audio/wav; codecs="1"'),n.m4a=i.canPlayType("audio/x-m4a;")||i.canPlayType("audio/aac;"))}catch(r){}return n},r.localstorage=function(){try{return!!localStorage.getItem}catch(n){return!1}},r.sessionstorage=function(){try{return!!sessionStorage.getItem}catch(n){return!1}},r.webworkers=function(){return!!n.Worker},r.applicationcache=function(){return!!n.applicationCache},r.svg=function(){return!!t.createElementNS&&!!t.createElementNS(p.svg,"svg").createSVGRect},r.inlinesvg=function(){var n=t.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==p.svg},r.smil=function(){return!!t.createElementNS&&/SVG/.test(ut.call(t.createElementNS(p.svg,"animate")))},r.svgclippaths=function(){return!!t.createElementNS&&/SVG/.test(ut.call(t.createElementNS(p.svg,"clipPath")))};for(nt in r)k(r,nt)&&(w=nt.toLowerCase(),u[w]=r[nt](),ot.push((u[w]?"":"no-")+w));return u.input||vt(),u.addTest=function(n,t){if(typeof n=="object")for(var r in n)k(n,r)&&u.addTest(r,n[r]);else{if(n=n.toLowerCase(),u[n]!==i)return;t=typeof t=="boolean"?t:!!t(),e.className+=" "+(t?"":"no-")+n,u[n]=t}return u},a(""),rt=f=null,n.attachEvent&&function(){var n=t.createElement("div");return n.innerHTML="<elem><\/elem>",n.childNodes.length!==1}()&&function(n,t){function v(n){for(var t=-1;++t<c;)n.createElement(s[t])}n.iepp=n.iepp||{};var r=n.iepp,o=r.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",s=o.split("|"),c=s.length,y=new RegExp("(^|\\s)("+o+")","gi"),p=new RegExp("<(/*)("+o+")","gi"),w=/^\s*[\{\}]\s*$/,b=new RegExp("(^|[^\\n]*?\\s)("+o+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=t.createDocumentFragment(),h=t.documentElement,a=h.firstChild,f=t.createElement("body"),e=t.createElement("style"),k=/print|all/,u;(r.getCSS=function(n,t){if(n+""===i)return"";for(var f=-1,o=n.length,u,e=[];++f<o;)(u=n[f],u.disabled)||(t=u.media||t,k.test(t)&&e.push(r.getCSS(u.imports,t),u.cssText),t="all");return e.join("")},r.parseCSS=function(n){for(var i=[],t;(t=b.exec(n))!=null;)i.push(((w.exec(t[1])?"\n":t[1])+t[2]+t[3]).replace(y,"$1.iepp_$2")+t[4]);return i.join("\n")},r.writeHTML=function(){var n=-1;for(u=u||t.body;++n<c;)for(var i=t.getElementsByTagName(s[n]),e=i.length,r=-1;++r<e;)i[r].className.indexOf("iepp_")<0&&(i[r].className+=" iepp_"+s[n]);l.appendChild(u),h.appendChild(f),f.className=u.className,f.id=u.id,f.innerHTML=u.innerHTML.replace(p,"<$1font")},r._beforePrint=function(){e.styleSheet.cssText=r.parseCSS(r.getCSS(t.styleSheets,"all")),r.writeHTML()},r.restoreHTML=function(){f.innerHTML="",h.removeChild(f),h.appendChild(u)},r._afterPrint=function(){r.restoreHTML(),e.styleSheet.cssText=""},v(t),v(l),r.disablePP)||(a.insertBefore(e,a.firstChild),e.media="print",e.className="iepp-printshim",n.attachEvent("onbeforeprint",r._beforePrint),n.attachEvent("onafterprint",r._afterPrint))}(n,t),u._version=st,u._prefixes=h,u._domPrefixes=l,u.mq=ct,u.hasEvent=b,u.testProp=function(n){return g([n])},u.testAllProps=o,u.testStyles=tt,u.prefixed=function(n){return o(n,"pfx")},e.className=e.className.replace(/\bno-js\b/,"")+(ht?" js "+ot.join(" "):""),u}(this,this.document),window.Modernizr=function(n,t,i){function a(n){c.cssText=n}function yt(n,t){return a(y.join(n+";")+(t||""))}function h(n,t){return typeof n===t}function v(n,t){return!!~(""+n).indexOf(t)}function lt(n,t){var u,r;for(u in n)if(r=n[u],!v(r,"-")&&c[r]!==i)return t=="pfx"?r:!0;return!1}function pt(n,t,r){var f,u;for(f in n)if(u=t[n[f]],u!==i)return r===!1?n[f]:h(u,"function")?u.bind(r||t):u;return!1}function f(n,t,i){var r=n.charAt(0).toUpperCase()+n.slice(1),u=(n+" "+ot.join(r+" ")+r).split(" ");return h(t,"string")||h(t,"undefined")?lt(u,t):(u=(n+" "+st.join(r+" ")+r).split(" "),pt(u,t,i))}function wt(){u.input=function(i){for(var r=0,u=i.length;r<u;r++)w[i[r]]=!!(i[r]in o);return w.list&&(w.list=!!(t.createElement("datalist")&&n.HTMLDataListElement)),w}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),u.inputtypes=function(n){for(var u=0,r,f,e,h=n.length;u<h;u++)o.setAttribute("type",f=n[u]),r=o.type!=="text",r&&(o.value=nt,o.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&o.style.WebkitAppearance!==i?(s.appendChild(o),e=t.defaultView,r=e.getComputedStyle&&e.getComputedStyle(o,null).WebkitAppearance!=="textfield"&&o.offsetHeight!==0,s.removeChild(o)):/^(search|tel)$/.test(f)||(r=/^(url|email)$/.test(f)?o.checkValidity&&o.checkValidity()===!1:o.value!=nt)),ht[n[u]]=!!r;return ht}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var at="2.6.2",u={},g=!0,s=t.documentElement,e="modernizr",ut=t.createElement(e),c=ut.style,o=t.createElement("input"),nt=":)",ft={}.toString,y=" -webkit- -moz- -o- -ms- ".split(" "),et="Webkit Moz O ms",ot=et.split(" "),st=et.toLowerCase().split(" "),p={svg:"http://www.w3.org/2000/svg"},r={},ht={},w={},tt=[],it=tt.slice,b,l=function(n,i,r,u){var l,a,c,v,f=t.createElement("div"),h=t.body,o=h||t.createElement("body");if(parseInt(r,10))while(r--)c=t.createElement("div"),c.id=u?u[r]:e+(r+1),f.appendChild(c);return l=["&#173;",'<style id="s',e,'">',n,"<\/style>"].join(""),f.id=e,(h?f:o).innerHTML+=l,o.appendChild(f),h||(o.style.background="",o.style.overflow="hidden",v=s.style.overflow,s.style.overflow="hidden",s.appendChild(o)),a=i(f,n),h?f.parentNode.removeChild(f):(o.parentNode.removeChild(o),s.style.overflow=v),!!a},vt=function(t){var i=n.matchMedia||n.msMatchMedia,r;return i?i(t).matches:(l("@media "+t+" { #"+e+" { position: absolute; } }",function(t){r=(n.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position=="absolute"}),r)},ct=function(){function r(r,u){u=u||t.createElement(n[r]||"div"),r="on"+r;var f=r in u;return f||(u.setAttribute||(u=t.createElement("div")),u.setAttribute&&u.removeAttribute&&(u.setAttribute(r,""),f=h(u[r],"function"),h(u[r],"undefined")||(u[r]=i),u.removeAttribute(r))),u=null,f}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return r}(),rt={}.hasOwnProperty,k,d;k=h(rt,"undefined")||h(rt.call,"undefined")?function(n,t){return t in n&&h(n.constructor.prototype[t],"undefined")}:function(n,t){return rt.call(n,t)},Function.prototype.bind||(Function.prototype.bind=function(n){var t=this,i,r;if(typeof t!="function")throw new TypeError;return i=it.call(arguments,1),r=function(){var f,e,u;return this instanceof r?(f=function(){},f.prototype=t.prototype,e=new f,u=t.apply(e,i.concat(it.call(arguments))),Object(u)===u)?u:e:t.apply(n,i.concat(it.call(arguments)))},r}),r.flexbox=function(){return f("flexWrap")},r.flexboxlegacy=function(){return f("boxDirection")},r.canvas=function(){var n=t.createElement("canvas");return!!(n.getContext&&n.getContext("2d"))},r.canvastext=function(){return!!(u.canvas&&h(t.createElement("canvas").getContext("2d").fillText,"function"))},r.webgl=function(){return!!n.WebGLRenderingContext},r.touch=function(){var i;return"ontouchstart"in n||n.DocumentTouch&&t instanceof DocumentTouch?i=!0:l(["@media (",y.join("touch-enabled),("),e,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(n){i=n.offsetTop===9}),i},r.geolocation=function(){return"geolocation"in navigator},r.postmessage=function(){return!!n.postMessage},r.websqldatabase=function(){return!!n.openDatabase},r.indexedDB=function(){return!!f("indexedDB",n)},r.hashchange=function(){return ct("hashchange",n)&&(t.documentMode===i||t.documentMode>7)},r.history=function(){return!!(n.history&&history.pushState)},r.draganddrop=function(){var n=t.createElement("div");return"draggable"in n||"ondragstart"in n&&"ondrop"in n},r.websockets=function(){return"WebSocket"in n||"MozWebSocket"in n},r.rgba=function(){return a("background-color:rgba(150,255,150,.5)"),v(c.backgroundColor,"rgba")},r.hsla=function(){return a("background-color:hsla(120,40%,100%,.5)"),v(c.backgroundColor,"rgba")||v(c.backgroundColor,"hsla")},r.multiplebgs=function(){return a("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(c.background)},r.backgroundsize=function(){return f("backgroundSize")},r.borderimage=function(){return f("borderImage")},r.borderradius=function(){return f("borderRadius")},r.boxshadow=function(){return f("boxShadow")},r.textshadow=function(){return t.createElement("div").style.textShadow===""},r.opacity=function(){return yt("opacity:.55"),/^0.55$/.test(c.opacity)},r.cssanimations=function(){return f("animationName")},r.csscolumns=function(){return f("columnCount")},r.cssgradients=function(){var n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return a((n+"-webkit- ".split(" ").join(t+n)+y.join(i+n)).slice(0,-n.length)),v(c.backgroundImage,"gradient")},r.cssreflections=function(){return f("boxReflect")},r.csstransforms=function(){return!!f("transform")},r.csstransforms3d=function(){var n=!!f("perspective");return n&&"webkitPerspective"in s.style&&l("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){n=t.offsetLeft===9&&t.offsetHeight===3}),n},r.csstransitions=function(){return f("transition")},r.fontface=function(){var n;return l('@font-face {font-family:"font";src:url("https://")}',function(i,r){var f=t.getElementById("smodernizr"),u=f.sheet||f.styleSheet,e=u?u.cssRules&&u.cssRules[0]?u.cssRules[0].cssText:u.cssText||"":"";n=/src/i.test(e)&&e.indexOf(r.split(" ")[0])===0}),n},r.generatedcontent=function(){var n;return l(["#",e,"{font:0/0 a}#",e,':after{content:"',nt,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){n=t.offsetHeight>=3}),n},r.video=function(){var i=t.createElement("video"),n=!1;try{(n=!!i.canPlayType)&&(n=new Boolean(n),n.ogg=i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},r.audio=function(){var i=t.createElement("audio"),n=!1;try{(n=!!i.canPlayType)&&(n=new Boolean(n),n.ogg=i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=i.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=i.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(i.canPlayType("audio/x-m4a;")||i.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},r.localstorage=function(){try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(n){return!1}},r.sessionstorage=function(){try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(n){return!1}},r.webworkers=function(){return!!n.Worker},r.applicationcache=function(){return!!n.applicationCache},r.svg=function(){return!!t.createElementNS&&!!t.createElementNS(p.svg,"svg").createSVGRect},r.inlinesvg=function(){var n=t.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==p.svg},r.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(ft.call(t.createElementNS(p.svg,"animate")))},r.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(ft.call(t.createElementNS(p.svg,"clipPath")))};for(d in r)k(r,d)&&(b=d.toLowerCase(),u[b]=r[d](),tt.push((u[b]?"":"no-")+b));return u.input||wt(),u.addTest=function(n,t){if(typeof n=="object")for(var r in n)k(n,r)&&u.addTest(r,n[r]);else{if(n=n.toLowerCase(),u[n]!==i)return u;t=typeof t=="function"?t():t,typeof g!="undefined"&&g&&(s.className+=" "+(t?"":"no-")+n),u[n]=t}return u},a(""),ut=o=null,function(n,t){function p(n,t){var i=n.createElement("p"),r=n.getElementsByTagName("head")[0]||n.documentElement;return i.innerHTML="x<style>"+t+"<\/style>",r.insertBefore(i.lastChild,r.firstChild)}function c(){var n=r.elements;return typeof n=="string"?n.split(" "):n}function o(n){var t=h[n[s]];return t||(t={},e++,n[s]=e,h[e]=t),t}function l(n,r,u){if(r||(r=t),i)return r.createElement(n);u||(u=o(r));var f;return f=u.cache[n]?u.cache[n].cloneNode():y.test(n)?(u.cache[n]=u.createElem(n)).cloneNode():u.createElem(n),f.canHaveChildren&&!v.test(n)?u.frag.appendChild(f):f}function w(n,r){if(n||(n=t),i)return n.createDocumentFragment();r=r||o(n);for(var f=r.frag.cloneNode(),u=0,e=c(),s=e.length;u<s;u++)f.createElement(e[u]);return f}function b(n,t){t.cache||(t.cache={},t.createElem=n.createElement,t.createFrag=n.createDocumentFragment,t.frag=t.createFrag()),n.createElement=function(i){return r.shivMethods?l(i,n,t):t.createElem(i)},n.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/\w+/g,function(n){return t.createElem(n),t.frag.createElement(n),'c("'+n+'")'})+");return n}")(r,t.frag)}function a(n){n||(n=t);var u=o(n);return!r.shivCSS||f||u.hasCSS||(u.hasCSS=!!p(n,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),i||b(n,u),n}var u=n.html5||{},v=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,s="_html5shiv",e=0,h={},i,r;(function(){try{var n=t.createElement("a");n.innerHTML="<xyz><\/xyz>",f="hidden"in n,i=n.childNodes.length==1||function(){t.createElement("a");var n=t.createDocumentFragment();return typeof n.cloneNode=="undefined"||typeof n.createDocumentFragment=="undefined"||typeof n.createElement=="undefined"}()}catch(r){f=!0,i=!0}})(),r={elements:u.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:u.shivCSS!==!1,supportsUnknownElements:i,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:a,createElement:l,createDocumentFragment:w},n.html5=r,a(t)}(this,t),u._version=at,u._prefixes=y,u._domPrefixes=st,u._cssomPrefixes=ot,u.mq=vt,u.hasEvent=ct,u.testProp=function(n){return lt([n])},u.testAllProps=f,u.testStyles=l,u.prefixed=function(n,t,i){return t?f(n,t,i):f(n,"pfx")},s.className=s.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+tt.join(" "):""),u}(this,this.document)