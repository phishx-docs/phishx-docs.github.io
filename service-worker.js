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
    "revision": "dfc058afc94c5c8927abc612465b0636"
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
    "url": "assets/js/13.4d75a473.js",
    "revision": "7f3a9767d6a82cceb90132639fe0bdad"
  },
  {
    "url": "assets/js/14.a9ddef85.js",
    "revision": "5e2f4eaef557709d068842624fe85a6c"
  },
  {
    "url": "assets/js/15.f29d4ab0.js",
    "revision": "e06abe650f65f97dab6ed9ddcc5e9bf8"
  },
  {
    "url": "assets/js/16.b1e466ef.js",
    "revision": "4d92dfe5d7c064dfc0bb043a4b600922"
  },
  {
    "url": "assets/js/17.0a00ba83.js",
    "revision": "038d277fa82f477c53e0f009416b501a"
  },
  {
    "url": "assets/js/18.c8e75978.js",
    "revision": "517b6bee56aa18ddc37074a07968095e"
  },
  {
    "url": "assets/js/19.988df7be.js",
    "revision": "4684fbe26d03a28eebf7ca8b77a014c7"
  },
  {
    "url": "assets/js/2.b183357f.js",
    "revision": "2d6d58de1c29657ab55f9a753a4ed0bc"
  },
  {
    "url": "assets/js/20.fed26fe0.js",
    "revision": "382ab25650db2c22dc93cf0311982933"
  },
  {
    "url": "assets/js/21.51e16d7f.js",
    "revision": "d5de16e034dc71e936f459cf2a978d2e"
  },
  {
    "url": "assets/js/22.1ce2cc70.js",
    "revision": "6952e953a08579ed264945a64a0e91e5"
  },
  {
    "url": "assets/js/23.a0413bbd.js",
    "revision": "3e0ce362e3334bac37fb2b2ddaad2ac9"
  },
  {
    "url": "assets/js/24.60d49480.js",
    "revision": "25ec800cb9ab39ded4802c68f2eca4f2"
  },
  {
    "url": "assets/js/25.232a5876.js",
    "revision": "b32bf660ff71f18503c6591246f9d0ac"
  },
  {
    "url": "assets/js/26.8cb15817.js",
    "revision": "8157c6639a18ba07847df4ce182666d5"
  },
  {
    "url": "assets/js/27.b7d1cb9b.js",
    "revision": "218519e783b8c5e04a06fe8571fa7446"
  },
  {
    "url": "assets/js/28.5603a857.js",
    "revision": "5b354ece3d4f97f527399a94a76ebb17"
  },
  {
    "url": "assets/js/29.0fc77759.js",
    "revision": "a60d89bc79b23574c24d59c04b25d3b0"
  },
  {
    "url": "assets/js/3.6242c3aa.js",
    "revision": "4452bdda5135ca6a5928bb595d368281"
  },
  {
    "url": "assets/js/30.dce95bd0.js",
    "revision": "0b6c929c5da5d08c13b293a5015081eb"
  },
  {
    "url": "assets/js/31.13476850.js",
    "revision": "322b3467645c9ed3db8f0de65afff75e"
  },
  {
    "url": "assets/js/32.195f8b56.js",
    "revision": "34b1a4fa2969ed28ff95762a53cda030"
  },
  {
    "url": "assets/js/33.529043ae.js",
    "revision": "7906a98aacec89b6dccc2725919a770a"
  },
  {
    "url": "assets/js/34.b108c435.js",
    "revision": "72179349c545b3ee5635495d7957b443"
  },
  {
    "url": "assets/js/35.842e2435.js",
    "revision": "045a504b704d05a3e0a724b2b7084638"
  },
  {
    "url": "assets/js/36.faa7224d.js",
    "revision": "2387b57fd506c9adb685e69a3087a6a7"
  },
  {
    "url": "assets/js/37.fb96e9a0.js",
    "revision": "57da530d1b7a161d1ddb4628f6f4294d"
  },
  {
    "url": "assets/js/38.bbfd2138.js",
    "revision": "080b4b12040d390d01584cf73fe88e7a"
  },
  {
    "url": "assets/js/39.941a56b4.js",
    "revision": "63be2e8dd4e1a588ea0c71cd65506756"
  },
  {
    "url": "assets/js/4.39ef89f3.js",
    "revision": "527c8757c8d08047950e4fb4c9941841"
  },
  {
    "url": "assets/js/40.172aec04.js",
    "revision": "1967a4c973fba09c6e7c0e49a4f85f0a"
  },
  {
    "url": "assets/js/41.1af19015.js",
    "revision": "6505acda9eb2eec54dc9dce8156dbfdd"
  },
  {
    "url": "assets/js/42.ce1f281d.js",
    "revision": "f80d01883ae697bdf1cc26d396a4e121"
  },
  {
    "url": "assets/js/43.88814fb7.js",
    "revision": "ae53a3f49502a7b8843f5e44462c2d19"
  },
  {
    "url": "assets/js/44.da3c7955.js",
    "revision": "40a05f863e121cde9ad4ca5442c80d0c"
  },
  {
    "url": "assets/js/45.167d22dc.js",
    "revision": "ee3ea9a01371189ba7b87e13410615d9"
  },
  {
    "url": "assets/js/46.c46e808c.js",
    "revision": "12cab50feec3fbb7b2ec8520e34699d6"
  },
  {
    "url": "assets/js/47.2ed2db58.js",
    "revision": "e703a4dd3e45b72fb2c017229137dfc5"
  },
  {
    "url": "assets/js/48.f9c1c824.js",
    "revision": "850f14f8ae090d34f51c8e05e5da684c"
  },
  {
    "url": "assets/js/49.1a0c9b53.js",
    "revision": "3836f9601c0d802151dc292885378ee0"
  },
  {
    "url": "assets/js/5.2978ed99.js",
    "revision": "657666b972833cd1f02b4f1415384e81"
  },
  {
    "url": "assets/js/50.7610cdbe.js",
    "revision": "a67e8a2a94ca6c9a7d399a4140158da9"
  },
  {
    "url": "assets/js/51.d4b4a505.js",
    "revision": "08902a5b085965b2c60c26d86944928a"
  },
  {
    "url": "assets/js/52.e20fb5d4.js",
    "revision": "066c45f55ef7de082100e7eebe481db8"
  },
  {
    "url": "assets/js/53.69bc6f60.js",
    "revision": "b3c4a3519ee74b11fdd22ac27c158981"
  },
  {
    "url": "assets/js/54.f6f7991e.js",
    "revision": "a818b698231879812584442637379f17"
  },
  {
    "url": "assets/js/55.cc1e126f.js",
    "revision": "22c2973629d1b3061ff271b27870314c"
  },
  {
    "url": "assets/js/56.9f4f01e8.js",
    "revision": "69b5f348046b0b37e63da7f139dc49b0"
  },
  {
    "url": "assets/js/57.f23d9b16.js",
    "revision": "d1fd7807b2f5f864e0a97b0dcb6eb766"
  },
  {
    "url": "assets/js/58.72f57ab5.js",
    "revision": "f8b495300dac7339ebd76a17ebc535cc"
  },
  {
    "url": "assets/js/59.b7af9f6a.js",
    "revision": "f19c58b8445aa1a8b013676a4e3b25a8"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/60.ffe22724.js",
    "revision": "3daf9dccd33bbdb9bff6d3a42aae1c35"
  },
  {
    "url": "assets/js/7.8c2a3b30.js",
    "revision": "d2fac495a09c9798b23d2f63aacbef83"
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
    "url": "assets/js/app.39b6aa08.js",
    "revision": "a52a475450f40330e3094c8ff6b5a62e"
  },
  {
    "url": "en/content/index.html",
    "revision": "49a2b95b63dc371674955fe710e381e8"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a0982b22cd9b1999e49dc0a33bf710f9"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "6f2f70dcc49b9a9cda8486f03ad0a5f2"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "6305c41ba83bed8aa05f1678f10cbdb0"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "4c1ec7ccedcef8fd5fb36bbe0e648f8c"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "5e8138f83fdc9743c5f4b6c6991c935b"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "e95bbee013833b2b07adeaea0cb52189"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "fd47e12af44a153d4926534095c5f6d7"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "d715a530de466e2830090166c1b2a224"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "31a8fe8eff224f9b8488bed3d4282152"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "b657cacce843e419153e4ecc13c90c72"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "d54c0df6d4f95eadd12b9af880d0b5ae"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "3d6fa50ed47f4d07468b232c30b67648"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "3eca5b56c041b94b935ba66d95bd2781"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "22030b7bd352945810f503428e1b4bb0"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "92aa336b8147777923545358cd5d8fe3"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "be9159cc114660b33b7ed1ae161dff6b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "527f279457df4a8eeaa09e3c6f00707b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "17405be9d3e97c5a883f77e6f3df6090"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "775c4c8182f6e0566dac967fad2d5f85"
  },
  {
    "url": "en/index.html",
    "revision": "4fbb03ab2d0d3a7af3c265b07232ed37"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "fb1e9a82e7bdb7925907fb36902ce7d0"
  },
  {
    "url": "en/terms/index.html",
    "revision": "5ab952a3cca34d5556dc6661e597bf07"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "9f197da4516c1a80a970b1b812fd659b"
  },
  {
    "url": "index.html",
    "revision": "10f759e9a9087a0cf008a50779fafdf8"
  },
  {
    "url": "pt/content/index.html",
    "revision": "a67859e0461917027cb3d0f17be3affb"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "9ba6ac3b584288627af147165f7fb726"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "906b29df2df4270f4b6204caccb84be7"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "ccd8895316ac1559c0610501d5b0ab0e"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "f23eb08878a35c7536791437cda90716"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "5f2b04b40fd81c484754eebab2858dfc"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "c4570f1edd06dcbb41bcf5a1bfd85eba"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "b22264556af96dd75f823756d4da8acc"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "e9c6d3abcdfd337089bf6fc69ccbbeff"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "1f913c087025e40545f4facf398570c5"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "f400c70e29310ec812cd92493e062e8e"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "b5eed3995d7a9769e7c65519720dc393"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "dabf6a788c65a7ec33ab9611455a94e7"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "5582c805fc609a6a64b31851f745424e"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "6481f21c9a7be76463302861b429cbc6"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "916c7333ca69deeeb6fcfe08e0be7996"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "708233769d4a7bc8fe71c7f75e1a83f2"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "739349bd3e03b3f1eaa0b45bcd89e4f0"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "8d959ae61b08f87bf0c4a81a78bfbdf7"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "8e415746b035c01403325ad928fd7366"
  },
  {
    "url": "pt/index.html",
    "revision": "9bab15360ab4d60a75f578412299e288"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "f49b550142eb52b01afa297fd55bcc00"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "3b8f1ecf403cb05af12c6640bc855af6"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "c80a8a77b377a1b011cc59157ddbedb5"
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
