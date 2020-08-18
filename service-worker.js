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
    "revision": "16f8f52b3517bdfe092be3444ce84c5c"
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
    "url": "assets/js/11.09357dc0.js",
    "revision": "6020179ee0ace64296910e7dede97d9f"
  },
  {
    "url": "assets/js/12.77d4bc7a.js",
    "revision": "b44e8fadecea3790e7d7558272809f33"
  },
  {
    "url": "assets/js/13.b8ebc60f.js",
    "revision": "c668f3134be25c56c109ae892c99330a"
  },
  {
    "url": "assets/js/14.4fd2c899.js",
    "revision": "435fedd3364d248157def514b7af265d"
  },
  {
    "url": "assets/js/15.fcffefd7.js",
    "revision": "8d4bcd53e5f205ed1f54cc1db9f3b072"
  },
  {
    "url": "assets/js/16.f464ec39.js",
    "revision": "a82c90c2941d2bf066cf3404dca555c9"
  },
  {
    "url": "assets/js/17.e4b40f7a.js",
    "revision": "c988de7820a63ec5fc4f1651206045b5"
  },
  {
    "url": "assets/js/18.776e9ad3.js",
    "revision": "1fe7d0d0d23fb0835b443a6baeb98d2b"
  },
  {
    "url": "assets/js/19.80871751.js",
    "revision": "6fb9d0d3c4ad760fb966d572d654def6"
  },
  {
    "url": "assets/js/2.b183357f.js",
    "revision": "2d6d58de1c29657ab55f9a753a4ed0bc"
  },
  {
    "url": "assets/js/20.a4d677f8.js",
    "revision": "e5f19c807c5d0b6c4d6bdb1fdc5b33e2"
  },
  {
    "url": "assets/js/21.f9199d99.js",
    "revision": "bec5767f5663c88e3d7c36dfa161833a"
  },
  {
    "url": "assets/js/22.9c6a8509.js",
    "revision": "d3e03462bbd129bcf53d65797f3b713d"
  },
  {
    "url": "assets/js/23.44652a56.js",
    "revision": "8f41232c807b29acf650100fda3e3ab3"
  },
  {
    "url": "assets/js/24.9b07bc79.js",
    "revision": "c266ffd6a4c918c03ccc3448c7811ae4"
  },
  {
    "url": "assets/js/25.2157d2b3.js",
    "revision": "e9b5d81a9e4c2079f1c987f9b19bbf44"
  },
  {
    "url": "assets/js/26.d358e70e.js",
    "revision": "5eb908b0d72d5146d1d338395ff34cd0"
  },
  {
    "url": "assets/js/27.f2ec2a89.js",
    "revision": "a8d29f345838dde3fa437d1f6ca71905"
  },
  {
    "url": "assets/js/28.a49a073e.js",
    "revision": "302f24dffc6fa2f4a767401d99a46b4f"
  },
  {
    "url": "assets/js/29.52032c12.js",
    "revision": "790cd8a5dbd9a6ebad194dd36d9e6d55"
  },
  {
    "url": "assets/js/3.6242c3aa.js",
    "revision": "4452bdda5135ca6a5928bb595d368281"
  },
  {
    "url": "assets/js/30.76ddb059.js",
    "revision": "93474a41f76f6a91042d53a0ce901679"
  },
  {
    "url": "assets/js/31.82450457.js",
    "revision": "908d891131a94722e60ef979a2111f50"
  },
  {
    "url": "assets/js/32.5b59b098.js",
    "revision": "49c597bb935f1bc420aa4d3fc02cff35"
  },
  {
    "url": "assets/js/33.fe855e01.js",
    "revision": "db08fdc2891b68594a4259d89b565b4b"
  },
  {
    "url": "assets/js/34.f50362cc.js",
    "revision": "10ead4d97a666236d856cc8647fa548c"
  },
  {
    "url": "assets/js/35.0405ed25.js",
    "revision": "445883900916dfb57c3cc94001e372ad"
  },
  {
    "url": "assets/js/36.75345b25.js",
    "revision": "7663ef4409b1918595bf432459cd292a"
  },
  {
    "url": "assets/js/37.903dfec9.js",
    "revision": "d0ba4d697812a88d4587bd4d46c86235"
  },
  {
    "url": "assets/js/38.3be6ade2.js",
    "revision": "ef76c605865d7ce1244e850b6d3f01b5"
  },
  {
    "url": "assets/js/39.314b4602.js",
    "revision": "7e2d8787dbff07b17ea9af33aa9da4fd"
  },
  {
    "url": "assets/js/4.39d11c55.js",
    "revision": "f30e76ca9e684b1e2b126d38c56836e4"
  },
  {
    "url": "assets/js/40.92e9a1b3.js",
    "revision": "d5127626538d686c062461784242e69e"
  },
  {
    "url": "assets/js/41.0339e098.js",
    "revision": "da6268239573f1c89538400bdd1892bc"
  },
  {
    "url": "assets/js/42.f4d951b6.js",
    "revision": "ddf078266a9a31b9049d1c39c454faea"
  },
  {
    "url": "assets/js/43.fa508361.js",
    "revision": "0178da997b40fb588612a6a2731cbd52"
  },
  {
    "url": "assets/js/44.abafdbc8.js",
    "revision": "a8dbe1f81f384dfc41e6287a29d94ee3"
  },
  {
    "url": "assets/js/45.2275419d.js",
    "revision": "30f746fe9b88047365d315b0d3bc0f0a"
  },
  {
    "url": "assets/js/46.b58632d7.js",
    "revision": "15d72883eee40890bdcf427b9d60fa81"
  },
  {
    "url": "assets/js/47.69887d7e.js",
    "revision": "a6fc7e47dc03f0b1867a0faac415219c"
  },
  {
    "url": "assets/js/48.03db5fcc.js",
    "revision": "bc4d6d2d6f90c5dea54574cb14849b20"
  },
  {
    "url": "assets/js/49.97d88256.js",
    "revision": "0772c1e429229bbafd9c8bceaef8a29e"
  },
  {
    "url": "assets/js/5.3938782a.js",
    "revision": "893249cac3e7547b97b4f9a57983a7cf"
  },
  {
    "url": "assets/js/50.5b82194a.js",
    "revision": "5b235c3a4f2fefcda6ead9f5fcead55a"
  },
  {
    "url": "assets/js/51.d7480609.js",
    "revision": "9942494a32049345b9095dedd16a6c47"
  },
  {
    "url": "assets/js/52.c09381ee.js",
    "revision": "b71265549e0a8c8909ac6da8850ce092"
  },
  {
    "url": "assets/js/53.9dc7c3ef.js",
    "revision": "e9c055d9ad2ee6abb47724b174bc5dff"
  },
  {
    "url": "assets/js/54.8102e0ad.js",
    "revision": "93a1f2b7ef6cd59e05ceba1b4928b8c6"
  },
  {
    "url": "assets/js/55.d851df03.js",
    "revision": "e55f7bb1f4eee228dfbbf95448106975"
  },
  {
    "url": "assets/js/56.cca3cabe.js",
    "revision": "f3bd511f8dac84553fe293d423f4bc5d"
  },
  {
    "url": "assets/js/57.e95520f8.js",
    "revision": "5639302468d86163e5d16f6b16662e80"
  },
  {
    "url": "assets/js/58.4d9fd538.js",
    "revision": "d80d3bb4700476f2d47d64142feec897"
  },
  {
    "url": "assets/js/59.970b8e8b.js",
    "revision": "da8d153b2650e82c0e3becde4cf5e93b"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/60.339a488d.js",
    "revision": "2db4c940276380f74698c1bc57b404ad"
  },
  {
    "url": "assets/js/61.077fda51.js",
    "revision": "f47d43a8be872b0ed52ac0ffe2ccffd8"
  },
  {
    "url": "assets/js/62.8c866387.js",
    "revision": "9ac0493f4e19cb1e83d2e2dde580adbd"
  },
  {
    "url": "assets/js/7.4304768a.js",
    "revision": "48b7056b4d1603fa97106bb9c39e7da9"
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
    "url": "assets/js/app.20827cc4.js",
    "revision": "056c511fb57ce0325a3a82a48c615dc7"
  },
  {
    "url": "en/content/index.html",
    "revision": "45352271ebb89f528e1a7d2b929c4fcb"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "64e5ab82cf6b7b3e32c2e33b249a77a8"
  },
  {
    "url": "en/guide/index.html",
    "revision": "7ce4125b436c4039945d62c0463f8579"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "352fde1de1419cdc1606e7f28cc98e32"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "f0777ec694920bec485b6a774eef82f3"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "be93d5e18f44df16bb854ea2645619d6"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "5aa9cad305f2e29da8c028433edb16ce"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "25a863527a49f1b08498976a7465f656"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "226c6a0481cb5143de47e7d66673a403"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "66d60426a2de59a71bbf4b16affb5219"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "ec964b84ab7dcfb4043346ee4ffdbc09"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "45d27f1cce4700e212bded0d26e50f5a"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "592866e1c296978d13a8dd4659361989"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "e2f23654f5e9e20983d9927dd512726b"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "3f6f3b7029bab7fe594875c138b2e5a0"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "baa213d663e96ae5935b1fb4e2a56126"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "2ea5369098649648ea2e3a8c1941dec9"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "5d52feeb3d29794bea6ed9ed65e7ab07"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "fee7b9f0ebd20f29dfa34ec303e4d357"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "406cd0b8608e42c777c9c87ca12969ce"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "20d0207a4fc79e142983d0bbdbf4124b"
  },
  {
    "url": "en/index.html",
    "revision": "348643e5301fca2998ea328a9a4895cc"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "ef9903cb3b2692fd88b3abdeeea86fcc"
  },
  {
    "url": "en/terms/index.html",
    "revision": "e75d52d96732fca36773d7a4fac1e4ad"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "88ae655ebebee317b75f13d568c29206"
  },
  {
    "url": "index.html",
    "revision": "8829ec9fcbcbb9c60ed547311f54c69a"
  },
  {
    "url": "pt/content/index.html",
    "revision": "3a453710b90a6e7fbde42112a31071f3"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "6ea6efbac1ec75c80f311033a52db3df"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "75319f6402191982d8b8b755bf72d2ba"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "05052cfe664af2ffdde033db7f412f72"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "e86fc4850b772cac0ecf8581edef98b3"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "07cc4855e2671766f7ff5e3c0cbe6381"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "0c1d7c07f0e9ef87fcb46c63f43c45c3"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "46bdbc8c934613ca51f81aaecd149ffe"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "e38b6833419f990b4018a56469f95fd8"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "43c130d34be04350cc37ca3b392abacb"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "285f32005c7ec3d8d81f47893f2b449a"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "a8f3fe18221741e8fc07dd978d89c312"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "94cbbb47dcf511f92b92ffdfa3b11ef1"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "0fa508894edc4f11b6762769f86ef836"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "4c7519568dbe7ed26a8fa7ddc6a54a85"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "a1a76f47d279f482df3a46637d18fa40"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "281dc6dd36c65cb5504a7119795d3851"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "7b8b192c76e756ae75c1d5af66d2e6f6"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "a59de642883efcda3c11f990f2b8c6ad"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "3947f9948bf4f3c6396371a2dcef3f06"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "e7b0afc6e1ff4dec98d60ab5e23c97fa"
  },
  {
    "url": "pt/index.html",
    "revision": "d6435536afdf550b7e06ef8bfcc6b0e1"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "cb3ea79c08311d314880870ce60c709a"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "b1cfddd66c6b7045bcbdfa61737f5b4f"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "548678700eebc2377a1f0f10eab83bfe"
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
