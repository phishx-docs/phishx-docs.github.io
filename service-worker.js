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
    "revision": "ed1e8e82879a9fca7c10bc9ffcecbeea"
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
    "url": "assets/js/13.ea9c870f.js",
    "revision": "caa96cbae70d28a6713188ce20629998"
  },
  {
    "url": "assets/js/14.623603a3.js",
    "revision": "be9eec204723d2781fa246b346bd5804"
  },
  {
    "url": "assets/js/15.06298a81.js",
    "revision": "47179b3df66738a047449b2cf58c06a6"
  },
  {
    "url": "assets/js/16.9b852f78.js",
    "revision": "f25d174dd99482499b8ccc12f965044a"
  },
  {
    "url": "assets/js/17.e94e2e2e.js",
    "revision": "67420d2c434fca4a8df2d17057bc1b0d"
  },
  {
    "url": "assets/js/18.29660091.js",
    "revision": "102e33581fab31c062b43be04659d72a"
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
    "url": "assets/js/20.8c2dca68.js",
    "revision": "a4bbd22ddc71c8694a1132c611985ca8"
  },
  {
    "url": "assets/js/21.c8ea95d5.js",
    "revision": "f9aa01d3dc74ac49de01817f9b534ff4"
  },
  {
    "url": "assets/js/22.41406507.js",
    "revision": "fd463a1384806ce3de5e66cb05405728"
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
    "url": "assets/js/25.b44b3dd5.js",
    "revision": "11100af6443b9b2e10637469ba465af1"
  },
  {
    "url": "assets/js/26.1b63a206.js",
    "revision": "589952556f99cf352d0c556752ef2a2d"
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
    "url": "assets/js/29.56087523.js",
    "revision": "113962e1385f47715b4c449d32108868"
  },
  {
    "url": "assets/js/3.6242c3aa.js",
    "revision": "4452bdda5135ca6a5928bb595d368281"
  },
  {
    "url": "assets/js/30.e7972424.js",
    "revision": "064f608877a2bc137ba9e0b47850a8dd"
  },
  {
    "url": "assets/js/31.410f471d.js",
    "revision": "516de17eb8a2d2c6ffac47be7577780d"
  },
  {
    "url": "assets/js/32.e65d01df.js",
    "revision": "9ea61d257b2e5cf120e86a4593031392"
  },
  {
    "url": "assets/js/33.3b0d1f48.js",
    "revision": "ddc56a661ecf893970cbca1d5ab58fe8"
  },
  {
    "url": "assets/js/34.0b7f305b.js",
    "revision": "6363a9ff7fff02c26d5c59684d26589d"
  },
  {
    "url": "assets/js/35.a6754768.js",
    "revision": "3c48a341fa12c6ed73f9fe7a43823db0"
  },
  {
    "url": "assets/js/36.0892d982.js",
    "revision": "f16eae9695020927e0efbac64e18769b"
  },
  {
    "url": "assets/js/37.e3e00bd6.js",
    "revision": "f3e963c19e2841b83a1a586a57ca0656"
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
    "url": "assets/js/42.649d0c14.js",
    "revision": "ebb610d82b25dca642d1efbdeb91b94a"
  },
  {
    "url": "assets/js/43.14f75484.js",
    "revision": "73d494d8070d85a535199e808ed9f025"
  },
  {
    "url": "assets/js/44.52dce7d2.js",
    "revision": "dfdf3beab094442b646fd8a964ab49de"
  },
  {
    "url": "assets/js/45.488064e2.js",
    "revision": "54bb190aa94b758150840e235c1d6c4a"
  },
  {
    "url": "assets/js/46.866619a0.js",
    "revision": "fb0628d37f00110670ac0a4b987e713c"
  },
  {
    "url": "assets/js/47.39d8e527.js",
    "revision": "0b616ca139dfe136dba98b7a443c7c6d"
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
    "url": "assets/js/50.fd68b494.js",
    "revision": "55e3e8413d09a5776a759d233acd792f"
  },
  {
    "url": "assets/js/51.7571e12c.js",
    "revision": "3956b59a91f2fa298d15945f3fa81d2f"
  },
  {
    "url": "assets/js/52.4bd9eeef.js",
    "revision": "74388d0bd34cff6703e2a1f377f84e87"
  },
  {
    "url": "assets/js/53.cc332ad9.js",
    "revision": "cdaaa4a3536ee18b4216dd2938bd9d43"
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
    "url": "assets/js/app.30b68934.js",
    "revision": "0ac3965b3a28f83de7c7d15845dbb9c9"
  },
  {
    "url": "en/guide/index.html",
    "revision": "593e0f3c6520d321a8588fcdc1b54ffb"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "a0297034b388fd29f4a953831c681dec"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "ba6a3a9a355b427a4951dd007d145bca"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "e18a266c76183c6c64e1a8ebc051e601"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "f63e892db3f950ac02b697d56c1eb3a4"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "9cb08c2e393ea3760956c0ff68eb2bb9"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "dce1068f320672c631cf01e3616e2ecb"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "241fd29bc88503bfbde71838f90b6449"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "cf9acce8f6b9ed65c83b4629012ef20a"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "0876bc075fca3549895413b78a14a530"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "7fcc6660dde954320affd27f4c3b4eca"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "7957e4667d1a5155963ccf199e2ee688"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "f09c83ca6b24e8d8974efee815000a47"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "abaf54bd4340fca3a6b192fdfb4dd737"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "86f6dac01e20745fa6404a64ff98bff2"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "38f97ec8640bf4286ce84a9f45e4b71d"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "9ced1321d2d68b7f418cdcdac35d9ea3"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "92d3bcdd7793bd25f10bf68a24f0d991"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "f08c8eb47094bcce8864daa80a2271ca"
  },
  {
    "url": "en/index.html",
    "revision": "4a2e7d251c194de169d8b541bdd0dde0"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "caeff2cd551e93f0900a3c6758cda54e"
  },
  {
    "url": "en/terms/index.html",
    "revision": "1dd761764cb2b02d974b8e9158ebf080"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "c5c1229b1ec32778543d8dddd4f71ce6"
  },
  {
    "url": "index.html",
    "revision": "32b75b7ff155a0ac9c84b65384170e30"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "5d176448df23b1d74b23cefef5a60534"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "7820be7ab2c95af2cd3c8015ac9049e0"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "d755bc29fd1905f8697591262f9cdb15"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "a5776d4b95a5d65ee317385276658be3"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "64f413e59b49121090a7dae26160159c"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "9dc79519cc3239c31354573fc020d6c8"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "f565c27ec4264e4953dedd218ac352f3"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "73bebc5d4feb53becc283cfd2aed3a70"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "d73df95a09da13b019710d6990ab0659"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "f7047fbadb2b290bb4a40ef84006689d"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "ad1064c7ddb720256e8602defbebff82"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "7928c76b36fde2e5d1f6c898cc40ce2e"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "2793935bc5c5e527d8873019c885251a"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "b29feec2406b0e15e14158fbb2ad1144"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "35d3b34acbee00ad451840e838b7c77a"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "2dc6333307df6a8c2d1787a3a41feced"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "f31142189d80187d0db2975e6464bfb4"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "704fd2dca40ee0c82caefd5e33a44a56"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "0a5f2aad7c511d36cf6982c2d84aa342"
  },
  {
    "url": "pt/index.html",
    "revision": "75c0092ef189330220b96b4cae012273"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "240efc5ab75778973c350842a6ceeafc"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "25f21108015df4ba91628e62a1d5bb39"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "8ee3faa0721bb82c498e3e7b3488e363"
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
