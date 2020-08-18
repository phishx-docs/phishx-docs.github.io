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
    "revision": "0760b5b27998ebe21462bbe97606a0b4"
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
    "url": "assets/js/12.3f4b0e4b.js",
    "revision": "e4244bd789c5c3da705b2114e70a4864"
  },
  {
    "url": "assets/js/13.0f94ce45.js",
    "revision": "571026cb57cdbb87ebbf2410912d7831"
  },
  {
    "url": "assets/js/14.264a3e0c.js",
    "revision": "0e8b9bbae663be0693b9e0b59c6bce3e"
  },
  {
    "url": "assets/js/15.431e933a.js",
    "revision": "f7b24af590625e4d573c79de1f811ec6"
  },
  {
    "url": "assets/js/16.04d9b0e8.js",
    "revision": "6a23738a39307008ce28d3ba617542a6"
  },
  {
    "url": "assets/js/17.60de4de5.js",
    "revision": "5221b96d02be2e7d1d2d7169f6a80c70"
  },
  {
    "url": "assets/js/18.c29bf4a6.js",
    "revision": "79fffaa1d7b2aaf11d493e5f63f35f38"
  },
  {
    "url": "assets/js/19.7eb89e43.js",
    "revision": "9ff69d144fa43ae1d44445b4e6502dfc"
  },
  {
    "url": "assets/js/20.88911a6b.js",
    "revision": "2fc541a0159c4778dbf8cf16f890ff7c"
  },
  {
    "url": "assets/js/21.04758de4.js",
    "revision": "cf395cc5b59f651ea5cf63cbe636448f"
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
    "url": "assets/js/25.78ffa8d7.js",
    "revision": "f8f0415533309336baf0e5ccdbd20fba"
  },
  {
    "url": "assets/js/26.20c62886.js",
    "revision": "a01234b80e06843fb99f9518fdd6868e"
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
    "url": "assets/js/29.fc41e180.js",
    "revision": "f10cf27633379abbfb0659c00f608a18"
  },
  {
    "url": "assets/js/3.82815b96.js",
    "revision": "c1ba69f3f01dae5a2a78712031dc8609"
  },
  {
    "url": "assets/js/30.3546c88a.js",
    "revision": "afee6c302df9b437f66fed1bf2ea4562"
  },
  {
    "url": "assets/js/31.229819bd.js",
    "revision": "39e57f7e864017bcfe05ccba8886639c"
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
    "url": "assets/js/36.b6448090.js",
    "revision": "a7d91787b128e231a62eece385443bbf"
  },
  {
    "url": "assets/js/37.f73dcae0.js",
    "revision": "9d49ee5605c1150c52ea5d4b048bcdab"
  },
  {
    "url": "assets/js/38.8eceeb61.js",
    "revision": "dbd42a3dab57e3328ace846c0e003d7c"
  },
  {
    "url": "assets/js/39.9de9ea12.js",
    "revision": "92e004b2446750a3b39e165cbca7f357"
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
    "url": "assets/js/41.b9d24b76.js",
    "revision": "ed7061df8d61ff3246fb318aeac8bc88"
  },
  {
    "url": "assets/js/42.78963cec.js",
    "revision": "b27b64768724607bc88bdc568a484b2c"
  },
  {
    "url": "assets/js/43.da832b11.js",
    "revision": "04eed3a45c1b00714a276c975c0288a0"
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
    "url": "assets/js/46.e21a0360.js",
    "revision": "2ecdaa469c8fc603486c219c3367ae33"
  },
  {
    "url": "assets/js/47.373c609e.js",
    "revision": "721fd092d53f397959b63444770914d7"
  },
  {
    "url": "assets/js/48.304ca7d5.js",
    "revision": "8512282968b397daa926280b6bfb9901"
  },
  {
    "url": "assets/js/49.c7e010e5.js",
    "revision": "bfd9e6067ebfd4288cd272f3c7bec269"
  },
  {
    "url": "assets/js/5.4c52285c.js",
    "revision": "c72117eda6d6690b0eb03f1979c649a7"
  },
  {
    "url": "assets/js/50.8ceb6af9.js",
    "revision": "44ec5c6f7ba35c87672dbaae4ef176bb"
  },
  {
    "url": "assets/js/51.fa31b16d.js",
    "revision": "1809e23d0021f6d6fb7bae829a86b62f"
  },
  {
    "url": "assets/js/52.e782c738.js",
    "revision": "1a50b68c803a691cb0df4e02513d4673"
  },
  {
    "url": "assets/js/53.0fe881d6.js",
    "revision": "0a0e8d516d68d04bcdd6947378aa4bc6"
  },
  {
    "url": "assets/js/54.0df5510a.js",
    "revision": "05d95d8f1d6fae076a93caad9c640935"
  },
  {
    "url": "assets/js/55.afd89e93.js",
    "revision": "ccb269c599a284b6ab99514ae5e7d451"
  },
  {
    "url": "assets/js/56.3d95ec39.js",
    "revision": "a5f4b4e16c230fc1c7faf83d5e53a033"
  },
  {
    "url": "assets/js/57.0604c5a8.js",
    "revision": "d4bd339ff58f78f5719f62239bfeb4eb"
  },
  {
    "url": "assets/js/58.34c31d94.js",
    "revision": "d3f59ed814985920a64ae77000f5fc17"
  },
  {
    "url": "assets/js/59.31bac933.js",
    "revision": "7842229866f856c26db806dbbbb40c89"
  },
  {
    "url": "assets/js/6.f91baddb.js",
    "revision": "0415e99634f624c9b36d11e5ff125376"
  },
  {
    "url": "assets/js/60.2d99814a.js",
    "revision": "23eb9734cdc8277cfb7ff256dfc8f2ba"
  },
  {
    "url": "assets/js/61.b67ca4f9.js",
    "revision": "c77f331c22656dde8a9b9c6b579fa6e7"
  },
  {
    "url": "assets/js/62.b5dca9df.js",
    "revision": "179bff75bf3a8b198b968b25ab2e5fc4"
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
    "url": "assets/js/app.4963348a.js",
    "revision": "b5a6726a28cc57d4174b7c376f906207"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "57f02bce9d6c6b4cf1d1731c8cbe5727"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "c88d863c5b3849fd0c025a2759bca007"
  },
  {
    "url": "en/guide/index.html",
    "revision": "3dd98615ee21fcfcfa6a859843056677"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "05691394472089ecdc1d0cb2be253108"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "e020423ba7001c9af3521d7f3e9ca381"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "0c5bcd0bf8dc2bfb2f33a20747a9bbec"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "3202834c20e2276c5fab4fe778f1f4ff"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "2b7363129eeb999a907c368f4731d1f2"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "2b356121210b9da7202c6774b5ed73b6"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "102934287366ac0c3d9784a79d468eb9"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "65edfc9744e4f4e6d71abf28a3470804"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "6eea0c5d0bd1f5135684286a8e51a413"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "22aa49ace6e6044d1cffd2a79d571415"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "ab1c89809fe0ca7502688988b80477b9"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "6187f1b97bf983f3099dc9fb804a48bc"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "2afc32c91acad1276c3df0fc098cde34"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "290ffd8e0e41c958cf227740dfcb6d53"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "b7590da5585df9434bb83d18dfaf6ab1"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "7551cadfe36296da0dcfb050c62bb374"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "3e17605b19f154a3eabf3291c77b8131"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "604a313e203c60c7d1dbd65d801079f5"
  },
  {
    "url": "en/index.html",
    "revision": "4493af01fbc0753abcb4541f44e9f32b"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "cc545e2f8983b9f1750bd66935f2e8c4"
  },
  {
    "url": "en/terms/index.html",
    "revision": "55a6a948f21591eb28146628175e0896"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "2ca7c4fe73fe78246600ccc4af32bdb7"
  },
  {
    "url": "index.html",
    "revision": "10bce48caca0e79a548dfd45d43216f0"
  },
  {
    "url": "pt/content/index.html",
    "revision": "c41f7bf2243d2d42244eb2fcff395ff2"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "643bd348d89d37c1beadd3de15e9a0c0"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "c63bfd78f57fe13ad68bfd25b4fb87c2"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "fa6df3ee579159e19bca9199f7a849c3"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "c7e29d6f2e003a344df976573b72611c"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "bd180e4df1404bd14efeb8a5bea0b6e6"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "d5f3c847033e57750f81a35eb3d70746"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "14847ef817c24db78eba4c649c8983c5"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "658c53312d1df5186f64e2f66c00667a"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "52bae5fd0a0a185f8e7d185488372c06"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "a4dfa78458268223319607e781b75712"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "f6b4c0529abf7d10724e82359b0e4199"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "682efe559fd626ac1412a22aa4dd637c"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "3a7bbf2491b6ee48a7fb29301dbd3222"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "e2351b7b08201315334f3473b7bffcd6"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "f0bf140c90ddb454f15d7b3e6ec15f07"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "e36dfb271c97e6544e4e31541a6defab"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "7850b29585f1232286ea11c971d00df5"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "6474c246f3bc59cf6613dc48d0ec42bf"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "1fd9c5c4b4a229e5989810776f6ef9a1"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "576200e27a080d0561acb2c8cfa1bcdf"
  },
  {
    "url": "pt/index.html",
    "revision": "a363189e6ed957847fdd613093715791"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "7f4d61171de98247dd84681d0b64ba0e"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "51448e5a7c77c5064f82568715e9dcba"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "95ef57c754c82f3b4fadeefd10dc23a4"
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
