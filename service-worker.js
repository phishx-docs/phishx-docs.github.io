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
    "revision": "a2d28199a810580b74464eb03c385234"
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
    "url": "assets/js/15.83706ba1.js",
    "revision": "eca961f3dbdc4163323f91b179d090f4"
  },
  {
    "url": "assets/js/16.fd48c008.js",
    "revision": "adcd1be944f721406eaa07b6e9404223"
  },
  {
    "url": "assets/js/17.6b61e496.js",
    "revision": "a54d40f6f6decd93f79e0e35ef127899"
  },
  {
    "url": "assets/js/18.c29bf4a6.js",
    "revision": "79fffaa1d7b2aaf11d493e5f63f35f38"
  },
  {
    "url": "assets/js/19.d4934694.js",
    "revision": "6104a4e3ccfa39f955fc19e7f05ebccc"
  },
  {
    "url": "assets/js/20.70c032ec.js",
    "revision": "e42e7c0cae82c61f98987ab529b6acad"
  },
  {
    "url": "assets/js/21.04758de4.js",
    "revision": "cf395cc5b59f651ea5cf63cbe636448f"
  },
  {
    "url": "assets/js/22.f0683a69.js",
    "revision": "77ce48fc6c792aedd00c064121ab9dd7"
  },
  {
    "url": "assets/js/23.758757af.js",
    "revision": "ff2b4e1a4c27b612c1f2399866e19922"
  },
  {
    "url": "assets/js/24.5d03ddd1.js",
    "revision": "f4faeacc9e3ad6ba1cd836f642d28690"
  },
  {
    "url": "assets/js/25.eb305d1f.js",
    "revision": "7953fd9194d777a04393530c72a5bb8e"
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
    "url": "assets/js/28.d0920e01.js",
    "revision": "7a1007feb193bc90d7877b74cd7e1dd0"
  },
  {
    "url": "assets/js/29.f6755f6c.js",
    "revision": "357549629f4eafce3a9f898cc701fcf3"
  },
  {
    "url": "assets/js/3.1dfac114.js",
    "revision": "b793ef6fbe3335d71c7427f75c1123b4"
  },
  {
    "url": "assets/js/30.170f96c9.js",
    "revision": "edb256c5cd9d1e2303db7bb342bdcb91"
  },
  {
    "url": "assets/js/31.229819bd.js",
    "revision": "39e57f7e864017bcfe05ccba8886639c"
  },
  {
    "url": "assets/js/32.5e9a4d98.js",
    "revision": "6e4b1f5eea9da767b84f4503f912d33e"
  },
  {
    "url": "assets/js/33.237165c3.js",
    "revision": "1b7bd01811e5063a7f2aa5b7f91ac795"
  },
  {
    "url": "assets/js/34.8649a33d.js",
    "revision": "fb44d6b75b4affb9b3e72ab70b031978"
  },
  {
    "url": "assets/js/35.0290a5c6.js",
    "revision": "dbca6bbb91678860dfd163e5ae67da07"
  },
  {
    "url": "assets/js/36.0c678a6a.js",
    "revision": "b09be4ef41dd2fe47706a5b943be4703"
  },
  {
    "url": "assets/js/37.0265dbc0.js",
    "revision": "5aac6fd524d10a6575ac90470e7db0c7"
  },
  {
    "url": "assets/js/38.6418380d.js",
    "revision": "b9786157816047e7a45f0a001490acf7"
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
    "url": "assets/js/41.1e0fe0c4.js",
    "revision": "685faca0e7c879c8c725ac4eba1a0b0b"
  },
  {
    "url": "assets/js/42.78963cec.js",
    "revision": "b27b64768724607bc88bdc568a484b2c"
  },
  {
    "url": "assets/js/43.b2dd0e78.js",
    "revision": "1fcc38b747f900f104d240e78ff8c67e"
  },
  {
    "url": "assets/js/44.54283e9b.js",
    "revision": "7b10d3b07f21af11f69ff907a0725a09"
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
    "url": "assets/js/47.180e1d8e.js",
    "revision": "0517f70150a034d3448c3e123aaa862c"
  },
  {
    "url": "assets/js/48.304ca7d5.js",
    "revision": "8512282968b397daa926280b6bfb9901"
  },
  {
    "url": "assets/js/49.0ceaaeb4.js",
    "revision": "b56bd1eab11eb562bf8296932e08eaae"
  },
  {
    "url": "assets/js/5.4c52285c.js",
    "revision": "c72117eda6d6690b0eb03f1979c649a7"
  },
  {
    "url": "assets/js/50.501b1c95.js",
    "revision": "f44006a7b7647944c7d66a986f7baace"
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
    "url": "assets/js/53.858d316d.js",
    "revision": "1f09137f63b82e45d158912c1ab0d383"
  },
  {
    "url": "assets/js/54.ee37d84f.js",
    "revision": "06b353e38681de265f9c2265001043a1"
  },
  {
    "url": "assets/js/55.fb45dc01.js",
    "revision": "84a46730eba22f5bbd7a21e0da92d830"
  },
  {
    "url": "assets/js/56.ab305dc7.js",
    "revision": "8e81d669573f9a46dfa30040ae853d60"
  },
  {
    "url": "assets/js/57.5d27fcda.js",
    "revision": "cf1b3980535c67f9a368a85f8e04769e"
  },
  {
    "url": "assets/js/58.ec2b994b.js",
    "revision": "27864f8c588c9c681676a5d078006b18"
  },
  {
    "url": "assets/js/59.aa626f53.js",
    "revision": "6c78ff43cd2c82e74d41896a71511de7"
  },
  {
    "url": "assets/js/6.f91baddb.js",
    "revision": "0415e99634f624c9b36d11e5ff125376"
  },
  {
    "url": "assets/js/60.bf38b5c0.js",
    "revision": "7945df5a6be9d0f52c3189e491dc1ca4"
  },
  {
    "url": "assets/js/61.77afc841.js",
    "revision": "eaebfa30904e723dce8d6df6af0f4d99"
  },
  {
    "url": "assets/js/62.13872767.js",
    "revision": "8707cb1d7c5fcfe927489d6f4bf5b40d"
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
    "url": "assets/js/app.7f6b438f.js",
    "revision": "96d3b357a766cece7b31c0eff855d30a"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "45c3e115dfea034cfbcaae7ecb858949"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "2bc2bcbd60e29c43c90eb3399472cc35"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c14684f5b3f1fea3619e78cf5697294d"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "a9816cfbb79b89f7ebb15d6319509800"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "20e2104052dcc940f03d3e0b800e5e1f"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "6f3005de8cc6d3b214cef75e1cb72858"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "70c18088548161c5a54b9e2370412fc0"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "761d4498f7fd44347a3c23c0f3c83f18"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "1c3bedd3f48a9c399ab40bb1ceee79b1"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "7e34ad3857775a88536e67bd87339cda"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "714ff05f875e3008b95e66454276ff58"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "3b1ab2f7924d7d22bdd7a51bcdbb272a"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "30101fb5564f86b74fef1cf12869949e"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "eae3e20a8455f3cfd4f97bcfc7ada193"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "b7ad600c9bb1c5b3d6cc2fa9a1e4515e"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "3872446eec1cc08c68bbd520d6779197"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "87a62002504542a6c0097117fe7291a9"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "a7e42678208b316ccb76f133624c94aa"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "bfd2299a2f6af0c622fdbef092813c58"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "8dbbbf55987b20d099f50446ba46753e"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "065b21ffe9e1af548d5cb935fb0efe0e"
  },
  {
    "url": "en/index.html",
    "revision": "956816959db9c11cb0a01d1f55d60a08"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "6c57621906643a3196eac86500abd03f"
  },
  {
    "url": "en/terms/index.html",
    "revision": "5116c186f30a0bc875566371dff30c1b"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "df12841c9c78f34e65555fa19b4bf86b"
  },
  {
    "url": "index.html",
    "revision": "9ef60a4f76da4d3c417a57fb8ae9ccf7"
  },
  {
    "url": "pt/content/index.html",
    "revision": "eae2da8fdc29e8d550f7550ae168c60b"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "cb87f5776ea7f4958fd3a772a0d9fcba"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "e935d8fa42c8eb128c1423ee12c0c220"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "22e299dd6af5691f821a6f59b200b73e"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "7108e429445bc4d2579512c54ca20f7a"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "dd9d83553a78b147bfe7d0debeb3ede5"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "1c78ca442ac8867ba7dccb082ba0b3a5"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "225a1425f0197fa431d68e0f26a832dc"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "eed23981dac920fe788d2e7ce93651cf"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "2c9f42a7d95d1f66a959596cea435f56"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "e66fffba896dd6e89513034f74c9e135"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "2c6234ed8014592a9c36995704a6fc8a"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "25f347676d1fc7e1405121e94c7beab3"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "917c0ec2a5dd8666730b6ef09615dc78"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "78595abd64712246bdd813f61ef7470d"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "17fcb37b0b666790c42ca1bc00ca45fd"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "29bddf7de7e0e8699c05da5a1cf58047"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "2b4e33480c62fc75604f552f5b1a0e10"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "0391e52ad76b6e6df04cff7e9c3d014f"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "6a8ad5b8d788919e1dccae0f3ea4fee6"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "3d70045ca145f41d0b68287a51a37a59"
  },
  {
    "url": "pt/index.html",
    "revision": "0333933ec8c46381ebeadc7dd37b2014"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "6cc27bd4c040890da7f9a0b178037c8d"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "77a4b2d3681336036ed27d07c8c40604"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "43a7e15d99395294b8b6a831540fdab7"
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
