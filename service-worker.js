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
    "revision": "15065489d8de700a1cb42ce6604fc207"
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
    "url": "assets/js/12.eb547762.js",
    "revision": "2b557677242b1fe03ee5945a63abc32f"
  },
  {
    "url": "assets/js/13.a1ce9db8.js",
    "revision": "84fee259de62d0f78a87e76e1c92f852"
  },
  {
    "url": "assets/js/14.951f3d09.js",
    "revision": "118480f5f804f57a7c6597d0314104bc"
  },
  {
    "url": "assets/js/15.7045cd81.js",
    "revision": "5c4d74991759a9bf1f36a4ffdb5315ca"
  },
  {
    "url": "assets/js/16.44e9f5d0.js",
    "revision": "97ad7677535d3ffa50d366a38918aa51"
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
    "url": "assets/js/19.eadeafa3.js",
    "revision": "fc6382321be9966239dc2bf5b461e0da"
  },
  {
    "url": "assets/js/20.70c032ec.js",
    "revision": "e42e7c0cae82c61f98987ab529b6acad"
  },
  {
    "url": "assets/js/21.bbc768c1.js",
    "revision": "7b381fcf71bab2f5fb962b377595035d"
  },
  {
    "url": "assets/js/22.9a4d9080.js",
    "revision": "05bedc8a39a70b86dca5efab29197857"
  },
  {
    "url": "assets/js/23.758757af.js",
    "revision": "ff2b4e1a4c27b612c1f2399866e19922"
  },
  {
    "url": "assets/js/24.2d09acd7.js",
    "revision": "2aad1ef6f6fe7ee5c45fbe356b65f9aa"
  },
  {
    "url": "assets/js/25.78ffa8d7.js",
    "revision": "f8f0415533309336baf0e5ccdbd20fba"
  },
  {
    "url": "assets/js/26.20346aa9.js",
    "revision": "2fc87b439dd98b4fa5fdf843b86efcff"
  },
  {
    "url": "assets/js/27.c6f2f626.js",
    "revision": "c42295fdf6426d3540d40ea88a2a712c"
  },
  {
    "url": "assets/js/28.d0920e01.js",
    "revision": "7a1007feb193bc90d7877b74cd7e1dd0"
  },
  {
    "url": "assets/js/29.fc41e180.js",
    "revision": "f10cf27633379abbfb0659c00f608a18"
  },
  {
    "url": "assets/js/3.7c957e73.js",
    "revision": "1a2797372e9c6c53d1e9374822ae8a32"
  },
  {
    "url": "assets/js/30.ca16a36c.js",
    "revision": "04a7643666811fc8553ccba2eb62ce47"
  },
  {
    "url": "assets/js/31.a721725a.js",
    "revision": "744d34b8b974134283248147a5f27470"
  },
  {
    "url": "assets/js/32.5cdeadd6.js",
    "revision": "d89f128e79c2f22266331da447a89a2f"
  },
  {
    "url": "assets/js/33.abe46953.js",
    "revision": "f6fd11d170a82af74c2e0b418c75edc5"
  },
  {
    "url": "assets/js/34.3b8fe818.js",
    "revision": "c720f5a7bc61aea961257948f5a00bd7"
  },
  {
    "url": "assets/js/35.36684890.js",
    "revision": "a1184c784ee2c0f9c828ddbc139678a9"
  },
  {
    "url": "assets/js/36.3f811d50.js",
    "revision": "37231287a1b60da2e388a00ed43da6a2"
  },
  {
    "url": "assets/js/37.1d21ba43.js",
    "revision": "098c2a891f20d35a9e416169dc53cff0"
  },
  {
    "url": "assets/js/38.6418380d.js",
    "revision": "b9786157816047e7a45f0a001490acf7"
  },
  {
    "url": "assets/js/39.aa602716.js",
    "revision": "eef72d1d28e26dc565ac5bcf6aec7235"
  },
  {
    "url": "assets/js/4.2c3c7cee.js",
    "revision": "b692f9c8ade95b08e6c987b6fd69079f"
  },
  {
    "url": "assets/js/40.26dcda4c.js",
    "revision": "a65073821df758b85421d4fbd3e02f94"
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
    "url": "assets/js/43.637b58ae.js",
    "revision": "baf57ac2dd769b747007ee3798466b5b"
  },
  {
    "url": "assets/js/44.54283e9b.js",
    "revision": "7b10d3b07f21af11f69ff907a0725a09"
  },
  {
    "url": "assets/js/45.ebbad8d1.js",
    "revision": "3c60850b913e8da7393d450feb05ad22"
  },
  {
    "url": "assets/js/46.e21a0360.js",
    "revision": "2ecdaa469c8fc603486c219c3367ae33"
  },
  {
    "url": "assets/js/47.d6ec5b82.js",
    "revision": "a28ecc3e45381df6b0b1632d93e6063a"
  },
  {
    "url": "assets/js/48.8eaf2b01.js",
    "revision": "d1976da764b571616bb7acf61eb7726d"
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
    "url": "assets/js/50.8ceb6af9.js",
    "revision": "44ec5c6f7ba35c87672dbaae4ef176bb"
  },
  {
    "url": "assets/js/51.cd2b1a73.js",
    "revision": "da94ab45ff79ab31ad53e451299882c2"
  },
  {
    "url": "assets/js/52.3cb6c239.js",
    "revision": "853a228217e268df950ea9155aff4c9e"
  },
  {
    "url": "assets/js/53.858d316d.js",
    "revision": "1f09137f63b82e45d158912c1ab0d383"
  },
  {
    "url": "assets/js/54.0d309f2b.js",
    "revision": "bec43b3da81db6fb9468974ea5f5ed12"
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
    "url": "assets/js/57.9a3631b0.js",
    "revision": "5d302965b5c5535e50206b7fccfae766"
  },
  {
    "url": "assets/js/58.ec2b994b.js",
    "revision": "27864f8c588c9c681676a5d078006b18"
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
    "url": "assets/js/60.0ef52ecc.js",
    "revision": "6c6d22f509496bf928d4b8ec4b32cb80"
  },
  {
    "url": "assets/js/61.a5138966.js",
    "revision": "90b4d46ea52f829b0869c60fe0b60fcf"
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
    "url": "assets/js/app.65e4ebcf.js",
    "revision": "9998a36ac70fad7ac8b538e80a507882"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "7e6471756a572152a0cb829353afcf68"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "08293b22f30bcee4ef1b75f156201148"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a11db33381bbc0c92490339af6a42931"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "6dd5835015b01620eeba722c64b26e8b"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "1273f74b3de2f39799d90084b1660677"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "7ddc050a2ae8db3ede1a773cc045c65b"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "ed01e7cc149721b36217aa0a32998b90"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "bfe3c993d630443c114241f9ad2ef669"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "f92100b84e46d8b29ae25b7da2e01f69"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "b695077df6ac7ef24a7dc4744ad09ed5"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "51a6287113a17d95c1ecf5b85c0d78c2"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "8e58c07ca9a230e62e943fdcd51bf4d6"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "3eebf9a5eab3c06d758e55c673c2395d"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "eab3024f3a2a31cfa441da8748bfc1e3"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "bc5453bc8f5fedc34dd298df44da38c1"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "e365e7eb2ec9c008a18f46655bc19c54"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "047343a9d6b5d9ac3d2792f382a2b198"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "efe987f3480db163bbea831ba52bcd5e"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "3385891d7b3f56a2dad0470c51e7ccb1"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "de9661efbc3ac4fbaff0500fe61ea71d"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "64705da4190b63fd643862de65e6205d"
  },
  {
    "url": "en/index.html",
    "revision": "1f984654fdd7c928a339c4720fe8470c"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "960386e1ce20ac22a20f977b741bf6fd"
  },
  {
    "url": "en/terms/index.html",
    "revision": "9479fd32da3d14598713daba6681da27"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "ebc158d3ee76975f792c909650f98c7b"
  },
  {
    "url": "index.html",
    "revision": "a3a2cc0c755a81e0833a093d60b254c2"
  },
  {
    "url": "pt/content/index.html",
    "revision": "33d277bac3554610b5883e3797e0fa2e"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "c3fb4359f5fa3c200688d9d684920ffb"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "698e2764cb04f7457ad44cea21cffc87"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "d7f0dbd2e2bdc79e612489c6a9d2c29a"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "ed3a14d2e10822fdb994d793bc4049d8"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "db9fd97879f7bc6c6b36f8dd6ca353c4"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "19aa48da3843ecb98530380753bf0178"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "8233cf5fae15133c199cca8892e81968"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "93ef018e7df03ccbc2addb74eba865c4"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "917c4631835e315881ef69f63c5e5609"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "820c0a19ef9d2e462a1d21e1a7706b61"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "0cc6ddc74d43e49a6408861cf1b93fbb"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "e8d54f94913732b14426a5de5c893505"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "e994bc2996a43a0c1c45797438442f7b"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "047d4d8c5733f72f383484d168ca0e0b"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "43f73ec5f2981d09ba255e68744f9cde"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "5693160760762d283a87cff173499bf3"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "14c528c6a93276b2fb8c48952f5f5048"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "278de290626d06a174577fc916a3145b"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "d3f47cfc367b49ebade3d3f77c338f89"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "351d783a5a270d30341fa6e428254d88"
  },
  {
    "url": "pt/index.html",
    "revision": "8123db7b95381289957d38410c1164a6"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "b77b72178b23a25851f740bab235558d"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "9fc0afe2ebad1a28fd1789966dce8de4"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "283a2895f4726a8f663d3e68057aaa7e"
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
