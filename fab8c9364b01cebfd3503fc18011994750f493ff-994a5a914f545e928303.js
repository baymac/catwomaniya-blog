(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"64Yt":function(e,t,a){},"6Gk8":function(e,t,a){"use strict";a("pJf4"),a("3nLz");var i=a("YTpj"),r=a("q1tI"),n=a.n(r),s=a("9eSz"),d=a.n(s),o=a("p3AD");t.a=function(){var e=i.data,t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2)}},n.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:a.name,style:{marginRight:Object(o.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a.name)," ",a.summary," ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"You should follow her on Twitter")))}},"8ypT":function(e,t,a){},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function z(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function R(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},A=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(L,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),d):d})),L=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:i,src:r},p,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=g(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,E=e.loading,R=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:k?1:0,transition:x?"opacity "+v+"ms":"none"},d),C="boolean"==typeof b?"lightgray":b,W={transitionDelay:v+"ms"},j=(0,o.default)((0,o.default)((0,o.default)({opacity:this.state.imgLoaded?0:1},x&&W),d),f),T={title:t,alt:this.state.isVisible?"":a,style:j,className:g,itemProp:S};if(h){var N=h,G=p(h);return l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:G.maxWidth?G.maxWidth+"px":null,maxHeight:G.maxHeight?G.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&W)}),G.base64&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:T,imageVariants:N,generateSources:z}),G.tracedSVG&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:T,imageVariants:N,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(N),l.default.createElement(L,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)((0,o.default)({alt:a,title:t,loading:E},G),{},{imageVariants:N}))}}))}if(m){var H=m,U=p(m),q=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},n);return"inherit"===n.display&&delete q.display,l.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},C&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},x&&W)}),U.base64&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:U.base64,spreadProps:T,imageVariants:H,generateSources:z}),U.tracedSVG&&l.default.createElement(A,{ariaHidden:!0,ref:this.placeholderRef,src:U.tracedSVG,spreadProps:T,imageVariants:H,generateSources:I}),this.state.isVisible&&l.default.createElement("picture",null,w(H),l.default.createElement(L,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:E,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)((0,o.default)({alt:a,title:t,loading:E},U),{},{imageVariants:H}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});x.propTypes={resolutions:V,sizes:C,fixed:u.default.oneOfType([V,u.default.arrayOf(V)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var W=x;t.default=W},Bl7J:function(e,t,a){"use strict";var i=a("IRj2"),r=a("q1tI"),n=a.n(r),s=a("Wbzz"),d=(a("64Yt"),function(e){var t=e.siteTitle,a=e.path;return n.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(s.Link,{to:a||"/",className:"header"},t))))});d.defaultProps={siteTitle:""};var o=d;a("8ypT"),t.a=function(e){var t=e.children,a=i.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{siteTitle:a.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},n.a.createElement("main",null,t)))}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Catwomaniya"}}}}')},SGlo:function(e,t,a){"use strict";var i=a("rj/q"),r=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),d=a("xa9o"),o=a("yde8"),l=a("Wadk"),u=a("qDzq"),c=a("O1i0"),f=l(5),g=l(6),p=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=g(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){d(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=i&&o(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?h(e).set(t,a):i[e._i]=a,e},ufstore:h}},YTpj:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAAEuklEQVQ4yzWS+VNTZxSG709tcUEUCxIiBiGEYCAkE4INizGsIlsEYwCjICgNLojQIiMU7WLREVGQiNOqIG2RwSqgbFkQQ0JuyHZvkrvkJgGFJFbbP6IXOz3zzjvnO3Oec2a+OUAgEHgf8Pn9Pr+PjHX/RvbeH/joD3zwB97/9eHj3x//WVvx4k6HUa+zgAYEhlYIwo2hOIIAJOT/pP8GrPvW132+tfX1d2vv1tZ8LpwYHhrsaLvceO5s9XHZxQb59audr15OeslwE8Db1ZW3K563Xs+qx73iJryEy+vCvC7cg2GrhGtqYjw3O+dwXl6lRCKTSk9WVlRXVXxde2psZITsATw46sEQD0r6htwo4kZR96fci7sW5zV32860VIvFxSVVR8sl4tLjkrITFVJ5be3E8z8BAkEIFCEwlEBRAsM2HN2okLzb5VocfwwOdU7e/aY0L6voUH5BTvaRgryy4kKZVNJ8vgHAESfmsLsw1IUiOIriKII5HGSFwHGdRjl269KL7saZvqbmypz9PF5Btkicn3W06HBNpaS8sADAECcC2cg/RGCYlBOykXJYzQSGP7nfM9Re8VNtXpe8sO9sfpEgKY2fUpqfVZybJUxPyxQIAKfdbreYYasZNpug/2Uzm+wWo+FZj2GoZeGXZv3wlZnbNR0Vaay42JiYvUwGIzkpSZSRDsCQFYZsdhiGIRiCbJDNarNZHCimHH3QU3vw8bdllqed0NhVTX+94lxuWjKTTqcnMGI57CQBPwWwmJftDofd4YQdThK3wZDFYnbg+OjAjeuyAz2nD92/cPi3tqKR9tI+ueggJ57PTWazEpiMOFZCPGACDRvrrBaSMZmWTWazETSYLNb5qWfD7bLHrVLF+dyHTVmDLbnXpHyZkFUg4CSzmIkJ8Vx2IkAendlqMZOMwQCC4JIB1C0ugkbT/OQfmnvn9I8uPu0o7DnF76pKkaVFCxjhnLjdXFZ8IjMuMyUZWHrzBjQajSaTAVzWLYGkky/tkml64sW1muwrR1hN+YwzGXtOfBUl5lAitm8OCQlOZMSwGDE85l5gUaPW6/T6JVCnA43g8vjkrOLB4JLqkX726e2WisaCfcc44cf5kfUHouVZdFp4CCXiy1gadWdoCH9fLKDVvlnQqOeVcwsq5eWOm9REcVn5ofnfT872N051yx5cyP25kvfjMe69eoE8Lz5sRzB1104WnUanUeNokSSsVc8pdRrVzVuKCGZ+yJ7MrlbRk/6WhcGO8ZuyfnmmoiGzv+GAoiHjaCotOjI8MjxUyGPl7E/ms+KAhdevNUqlemY6p6RuCzWdzUu9/73w+cgANN4123t65LviX5tEA+eF7SUJ5XxaFCVs545tOQJudio7g7MP0GjU2gV1b+8AhSHcFJkuLUkafyh3WBe1T9qmuk9M91SPdpaS+7urU5vFvJjdlKCgz9nxsVxGNDt2N6BSKbXzqqqaS1upKVsjuTdaRT582oMaZgcax34Qz/XWqRX15AhN/6kf60R0aviWzUGh24P3UMKidoUCc1OvXk1M8ITHtkUJQiOiXw5fXiVMXlSnetg62lk8c6dW2Xdmrq9u+s7JK5JU2q4dIcFbNm36IijoM0pY6L8Cs4Uw4kmxzQAAAABJRU5ErkJggg==","width":50,"height":50,"src":"/static/01f6727b1a3969049cffe446d0bcd091/8ba1e/profile-pic.png","srcSet":"/static/01f6727b1a3969049cffe446d0bcd091/8ba1e/profile-pic.png 1x,\\n/static/01f6727b1a3969049cffe446d0bcd091/f937a/profile-pic.png 1.5x,\\n/static/01f6727b1a3969049cffe446d0bcd091/71eb7/profile-pic.png 2x"}}},"site":{"siteMetadata":{"author":{"name":"Shweta Das","summary":"while petting her cats"},"social":{"twitter":"dalekNo99"}}}}}')},eMsz:function(e,t,a){"use strict";var i,r=a("emib"),n=a("Wadk")(0),s=a("IYdN"),d=a("N+BI"),o=a("k5Iv"),l=a("SGlo"),u=a("BjK0"),c=a("O1i0"),f=a("O1i0"),g=!r.ActiveXObject&&"ActiveXObject"in r,p=d.getWeak,h=Object.isExtensible,m=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=p(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",b,v,l,!0,!0);f&&g&&(o((i=l.getConstructor(b,"WeakMap")).prototype,v),d.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!h(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},"t+fG":function(e,t,a){var i=a("P8UN"),r=a("96qb"),n=a("ap2Z"),s=/"/g,d=function(e,t,a,i){var r=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),d+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var i=a("P8UN"),r=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=fab8c9364b01cebfd3503fc18011994750f493ff-994a5a914f545e928303.js.map