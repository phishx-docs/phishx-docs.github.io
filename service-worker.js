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
    "revision": "cb85358c10e13672d02511ee79ce0c85"
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
    "url": "assets/js/11.dd692530.js",
    "revision": "f78d0d81cb3ab1427fbab526c2014316"
  },
  {
    "url": "assets/js/12.26ec16a4.js",
    "revision": "a355e8f89f78e05b6a46b8e4e8be15d5"
  },
  {
    "url": "assets/js/13.1c1c8859.js",
    "revision": "337b421c1d64af32c77391961bd8f6cb"
  },
  {
    "url": "assets/js/14.5f4b7ee9.js",
    "revision": "8afde3ed368ead2385879b69859c93fa"
  },
  {
    "url": "assets/js/15.0e7b51dc.js",
    "revision": "32d14a4bda99afb766ad095487ecffc3"
  },
  {
    "url": "assets/js/16.b4f645f6.js",
    "revision": "b8bea91ba1fee2f8256c5485a2d0c5ad"
  },
  {
    "url": "assets/js/17.22941275.js",
    "revision": "5f1df0a2bfc4fdc7022e84acac60744c"
  },
  {
    "url": "assets/js/18.819c542e.js",
    "revision": "c1078a643372bd0eed4e2f9c73fd4cbd"
  },
  {
    "url": "assets/js/19.9d35f969.js",
    "revision": "959eb1034fc1c26addfb18c265a94093"
  },
  {
    "url": "assets/js/2.aa882033.js",
    "revision": "e58a73a3880009645775ee3f75a108cc"
  },
  {
    "url": "assets/js/20.f0dbba04.js",
    "revision": "023afdc11ecac503789b0d9f9dca8d55"
  },
  {
    "url": "assets/js/21.707e3b77.js",
    "revision": "b31c6c16746143431dc793819b4ab22d"
  },
  {
    "url": "assets/js/22.d76bbf4b.js",
    "revision": "28c90d266149f31ce637c705bc571759"
  },
  {
    "url": "assets/js/23.ad180698.js",
    "revision": "b342672f1292ac73ee0f3cb0e82d7ec7"
  },
  {
    "url": "assets/js/24.608d66e9.js",
    "revision": "d6b452b6dec5a5a670f3d0057259d8a4"
  },
  {
    "url": "assets/js/25.f5dd3b36.js",
    "revision": "fd1920b563059a099756e8e7a7a52450"
  },
  {
    "url": "assets/js/26.ff2464d0.js",
    "revision": "b94d85e8b0f5881d74403d5bf8601a40"
  },
  {
    "url": "assets/js/27.a71ab183.js",
    "revision": "8203b695ac73eb34a19f5b5a7d7d1a2a"
  },
  {
    "url": "assets/js/28.30f55c04.js",
    "revision": "5fd7e5014a80ffce1dd4c624d928e739"
  },
  {
    "url": "assets/js/29.243039ea.js",
    "revision": "3fbbd89d2ec8b2ce4a5d59608003ff55"
  },
  {
    "url": "assets/js/3.6242c3aa.js",
    "revision": "4452bdda5135ca6a5928bb595d368281"
  },
  {
    "url": "assets/js/30.70a4bc86.js",
    "revision": "3ac242d0bdebf8746cf4cd53bfc88ac3"
  },
  {
    "url": "assets/js/31.42a094d6.js",
    "revision": "2d1fa61263c38ccc44607ccb71838e4e"
  },
  {
    "url": "assets/js/32.e4b862e1.js",
    "revision": "745fe3c1485836fccc3c84dd6495c2b1"
  },
  {
    "url": "assets/js/33.2aed2dff.js",
    "revision": "d8d61028d23a06d20bf4647bf99ef5a3"
  },
  {
    "url": "assets/js/34.f5cac615.js",
    "revision": "d1099715168954966153d8220709a04d"
  },
  {
    "url": "assets/js/35.afb25b24.js",
    "revision": "beead651dfb66f2cb7726e0afa68589b"
  },
  {
    "url": "assets/js/36.090822fd.js",
    "revision": "bf8cfa7555105c9b8452dcb90a4a2231"
  },
  {
    "url": "assets/js/37.52f8dc00.js",
    "revision": "19a2ed6eadc36724ee28df3a359cf035"
  },
  {
    "url": "assets/js/38.26d01dda.js",
    "revision": "8a5e29110759fe94525ff2ccc15cd338"
  },
  {
    "url": "assets/js/39.d2bb19b3.js",
    "revision": "5791954412f84769ba1d17c3df7a14ec"
  },
  {
    "url": "assets/js/4.556a6cb8.js",
    "revision": "c090cdff2665fe80baf6f7214768921b"
  },
  {
    "url": "assets/js/40.6ceae2b5.js",
    "revision": "cb3c11689381d9a9517aec80ff504649"
  },
  {
    "url": "assets/js/41.e19fe70a.js",
    "revision": "aa13a44a50218a91f8558025657e1a2d"
  },
  {
    "url": "assets/js/42.aef1f52b.js",
    "revision": "ae84c2c48758c3f96be1725107b06419"
  },
  {
    "url": "assets/js/5.18f7d12e.js",
    "revision": "fe1bd9d9c09f6712b56d5988667468ea"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/7.8e4a04bf.js",
    "revision": "4f1485d4f4a5488cdac29f810ca1af29"
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
    "url": "assets/js/app.eefa3165.js",
    "revision": "2276b67afa2206b7ac85d951c8b80a53"
  },
  {
    "url": "en/guide/index.html",
    "revision": "bf3992a73a8a15ca77fd860c94bdbb43"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "a4d33f76042d3c99c38c8b76af272851"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "d1b6e513524af659ac2dd8fafe9f0f60"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "8bd5770fd3b2419edd7317d5c3692129"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "83e548b160d7338beb9cbfde3161e729"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "e2b7d37eb20d2f5879fda84d87842886"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "c7f76a3c9f85315183e7a1b27544e606"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "62869557343dcc8f2fc4c692d5de4131"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "d0bc4535c3a99ff3afc1a4ed325805e6"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "8a76112f1d46e6b929afd088b2e979c1"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "36c5b74a83356872c27a910dc1f0a4b4"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "1858cb7ec746163560b15adce04955a4"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "4e2bc9270c6853648c77e42edb25e87b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "2aa598df16568fb4d1c293dd93469887"
  },
  {
    "url": "en/index.html",
    "revision": "47bbfbaa04ac0273f0670c7b0ce4f135"
  },
  {
    "url": "index.html",
    "revision": "4cd14ce8ffc86391967c253eb1c23af8"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "d688b17f606566053cd546b354e3ee32"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "c56f7addc751fa7f2a6efd6bb5694847"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "fd72dee152ec7e2f2ea117ac8174de97"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "967961b9958bb81afa7818fb3501b22e"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "a0731f08eeb000462622aeeaa8117aad"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "b92a8ccdcbc45c300f9d3bfe366783b1"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "90ff4e5112cb11630cdd2eb4ee21b351"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "9959e19f63bac270dcb558e48b33b020"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "7f23746ab293ca6ae8cc15dec7e745e9"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "ca7c200c553f9d866d342186ff2ce750"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "3e4381ed855c0342e0760f5d2270b5b4"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "2e88b61d224b5625c11c121508efa430"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "d349f8d81ccb4a78dd654af606f283f2"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "8d8677146189eaa7d20429521da60c69"
  },
  {
    "url": "pt/index.html",
    "revision": "f2ce3829da25efcfdebdac9b415f8f80"
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
