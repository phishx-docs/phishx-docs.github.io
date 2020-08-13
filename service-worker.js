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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e237e69a3f54791f09562903922550a0"
  },
  {
    "url": "assets/css/0.styles.427deb50.css",
    "revision": "fe9c2505b67859f40ba6e5c2070d16da"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d52f5ca1.js",
    "revision": "4452f580c73fd5f6a948f2cfae60b311"
  },
  {
    "url": "assets/js/11.8d0eef7e.js",
    "revision": "0044b7c895acd4ef0f39f855d1e0b7a7"
  },
  {
    "url": "assets/js/12.15d570d5.js",
    "revision": "2474c2289f0199618eba032433150c31"
  },
  {
    "url": "assets/js/13.ea9c870f.js",
    "revision": "caa96cbae70d28a6713188ce20629998"
  },
  {
    "url": "assets/js/14.080af8b8.js",
    "revision": "98782ba63a20a3c5fc33b33bf3b3473a"
  },
  {
    "url": "assets/js/15.dc69e84e.js",
    "revision": "25c45ab1a1ac9c2cfefe8c5d83baf3d7"
  },
  {
    "url": "assets/js/16.d5f8ecde.js",
    "revision": "49cf622937668bbfb951f05ad73da429"
  },
  {
    "url": "assets/js/17.113b4a57.js",
    "revision": "a22f18928269ef04efb0d73ff19b3da9"
  },
  {
    "url": "assets/js/18.801579f7.js",
    "revision": "83fa4c70600f55c7a8612145a7707e24"
  },
  {
    "url": "assets/js/19.74e563f4.js",
    "revision": "835441c54fddbb76e9e6bb06cd4fa0a2"
  },
  {
    "url": "assets/js/2.aa882033.js",
    "revision": "e58a73a3880009645775ee3f75a108cc"
  },
  {
    "url": "assets/js/20.cdab472b.js",
    "revision": "420c900c5963f732f6689959e9f23759"
  },
  {
    "url": "assets/js/21.506ca151.js",
    "revision": "4877188421a0d805869ec1e7358b06b5"
  },
  {
    "url": "assets/js/22.fb87e12c.js",
    "revision": "427530e4da4398fb8724334dd2a223a1"
  },
  {
    "url": "assets/js/23.f0607085.js",
    "revision": "fac07e470c694167f35ec2f541f9167f"
  },
  {
    "url": "assets/js/24.ac7e2b89.js",
    "revision": "8e51ba5adb118b2e92b67e88aca39e58"
  },
  {
    "url": "assets/js/25.321af5a4.js",
    "revision": "d00631059d1d0d594d188347c0010756"
  },
  {
    "url": "assets/js/26.2c25aeaf.js",
    "revision": "1c50f16d7adaad3afe7de69ba6c352a3"
  },
  {
    "url": "assets/js/27.18843b1e.js",
    "revision": "7b6902baad6f7c4cf96599b7fe245f95"
  },
  {
    "url": "assets/js/28.ba082e6c.js",
    "revision": "4add695a8784e27c3996418c27a43d80"
  },
  {
    "url": "assets/js/29.e8c864ea.js",
    "revision": "f8ee209ed643d78769e35df5ec537ddd"
  },
  {
    "url": "assets/js/3.d3a5a022.js",
    "revision": "32dcbf997a2d530a4ba14bb81841de8d"
  },
  {
    "url": "assets/js/30.7b328923.js",
    "revision": "2373834ef374de00a881a728f97a3ca9"
  },
  {
    "url": "assets/js/31.04eecf19.js",
    "revision": "bbc2520c1abc11692ff4507f42b519d0"
  },
  {
    "url": "assets/js/32.aa9e339f.js",
    "revision": "04698b6a8a092ac834291a4b3259283a"
  },
  {
    "url": "assets/js/33.d2c5c3c8.js",
    "revision": "5df6b4af3f3d90be3c57da30e9986ca5"
  },
  {
    "url": "assets/js/34.6ed31993.js",
    "revision": "75474f608340e9841d5c5522bb04a7ac"
  },
  {
    "url": "assets/js/4.d3e639cb.js",
    "revision": "123e5665796c4edbd20b3f434cb06f39"
  },
  {
    "url": "assets/js/5.dd3b9d38.js",
    "revision": "e74a325ce6805e1e663b916ac619d800"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/7.468820c6.js",
    "revision": "36fe7e069f586b1e57a312061b4c341a"
  },
  {
    "url": "assets/js/8.8d18a92d.js",
    "revision": "c992fd74f795f7aaf7778b08d868d863"
  },
  {
    "url": "assets/js/9.a6c903fb.js",
    "revision": "7560a700096856ca4357723b0c6c798a"
  },
  {
    "url": "assets/js/app.1b8dced5.js",
    "revision": "679e68bdcf898e62c02edf9bb610c530"
  },
  {
    "url": "en/guide/index.html",
    "revision": "ae8c8ae6f110ec2aecfcb7140915239d"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "c3010177f179a2a5633dbeae895722a1"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "f320019d936dbba707a11342a07eeec1"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "2dec40e3402a78b5f0777f41acdfe529"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "bccc0efbdaf163d6b4abf2cd19c80bd7"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "a2573c8ea759118f613d785d31b93f05"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "77f057ab49cddf00c8d0f0cbb67103d1"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "cd882a3dbf78cffcb303e0b24edc52fd"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "8757a06ce1b437921d52c7ea167271c1"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "5bd2b3779b47c7e6ba86f13294eb660f"
  },
  {
    "url": "en/index.html",
    "revision": "08e806d79edabf703e470ba20125fdff"
  },
  {
    "url": "index.html",
    "revision": "5f98a8c1c72c8b3062ec50cfe479c133"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "e4156bdfd676926af961f5b272ec3373"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "fc54609191b61b80601e50b9b994d8e7"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "544cf587d5641aa7f8e3561d6852aaea"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "2238cf1d8047ec7397d1bfc315f8c655"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "9338cc0f984cac0da60793feed22d6fc"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "bcac5d8dc24f9c7bb897b175e2f28556"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "3b41b2b0d756662d133741b826d1f39e"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "27cda088d7a8621e9a3dd8c950438599"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "7f5b32c0d84cac8f3a67f52e550ee56a"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "399f71ba153ba5cbbac335246ad9f7aa"
  },
  {
    "url": "pt/index.html",
    "revision": "abb60e8aaa62d70373fa14c897863977"
  }
].concat(self.__precacheManifest || []);
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
