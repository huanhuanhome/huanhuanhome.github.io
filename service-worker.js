/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "75d55e63586ff1753d9464c1f74cfc31"
  },
  {
    "url": "article/1.html",
    "revision": "e61130d1b7f893e92cf5b486508558dd"
  },
  {
    "url": "article/1b2be706bf9fc919f70e77c8c14fb8c.png",
    "revision": "829a68300cc5e9cb60480a1216b4ecd0"
  },
  {
    "url": "article/2.html",
    "revision": "fff403683ebd40fc449433ed2eef39d2"
  },
  {
    "url": "article/3.html",
    "revision": "de384513d38ebb686f9e5e0d92f5c059"
  },
  {
    "url": "article/86561dd08cdb5e7b975a66938695a0e.png",
    "revision": "7a6cb0eeb1b79a3f4b8a2cee8960548b"
  },
  {
    "url": "article/a6fc74cf06e59219d67b395eeba220d.png",
    "revision": "31bcf2289edd9f05d4df4765932b6eb4"
  },
  {
    "url": "article/bd1f62f7b77ae25b6c939a50f7349af.png",
    "revision": "4cd9132595e043077f65f1d6883b651e"
  },
  {
    "url": "article/index.html",
    "revision": "fb9321620aab90938d882ec4cb90b3f7"
  },
  {
    "url": "assets/css/0.styles.30c576b7.css",
    "revision": "b2f1eded96819eed154787603f778ecd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.286bfafb.js",
    "revision": "b0b774e2809336a0577fee9a791f2d2e"
  },
  {
    "url": "assets/js/11.7e685243.js",
    "revision": "b5477e53b3871e0485249bfa4e3aa1c8"
  },
  {
    "url": "assets/js/12.ad2448f8.js",
    "revision": "f88845937996702edc588893c881caee"
  },
  {
    "url": "assets/js/13.290f48f8.js",
    "revision": "44f397a80dcf73d3da7d62b96ad9bb77"
  },
  {
    "url": "assets/js/14.9fb4a6ce.js",
    "revision": "a9938d71e92d5db4c9f0ffc5025c0cbc"
  },
  {
    "url": "assets/js/15.fc0e7d18.js",
    "revision": "e60d24bba18d6134ac6bf9fc94dfe259"
  },
  {
    "url": "assets/js/2.5d07b9e2.js",
    "revision": "59d6c531213e5610d2d4fa51ff0e0fd9"
  },
  {
    "url": "assets/js/3.2fe9d825.js",
    "revision": "fed28a21a8161388da4a15b8ca369990"
  },
  {
    "url": "assets/js/4.70ff6535.js",
    "revision": "e1319d871006d67adb648da8422961ba"
  },
  {
    "url": "assets/js/5.53f4d60b.js",
    "revision": "1055797aa9782114a511e94bb1700132"
  },
  {
    "url": "assets/js/6.5fcf419b.js",
    "revision": "f7d20f24fd9b91b881a845bbcd2ddde2"
  },
  {
    "url": "assets/js/7.9e32f460.js",
    "revision": "18cbbcc23a05df13e92e7390bd044cc9"
  },
  {
    "url": "assets/js/8.db68ea80.js",
    "revision": "38e35a62168d7481f2a325e41091c85b"
  },
  {
    "url": "assets/js/9.ad8b812e.js",
    "revision": "bf2f7ba6f00906346ba80b39b3c5138a"
  },
  {
    "url": "assets/js/app.d06b7294.js",
    "revision": "7f3fa9418cd17c7dd519ec3c1c48d57b"
  },
  {
    "url": "foo/index.html",
    "revision": "9814c9a6f53314469d63de19206a5d38"
  },
  {
    "url": "hero.png",
    "revision": "425e622d348abc7ea349245e7e8738c2"
  },
  {
    "url": "html5/index.html",
    "revision": "3d8e5235549a09e5c62916b24f9b2e94"
  },
  {
    "url": "index.html",
    "revision": "1eb13231a3b836c153befbd62442e36d"
  },
  {
    "url": "list/index.html",
    "revision": "31d6159ae995f84a0cc9e84454209962"
  },
  {
    "url": "logo.png",
    "revision": "ee0df646c710db9ba9bf151b8d9ef1b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
