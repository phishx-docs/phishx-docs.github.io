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
    "revision": "1869e9c1cd6a193f503fa1fa0bbab839"
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
    "url": "assets/js/12.789fa6b3.js",
    "revision": "f3ac935742b9b7c3e1f71b1fe7b922db"
  },
  {
    "url": "assets/js/13.9dfc6bb3.js",
    "revision": "706f8119a924de1db3d832fcd5b8be67"
  },
  {
    "url": "assets/js/14.8be62a5d.js",
    "revision": "388337fb3b55b6023ec05edecb6172e3"
  },
  {
    "url": "assets/js/15.0e7b51dc.js",
    "revision": "32d14a4bda99afb766ad095487ecffc3"
  },
  {
    "url": "assets/js/16.d5f8ecde.js",
    "revision": "49cf622937668bbfb951f05ad73da429"
  },
  {
    "url": "assets/js/17.22941275.js",
    "revision": "5f1df0a2bfc4fdc7022e84acac60744c"
  },
  {
    "url": "assets/js/18.cdabd44d.js",
    "revision": "a53c9dc897357b0e308875e95180adba"
  },
  {
    "url": "assets/js/19.f3d57d9f.js",
    "revision": "0b9354d72e319ebb30f5a2f142eac6a5"
  },
  {
    "url": "assets/js/2.aa882033.js",
    "revision": "e58a73a3880009645775ee3f75a108cc"
  },
  {
    "url": "assets/js/20.bc3cb02b.js",
    "revision": "68f18f2de79a65d874ff97551a3c112e"
  },
  {
    "url": "assets/js/21.2ec386cc.js",
    "revision": "4fd34adba938748d8177be1ca099e6ce"
  },
  {
    "url": "assets/js/22.29499746.js",
    "revision": "62f0407099ed8fd60ac523e5f6cf5964"
  },
  {
    "url": "assets/js/23.0e41f378.js",
    "revision": "865330c94a617ca2bd4465485e76bdd2"
  },
  {
    "url": "assets/js/24.4b52d42f.js",
    "revision": "f48a05d4543a72c179ffc910b95e64af"
  },
  {
    "url": "assets/js/25.15f67736.js",
    "revision": "23b3376d0fb798ae09303f80ad09af8b"
  },
  {
    "url": "assets/js/26.b52139f2.js",
    "revision": "d8c41da179353c2198d1756529326aac"
  },
  {
    "url": "assets/js/27.968311bd.js",
    "revision": "c227ac9f922a1c4fb7e17fd548f7129d"
  },
  {
    "url": "assets/js/28.df72ec65.js",
    "revision": "ad5d7319f9f8558a5106ea2ba2d03b37"
  },
  {
    "url": "assets/js/29.d8bb3cd6.js",
    "revision": "782bdca18e8f08119b7a3de32a1bfdf3"
  },
  {
    "url": "assets/js/3.6242c3aa.js",
    "revision": "4452bdda5135ca6a5928bb595d368281"
  },
  {
    "url": "assets/js/30.1b5674f6.js",
    "revision": "bcd4df4c3ad77bedbe27560e65e9aea2"
  },
  {
    "url": "assets/js/31.d13df23c.js",
    "revision": "f0061f8b5f6e1c960a63d524304554ec"
  },
  {
    "url": "assets/js/32.de4a55ac.js",
    "revision": "dc3ef21312a599203cb6cc5e11380785"
  },
  {
    "url": "assets/js/33.c76d6d32.js",
    "revision": "deed2581823d07f40c6415feec7a7d99"
  },
  {
    "url": "assets/js/34.2fffdb60.js",
    "revision": "67a61c2414c106911d286bc2a1316889"
  },
  {
    "url": "assets/js/35.26baea83.js",
    "revision": "8ea87e3f8d32d0394324e60d35f3f613"
  },
  {
    "url": "assets/js/36.da6c951e.js",
    "revision": "65940663c427a85cd2bf540d6e89ff13"
  },
  {
    "url": "assets/js/37.7f37c9a3.js",
    "revision": "13389fd60686add880d9503946ac4e93"
  },
  {
    "url": "assets/js/38.c153b448.js",
    "revision": "6b4bc3810f99b02ec65540a7a48fe9d6"
  },
  {
    "url": "assets/js/39.525ca253.js",
    "revision": "abc2cb095ddece5f45a3a8e493a90955"
  },
  {
    "url": "assets/js/4.ef21806b.js",
    "revision": "b66a0d7cd23f5423ee58388f90bcc986"
  },
  {
    "url": "assets/js/40.3afeff8a.js",
    "revision": "f36f32b96bca271fbff0a8f6cce376c9"
  },
  {
    "url": "assets/js/41.340dc17f.js",
    "revision": "37804d4af6ba3bcf0fc030365ab23482"
  },
  {
    "url": "assets/js/42.6e98d551.js",
    "revision": "1d2e667dc32a4a281de301daeddf5ca7"
  },
  {
    "url": "assets/js/43.7037c07c.js",
    "revision": "23d1851faed03a3a6973691b69145e36"
  },
  {
    "url": "assets/js/44.4bf07b60.js",
    "revision": "435f05f5ce4bbf6336cf1b6b4e75c4ea"
  },
  {
    "url": "assets/js/45.3b030005.js",
    "revision": "5112ca77575f72938ed8ebd3f5dc4087"
  },
  {
    "url": "assets/js/46.f0355022.js",
    "revision": "3d14cee039a3cae68d598d0210921d8e"
  },
  {
    "url": "assets/js/47.406af41e.js",
    "revision": "e033ecfaeed1c9ed68ab6e0a76149d86"
  },
  {
    "url": "assets/js/48.51295ccb.js",
    "revision": "08305c5e9dd74f9181c9548983dce0e7"
  },
  {
    "url": "assets/js/5.f24e0a32.js",
    "revision": "e9214d5f73f329b24433470088b9fed8"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/7.7376f160.js",
    "revision": "36b8a7f5c351176dd39a71474e2beb2e"
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
    "url": "assets/js/app.fe3d730e.js",
    "revision": "64795da0299cfa214fae6e4810a37ee2"
  },
  {
    "url": "en/guide/index.html",
    "revision": "2ad52fbef3fce5464363dc3a77c51028"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "3b804bb23ef199c50bbf4c6a6369668d"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "d3a8be2dc2840b6fd5180a7f30b1e766"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "b3df88fc9a7f8f4e7be20392d6572f8d"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "6fa07900e093356ec4c9303347e81580"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "48cf8fdb5d4d4bc6741e44e39db6739e"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "2cc33cc76e51cb6b601f2a88d24106d5"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "f890830fe19628e71c81b93315d4a5aa"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "435a32b578fdea8e9c38161fb36614a2"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "9259b94acc87fd602c0b5ef0991589f0"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "d28f62874a80894ef4f547c875d6f00d"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "58a6379a726cb289cd4855da170f713f"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "7289c18289591d0849c00153a89627b3"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "0d8187ec4ba7b89bc10a89c6956a2ef2"
  },
  {
    "url": "en/index.html",
    "revision": "66636c3cf4ca8bf0f41030e863577a92"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "ca73e2819b28bc5028f213a74b2a46b1"
  },
  {
    "url": "en/terms/index.html",
    "revision": "3a3cddb2dc3e6601ef1d97aa1fd35e47"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "4cc1e661ccde0c6a499ee4393fe7f53c"
  },
  {
    "url": "index.html",
    "revision": "aeaf3bc8f51674a8678e15eae72c8750"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "d26f733ce51f8fe80be8b4a8cf038853"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "20ff164384ea159a48e47002689744e8"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "536214606b3fcb5f68c3be938d4ae3d4"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "2faa01c77903ff1d9274d1b28b25a9bc"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "6d766d70053a92824f66f766dfbee007"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "654cfc216367b7f012bbd4378f4510bd"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "79c360b39243cdaa4e2f1b35a1188f1a"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "7707cef71c67931e2926f34a7d3d24b7"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "2c2f957bbbc10926c043da1077cf9080"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "dd06a1a0cafbe6f919800951dc784114"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "9f02c77b840576d5832228310020ab45"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "3cfa731ecf6fe28b4e3aeec6c1094979"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "07551e6105d870a3ae023940c421d6a1"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "7ff285adbf133e94cedd538f16b95924"
  },
  {
    "url": "pt/index.html",
    "revision": "7befad481544ce65e5ef8d22c638c1b3"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "15b9bdfb9789670850a2aa0b8f165d8c"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "a9ee658f4fc92af9e9987c7c971af375"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "5fc08feca5257cc562c89588335990f9"
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
