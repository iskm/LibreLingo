(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{156:function(e,t,c){"use strict";
/*! js-cookie v3.0.5 | MIT */
function b(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var b in c)e[b]=c[b]}return e}c.d(t,"a",(function(){return r}));var r=function e(t,c){function r(e,r,j){if("undefined"!=typeof document){"number"==typeof(j=b({},c,j)).expires&&(j.expires=new Date(Date.now()+864e5*j.expires)),j.expires&&(j.expires=j.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var O="";for(var n in j)j[n]&&(O+="; "+n,!0!==j[n]&&(O+="="+j[n].split(";")[0]));return document.cookie=e+"="+t.write(r,e)+O}}return Object.create({set:r,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var c=document.cookie?document.cookie.split("; "):[],b={},r=0;r<c.length;r++){var j=c[r].split("="),O=j.slice(1).join("=");try{var n=decodeURIComponent(j[0]);if(b[n]=t.read(O,n),e===n)break}catch(e){}}return e?b[e]:b}},remove:function(e,t){r(e,"",b({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,b({},this.attributes,t))},withConverter:function(t){return e(b({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(c)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},159:function(e,t,c){"use strict";var b=c(0);function r(e){Object(b.h)(e,"svelte-siteg8",".content.svelte-siteg8:not(:last-child){margin-bottom:1.5rem}")}function j(e){let t,c;const r=e[1].default,j=Object(b.B)(r,e,e[0],null);return{c(){t=Object(b.F)("div"),j&&j.c(),this.h()},l(e){t=Object(b.p)(e,"DIV",{class:!0});var c=Object(b.n)(t);j&&j.l(c),c.forEach(b.E),this.h()},h(){Object(b.j)(t,"class","content svelte-siteg8")},m(e,r){Object(b.S)(e,t,r),j&&j.m(t,null),c=!0},p(e,[t]){j&&j.p&&(!c||1&t)&&Object(b.tb)(j,r,e,e[0],c?Object(b.K)(r,e[0],t,null):Object(b.J)(e[0]),null)},i(e){c||(Object(b.qb)(j,e),c=!0)},o(e){Object(b.rb)(j,e),c=!1},d(e){e&&Object(b.E)(t),j&&j.d(e)}}}function O(e,t,c){let{$$slots:b={},$$scope:r}=t;return e.$$set=e=>{"$$scope"in e&&c(0,r=e.$$scope)},[r,b]}class n extends b.b{constructor(e){super(),Object(b.Q)(this,e,O,j,b.eb,{},r)}}t.a=n},621:function(e,t,c){"use strict";c.r(t),c.d(t,"preload",(function(){return a}));var b=c(0),r=c(158),j=c(159);function O(e,t,c){const b=e.slice();return b[1]=t[c],b}function n(e){let t,c,r,j,O,n,o=e[1]+"";return{c(){t=Object(b.F)("li"),c=Object(b.F)("a"),r=Object(b.ob)("Test skill:\n              "),j=Object(b.F)("b"),O=Object(b.ob)(o),this.h()},l(e){t=Object(b.p)(e,"LI",{});var n=Object(b.n)(t);c=Object(b.p)(n,"A",{target:!0,href:!0,rel:!0});var s=Object(b.n)(c);r=Object(b.s)(s,"Test skill:\n              "),j=Object(b.p)(s,"B",{});var a=Object(b.n)(j);O=Object(b.s)(a,o),a.forEach(b.E),s.forEach(b.E),n.forEach(b.E),this.h()},h(){Object(b.j)(c,"target","_blank"),Object(b.j)(c,"href",n="/course/test-1/skill/"+e[1]),Object(b.j)(c,"rel","noreferrer")},m(e,n){Object(b.S)(e,t,n),Object(b.g)(t,c),Object(b.g)(c,r),Object(b.g)(c,j),Object(b.g)(j,O)},p(e,t){1&t&&o!==(o=e[1]+"")&&Object(b.hb)(O,o),1&t&&n!==(n="/course/test-1/skill/"+e[1])&&Object(b.j)(c,"href",n)},d(e){e&&Object(b.E)(t)}}}function o(e){let t,c,r,j,o,s,a,i,l,f,h,u,p,g,E,d,v,k,m,$,F,w,I,y,S,T,C,U,D,x,L,A,B,G,_,H,R,z=e[0],N=[];for(let t=0;t<z.length;t+=1)N[t]=n(O(e,z,t));return{c(){t=Object(b.F)("h1"),c=Object(b.ob)("Development tools"),r=Object(b.kb)(),j=Object(b.F)("h2"),o=Object(b.ob)("Test pages"),s=Object(b.kb)(),a=Object(b.F)("ul"),i=Object(b.F)("li"),l=Object(b.F)("a"),f=Object(b.ob)("Test course (English UI)"),h=Object(b.kb)(),u=Object(b.F)("li"),p=Object(b.F)("a"),g=Object(b.ob)("Test course (Spanish UI)"),E=Object(b.kb)();for(let e=0;e<N.length;e+=1)N[e].c();d=Object(b.kb)(),v=Object(b.F)("li"),k=Object(b.F)("a"),m=Object(b.ob)("Test skill: "),$=Object(b.F)("b"),F=Object(b.ob)("GitHub Gist preview of a skill"),w=Object(b.kb)(),I=Object(b.F)("li"),y=Object(b.F)("a"),S=Object(b.ob)("Test skill: "),T=Object(b.F)("b"),C=Object(b.ob)("GitHub Gist preview of a skill introduction"),U=Object(b.kb)(),D=Object(b.F)("li"),x=Object(b.F)("a"),L=Object(b.F)("b"),A=Object(b.ob)("Typography"),B=Object(b.kb)(),G=Object(b.F)("li"),_=Object(b.F)("a"),H=Object(b.F)("b"),R=Object(b.ob)("The legacy dev tool"),this.h()},l(e){t=Object(b.p)(e,"H1",{class:!0});var O=Object(b.n)(t);c=Object(b.s)(O,"Development tools"),O.forEach(b.E),r=Object(b.r)(e),j=Object(b.p)(e,"H2",{class:!0});var n=Object(b.n)(j);o=Object(b.s)(n,"Test pages"),n.forEach(b.E),s=Object(b.r)(e),a=Object(b.p)(e,"UL",{});var z=Object(b.n)(a);i=Object(b.p)(z,"LI",{});var q=Object(b.n)(i);l=Object(b.p)(q,"A",{href:!0});var J=Object(b.n)(l);f=Object(b.s)(J,"Test course (English UI)"),J.forEach(b.E),q.forEach(b.E),h=Object(b.r)(z),u=Object(b.p)(z,"LI",{});var Q=Object(b.n)(u);p=Object(b.p)(Q,"A",{href:!0});var V=Object(b.n)(p);g=Object(b.s)(V,"Test course (Spanish UI)"),V.forEach(b.E),Q.forEach(b.E),E=Object(b.r)(z);for(let e=0;e<N.length;e+=1)N[e].l(z);d=Object(b.r)(z),v=Object(b.p)(z,"LI",{});var W=Object(b.n)(v);k=Object(b.p)(W,"A",{target:!0,href:!0});var K=Object(b.n)(k);m=Object(b.s)(K,"Test skill: "),$=Object(b.p)(K,"B",{});var M=Object(b.n)($);F=Object(b.s)(M,"GitHub Gist preview of a skill"),M.forEach(b.E),K.forEach(b.E),W.forEach(b.E),w=Object(b.r)(z),I=Object(b.p)(z,"LI",{});var P=Object(b.n)(I);y=Object(b.p)(P,"A",{target:!0,href:!0});var X=Object(b.n)(y);S=Object(b.s)(X,"Test skill: "),T=Object(b.p)(X,"B",{});var Y=Object(b.n)(T);C=Object(b.s)(Y,"GitHub Gist preview of a skill introduction"),Y.forEach(b.E),X.forEach(b.E),P.forEach(b.E),U=Object(b.r)(z),D=Object(b.p)(z,"LI",{});var Z=Object(b.n)(D);x=Object(b.p)(Z,"A",{target:!0,href:!0});var ee=Object(b.n)(x);L=Object(b.p)(ee,"B",{});var te=Object(b.n)(L);A=Object(b.s)(te,"Typography"),te.forEach(b.E),ee.forEach(b.E),Z.forEach(b.E),B=Object(b.r)(z),G=Object(b.p)(z,"LI",{});var ce=Object(b.n)(G);_=Object(b.p)(ce,"A",{target:!0,href:!0});var be=Object(b.n)(_);H=Object(b.p)(be,"B",{});var re=Object(b.n)(H);R=Object(b.s)(re,"The legacy dev tool"),re.forEach(b.E),be.forEach(b.E),ce.forEach(b.E),z.forEach(b.E),this.h()},h(){Object(b.j)(t,"class","is-size-1"),Object(b.j)(j,"class","is-size-2"),Object(b.j)(l,"href","/course/test-1"),Object(b.j)(p,"href","/course/test-2"),Object(b.j)(k,"target","_blank"),Object(b.j)(k,"href","/course/preview/skill/gist?skillName=helloworld&gistId=2428349a05d81f96b2311c2749ea5c6d"),Object(b.j)(y,"target","_blank"),Object(b.j)(y,"href","/course/preview/skill/gist/introduction?gistId=2428349a05d81f96b2311c2749ea5c6d"),Object(b.j)(x,"target","_blank"),Object(b.j)(x,"href","/dev-typography"),Object(b.j)(_,"target","_blank"),Object(b.j)(_,"href","/course-tools-legacy/")},m(e,O){Object(b.S)(e,t,O),Object(b.g)(t,c),Object(b.S)(e,r,O),Object(b.S)(e,j,O),Object(b.g)(j,o),Object(b.S)(e,s,O),Object(b.S)(e,a,O),Object(b.g)(a,i),Object(b.g)(i,l),Object(b.g)(l,f),Object(b.g)(a,h),Object(b.g)(a,u),Object(b.g)(u,p),Object(b.g)(p,g),Object(b.g)(a,E);for(let e=0;e<N.length;e+=1)N[e]&&N[e].m(a,null);Object(b.g)(a,d),Object(b.g)(a,v),Object(b.g)(v,k),Object(b.g)(k,m),Object(b.g)(k,$),Object(b.g)($,F),Object(b.g)(a,w),Object(b.g)(a,I),Object(b.g)(I,y),Object(b.g)(y,S),Object(b.g)(y,T),Object(b.g)(T,C),Object(b.g)(a,U),Object(b.g)(a,D),Object(b.g)(D,x),Object(b.g)(x,L),Object(b.g)(L,A),Object(b.g)(a,B),Object(b.g)(a,G),Object(b.g)(G,_),Object(b.g)(_,H),Object(b.g)(H,R)},p(e,t){if(1&t){let c;for(z=e[0],c=0;c<z.length;c+=1){const b=O(e,z,c);N[c]?N[c].p(b,t):(N[c]=n(b),N[c].c(),N[c].m(a,d))}for(;c<N.length;c+=1)N[c].d(1);N.length=z.length}},d(e){e&&Object(b.E)(t),e&&Object(b.E)(r),e&&Object(b.E)(j),e&&Object(b.E)(s),e&&Object(b.E)(a),Object(b.D)(N,e)}}}function s(e){let t,c,O,n,s,a,i;return c=new r.a({}),a=new j.a({props:{$$slots:{default:[o]},$$scope:{ctx:e}}}),{c(){t=Object(b.kb)(),Object(b.y)(c.$$.fragment),O=Object(b.kb)(),n=Object(b.F)("section"),s=Object(b.F)("div"),Object(b.y)(a.$$.fragment),this.h()},l(e){Object(b.O)("svelte-c6wh3i",document.head).forEach(b.E),t=Object(b.r)(e),Object(b.o)(c.$$.fragment,e),O=Object(b.r)(e),n=Object(b.p)(e,"SECTION",{class:!0});var r=Object(b.n)(n);s=Object(b.p)(r,"DIV",{class:!0});var j=Object(b.n)(s);Object(b.o)(a.$$.fragment,j),j.forEach(b.E),r.forEach(b.E),this.h()},h(){document.title="LibreLingo - Development",Object(b.j)(s,"class","container"),Object(b.j)(n,"class","section")},m(e,r){Object(b.S)(e,t,r),Object(b.W)(c,e,r),Object(b.S)(e,O,r),Object(b.S)(e,n,r),Object(b.g)(n,s),Object(b.W)(a,s,null),i=!0},p(e,[t]){const c={};17&t&&(c.$$scope={dirty:t,ctx:e}),a.$set(c)},i(e){i||(Object(b.qb)(c.$$.fragment,e),Object(b.qb)(a.$$.fragment,e),i=!0)},o(e){Object(b.rb)(c.$$.fragment,e),Object(b.rb)(a.$$.fragment,e),i=!1},d(e){e&&Object(b.E)(t),Object(b.C)(c,e),e&&Object(b.E)(O),e&&Object(b.E)(n),Object(b.C)(a)}}}async function a(){try{const e=c(!function(){var e=new Error("Cannot find module 'fs'");throw e.code="MODULE_NOT_FOUND",e}()),t=c(39).promisify(e.readdir);return{testSkills:(await t("./src/courses/test/challenges")).map(e=>e.split(".")[0])}}catch(e){}}function i(e,t,c){let{testSkills:b=[]}=t;return e.$$set=e=>{"testSkills"in e&&c(0,b=e.testSkills)},[b]}class l extends b.b{constructor(e){super(),Object(b.Q)(this,e,i,s,b.eb,{testSkills:0})}}t.default=l}}]);