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
    "revision": "2ea9912ed4eb50ca10c2e95f0fc5faa2"
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
    "url": "assets/js/12.ed9aaad5.js",
    "revision": "3aae56aa447f3d85008cdc0307b1349a"
  },
  {
    "url": "assets/js/13.b24736a6.js",
    "revision": "475d6c194976fce2010c1566c17b83fd"
  },
  {
    "url": "assets/js/14.dab4d4f9.js",
    "revision": "8094b0fcf44acd5ab2efec7e5552c30f"
  },
  {
    "url": "assets/js/15.efe6e885.js",
    "revision": "06e862307808917fd6b2bc596c7adf5a"
  },
  {
    "url": "assets/js/16.44e9f5d0.js",
    "revision": "97ad7677535d3ffa50d366a38918aa51"
  },
  {
    "url": "assets/js/17.42064c47.js",
    "revision": "89b98913e42bb9f56cab145bfadd6e53"
  },
  {
    "url": "assets/js/18.fde05535.js",
    "revision": "d631fb0a27b6ad240a4eeb7b1ada97a5"
  },
  {
    "url": "assets/js/19.a12cdf2a.js",
    "revision": "81743c66ef271e9e30585485fec3a818"
  },
  {
    "url": "assets/js/20.8147cc06.js",
    "revision": "221b65387b16c90e1577e81d8a4497aa"
  },
  {
    "url": "assets/js/21.858f13ab.js",
    "revision": "d8a3f226d835e800c7540cb3f6089426"
  },
  {
    "url": "assets/js/22.a4b19765.js",
    "revision": "df9bd95b35f3b3fa2a1a3db24fc7a4d7"
  },
  {
    "url": "assets/js/23.43734cef.js",
    "revision": "50bbe9c553ee17e7cc40f450f467319b"
  },
  {
    "url": "assets/js/24.d04dad12.js",
    "revision": "3198cc985a05a1f4c95a0074b2cda358"
  },
  {
    "url": "assets/js/25.0d90f687.js",
    "revision": "0c460540c8f5aadf1784abef0c8cb993"
  },
  {
    "url": "assets/js/26.be898e5b.js",
    "revision": "2649ca15e4492de5dae9c821e1466e12"
  },
  {
    "url": "assets/js/27.0f4a19c0.js",
    "revision": "eba8996c0b8d1d333ca7c743860f072a"
  },
  {
    "url": "assets/js/28.770bac9f.js",
    "revision": "88ddd05e8a8cd8317df0e2e4fe8bbf0d"
  },
  {
    "url": "assets/js/29.71045f73.js",
    "revision": "841dda75090ed3709341652608d51e94"
  },
  {
    "url": "assets/js/3.7c957e73.js",
    "revision": "1a2797372e9c6c53d1e9374822ae8a32"
  },
  {
    "url": "assets/js/30.fdc6bb7e.js",
    "revision": "05f1bd22856fb75f102925a3b282d138"
  },
  {
    "url": "assets/js/31.bae44174.js",
    "revision": "3bb2e924803281691761968721702617"
  },
  {
    "url": "assets/js/32.a6efc7c0.js",
    "revision": "447be748965df8a74596551a89725e39"
  },
  {
    "url": "assets/js/33.125ba5cd.js",
    "revision": "88ca2efe988dd6a9154de11857c57116"
  },
  {
    "url": "assets/js/34.ad41acb7.js",
    "revision": "a74be9b26c37845299aa35000b67312e"
  },
  {
    "url": "assets/js/35.0231c675.js",
    "revision": "1a8f6c946a8b1865041880b2aa030de5"
  },
  {
    "url": "assets/js/36.0c678a6a.js",
    "revision": "b09be4ef41dd2fe47706a5b943be4703"
  },
  {
    "url": "assets/js/37.3e44911a.js",
    "revision": "d6cd51f87c468469c3f849f9a251595f"
  },
  {
    "url": "assets/js/38.131617cd.js",
    "revision": "cc7d739915bfc3d93243daae05ce380c"
  },
  {
    "url": "assets/js/39.12817128.js",
    "revision": "81b37cf25652f82c088e67cba90ce0ca"
  },
  {
    "url": "assets/js/4.2c3c7cee.js",
    "revision": "b692f9c8ade95b08e6c987b6fd69079f"
  },
  {
    "url": "assets/js/40.29ac0ae7.js",
    "revision": "c020afd729f9543d6796e1b4a3fb7625"
  },
  {
    "url": "assets/js/41.179e7551.js",
    "revision": "690d0c08b67cfbdda79df9eddfed3eff"
  },
  {
    "url": "assets/js/42.aaf6e2a1.js",
    "revision": "c7931d1879bca6b645d267b2799d85b2"
  },
  {
    "url": "assets/js/43.f2d448c5.js",
    "revision": "3ba25a7b62125077c81e48cb38f12d0c"
  },
  {
    "url": "assets/js/44.2ef10b42.js",
    "revision": "a9d6d5d56cb3cf749b2d5dde14d75479"
  },
  {
    "url": "assets/js/45.ebbad8d1.js",
    "revision": "3c60850b913e8da7393d450feb05ad22"
  },
  {
    "url": "assets/js/46.0ddd00c1.js",
    "revision": "aa7cc9b4680f44f34c5c665bb52b5728"
  },
  {
    "url": "assets/js/47.50ffe65a.js",
    "revision": "097c4047eb6ba5cd87dc47521bf83403"
  },
  {
    "url": "assets/js/48.673f459c.js",
    "revision": "eae55acb8463afc23f3186c8d4609eef"
  },
  {
    "url": "assets/js/49.d09bec95.js",
    "revision": "b40e88d7bacf0e4d68295285b43b48cd"
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
    "url": "assets/js/51.a7a72312.js",
    "revision": "f1c351dd087fc5af77b0fe8bdad58dda"
  },
  {
    "url": "assets/js/52.87a3c90f.js",
    "revision": "23553e7951641dd0859b8e4dfd925ea1"
  },
  {
    "url": "assets/js/53.d87a5719.js",
    "revision": "21b0ea5930ef0ba1b18aae223a218f72"
  },
  {
    "url": "assets/js/54.0df5510a.js",
    "revision": "05d95d8f1d6fae076a93caad9c640935"
  },
  {
    "url": "assets/js/55.dd78bf19.js",
    "revision": "253050665febea61bb64f19026d7f210"
  },
  {
    "url": "assets/js/56.ada5439a.js",
    "revision": "96f8ab8fa53b4c4ffbb111825c03a99b"
  },
  {
    "url": "assets/js/57.8c230d10.js",
    "revision": "bddf2d99bf37ac6ec780e3350ec887f2"
  },
  {
    "url": "assets/js/58.389dc7b1.js",
    "revision": "175f1a9d4e83cd094305578e552ab215"
  },
  {
    "url": "assets/js/59.35387167.js",
    "revision": "0e94e4f5b16ff742332aa3927c1e489a"
  },
  {
    "url": "assets/js/6.f91baddb.js",
    "revision": "0415e99634f624c9b36d11e5ff125376"
  },
  {
    "url": "assets/js/60.cdf9e725.js",
    "revision": "426f279c4dd9ac507aa243ed792bb8ca"
  },
  {
    "url": "assets/js/61.f9519925.js",
    "revision": "7d451ec797c8ae6a3a6dcfd80a12f3b8"
  },
  {
    "url": "assets/js/62.a820044d.js",
    "revision": "66aed68d5983bf8b0bc3651281b11052"
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
    "url": "assets/js/app.11abbff1.js",
    "revision": "75e06e27981a943d1153fbb83f33f1aa"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "ec0a01ec65d6d278dad9ca22bd2f7b9e"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "74135e925f14c6013685b2cd50438232"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a85fd5ff910548c827b56ebeae8e94f3"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "4cb8d7f1402195fc44240dc823f62604"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "53a6c63c0e903a6f11e24d7bf4681530"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "45ebfd342553fe2931adac7fc75c0734"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "fbb6773b86d9b06ac997a0e2bc783f7a"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "54709c5a2ac85c07458e5ddd3b405757"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "c0c05766f4a31b1c8d5fe875ef3f7f90"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "8c41b498a51e265d53a8b2cf993e709e"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "40611f1dee4844d0b012a414326926f4"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "bfa7ca171131e39d614333fe5d92f3b3"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "159d3706edd4bfd6c82c9f93ce999f70"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "b0f9585579a054ec7877794b28b64f19"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "d3909dac2ea82ec2f795aacd823bc72b"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "3a700954e74355077d264f676e4deef2"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "c8a17368e4123c39f1e5fe947adaa0f8"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "6bd81faae55835b5586fbb98f1d9bd3e"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "aa56910403489fd46fa8ef464332bbf8"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "55f1d3d2812d7340d30036242564056b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "7e57891de8a0c77b7a565a14cb739aaf"
  },
  {
    "url": "en/index.html",
    "revision": "35ccb3bda92e52e4978fae71a19d21db"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "f7561ab5fab042f3a7fe35f2bb196f30"
  },
  {
    "url": "en/terms/index.html",
    "revision": "5651a3e21cf872fce7c3da9d162f6cc6"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "be5cd98f1794946e82cd4dfa83cf34ca"
  },
  {
    "url": "index.html",
    "revision": "0f80d1aadec00869a707173b5b858ac5"
  },
  {
    "url": "pt/content/index.html",
    "revision": "8215395d1beeaa08d74d543a91bdb511"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "f022ea36f188116980dd3140be5583c7"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "1f61efa977adbb04d60302846a557a82"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "302491acbc99085fe0d3abe8400b751e"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "7b0d6b4d582f2ddd89187e12f8cde648"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "bfff7d69e91730ecbddc80a5f9e87c2c"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "52cd7004aa94b92d2eb900187b7ad5ce"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "3dbffb918f543a232cafa1f71e361f81"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "d6f07869af7dfcfabef76964a9a1aedf"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "8ab5c5437e8f1805cdd29d0fd16766a6"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "3eddbac204027d243e06a8761c32fecd"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "3978e5bacaa12a57d47a6760903e1cb2"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "1521027ceb1520d3e71a8de3b7ddbb0e"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "c9368a2891f3154c6ce3ebc3867408bb"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "403656762c9fdb8f211cda66aa2da3ec"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "b3d9ffc2844e442750cbc53292b04fff"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "813e41e71c8f3dd237350a8aaf8a037f"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "7c3a7bbb5d7fb06e2ff10b2d0fea9ed1"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "0784cd557cb2dd38fb119a02c0416bdc"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "cf90bb454e36e2e874ed21bf84c5c485"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "549a2f69ff1814c71d90a143df4df7af"
  },
  {
    "url": "pt/index.html",
    "revision": "38d0ed38aad0308e428ca27f6d05704c"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "60f2b8ac8fa9bd45447cc1872e150067"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "3bc5d672688eb3cf9046f00228b9e3f5"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "9afc4cd97a8331bb32f0bedb63491857"
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
