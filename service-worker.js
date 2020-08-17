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
    "revision": "681bbd986d6fe6c472648b65ca78a475"
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
    "url": "assets/js/13.ea9c870f.js",
    "revision": "caa96cbae70d28a6713188ce20629998"
  },
  {
    "url": "assets/js/14.623603a3.js",
    "revision": "be9eec204723d2781fa246b346bd5804"
  },
  {
    "url": "assets/js/15.1c3131c7.js",
    "revision": "371f73043716e91d049e5c0f4be3315f"
  },
  {
    "url": "assets/js/16.687a0cd4.js",
    "revision": "f03a997934dd1cf216ef08a5b1c1dcc5"
  },
  {
    "url": "assets/js/17.d4f94b0a.js",
    "revision": "2d8e1083c6b1d8ba13a9cb59191e7e41"
  },
  {
    "url": "assets/js/18.b8f37839.js",
    "revision": "3b4582b523bb27552c333a9a59dea9f1"
  },
  {
    "url": "assets/js/19.bc99a9cf.js",
    "revision": "e9716cb6ed1074e96d105ebab5560e83"
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
    "url": "assets/js/21.29d35810.js",
    "revision": "be94cab4b9771f3027d5150b694f7e43"
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
    "url": "assets/js/26.294b3624.js",
    "revision": "4a0adcd2098248e6567be726846295d0"
  },
  {
    "url": "assets/js/27.437557b1.js",
    "revision": "ee7ad7f72171a6297634365287414600"
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
    "url": "assets/js/32.c63f6607.js",
    "revision": "577ce951f189d0860f2233739b320695"
  },
  {
    "url": "assets/js/33.018881d0.js",
    "revision": "fc8bece33552aef952bf7084fe98ec5c"
  },
  {
    "url": "assets/js/34.f33abeff.js",
    "revision": "fd852a4f3af0b74b60be46ed4ef34fe5"
  },
  {
    "url": "assets/js/35.7348eb4b.js",
    "revision": "0561d8fee11e252df1c0feb0d4f50a4c"
  },
  {
    "url": "assets/js/36.9908a771.js",
    "revision": "4c2b417483a457ec45e0f96480ac2bf1"
  },
  {
    "url": "assets/js/37.80de6eae.js",
    "revision": "2228050600a7f96df073f758dc5d57e4"
  },
  {
    "url": "assets/js/38.a0b910ca.js",
    "revision": "a6ab024fb2d402846cdafa3b4790b56d"
  },
  {
    "url": "assets/js/39.f9e8f894.js",
    "revision": "04511527a3b344f7a2271b464786199b"
  },
  {
    "url": "assets/js/4.ee4dcf12.js",
    "revision": "17b4952a8dfd19d399d49ed0f7c21f71"
  },
  {
    "url": "assets/js/40.67186da7.js",
    "revision": "e66e82721a79353955a3fe2eaea30e3a"
  },
  {
    "url": "assets/js/41.b2ea75fb.js",
    "revision": "299de09ea4ec58d853905deefc116fae"
  },
  {
    "url": "assets/js/42.9c1c8d39.js",
    "revision": "6c238b870a37ffed65d67564339022c0"
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
    "url": "assets/js/46.68f4f0fe.js",
    "revision": "d41dca48ab880fd265449679cb66283c"
  },
  {
    "url": "assets/js/47.8f693967.js",
    "revision": "a241b117142df3aee059033934f3e5d8"
  },
  {
    "url": "assets/js/48.57d0d19b.js",
    "revision": "76a958c77be8b0eed4495dec2faac526"
  },
  {
    "url": "assets/js/49.3c5bb80f.js",
    "revision": "416c5ba9a826399af89b839d908a017e"
  },
  {
    "url": "assets/js/5.0cfa35e7.js",
    "revision": "92d9a6e78c60af4648d8a0a11f9f72b2"
  },
  {
    "url": "assets/js/50.aacf71e3.js",
    "revision": "f9d7fb83d559bc7e1b90826760f41fb3"
  },
  {
    "url": "assets/js/51.5458fb64.js",
    "revision": "a9367b441dd04f231a3ea644bfcd3dce"
  },
  {
    "url": "assets/js/52.8589797e.js",
    "revision": "f1ef7bd834b6ddd849c3effae31d183d"
  },
  {
    "url": "assets/js/53.4e4ce588.js",
    "revision": "50fe0a24c6d8a3164c7507eacab07015"
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
    "url": "assets/js/56.c98f0193.js",
    "revision": "46c59e16ffb1e9c8884017eed449d359"
  },
  {
    "url": "assets/js/57.dcee23ec.js",
    "revision": "6c8357a149002dafd73dea67d55a756f"
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
    "url": "assets/js/app.2ed43803.js",
    "revision": "5de86a9e27952de042612d65bcc1fa34"
  },
  {
    "url": "en/guide/index.html",
    "revision": "1861d83f79d719efe767546a80d54171"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "cc677115a8014c371db617519bb6eaad"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "8de6abba5a5139b5a2f832bd9de7377c"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "6e0d3c2c0fce949cfdf06f160e09422a"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "c900493151f6f7a8055801e0e87f2a5a"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "e5f7132fa002e079aa71d7fa9b92c27b"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "1eeb04b50c94b01d2178d7fa7e2d310b"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "e2e4b474bdbb04d81527c3740346a762"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "34de12c98e92edc51a504b0b2e11f198"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "17aeda63f7317e6ed38b227e24706ce0"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "90459984a02928861fcb491eca1edac7"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "090c18d505caf44bdbc6347206d23b77"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "4e4cc14f4f2f3b2dd9bb668ea13a1896"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "04eac156e434ff3862c2d5dafee16fcb"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "0bd198fb03aefa5609fcc825311258c9"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "87150fb6324f3f373a19b0fb6601e706"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "a143783fee120db2a5538406c1ef6a1d"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "5ec6407cc5389c655851aeabefb5c081"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "1d83f6dffc5f39298ab013b97d6b831b"
  },
  {
    "url": "en/index.html",
    "revision": "86153c044ebe7f0d40f6a24353105b2e"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "ab2ce58f17cda7c582eb0502b5b62e19"
  },
  {
    "url": "en/terms/index.html",
    "revision": "c7eace7ed400cf013936d9568477bfc4"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "9d3322e9c81c9d7495bfee0d6ad3d7a5"
  },
  {
    "url": "index.html",
    "revision": "4c5b2e0695103c5a6e832b29be193b85"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "73df61193fca61b876bdde453ebacd2f"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "7f32c235d840210e89eb42fe6e5ed2f6"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "938c019085ae5187e3417bd8a8a9a743"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "f1248aa874685f9fab27bb71da28fbd2"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "b19f42912956077ff2c9778d0b38314f"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "74418f91d00b644ec457037c85d83cc7"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "01b094fbfa6cd8fc7495775ce3e8a83e"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "bb95170467e9057c1423254a22c00123"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "56f0a60447d288fce7bc2934e26a353a"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "b35a4f5ee1dc0259384837ef2b203ae9"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "886ca370b78cfbfc4066540060130ef6"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "f6890f95995f2c55c0feb87e18fd08fe"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "4ea728dc919833e38bc9f32fecaee921"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "75caa423c4b41b9e2f3e020197e624da"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "5f4d41673df011bbe92e9ebda9a9df57"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "4b2ee571afc46eb4732ae130fa628710"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "93dd9540ee9deced234b346c83d3413f"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "2d996edbd25d8876935155c1f3277eba"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "9cdfe62ccccf83538a41ca27b694d2e1"
  },
  {
    "url": "pt/index.html",
    "revision": "e5944fcea343f9983a060c2ae3d21942"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "9971271dd164ad7bd3d6b4bfef2d20a8"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "e4794ce1fee8663793da77d3d65c385f"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "911e943d4a932883b86512e11aadf9b3"
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
