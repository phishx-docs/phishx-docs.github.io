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
    "revision": "7b82c5e768780fd7d5425c0acf8d5ee3"
  },
  {
    "url": "assets/css/0.styles.522f29ae.css",
    "revision": "1236f5294cbf8d19f835b47806323aae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b1bd2892.js",
    "revision": "7ad676bed4c63c56eb85d83da2f53f27"
  },
  {
    "url": "assets/js/11.5dedc72f.js",
    "revision": "155690a7bd88e04f75d345d45294a0f0"
  },
  {
    "url": "assets/js/12.232e2be1.js",
    "revision": "aad048f0f2be7c946fd553879033ad2d"
  },
  {
    "url": "assets/js/13.451aff8a.js",
    "revision": "d980d2b471440588e2917a4b45b9c4e9"
  },
  {
    "url": "assets/js/14.dab4d4f9.js",
    "revision": "8094b0fcf44acd5ab2efec7e5552c30f"
  },
  {
    "url": "assets/js/15.431e933a.js",
    "revision": "f7b24af590625e4d573c79de1f811ec6"
  },
  {
    "url": "assets/js/16.a699bb34.js",
    "revision": "966019830272b6be712821671bea8e87"
  },
  {
    "url": "assets/js/17.6b61e496.js",
    "revision": "a54d40f6f6decd93f79e0e35ef127899"
  },
  {
    "url": "assets/js/18.5aad6635.js",
    "revision": "5d31f0a2dfed7e3fc88b2a7b6ab7e527"
  },
  {
    "url": "assets/js/19.d4934694.js",
    "revision": "6104a4e3ccfa39f955fc19e7f05ebccc"
  },
  {
    "url": "assets/js/20.3d440691.js",
    "revision": "f3e00668d218d272f852f99170a0ada3"
  },
  {
    "url": "assets/js/21.bbc768c1.js",
    "revision": "7b381fcf71bab2f5fb962b377595035d"
  },
  {
    "url": "assets/js/22.da742ae8.js",
    "revision": "a72b17ea8d7a1d3ec71d970bf8876429"
  },
  {
    "url": "assets/js/23.bc40b154.js",
    "revision": "55cbafbecf8f536e74cafc0deba83331"
  },
  {
    "url": "assets/js/24.5d03ddd1.js",
    "revision": "f4faeacc9e3ad6ba1cd836f642d28690"
  },
  {
    "url": "assets/js/25.7123daad.js",
    "revision": "8a8350f69fe335394e86c20120e74933"
  },
  {
    "url": "assets/js/26.384331fb.js",
    "revision": "17ff04baa61493eba13dabdf3659a67d"
  },
  {
    "url": "assets/js/27.2120ad73.js",
    "revision": "2ab9edb92ede5d27e2a4b9d9e1ed3569"
  },
  {
    "url": "assets/js/28.45dce1b5.js",
    "revision": "3a527952763df856f121aae5b17ff1a0"
  },
  {
    "url": "assets/js/29.853b7a6d.js",
    "revision": "0d0dde718aca62ff21993577785ba636"
  },
  {
    "url": "assets/js/3.a220e3ff.js",
    "revision": "18f6b5a428009677dab667417697641a"
  },
  {
    "url": "assets/js/30.170f96c9.js",
    "revision": "edb256c5cd9d1e2303db7bb342bdcb91"
  },
  {
    "url": "assets/js/31.a721725a.js",
    "revision": "744d34b8b974134283248147a5f27470"
  },
  {
    "url": "assets/js/32.6a25a1e2.js",
    "revision": "873b60d91530fdfed6510e10076b8300"
  },
  {
    "url": "assets/js/33.abe46953.js",
    "revision": "f6fd11d170a82af74c2e0b418c75edc5"
  },
  {
    "url": "assets/js/34.8649a33d.js",
    "revision": "fb44d6b75b4affb9b3e72ab70b031978"
  },
  {
    "url": "assets/js/35.36684890.js",
    "revision": "a1184c784ee2c0f9c828ddbc139678a9"
  },
  {
    "url": "assets/js/36.c7f867c1.js",
    "revision": "6a058dc4b04a892b559139a0a143510b"
  },
  {
    "url": "assets/js/37.1d21ba43.js",
    "revision": "098c2a891f20d35a9e416169dc53cff0"
  },
  {
    "url": "assets/js/38.8eceeb61.js",
    "revision": "dbd42a3dab57e3328ace846c0e003d7c"
  },
  {
    "url": "assets/js/39.59335305.js",
    "revision": "6e4ee2db6347502726a7365cea390a83"
  },
  {
    "url": "assets/js/4.2c3c7cee.js",
    "revision": "b692f9c8ade95b08e6c987b6fd69079f"
  },
  {
    "url": "assets/js/40.c974009b.js",
    "revision": "e10dc9ddea561dc311d1871c9f9c25b1"
  },
  {
    "url": "assets/js/41.6fd250d1.js",
    "revision": "0c903da7a48263c1f682999d150c0848"
  },
  {
    "url": "assets/js/42.633fc46e.js",
    "revision": "c4b3247e764c9591e38db5dae360e04f"
  },
  {
    "url": "assets/js/43.29af9534.js",
    "revision": "7c99ab46da80d3fd10a5dd208025a519"
  },
  {
    "url": "assets/js/44.abdaf26f.js",
    "revision": "1a2b22adab91cfb4edcce9f0b676d1ce"
  },
  {
    "url": "assets/js/45.ccd1e27a.js",
    "revision": "db1ab1563e8eb8ea655e0577a3b8fd1f"
  },
  {
    "url": "assets/js/46.74726165.js",
    "revision": "edfbb95c7b0dc41a96387d5e216e4689"
  },
  {
    "url": "assets/js/47.2ccdb5ee.js",
    "revision": "8a36527c7cfb9885d1dae9c4da171f8f"
  },
  {
    "url": "assets/js/48.0f3aa21b.js",
    "revision": "f7bce8f7777e04f414df28a29536544c"
  },
  {
    "url": "assets/js/49.7b74301d.js",
    "revision": "7e18c81f65e89f4425a4303ecbfec985"
  },
  {
    "url": "assets/js/5.4c52285c.js",
    "revision": "c72117eda6d6690b0eb03f1979c649a7"
  },
  {
    "url": "assets/js/50.0df978a9.js",
    "revision": "dd6bbbece5c1fa7e1c755f29252c72bf"
  },
  {
    "url": "assets/js/51.9470ee8a.js",
    "revision": "961325f390bee68c77fa984b99541345"
  },
  {
    "url": "assets/js/52.87a3c90f.js",
    "revision": "23553e7951641dd0859b8e4dfd925ea1"
  },
  {
    "url": "assets/js/53.13178599.js",
    "revision": "8cf124329a63dd083a56429dac702ef5"
  },
  {
    "url": "assets/js/54.ee37d84f.js",
    "revision": "06b353e38681de265f9c2265001043a1"
  },
  {
    "url": "assets/js/55.95b9fcea.js",
    "revision": "759f28193215b1f526761e5d81655988"
  },
  {
    "url": "assets/js/56.a1487cc3.js",
    "revision": "3ec107fe4f49a11ec7bef295c19a3083"
  },
  {
    "url": "assets/js/57.90d03d96.js",
    "revision": "c82efaf329f61979b3bee9d85b319e7d"
  },
  {
    "url": "assets/js/58.7b1614fa.js",
    "revision": "34e81118da1f80f7cdbded020cd2bcd7"
  },
  {
    "url": "assets/js/59.e13b832f.js",
    "revision": "d55fb2055d13ce288e0cef893cb307e6"
  },
  {
    "url": "assets/js/6.f91baddb.js",
    "revision": "0415e99634f624c9b36d11e5ff125376"
  },
  {
    "url": "assets/js/60.977c00b6.js",
    "revision": "b38440a236359700675be20b531270a2"
  },
  {
    "url": "assets/js/61.77afc841.js",
    "revision": "eaebfa30904e723dce8d6df6af0f4d99"
  },
  {
    "url": "assets/js/62.7c662344.js",
    "revision": "c660de40a54c6e939f0f50a0d50ca9a9"
  },
  {
    "url": "assets/js/63.d76e64e6.js",
    "revision": "1d4049eb51b735eb497edb369140999e"
  },
  {
    "url": "assets/js/7.58bb1346.js",
    "revision": "81e20ccafb0e8326506d7aefcfd58fb5"
  },
  {
    "url": "assets/js/8.8c4bbe87.js",
    "revision": "330a9eb573ffd56182d8fa29df625a8d"
  },
  {
    "url": "assets/js/9.596cfd7d.js",
    "revision": "ba7e89560a4fc4b6fcc60d953b1d2156"
  },
  {
    "url": "assets/js/app.98304536.js",
    "revision": "bb99552747bca7238fa0c12a6a66ffa9"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "224649e2fb92b7f587a423cbf8332944"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "ae9080cf6f65d2c6090f803c113b540e"
  },
  {
    "url": "en/guide/index.html",
    "revision": "488c276bea4decffeb769aee39951615"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "98bf27cfe5e67754f7d920181183e5e9"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "5c0391a71a94873d4d0823a6da58b130"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "f6ab357ff32c7a9aff5091fc35bc3458"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "54f1dea84bcc21ceb610ae17d08845ca"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "829ac796bcc7624f15fbdba908c48da4"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "e8513d147e5f559c2524d122a4782fe5"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "040a23a2bca1b750ca6148ec3534e121"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "c3f50054503a75bf9f10ffacf7159c76"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "e5fc0ae3ae62a59ea62c1ff9c70bbc22"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "db5dfabd8149d5778226cb25d0b79ab2"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "fa6e6594e56b968e679e0fad12472170"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "984eadf9bab61298fb2aea40b7a21595"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "57ed407ae57f1c9b3d5d81b93c33f0a2"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "ad044f75246c16898d118233c278517b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "8bccce8b1572e38fad37500c89815991"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "5f321fedac77eace5a06982a183a477a"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "3bb6a50f2dc5da20b3bbd9cc8db265bd"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "ac5c3bf32cc413c78d91dce96dfdaf83"
  },
  {
    "url": "en/index.html",
    "revision": "a2d7b55d218da8bee2b69751bf4ce49d"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "aefbefb47777f3ece88f6ef428cfe8f6"
  },
  {
    "url": "en/terms/index.html",
    "revision": "95a2593057462d395d4f25527636f930"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "60d1edd98fca7d9ec9668ca2f5b68cf2"
  },
  {
    "url": "index.html",
    "revision": "1eb5ba4f12827913d226794c7657aa4d"
  },
  {
    "url": "pt/content/index.html",
    "revision": "253b8287c715cbc1a4b617b9a164552a"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "225848bbd5809f1a8a0fbd9cb4bd152e"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "3a21c21f460563ddcdd6849017a9562e"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "62613b02e380f544c973936f535dc784"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "bc74137e97251bcba136e26811507a2a"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "57fa1dbd47e72422fa7b658217e5c3be"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "f98dfdc20c964e7d70f3fbd1448fd858"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "51f693be520059186fa36a34b3403e09"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "0582a427c9098f3454f2e84f7800e3f6"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "9c5e44476d9dc8bff946a0fdb368c5d9"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "f42b18f16a0b20a154381d38c5d7af7d"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "52dc068bf7c4208d0f9d5630d099dc2b"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "426e8d1030873cf109df628907786c05"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "7ca17bca4ca7b9b5d3acf6dc9eb4b5bd"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "2066dfbfe84004c230179ba6b8ecc70d"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "057aada8288f8c4fa36d982b32d9fee0"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "66541ce3711c7b0455a087d001274da1"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "d9f2c703839bda22f3d5cb2e5b389cf6"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "db74b0d35ace52d8a9bf4160b0eed76c"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "fdca9b0df3922470c47fe365815fd383"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "5afeda5782cd1387d6ad447c90027bd6"
  },
  {
    "url": "pt/index.html",
    "revision": "b75eb56a1902bc8727c0696777ae061b"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "e7b7dc48c8d8b5326dcf8dd42b0bbf5e"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "f259cfe4188e2058286779d2d3d46b63"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "480dab099a6bdd8ba76144df7b736551"
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
