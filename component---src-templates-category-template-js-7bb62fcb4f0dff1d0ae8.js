(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{176:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return m});var n=a(0),r=a.n(n),l=a(183),i=a(188),o=a(195),c=a(189),u=a(194),s=a(180),m="3631851500";t.default=function(e){var t=e.data,a=e.pageContext,n=Object(s.b)(),m=n.title,d=n.subtitle,f=a.category,h=a.currentPage,p=a.prevPagePath,v=a.nextPagePath,E=a.hasPrevPage,_=a.hasNextPage,g=t.allMarkdownRemark.edges,b=h>0?f+" - Page "+h+" - "+m:f+" - "+m;return r.a.createElement(l.a,{title:b,description:d},r.a.createElement(i.a,null),r.a.createElement(c.a,{title:f},r.a.createElement(o.a,{edges:g}),r.a.createElement(u.a,{prevPagePath:p,nextPagePath:v,hasPrevPage:E,hasNextPage:_})))}},180:function(e,t,a){"use strict";var n=a(184),r=function(){return n.data.site.siteMetadata},l=a(185),i=function(){return l.data.allMarkdownRemark.group},o=a(186),c=function(){return o.data.allMarkdownRemark.group};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return i}),a.d(t,"c",function(){return c})},181:function(e,t,a){var n=a(26).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(20)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},182:function(e,t,a){"use strict";var n={TWITTER:{path:"M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z",viewBox:"0 0 26 28"},FACEBOOK:{path:"M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z",viewBox:"0 0 16 28"},GITHUB:{path:"M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z",viewBox:"0 0 26 28"},EMAIL:{path:"M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z",viewBox:"0 0 28 28"}},r={PREV_PAGE:"← PREV",NEXT_PAGE:"NEXT →"};a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})},183:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(192),i=a.n(l),o=a(155),c=a.n(o),u=function(e){var t=e.children,a=e.title,n=e.description;return r.a.createElement("div",{className:c.a.layout},r.a.createElement(i.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n})),t)};a.d(t,"a",function(){return u})},184:function(e){e.exports={data:{site:{siteMetadata:{author:{name:"Christopher Kade",bio:"Front-end developer working from Paris, France. I write about the Javascript ecosystem, CSS and best practices in software development.",photo:"/photo.jpg",contacts:{email:"c.kade96@gmail.com",twitter:"christo_kade",github:"christopherkade"}},menu:[{label:"Articles",path:"/"},{label:"About",path:"/pages/about"},{label:"Projects",path:"/pages/projects"}],url:"https://christopherkade.com",title:"A Tech Blog by Christopher Kade",subtitle:"Front-end developer working from Paris, France. I write about the Javascript ecosystem, CSS and best practices in software development.",disqusShortname:""}}}}},185:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"CSS",totalCount:2},{fieldValue:"Health",totalCount:1},{fieldValue:"Javascript",totalCount:8},{fieldValue:"Node",totalCount:2},{fieldValue:"Productivity",totalCount:4},{fieldValue:"React",totalCount:2},{fieldValue:"Talks",totalCount:2},{fieldValue:"Testing",totalCount:1},{fieldValue:"Tutorial",totalCount:13},{fieldValue:"Vue",totalCount:4}]}}}},186:function(e){e.exports={data:{allMarkdownRemark:{group:[{fieldValue:"API",totalCount:1},{fieldValue:"Angular",totalCount:1},{fieldValue:"Authentication",totalCount:1},{fieldValue:"CSS",totalCount:2},{fieldValue:"Design",totalCount:2},{fieldValue:"Discussion",totalCount:1},{fieldValue:"Electron",totalCount:1},{fieldValue:"Firebase",totalCount:1},{fieldValue:"Git",totalCount:2},{fieldValue:"HTML5",totalCount:1},{fieldValue:"Health",totalCount:1},{fieldValue:"Javascript",totalCount:17},{fieldValue:"Node",totalCount:2},{fieldValue:"Open-source",totalCount:1},{fieldValue:"Performance",totalCount:1},{fieldValue:"Productivity",totalCount:5},{fieldValue:"React",totalCount:2},{fieldValue:"SEO",totalCount:1},{fieldValue:"SSR",totalCount:1},{fieldValue:"Talks",totalCount:2},{fieldValue:"Testing",totalCount:1},{fieldValue:"Tutorial",totalCount:15},{fieldValue:"Vue",totalCount:4},{fieldValue:"Web",totalCount:1}]}}}},187:function(e,t,a){"use strict";var n=a(182),r=function(e){var t;switch(e){case"twitter":t=n.a.TWITTER;break;case"github":t=n.a.GITHUB;break;case"email":t=n.a.EMAIL;break;default:t={}}return t},l=function(e,t){var a;switch(e){case"twitter":a="https://www.twitter.com/"+t;break;case"github":a="https://github.com/"+t;break;case"vkontakte":a="https://vk.com/"+t;break;case"email":a="mailto:"+t;break;default:a=t}return a};a.d(t,"b",function(){return r}),a.d(t,"a",function(){return l})},188:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=(a(181),a(56)),i=a(156),o=a.n(i),c=function(e){var t=e.author,a=e.isIndex;return r.a.createElement("div",{className:o.a.author},r.a.createElement(l.Link,{to:"/"},r.a.createElement("img",{src:Object(l.withPrefix)(t.photo),className:o.a.author__photo,width:"125",height:"125",alt:t.name})),a?r.a.createElement("h1",{className:o.a.author__title},r.a.createElement(l.Link,{className:o.a["author__title-link"],to:"/"},t.name)):r.a.createElement("h2",{className:o.a.author__title},r.a.createElement(l.Link,{className:o.a["author__title-link"],to:"/"},t.name)),r.a.createElement("p",{className:o.a.author__subtitle},t.bio))},u=(a(76),a(57),a(37),a(190),a(187)),s=a(157),m=a.n(s),d=function(e){var t=e.icon;return r.a.createElement("svg",{className:m.a.icon,viewBox:t.viewBox},r.a.createElement("path",{d:t.path}))},f=a(158),h=a.n(f),p=function(e){var t=e.contacts;return r.a.createElement("div",{className:h.a.contacts},r.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map(function(e){return r.a.createElement("li",{className:h.a["contacts__list-item"],key:e},r.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(u.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(d,{icon:Object(u.b)(e)})))})))},v=a(159),E=a.n(v),_=function(e){var t=e.menu;return r.a.createElement("nav",{className:E.a.menu},r.a.createElement("ul",{className:E.a.menu__list},t.map(function(e){return r.a.createElement("li",{className:E.a["menu__list-item"],key:e.path},r.a.createElement(l.Link,{to:e.path,className:E.a["menu__list-item-link"],activeClassName:E.a["menu__list-item-link--active"]},e.label))})))},g=a(160),b=a.n(g),k=a(180),N=function(e){var t=e.isIndex,a=Object(k.b)(),n=a.author,l=a.menu;return r.a.createElement("div",{className:b.a.sidebar},r.a.createElement("div",{className:b.a.sidebar__inner},r.a.createElement(c,{author:n,isIndex:t}),r.a.createElement(_,{menu:l}),r.a.createElement(p,{contacts:n.contacts})))};a.d(t,"a",function(){return N})},189:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(161),i=a.n(l),o=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)(function(){l.current.scrollIntoView()}),r.a.createElement("div",{ref:l,className:i.a.page},r.a.createElement("div",{className:i.a.page__inner},t&&r.a.createElement("h1",{className:i.a.page__title},t),r.a.createElement("div",{className:i.a.page__body},a)))};a.d(t,"a",function(){return o})},190:function(e,t,a){var n=a(27),r=a(36);a(191)("keys",function(){return function(e){return r(n(e))}})},191:function(e,t,a){var n=a(12),r=a(19),l=a(21);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*l(function(){a(1)}),"Object",i)}},193:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(r.apply(this,n));else if("object"===l)for(var i in n)a.call(n,i)&&n[i]&&e.push(this&&this[i]||i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},194:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(193),i=a.n(l),o=a(56),c=a(182),u=a(163),s=a.n(u),m=i.a.bind(s.a),d=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,l=e.hasPrevPage,i=m({"pagination__prev-link":!0,"pagination__prev-link--disable":!l}),u=m({"pagination__next-link":!0,"pagination__next-link--disable":!n});return r.a.createElement("div",{className:s.a.pagination},r.a.createElement("div",{className:s.a.pagination__prev},r.a.createElement(o.Link,{rel:"prev",to:t,className:i},c.b.PREV_PAGE)),r.a.createElement("div",{className:s.a.pagination__next},r.a.createElement(o.Link,{rel:"next",to:a,className:u},c.b.NEXT_PAGE)))};a.d(t,"a",function(){return d})},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(56),i=a(162),o=a.n(i),c=function(e){var t=e.edges;return r.a.createElement("div",{className:o.a.feed},t.map(function(e){return r.a.createElement("div",{className:o.a.feed__item,key:e.node.fields.slug},r.a.createElement("div",{className:o.a["feed__item-meta"]},r.a.createElement("span",{className:o.a["feed__item-meta-category"]},r.a.createElement(l.Link,{to:e.node.fields.categorySlug,className:o.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),r.a.createElement("h2",{className:o.a["feed__item-title"]},r.a.createElement(l.Link,{className:o.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),r.a.createElement("p",{className:o.a["feed__item-description"]},e.node.frontmatter.description))}))};a.d(t,"a",function(){return c})}}]);
//# sourceMappingURL=component---src-templates-category-template-js-7bb62fcb4f0dff1d0ae8.js.map