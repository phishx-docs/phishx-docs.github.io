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
    "revision": "084b246376e77fb3566b9e4e14a80b7d"
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
    "url": "assets/js/12.852c84dc.js",
    "revision": "2735335f2d9a90fa445153e2e29614bb"
  },
  {
    "url": "assets/js/13.5b32d4cf.js",
    "revision": "04c53f9047dda71487d3409a01c241db"
  },
  {
    "url": "assets/js/14.0bd303fe.js",
    "revision": "2bb5ceadc8df27751c2d8c63d1e3363b"
  },
  {
    "url": "assets/js/15.efe6e885.js",
    "revision": "06e862307808917fd6b2bc596c7adf5a"
  },
  {
    "url": "assets/js/16.a699bb34.js",
    "revision": "966019830272b6be712821671bea8e87"
  },
  {
    "url": "assets/js/17.8bb268fc.js",
    "revision": "cbca70bd374d26510aed245520ea3ea0"
  },
  {
    "url": "assets/js/18.4d00b7d8.js",
    "revision": "dc1ca3c36579f02351e7eeda8018b0aa"
  },
  {
    "url": "assets/js/19.d4934694.js",
    "revision": "6104a4e3ccfa39f955fc19e7f05ebccc"
  },
  {
    "url": "assets/js/20.598cb85d.js",
    "revision": "01632c743ae40b1cca397b974018d1a7"
  },
  {
    "url": "assets/js/21.245bd6c1.js",
    "revision": "6058bd111e984fc3f830a06825305b09"
  },
  {
    "url": "assets/js/22.5927a1bf.js",
    "revision": "a00f0af69f4c5accc762c3187db47d7f"
  },
  {
    "url": "assets/js/23.ff3b1119.js",
    "revision": "92af092f23401d0b5205ed0bf0446295"
  },
  {
    "url": "assets/js/24.ccd2e4b6.js",
    "revision": "a765a6d7b8335ceae2b60b7935604595"
  },
  {
    "url": "assets/js/25.e430f6d7.js",
    "revision": "6b8431f48e2daa2848bbf4efb82de810"
  },
  {
    "url": "assets/js/26.c98d8481.js",
    "revision": "bb2999582c2c46acac7a0b8d8a010f45"
  },
  {
    "url": "assets/js/27.16792423.js",
    "revision": "f9800c1106cc663148cce575f17cd93f"
  },
  {
    "url": "assets/js/28.a7eec089.js",
    "revision": "2247486967165e81a1b1df122d94ff11"
  },
  {
    "url": "assets/js/29.3cfe5e2b.js",
    "revision": "001d60767b62bd3cbb1514fab83ec918"
  },
  {
    "url": "assets/js/3.1dfac114.js",
    "revision": "b793ef6fbe3335d71c7427f75c1123b4"
  },
  {
    "url": "assets/js/30.5430dc9f.js",
    "revision": "892cc7db3975b9eb93e44e2efdedf8d9"
  },
  {
    "url": "assets/js/31.b893ed3b.js",
    "revision": "15726c61037e90f981650402b4c38f73"
  },
  {
    "url": "assets/js/32.9294618d.js",
    "revision": "6470879f9eadb7dcd2807d2410f025a4"
  },
  {
    "url": "assets/js/33.e8703e31.js",
    "revision": "f4aa96d1c7cfa8bd6a75eeba0e74d9ef"
  },
  {
    "url": "assets/js/34.dab6b964.js",
    "revision": "e73a4680f0ac37200ab5a5190135365a"
  },
  {
    "url": "assets/js/35.cccea1db.js",
    "revision": "fde20bd2b2e25c7911b9201036bca452"
  },
  {
    "url": "assets/js/36.bd3aa1dd.js",
    "revision": "1ae98f06094cc68dd96c2c5ca62a1b59"
  },
  {
    "url": "assets/js/37.655ef3cb.js",
    "revision": "7cd301f4d02eb6f3bd76ace6751e16f9"
  },
  {
    "url": "assets/js/38.5582fbe8.js",
    "revision": "6a806ac8b70ef204dc3e0e8442a9f9d4"
  },
  {
    "url": "assets/js/39.cd3c681a.js",
    "revision": "ea3472d2b4c5bdf1b5288750936cafc0"
  },
  {
    "url": "assets/js/4.2c3c7cee.js",
    "revision": "b692f9c8ade95b08e6c987b6fd69079f"
  },
  {
    "url": "assets/js/40.5ba33f93.js",
    "revision": "a9e7d93620ef95bdc2b9a7498e6e6ccc"
  },
  {
    "url": "assets/js/41.4754d5a5.js",
    "revision": "7096a448dc2000306465678774a34d06"
  },
  {
    "url": "assets/js/42.0b2b10a1.js",
    "revision": "078d1460f103cfa77b77a7aa2baff10f"
  },
  {
    "url": "assets/js/43.17ce950c.js",
    "revision": "e1242b2e3e2a56d23a9058a40fae4524"
  },
  {
    "url": "assets/js/44.5015008e.js",
    "revision": "db0e8fea477aa5e9d183363ddc139805"
  },
  {
    "url": "assets/js/45.fca0816e.js",
    "revision": "8a58ce437dc3cb31d75fd163999d16f9"
  },
  {
    "url": "assets/js/46.9eb4ffc0.js",
    "revision": "c0a6552e50fe8b56ded28c4f67e40c90"
  },
  {
    "url": "assets/js/47.f0b28c4e.js",
    "revision": "abb9d5ffdf4a1d061e0e27ed739c255b"
  },
  {
    "url": "assets/js/48.0613aa9f.js",
    "revision": "41994d5b5f7c410d0d523ca9f681f137"
  },
  {
    "url": "assets/js/49.df9a2c07.js",
    "revision": "ccf45b88d354e92aa26df5125e292a9c"
  },
  {
    "url": "assets/js/5.cee9eb57.js",
    "revision": "2fb85a79482893600a0752032d9cab45"
  },
  {
    "url": "assets/js/50.a4933cc5.js",
    "revision": "bcb09bf51b095cdaea0693bfbd154b6d"
  },
  {
    "url": "assets/js/51.5567503f.js",
    "revision": "c82b4d0f8e0bc2a0cb140a9c27e4d68d"
  },
  {
    "url": "assets/js/52.4863a6ae.js",
    "revision": "c69bf30f0156720511c912ea76456430"
  },
  {
    "url": "assets/js/53.44685283.js",
    "revision": "ec30f9180d0d6ca333bb7731f039107b"
  },
  {
    "url": "assets/js/54.bb1acb52.js",
    "revision": "62880476a5e68332da1d71cf4b15de3f"
  },
  {
    "url": "assets/js/55.40d80882.js",
    "revision": "12b63a51b76aaeb809266cb53eddcf6d"
  },
  {
    "url": "assets/js/56.b8d4cb8e.js",
    "revision": "acbe69a49c47af0a4242ff1cbbdd3b75"
  },
  {
    "url": "assets/js/57.ff1342dd.js",
    "revision": "bf8f35249f9dfeff495d7526834ead38"
  },
  {
    "url": "assets/js/58.0209ad21.js",
    "revision": "5fe1b21d58802e8b00bdf69e96d400e6"
  },
  {
    "url": "assets/js/59.cd9d8869.js",
    "revision": "2c897490c313b27f6b014190c0cf3fdf"
  },
  {
    "url": "assets/js/6.b4b9e152.js",
    "revision": "3df7873a055708dfef9200e55d49aced"
  },
  {
    "url": "assets/js/60.a13f93c4.js",
    "revision": "c3d3cfef78edb1c63e52cb075565b5ad"
  },
  {
    "url": "assets/js/61.761253ba.js",
    "revision": "8887b7ae5af1c908a8fa421e8c081e1d"
  },
  {
    "url": "assets/js/62.4fcaf4a6.js",
    "revision": "f3b47e256c7835a3c1a49b2738c9b26f"
  },
  {
    "url": "assets/js/63.929a8c09.js",
    "revision": "e7ff62765ca9939a08847eb02285c9f7"
  },
  {
    "url": "assets/js/64.838aa0f5.js",
    "revision": "7a7c287eab28852841267f6e1a0efbd7"
  },
  {
    "url": "assets/js/65.b7006531.js",
    "revision": "c13c47271551cf89c6f0f275e5458063"
  },
  {
    "url": "assets/js/66.10cb4e58.js",
    "revision": "99ab5e3fff121d1cf5c9cb9e3b04055e"
  },
  {
    "url": "assets/js/67.ad0fcd88.js",
    "revision": "1ff5cee012d0db0b7e53ce04e4078c03"
  },
  {
    "url": "assets/js/68.c50b6360.js",
    "revision": "08208312eea66a6473e7ebee45c7c41f"
  },
  {
    "url": "assets/js/69.72ef5cd9.js",
    "revision": "8fa87d94b3c0457d4d4568b89acb35eb"
  },
  {
    "url": "assets/js/7.58bb1346.js",
    "revision": "81e20ccafb0e8326506d7aefcfd58fb5"
  },
  {
    "url": "assets/js/70.137c56a0.js",
    "revision": "623af8b488adfb4ac1885f4eca5c0604"
  },
  {
    "url": "assets/js/71.c383c6d1.js",
    "revision": "0c671f12b4d4414e767b731ab5093c4e"
  },
  {
    "url": "assets/js/72.e339c951.js",
    "revision": "9e46f6519a3e366721a32e361cb97b70"
  },
  {
    "url": "assets/js/73.dcbc953b.js",
    "revision": "9ddf9a25021df8d6f122c74042e9371d"
  },
  {
    "url": "assets/js/74.d3371002.js",
    "revision": "b4efdbf45196013ea4505cbb365852b4"
  },
  {
    "url": "assets/js/75.15048de2.js",
    "revision": "c296b72cc11ae69bdc332c4ec6d190b2"
  },
  {
    "url": "assets/js/8.9bf2a029.js",
    "revision": "982f1574a14ce4649249f216e66f1e79"
  },
  {
    "url": "assets/js/9.596cfd7d.js",
    "revision": "ba7e89560a4fc4b6fcc60d953b1d2156"
  },
  {
    "url": "assets/js/app.ff513333.js",
    "revision": "6329bb92634c773b5338b1b616a7a3c5"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "b4f9d8b206bd0630d464bad6b606e125"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "b037fe607274bb58722a53fcb6d5f882"
  },
  {
    "url": "en/guide/index.html",
    "revision": "63ad076913dc98e05349dbacf047683d"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "ebc12e9d43e2c1948f1410150522024f"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "f4228a67b7679aee4a0f4ca97dbce6bc"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "05b73fabc0e0e6b9aeb3bd8905290eeb"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "26a2bc51d3624e7a03b7613d7271c6e3"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "aa1ec103a52290711b795a5afe96d2f7"
  },
  {
    "url": "en/guide/people/index.html",
    "revision": "9a4850c1b69e1c50e2d872984c872742"
  },
  {
    "url": "en/guide/people/lists/add_contacts.html",
    "revision": "2725ba4cecd2aa10ab43e55f28a86a88"
  },
  {
    "url": "en/guide/people/lists/import_directory.html",
    "revision": "47fcf2e399b4f54223439d309b8af33a"
  },
  {
    "url": "en/guide/people/lists/import_list.html",
    "revision": "7ca4296eeb87c3e004138a56c5eec1b1"
  },
  {
    "url": "en/guide/people/lists/index.html",
    "revision": "9bed0249d6048d00d6de5159980ca065"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "a247377564862b166a59a66498fd6e03"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "0abdcb399cd9039093d9688753337e10"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "8ea5f1a511137777763362087cdfd4aa"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "12695563ed47dd2052f9a70a093f6098"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "1e3ef891f3e01553c2d04aabfb74cfff"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "92ce629d3864365172b1be6b2c5e6baf"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "94a2ba837e86162681ac8ca7ecff91c1"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "f1b868458a49a3577b2094a31045aa52"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "9da9a847a1af6aeb9970ffbce550d283"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "566601d6d65fb02adfe864cd9909e63f"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "d4644c07fc0b1a6ede32a521cc1f0495"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "d57e44de18082ad9e1bd4c8105ef0bdf"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "5b897d8ab41a84ac1f8c9077ae2c268e"
  },
  {
    "url": "en/guide/ui/index.html",
    "revision": "a3850961ebbe48c23cff48c788333581"
  },
  {
    "url": "en/index.html",
    "revision": "07636ed1992bc0c3ac7412bb20094934"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "e640013e37c3e21a87cc3b5bd99022cc"
  },
  {
    "url": "en/terms/index.html",
    "revision": "5560622539a0d5aac88cf24e4c38dc58"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "92a35511c8c6ade2049895ba8821c7ee"
  },
  {
    "url": "index.html",
    "revision": "177f285ab9eed2eb294ae4c66c193335"
  },
  {
    "url": "pt/content/index.html",
    "revision": "d19d86f552f40e5b1c4c8bf7deba9e54"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "7bffcb2556d35f1b6de6382a5a0b6bdd"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "90d1818f02fd2d3c92048eedcd3713fb"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "9dc558cfb00b852ea05ce45b548cc19a"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "f85c36d78fac94c5e0ac3092a381d6ba"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "141348e949506f509275f191f6c1506c"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "1f0bba6e4fbe25d155596bc4320ae818"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "68928e4c267157ec5ce97c140f09ce33"
  },
  {
    "url": "pt/guide/people/index.html",
    "revision": "3e27a7f478440079b4db17d278738cea"
  },
  {
    "url": "pt/guide/people/lists/add_contacts.html",
    "revision": "26829ffc47ba271981f2e8dff2403fdb"
  },
  {
    "url": "pt/guide/people/lists/import_directory.html",
    "revision": "d5fec1e78af8c977a0d5817c53ca5e7d"
  },
  {
    "url": "pt/guide/people/lists/import_list.html",
    "revision": "8ea453efe16ebfa1396fb678da6551b9"
  },
  {
    "url": "pt/guide/people/lists/index.html",
    "revision": "a604109af6472dbdc81badeeda79581f"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "00e82a1832c48d611d2e07591d03a5f7"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "04989931f29c36bbfbe652e39ced716d"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "8808bd9ea9a378ecebc743c1b6a7ceb2"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "6a41bb7261e6aa07aff417874e62e2bf"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "48a69e50325e8cf37dcb0a6016197191"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "487c4b17d86d37be91e23a20bbe1222e"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "f392786993b7d1aa9bae3b2a1cae946d"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "ff6ef03a915608a474fda18a48823a40"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "be754b4eb1f15c718ddef23a12538dda"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "05bee7eaf2eabf7121a637820919d0b7"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "116d9c5c7bc6c81ace2310e5ccb700a6"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "be04de80af764df308db7680c332f663"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "f654b22ba5ed3fb8fe74372944e00a0c"
  },
  {
    "url": "pt/guide/ui/index.html",
    "revision": "f182f7578c0388a055b9b91d93b1361d"
  },
  {
    "url": "pt/index.html",
    "revision": "949abc05adc52fa1292e29357a3c754c"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "0c0dbc9e451c1d8ace392870c7a84d84"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "fdad3a36620f2bfeb466373f9b5331d5"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "ae8754aaec5c92772d4e4e78e4f0ccd9"
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
