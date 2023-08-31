/*! For license information please see commons-49689a77b6b30acafc33.js.LICENSE.txt */
(self.webpackChunkhenry_chong=self.webpackChunkhenry_chong||[]).push([[351],{5312:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var o=n(7294),i=n(6808),c=n.n(i),r=function(e){var t=e.condition,n=e.wrapper,o=e.children;return t?n(o):o};function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}var l,u="top",p="bottom";!function(e){e.STRICT="strict",e.LAX="lax",e.NONE="none"}(l||(l={}));var d="hidden",m="byCookieValue",b="CookieConsent",f=["children"],v={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:p,visible:m,onAccept:function(e){},onDecline:function(){},cookieName:b,cookieValue:"true",declineCookieValue:"false",setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:l.LAX,ButtonComponent:function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,o,i={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,f);return o.createElement("button",Object.assign({},n),t)},overlay:!1,overlayClasses:"",onOverlayClick:function(){},acceptOnOverlayClick:!1,ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25,customContentAttributes:{},customContainerAttributes:{},customButtonProps:{},customDeclineButtonProps:{},customButtonWrapperAttributes:{},style:{},buttonStyle:{},declineButtonStyle:{},contentStyle:{},overlayStyle:{}},y={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},h=function(e){return e+"-legacy"},g=function(e){var t,n;function i(){var t;return(t=e.apply(this,arguments)||this).state=y,t.handleScroll=function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,o=document.body,i="scrollTop",c="scrollHeight";(n[i]||o[i])/((n[c]||o[c])-n.clientHeight)*100>e&&t.accept(!0)},t.removeScrollListener=function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,s(t,n);var f=i.prototype;return f.componentDidMount=function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))},f.componentWillUnmount=function(){this.removeScrollListener()},f.accept=function(e){var t;void 0===e&&(e=!1);var n=this.props,o=n.cookieName,i=n.cookieValue,c=n.hideOnAccept,r=n.onAccept;this.setCookie(o,i),r(null!=(t=e)&&t),c&&(this.setState({visible:!1}),this.removeScrollListener())},f.overlayClick=function(){var e=this.props,t=e.acceptOnOverlayClick,n=e.onOverlayClick;t&&this.accept(),n()},f.decline=function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,o=e.hideOnDecline,i=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),i(),o&&this.setState({visible:!1})},f.setCookie=function(e,t){var n=this.props,o=n.extraCookieOptions,i=n.expires,r=n.sameSite,s=this.props.cookieSecurity;void 0===s&&(s=!window.location||"https:"===window.location.protocol);var u=a({expires:i},o,{sameSite:r,secure:s});r===l.NONE&&c().set(h(e),t,u),c().set(e,t,u)},f.getCookieValue=function(){return function(e){void 0===e&&(e=b);var t=c().get(e);return void 0===t?c().get(h(e)):t}(this.props.cookieName)},f.render=function(){var e=this;switch(this.props.visible){case d:return null;case m:if(!this.state.visible)return null}var t=this.props,n=t.location,i=t.style,c=t.buttonStyle,s=t.declineButtonStyle,l=t.contentStyle,b=t.disableStyles,f=t.buttonText,v=t.declineButtonText,y=t.containerClasses,h=t.contentClasses,g=t.buttonClasses,k=t.buttonWrapperClasses,C=t.declineButtonClasses,S=t.buttonId,O=t.declineButtonId,x=t.disableButtonStyles,w=t.enableDeclineButton,B=t.flipButtons,E=t.ButtonComponent,j=t.overlay,N=t.overlayClasses,D=t.overlayStyle,A=t.ariaAcceptLabel,I=t.ariaDeclineLabel,L=t.customContainerAttributes,P=t.customContentAttributes,T=t.customButtonProps,R=t.customDeclineButtonProps,U=t.customButtonWrapperAttributes,V={},W={},_={},F={},z={};switch(b?(V=Object.assign({},i),W=Object.assign({},c),_=Object.assign({},s),F=Object.assign({},l),z=Object.assign({},D)):(V=Object.assign({},a({},this.state.style,i)),F=Object.assign({},a({},this.state.contentStyle,l)),z=Object.assign({},a({},this.state.overlayStyle,D)),x?(W=Object.assign({},c),_=Object.assign({},s)):(W=Object.assign({},a({},this.state.buttonStyle,c)),_=Object.assign({},a({},this.state.declineButtonStyle,s)))),n){case u:V.top="0";break;case p:V.bottom="0"}var H=[];return w&&H.push(o.createElement(E,Object.assign({key:"declineButton",style:_,className:C,id:O,"aria-label":I,onClick:function(){e.decline()}},R),v)),H.push(o.createElement(E,Object.assign({key:"acceptButton",style:W,className:g,id:S,"aria-label":A,onClick:function(){e.accept()}},T),f)),B&&H.reverse(),o.createElement(r,{condition:j,wrapper:function(t){return o.createElement("div",{style:z,className:N,onClick:function(){e.overlayClick()}},t)}},o.createElement("div",Object.assign({className:""+y,style:V},L),o.createElement("div",Object.assign({style:F,className:h},P),this.props.children),o.createElement("div",Object.assign({className:""+k},U),H.map((function(e){return e})))))},i}(o.Component);g.defaultProps=v;var k=g,C=n(1883);var S=e=>{let{to:t,children:n}=e;return o.createElement("li",{className:"navLinkItem-module--nav-link-item--cd29f"},o.createElement(C.Link,{to:t},n))};var O=e=>{let{pageTitle:t,children:n,hideLegalPrivacyNotice:i}=e;const c=(0,C.useStaticQuery)("3159585216");return o.createElement(o.Fragment,null,o.createElement("div",{className:"layout-module--container--78b04"},o.createElement("header",{className:"layout-module--site-title--e4dea"},c.site.siteMetadata.title),o.createElement("nav",null,o.createElement("ul",{className:"layout-module--nav-links--1113b"},o.createElement(S,{to:"/"},"Home"),o.createElement(S,{to:"/about"},"About"),o.createElement(S,{to:"/blog"},"Blog"))),o.createElement("div",{className:"layout-module--mainSeparator--e1acf"}),o.createElement("main",null,o.createElement("h1",null,t),n),o.createElement("div",{className:"layout-module--footerSeparator--36158"}),o.createElement("div",{className:"layout-module--footer--ad7d0"},!i&&o.createElement(C.Link,{to:"/privacy"},"Legal & Privacy Notice"))),o.createElement(k,{location:"bottom",buttonText:"I accept",buttonStyle:{backgroundColor:"#00DD78",fontSize:"0.85em"},declineButtonText:"No thanks",declineButtonStyle:{backgroundColor:"#FF4A62",color:"black",fontSize:"0.85em"},enableDeclineButton:!0,flipButtons:!0,cookieName:"gatsby-gdpr-google-analytics"},"🍪 This site uses a minimal set of cookies to learn more about my audience and content performance. Whether you accept or not,"," ",o.createElement("a",{target:"_blank",rel:"noreferrer",href:"https://www.theboywhobakes.co.uk/recipes/2018/3/29/j9cnerut0as1ec0fcdiawsc4usi7ss"},"this is my favourite cookie recipe")," ","😋"))}},6808:function(e,t,n){var o,i;!function(c){if(void 0===(i="function"==typeof(o=c)?o.call(t,n,t,e):o)||(e.exports=i),!0,e.exports=c(),!!0){var r=window.Cookies,a=window.Cookies=c();a.noConflict=function(){return window.Cookies=r,a}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function i(){}function c(t,n,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},i.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var r=JSON.stringify(n);/^[\{\[]/.test(r)&&(n=r)}catch(l){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var s in c)c[s]&&(a+="; "+s,!0!==c[s]&&(a+="="+c[s].split(";")[0]));return document.cookie=t+"="+n+a}}function r(e,n){if("undefined"!=typeof document){for(var i={},c=document.cookie?document.cookie.split("; "):[],r=0;r<c.length;r++){var a=c[r].split("="),s=a.slice(1).join("=");n||'"'!==s.charAt(0)||(s=s.slice(1,-1));try{var l=t(a[0]);if(s=(o.read||o)(s,l)||t(s),n)try{s=JSON.parse(s)}catch(u){}if(i[l]=s,e===l)break}catch(u){}}return e?i[e]:i}}return i.set=c,i.get=function(e){return r(e,!1)},i.getJSON=function(e){return r(e,!0)},i.remove=function(t,n){c(t,"",e(n,{expires:-1}))},i.defaults={},i.withConverter=n,i}((function(){}))}))}}]);
//# sourceMappingURL=commons-49689a77b6b30acafc33.js.map