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
    "revision": "e53009f49fbd434b62f8e03927e0f45e"
  },
  {
    "url": "assets/css/0.styles.a4dc1c6b.css",
    "revision": "b5dacd5ec95426f31a08ab3119e905ac"
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
    "url": "assets/js/14.d5f09161.js",
    "revision": "1f2987b7517cbc872e7a80703b70ef69"
  },
  {
    "url": "assets/js/15.0a095d96.js",
    "revision": "fd9207c87a50a78af0f502477116d25d"
  },
  {
    "url": "assets/js/16.66a8af16.js",
    "revision": "8c6fc8e2c7d2211e072b9f71b78c8fba"
  },
  {
    "url": "assets/js/17.eda9cc3e.js",
    "revision": "bee2031e404c081fa4681b537a2f374d"
  },
  {
    "url": "assets/js/18.fbec63c2.js",
    "revision": "798c2ba0181b7f628e796837a609154d"
  },
  {
    "url": "assets/js/19.9451543a.js",
    "revision": "0d4a32dde0f1e92151a2dd0e44c22585"
  },
  {
    "url": "assets/js/2.1899ca00.js",
    "revision": "0e8864b2da7a8e1d6e2e5b2cb4d70cda"
  },
  {
    "url": "assets/js/20.2e00fe23.js",
    "revision": "44d1fed1b2d9bce95ccfda45f0a51573"
  },
  {
    "url": "assets/js/21.f30443ef.js",
    "revision": "2a9edb6093ee6dadc7e48a617c21abce"
  },
  {
    "url": "assets/js/22.29499746.js",
    "revision": "62f0407099ed8fd60ac523e5f6cf5964"
  },
  {
    "url": "assets/js/23.853452b1.js",
    "revision": "9dd0f233bbd2a485518107a46e05651d"
  },
  {
    "url": "assets/js/24.6332ebb2.js",
    "revision": "e4dab2d14008fc2eaa5a57fd6613ee61"
  },
  {
    "url": "assets/js/25.0ba58e95.js",
    "revision": "0faabf0f5226a59770569661458c8d6a"
  },
  {
    "url": "assets/js/3.18eea148.js",
    "revision": "328abdc7b27cf17b70887da5623fa622"
  },
  {
    "url": "assets/js/4.650d890d.js",
    "revision": "8e6751f2600759a8da8b6c00e7456d4c"
  },
  {
    "url": "assets/js/5.dfdab375.js",
    "revision": "038e836e195ad6f2d58eabc83aafe56e"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/7.80a53863.js",
    "revision": "5de8de1c9ba3bf8bb813893c52a303b7"
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
    "url": "assets/js/app.566b47bd.js",
    "revision": "440ef7c2be6ce333444f15381d60fd8b"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a5c0a20ee77d1e63d29b4e72307a6492"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "6007c9c4e0f0286377aab2e48b661fac"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "89838776fee3a67b012bebd6f1782602"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "d4c9c6625b479f6c9db18557895c590d"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "bd0afc0e9e2ca41b1a196f62a9fa1edb"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "6ff8819649839825a2079707bb70b7e9"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "3736ad45102d42fb3d75017072c18afd"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "0ffcbc3ba56b20b239113c90ba3e7ac6"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "7a02462e771cab78f4f0ee27fa80691d"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "62d178d7f997f8304e5476c3aea00567"
  },
  {
    "url": "en/index.html",
    "revision": "b53924bb92a0f0b93f92328b24e2c44d"
  },
  {
    "url": "index.html",
    "revision": "d658350ff83cb060e6dcd8790d7b70c0"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "00e270fd5db16ecd3289ae232a3cfcc4"
  },
  {
    "url": "pt/index.html",
    "revision": "ad1fe37cc0b0d575611b02857cf3208e"
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
