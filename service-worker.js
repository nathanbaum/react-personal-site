"use strict";var precacheConfig=[["nathanielbaum.com/index.html","05ba4fcb92689f587c782a3731aa25b6"],["nathanielbaum.com/static/css/main.3fc6bda6.css","322ce81280bc27e27ff426d901ab6b8b"],["nathanielbaum.com/static/js/main.16c74fb4.js","09b915bfbe50b730362846ce80973a23"],["nathanielbaum.com/static/media/Complexity_Vis.a1d63c7d.png","a1d63c7d4383f3a07056395bc57835a3"],["nathanielbaum.com/static/media/Dissenter.0d012893.png","0d012893f660997863549f653df1f459"],["nathanielbaum.com/static/media/Graphics.693c571f.png","693c571fc8677ccee8b0d8b9f22b5160"],["nathanielbaum.com/static/media/Markov.a7e6bf04.png","a7e6bf0403583d788f8ef0ba00f8b3bf"],["nathanielbaum.com/static/media/Pallite.db018dac.png","db018dacee69f153e6dfd3865b83b255"],["nathanielbaum.com/static/media/at-yellow.cde74735.svg","cde747354695e3bacccff41211f9ccb6"],["nathanielbaum.com/static/media/at.46ca15c3.svg","46ca15c3273fe2cadbccf0e77f50a018"],["nathanielbaum.com/static/media/github-purple.174df34f.svg","174df34f307ad7fab8f25f722c81ca17"],["nathanielbaum.com/static/media/github.0555bfb7.svg","0555bfb7e81f57a1efe6a53c7490abb7"],["nathanielbaum.com/static/media/linkedin-blue.f54e1d68.svg","f54e1d688e321addb303f4d2b0c6709a"],["nathanielbaum.com/static/media/linkedin.23486e0e.svg","23486e0e411be9409a3759e3ff101f8a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="nathanielbaum.com/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});