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
    "revision": "9396199a85224a46171078c4b4b2c528"
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
    "url": "assets/js/12.6cedf7d2.js",
    "revision": "68c5562b0a00736ffe8457988de3e0d4"
  },
  {
    "url": "assets/js/13.461d95eb.js",
    "revision": "8bd3effa0965fea60cb319696266076c"
  },
  {
    "url": "assets/js/14.623603a3.js",
    "revision": "be9eec204723d2781fa246b346bd5804"
  },
  {
    "url": "assets/js/15.76f578a1.js",
    "revision": "6175de6e97312104d377bb134d5191ab"
  },
  {
    "url": "assets/js/16.c9624f5b.js",
    "revision": "1a33b2e54b2dd14db5e7bd8eba34daf7"
  },
  {
    "url": "assets/js/17.c8c605e4.js",
    "revision": "81a4382cf74f9b74fe3c4c8f25369e9a"
  },
  {
    "url": "assets/js/18.d16b0a3e.js",
    "revision": "74adaf3456ea63ce4b22da7d084fdd98"
  },
  {
    "url": "assets/js/19.42a9220e.js",
    "revision": "d16f7ee222ce826e11219fb6663090b2"
  },
  {
    "url": "assets/js/2.aa882033.js",
    "revision": "e58a73a3880009645775ee3f75a108cc"
  },
  {
    "url": "assets/js/20.70e2977d.js",
    "revision": "70d2aa9d61962d82f02b27128885d83a"
  },
  {
    "url": "assets/js/21.07843e17.js",
    "revision": "01d0c7d577368f078315752422a79072"
  },
  {
    "url": "assets/js/22.7d46ce06.js",
    "revision": "dcfcbdbb530c2531ebe00f31319c4a89"
  },
  {
    "url": "assets/js/23.120f7bd2.js",
    "revision": "6c3819caa04c997cce6efc5e08e0e245"
  },
  {
    "url": "assets/js/24.1dc82a2d.js",
    "revision": "9c578375726fdd656a9b7714dcfa7b64"
  },
  {
    "url": "assets/js/25.8a76ab5d.js",
    "revision": "07ab523a0c108bfbb9fe5d1389ed3aa2"
  },
  {
    "url": "assets/js/26.447ec184.js",
    "revision": "822404e39aa9eb24da71318cfe0cacb9"
  },
  {
    "url": "assets/js/27.bd11d913.js",
    "revision": "780354f50bed3d0e509a9cc63482ffcd"
  },
  {
    "url": "assets/js/28.83db3e9f.js",
    "revision": "3e2a92b6dfebd020a6bd2170ded30af4"
  },
  {
    "url": "assets/js/29.6df8a085.js",
    "revision": "dda135db4d8aa8c8cfc7c6a4764b4e0b"
  },
  {
    "url": "assets/js/3.6242c3aa.js",
    "revision": "4452bdda5135ca6a5928bb595d368281"
  },
  {
    "url": "assets/js/30.7c1f6df5.js",
    "revision": "952823e634f8bec6e55be9c51ef3d61f"
  },
  {
    "url": "assets/js/31.90e10c6e.js",
    "revision": "109f674a3a00895221d41b1620471a61"
  },
  {
    "url": "assets/js/32.e65d01df.js",
    "revision": "9ea61d257b2e5cf120e86a4593031392"
  },
  {
    "url": "assets/js/33.018881d0.js",
    "revision": "fc8bece33552aef952bf7084fe98ec5c"
  },
  {
    "url": "assets/js/34.0b747109.js",
    "revision": "654d71693bcfd6187e749eed31b83ef3"
  },
  {
    "url": "assets/js/35.02da9d37.js",
    "revision": "c9a619d9fa76fd43b314e9b397cafe8a"
  },
  {
    "url": "assets/js/36.0892d982.js",
    "revision": "f16eae9695020927e0efbac64e18769b"
  },
  {
    "url": "assets/js/37.3639003d.js",
    "revision": "f1318119d77e23efd33017b79349d82c"
  },
  {
    "url": "assets/js/38.1f7236b6.js",
    "revision": "c9c8c7ca7529165e73dc7dce8ffd0794"
  },
  {
    "url": "assets/js/39.56dcaca2.js",
    "revision": "9f73183245f9960a53cd775218d4d15c"
  },
  {
    "url": "assets/js/4.ee4dcf12.js",
    "revision": "17b4952a8dfd19d399d49ed0f7c21f71"
  },
  {
    "url": "assets/js/40.e6e59488.js",
    "revision": "d8b83ebb01d510b21fb4f311842c1811"
  },
  {
    "url": "assets/js/41.b00e4c04.js",
    "revision": "4963a73d36fa812850d92f337b6e759a"
  },
  {
    "url": "assets/js/42.af8fcad6.js",
    "revision": "e95d32d1f32945446b37bff01aba669a"
  },
  {
    "url": "assets/js/43.1a848fff.js",
    "revision": "88c5cd19ef8c54cbd1fc4eaa83f774d0"
  },
  {
    "url": "assets/js/44.cbe9c424.js",
    "revision": "8393a2a14009afc230524e3198dea0ac"
  },
  {
    "url": "assets/js/45.488064e2.js",
    "revision": "54bb190aa94b758150840e235c1d6c4a"
  },
  {
    "url": "assets/js/46.90fb95e3.js",
    "revision": "3d13f407a167623588655d5525311eef"
  },
  {
    "url": "assets/js/47.80914781.js",
    "revision": "b8f156fa1f48624c9e50385969038d0b"
  },
  {
    "url": "assets/js/48.2567f3da.js",
    "revision": "962cc4bec2845d10701af193204bddd5"
  },
  {
    "url": "assets/js/49.887e0a34.js",
    "revision": "831508c62ed595c7f946e1f6e4f3bcd1"
  },
  {
    "url": "assets/js/5.0cfa35e7.js",
    "revision": "92d9a6e78c60af4648d8a0a11f9f72b2"
  },
  {
    "url": "assets/js/50.d754cb08.js",
    "revision": "c0f9c84bf92d1cb3d5ff3774b65b746c"
  },
  {
    "url": "assets/js/51.bc23ba4e.js",
    "revision": "5a8f8bc8aa094107fb2c2f5fc9923974"
  },
  {
    "url": "assets/js/52.4bd9eeef.js",
    "revision": "74388d0bd34cff6703e2a1f377f84e87"
  },
  {
    "url": "assets/js/53.5af76bf0.js",
    "revision": "cb6d5555ce854dcaf7d8e1d4044bf657"
  },
  {
    "url": "assets/js/54.9249512b.js",
    "revision": "452143fa46255edaba229904e76110ee"
  },
  {
    "url": "assets/js/55.e1ca8832.js",
    "revision": "942f98245f0e03389e34bc65ae9460d4"
  },
  {
    "url": "assets/js/56.9bf8e676.js",
    "revision": "140dd6330a2d1efa52a72d884d54c12e"
  },
  {
    "url": "assets/js/57.9437bd53.js",
    "revision": "f4a57b0a65915151062fccd6081f2254"
  },
  {
    "url": "assets/js/58.75d686b1.js",
    "revision": "6491377eb4f9103ddc2c34abfa3f5c63"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/7.d9a3b825.js",
    "revision": "8afe458135fb4bd79a6276c76cf49319"
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
    "url": "assets/js/app.df24776e.js",
    "revision": "fdf547a8937129dda0bf094aa41017b8"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a8e38e4f55ae479c38d4fed765f5da57"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "d8e437caaf4c55195604ce3cb96ec8b4"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "e7f43152795cb0b38d128048d253e569"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "035f0870d92346ac706823d4d658818b"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "eaeac78a697a04dffc58f72af301b4f5"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "3244fc66d1d3f747b4d2fc07f5477df0"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "8b8203b25096fd8e4814043256f284d4"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "1f4a27798cff9d4f49ffed4a7aafeec0"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "0167209fac6d03e073d497bea2c81281"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "603691daa772515b3d229e6f87f693ce"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "f42d88b358e649c6636a4667c1fe680d"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "0d31feae7c107f1b4d33fff8dc520cc8"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "2fef92b1b096cbaf6cfb3476269e1872"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "fce70667335eb0b9cef2eff99fdbc316"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "c1fbf8fe15dae7745066e70486628bab"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "e5092f674b92b330f3e26b7b0f843562"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "0e0136ab12d733fbd114f4a57a34a86b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "0f37b6599d956b24dc80ed15d61dbd6b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "85034b910d43455276f1bb3deab9d3d0"
  },
  {
    "url": "en/index.html",
    "revision": "42483459a069cfaf421611b71179bcf8"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "dd9440a0f55ab72d074e9c73717546a5"
  },
  {
    "url": "en/terms/index.html",
    "revision": "57acdf9e67fee286995924d661b50d08"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "4eec67eed038c1798ffa6296c90aea2c"
  },
  {
    "url": "index.html",
    "revision": "416050299b198120a659ebd171508ea4"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "e22ddad3c30d72bd7a1523a58937f86b"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "fdfb9da3df9429c9c067ecc2d398b9c2"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "039d28851ccc3d8f55727d3d313e6b0c"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "f85779144fa0f2efb1d86737bc1ce7db"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "ec8d4bc7b767b09ba6b3a712d21a590f"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "ae0c4d18af467e3aff9f87a162220686"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "d4aff85865b85ce3f502225eeb7b49c8"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "048d0dbce476402f414affc6a052caf6"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "7a0451964e048f8474f8528217763e5f"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "92f3768ffc58ebfa89e4e8f8b3b8e3c0"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "307cfbe938a11201959c86fbea178af8"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "18da5aa007c3bf6057b3a3387afe3e30"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "d435a84cf7e56a1006d4314fe37e3298"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "4405800cef1759e725ae94bc639c2f68"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "eaa30ba9fa0ae53eb66fd71497a93e5e"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "df34887b7ec3bd0eaa14c6a0bac46970"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "4553cc8920a7a20d2a223f5f7fb2a02f"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "d23de634d54e94a28271b93c686bb279"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "f08c914b2ad642abc5017070d4d1c77e"
  },
  {
    "url": "pt/index.html",
    "revision": "2833590a7fd7e6b9dcefb8eefa22e349"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "440b8e4cab71571ed32361f72b94dcf9"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "667ed2a08c833a0cef1e4d82e8849bc7"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "ff7bca485dbe4e12da07936cb94ef076"
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
