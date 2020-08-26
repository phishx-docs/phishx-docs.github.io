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
    "revision": "2c51004981e41ff623221e3f4b902497"
  },
  {
    "url": "assets/css/0.styles.f765000a.css",
    "revision": "aa16085331eb442fe6a3cc9c2fe95a78"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b01ba815.js",
    "revision": "13bdf1e22e041deda1da2ba3a2e3bd0c"
  },
  {
    "url": "assets/js/100.e4e13439.js",
    "revision": "79ec6b36bb1b21369327ca41edda45d0"
  },
  {
    "url": "assets/js/101.e190d6aa.js",
    "revision": "8e70cf0928cb1c52f658acb7aa747559"
  },
  {
    "url": "assets/js/102.335a391f.js",
    "revision": "46ce3a4f7be82f58e7368082152d3a1e"
  },
  {
    "url": "assets/js/103.6b81e2a2.js",
    "revision": "2bc1b9cb1eb8c85f38f349115a454812"
  },
  {
    "url": "assets/js/104.82ae967f.js",
    "revision": "d56c0c8da98dc47461dff4aeafe1d28c"
  },
  {
    "url": "assets/js/105.64354819.js",
    "revision": "d83510d81067fb335f984ee4293df205"
  },
  {
    "url": "assets/js/106.48af1044.js",
    "revision": "0ce89822a3d57b23de019839102280e4"
  },
  {
    "url": "assets/js/11.41013288.js",
    "revision": "3406f52dc4d58cbdef376a260ce598c0"
  },
  {
    "url": "assets/js/12.44d7d5c2.js",
    "revision": "55a7c0ce8c8587c85b8294d4afac0be5"
  },
  {
    "url": "assets/js/13.d0787647.js",
    "revision": "18c532a4bffcd5f0db99590ef58bef0f"
  },
  {
    "url": "assets/js/14.5cececd2.js",
    "revision": "bf4a0ac19d284d446e1863d0d0979ac9"
  },
  {
    "url": "assets/js/15.862a6093.js",
    "revision": "659ab231357a9ac97df374f8e4a30f08"
  },
  {
    "url": "assets/js/16.221ec288.js",
    "revision": "6f8eca95ffa106ccb63b1ffda20afef3"
  },
  {
    "url": "assets/js/17.0a884395.js",
    "revision": "0122ceaf5d926e125ad2e5dbb73014bd"
  },
  {
    "url": "assets/js/18.c1c90b29.js",
    "revision": "7ec8c728936fad44d6eaa86307712b4d"
  },
  {
    "url": "assets/js/19.95bf4b25.js",
    "revision": "6488fbae05bb0d9ed03fee583d3feadb"
  },
  {
    "url": "assets/js/20.7c039fc4.js",
    "revision": "1363c6758d7246e70702731eaba7e98e"
  },
  {
    "url": "assets/js/21.a51f3d49.js",
    "revision": "a260f1cdf9d18aa6aad18556aedd0c89"
  },
  {
    "url": "assets/js/22.79ca6bc3.js",
    "revision": "bfa2f8595a546323ef3038f73c0ca1da"
  },
  {
    "url": "assets/js/23.552eb4bb.js",
    "revision": "bb809ec4c023e00d0ec53bb63c718468"
  },
  {
    "url": "assets/js/24.0d1a8940.js",
    "revision": "d6d6fb2a735525cf100724d0c9b142ba"
  },
  {
    "url": "assets/js/25.6ec3ff91.js",
    "revision": "b6be33c4a12c82d0d0592da0cb254e14"
  },
  {
    "url": "assets/js/26.8139e1eb.js",
    "revision": "53204005816476b44223d89393b2b60f"
  },
  {
    "url": "assets/js/27.55496dce.js",
    "revision": "568d6ecd5c0efbeaa3af6aaa9d1f383c"
  },
  {
    "url": "assets/js/28.0ee2d2b3.js",
    "revision": "06f7cc756fac73387e190e832284e99b"
  },
  {
    "url": "assets/js/29.e7959862.js",
    "revision": "4adaed37faa94e6405fe01c79d32db04"
  },
  {
    "url": "assets/js/3.15aaf37b.js",
    "revision": "e894a0f2859f84484d5ba0cda36468b7"
  },
  {
    "url": "assets/js/30.bf852c31.js",
    "revision": "08df594a5d079ac9540a0b7ad2cca330"
  },
  {
    "url": "assets/js/31.62f6dbfe.js",
    "revision": "fec1f28a60c409bba42bb74f0ca11b38"
  },
  {
    "url": "assets/js/32.2291ba72.js",
    "revision": "339ab160ce9d683768d26b8ae5f9efdf"
  },
  {
    "url": "assets/js/33.39cfd5df.js",
    "revision": "8b7708841ad83b1a46a9f226bb835493"
  },
  {
    "url": "assets/js/34.6a89e73e.js",
    "revision": "1ec9e5fd603b0487064b45bd27efdd60"
  },
  {
    "url": "assets/js/35.2438c9ec.js",
    "revision": "c40c2038f5d5335f9aaeda06703d0d4d"
  },
  {
    "url": "assets/js/36.66c8fa9c.js",
    "revision": "8004b393f4437b23e4d8e16f1a116abb"
  },
  {
    "url": "assets/js/37.0166d1df.js",
    "revision": "109f3a9cd38db219c7e082fa0e39c3e2"
  },
  {
    "url": "assets/js/38.431c4415.js",
    "revision": "1feda988810936951c3db78f8a2990a1"
  },
  {
    "url": "assets/js/39.615bf149.js",
    "revision": "05f7ec0b07d6358884618aa5525897d8"
  },
  {
    "url": "assets/js/4.a8f66e75.js",
    "revision": "d3a5f56b4525903e6ad1de5a2b033290"
  },
  {
    "url": "assets/js/40.c54960a0.js",
    "revision": "816886e3739d1cb44bbc6de3d4ad150a"
  },
  {
    "url": "assets/js/41.0a41e94d.js",
    "revision": "426ca6b6436013953ede10e9c75cfc49"
  },
  {
    "url": "assets/js/42.5b3650b3.js",
    "revision": "6c904e6805c4c87fd4848d3acbe731d8"
  },
  {
    "url": "assets/js/43.968a7564.js",
    "revision": "77eb02e496773e32e1e0ff9fe63ec87b"
  },
  {
    "url": "assets/js/44.788b69e2.js",
    "revision": "b9ee3cce5eb3a9993dc461706035013e"
  },
  {
    "url": "assets/js/45.e69a69ef.js",
    "revision": "b2d88a5ea8cc9983b54ba2b7ab5df24d"
  },
  {
    "url": "assets/js/46.3d36c434.js",
    "revision": "7569a76e1910b0568d71eae43b895a90"
  },
  {
    "url": "assets/js/47.b4440f92.js",
    "revision": "623c5c3c3cd924edfc40a8754f6a859b"
  },
  {
    "url": "assets/js/48.6d4256a7.js",
    "revision": "1b77f7338821d504b796b29baeec0ba3"
  },
  {
    "url": "assets/js/49.ce17ef46.js",
    "revision": "71d6ae351fd408edc6ce6c012de1d59d"
  },
  {
    "url": "assets/js/5.07c5ca14.js",
    "revision": "bca8e0d9e1cb69080d88fd98058e3d5c"
  },
  {
    "url": "assets/js/50.9c7b99bf.js",
    "revision": "6fe1d44d44f6e247a787b47530bd67eb"
  },
  {
    "url": "assets/js/51.26bb6202.js",
    "revision": "cea4b008efd5674230d2d2a4fb17b571"
  },
  {
    "url": "assets/js/52.ec0080db.js",
    "revision": "12f2901219301b10e02c1fb69b8604b9"
  },
  {
    "url": "assets/js/53.b9ab5ae5.js",
    "revision": "1abe6b245eb03c158668f160ac3ff078"
  },
  {
    "url": "assets/js/54.d8ee3e77.js",
    "revision": "fde4020de500d67afeaa8ce599d33f9b"
  },
  {
    "url": "assets/js/55.618ac87b.js",
    "revision": "8c942207ed2c84028e648dc8d031f14c"
  },
  {
    "url": "assets/js/56.c75f548b.js",
    "revision": "951060f1a63846c45f4f743adba9275b"
  },
  {
    "url": "assets/js/57.6cfa8be8.js",
    "revision": "00a713df294e3202b72608d4d5dad045"
  },
  {
    "url": "assets/js/58.6d34f9f7.js",
    "revision": "d30ad7e41809c2160ede3613c29d61e9"
  },
  {
    "url": "assets/js/59.536b3ad4.js",
    "revision": "83aa67a27928cf8348a459ce50c8bc61"
  },
  {
    "url": "assets/js/6.009858f1.js",
    "revision": "f7c9826a672a52e4b83443deb3d42705"
  },
  {
    "url": "assets/js/60.6b177345.js",
    "revision": "7c2c5bcafb9e5ac9364947c2df75c271"
  },
  {
    "url": "assets/js/61.3e762d26.js",
    "revision": "59832dc015ce9b555ee1d8a93d4220b1"
  },
  {
    "url": "assets/js/62.3bcf48ec.js",
    "revision": "1a825c00b44f38f8832ac3043f78434e"
  },
  {
    "url": "assets/js/63.d7699592.js",
    "revision": "30a7e3d9e8099e343f6898090aaed0ca"
  },
  {
    "url": "assets/js/64.f3943083.js",
    "revision": "fa62e3a7f5b8eb73025cd39cf455ec58"
  },
  {
    "url": "assets/js/65.90d57b3c.js",
    "revision": "a05a1bb9df8f11a54ca02a4b7f173d95"
  },
  {
    "url": "assets/js/66.d2c02eea.js",
    "revision": "7f14eff13c83e21dda10623e3ad7beab"
  },
  {
    "url": "assets/js/67.214c21c5.js",
    "revision": "afd094bd3c78dfd01aa6bb114dae4eb0"
  },
  {
    "url": "assets/js/68.88f6d8a6.js",
    "revision": "ab449e6b79783723a78c9b0b8644fa67"
  },
  {
    "url": "assets/js/69.313e294d.js",
    "revision": "de6282045d41c252308cdf36d0c25a6d"
  },
  {
    "url": "assets/js/7.940f67bb.js",
    "revision": "1f4336cd3ec8f333004c0fb9b3a1281f"
  },
  {
    "url": "assets/js/70.db62aa09.js",
    "revision": "dba074c0c4375a524e0cf1909e7f9261"
  },
  {
    "url": "assets/js/71.25dd1e3d.js",
    "revision": "322a7f858738f48209ad3339d216d8d7"
  },
  {
    "url": "assets/js/72.ba2f40bc.js",
    "revision": "f1c6484ee92e077308c2cc7eaf1f06da"
  },
  {
    "url": "assets/js/73.b3352440.js",
    "revision": "bd6dc1249fa24aa55d22162d99236734"
  },
  {
    "url": "assets/js/74.d804ff28.js",
    "revision": "86654ffe98ddc017a513634232057f6f"
  },
  {
    "url": "assets/js/75.b1381013.js",
    "revision": "a97fcf9517634d5b77c8ece2d482680d"
  },
  {
    "url": "assets/js/76.21c6a958.js",
    "revision": "6b100418a87bb1edf8be3b1c1ceea316"
  },
  {
    "url": "assets/js/77.84be51e9.js",
    "revision": "4e0202ae86a83c721257ea37a5a8bafa"
  },
  {
    "url": "assets/js/78.a56a2af9.js",
    "revision": "ca6ca8787298bf0b2e65f103e3f75f4e"
  },
  {
    "url": "assets/js/79.b1d86487.js",
    "revision": "eb72d15c7819cfdb4d08ba1871b4c426"
  },
  {
    "url": "assets/js/8.90ff70a2.js",
    "revision": "90bc13305421651722b9082d45fffe95"
  },
  {
    "url": "assets/js/80.38a980de.js",
    "revision": "44baaf1c88ce180145be85616cb652f9"
  },
  {
    "url": "assets/js/81.a94d464b.js",
    "revision": "2e120ccb1bec428489a56e3bb5e72cc6"
  },
  {
    "url": "assets/js/82.9da53abe.js",
    "revision": "f25627222222c5836db1a4e2e465783f"
  },
  {
    "url": "assets/js/83.1ca53e1e.js",
    "revision": "80ef5387c877d4c8d3ba9637c20c5ad1"
  },
  {
    "url": "assets/js/84.645efa06.js",
    "revision": "677a6de5bbdb5fe63abe03cff7236d28"
  },
  {
    "url": "assets/js/85.12475bc9.js",
    "revision": "28c4cad329534ecad79b7fb987101440"
  },
  {
    "url": "assets/js/86.cc98bf1f.js",
    "revision": "f94699018efb6d1664e2fb094d8110b2"
  },
  {
    "url": "assets/js/87.44ff10e7.js",
    "revision": "17498e4bcc99d683f4d443b2401720d9"
  },
  {
    "url": "assets/js/88.a93caed4.js",
    "revision": "9f075e9263e1753df263fdf059588b18"
  },
  {
    "url": "assets/js/89.af0eea86.js",
    "revision": "564324965e7dc70f6f2cf148d4e02c65"
  },
  {
    "url": "assets/js/9.37998b94.js",
    "revision": "294cb5ff0f40818ec39ee09c41fe3da7"
  },
  {
    "url": "assets/js/90.2e1190b8.js",
    "revision": "c280c5b4e3041bc4f4ea343735454428"
  },
  {
    "url": "assets/js/91.8bbdadbb.js",
    "revision": "39a1eb2dfbde88df643ea6b33b641b76"
  },
  {
    "url": "assets/js/92.55aa02f7.js",
    "revision": "7b5c0071b155211e2e48879bfec61057"
  },
  {
    "url": "assets/js/93.b8fd6760.js",
    "revision": "f1fa58cd5959e2ba25188193e0f2bfcf"
  },
  {
    "url": "assets/js/94.fa5269d7.js",
    "revision": "7ec989abe19be585f43170bd1ee6f848"
  },
  {
    "url": "assets/js/95.d9289e7c.js",
    "revision": "656888c1a290436dbda4001d64c8f760"
  },
  {
    "url": "assets/js/96.43e0746a.js",
    "revision": "f093ad5af7809ddfc12efb52d5a492ef"
  },
  {
    "url": "assets/js/97.df69bb4b.js",
    "revision": "3938c496b2678683ebefab9e3d543a1d"
  },
  {
    "url": "assets/js/98.292e60a9.js",
    "revision": "b115b2b8515db2db888b7016c89011db"
  },
  {
    "url": "assets/js/99.2767d72d.js",
    "revision": "9f31a4631a9349b11fbf658a5b331870"
  },
  {
    "url": "assets/js/app.d568eb4c.js",
    "revision": "fd1865bb3f2e3efde880b6683c13a725"
  },
  {
    "url": "assets/js/vendors~docsearch.2e7b3f28.js",
    "revision": "21f8b42bab05cccf28bfa12ea7f3c2a4"
  },
  {
    "url": "en/content/index.html",
    "revision": "e7379c3b0404ec0d592f7ac98786ae00"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "0575681f274b26a00767ec426ea9f9d6"
  },
  {
    "url": "en/guide/index.html",
    "revision": "a2ac27eeb92eac9a6eec49f8ce535f4a"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "070c275c639dbed14450e84f8a763779"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "05c83007d7e6f1689be9533d562f9cd0"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "e887b1c7d74eb5f68eb9e968560b699f"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "cbcc8d045d684a7946c86b7db1bc2f49"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "6de115c416b6d9d6633b4ecf691a5a2e"
  },
  {
    "url": "en/guide/people/contacts/index.html",
    "revision": "b41d076c7e90bbb4d8cb40db617731af"
  },
  {
    "url": "en/guide/people/dynamic/index.html",
    "revision": "578724a1e96b6220ffc794ef39ecd00f"
  },
  {
    "url": "en/guide/people/exclusions/index.html",
    "revision": "48c17619951a28088b4a50a70c67eace"
  },
  {
    "url": "en/guide/people/index.html",
    "revision": "231050d13601c395b13a3aa261863570"
  },
  {
    "url": "en/guide/people/lists/add_contacts.html",
    "revision": "afbd0552f86d490dd65738b11a152113"
  },
  {
    "url": "en/guide/people/lists/change_fields.html",
    "revision": "32a2c8fc359389d554fcbf9a1bd09108"
  },
  {
    "url": "en/guide/people/lists/delete.html",
    "revision": "58718822f475af0ba7d47a4648b7c847"
  },
  {
    "url": "en/guide/people/lists/export.html",
    "revision": "fbd56dcdd5f4b1c698dfc0ffdac1eb05"
  },
  {
    "url": "en/guide/people/lists/import_directory.html",
    "revision": "5a8e33e7e28a543d425760bb3dea7c56"
  },
  {
    "url": "en/guide/people/lists/import_list.html",
    "revision": "9624989d081a60f490622bfcbdf1026d"
  },
  {
    "url": "en/guide/people/lists/index.html",
    "revision": "553dff2b38aebf6dd6911eb7abe293b0"
  },
  {
    "url": "en/guide/people/lists/random.html",
    "revision": "9a3e35b33e8565f2758788b3a18d7be0"
  },
  {
    "url": "en/guide/people/results/index.html",
    "revision": "879d5897307e0b8a400f639d0a49c4f1"
  },
  {
    "url": "en/guide/people/smart/index.html",
    "revision": "60ec40c8cdffc445c86dec477a51697f"
  },
  {
    "url": "en/guide/people/storage/index.html",
    "revision": "938d25198ab45eae4658ef600d5abbb3"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "d0cf4bbd63312b640f62eccce2f23e13"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "0c3f8ea36fb187f59624c83ac08b3764"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "dfd65c6f6793068695c9bd10f7093425"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "56f026d9b238d92f5aa67bf358254541"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "74665322d608dd782b80a22f7a394425"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "63b1446a2b1b7d9711921bb22fae2a2c"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "b247902a6daf5a1d9a5ca816460ffad8"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "694947c768ea22c5995cdc141b48b70e"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "83d581ce49564efbb86210d83547dd71"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "f918b680dbfd7f681ef622b005e8fdf2"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "bca207e709ef4f61caed304ce258c503"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "f23b1a384920affee3a3a73a0d72e8e2"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "56a5a0ba4b0b86e97c0f0a5498edb8ae"
  },
  {
    "url": "en/guide/ui/companies.html",
    "revision": "6d9e5c2537b2ee8dfce341791337ae27"
  },
  {
    "url": "en/guide/ui/filters.html",
    "revision": "5f3fbd9162e9ca932e872f534e930cf3"
  },
  {
    "url": "en/guide/ui/index.html",
    "revision": "26ca6d841ce4fbe836e577c06fdade8d"
  },
  {
    "url": "en/guide/ui/languages.html",
    "revision": "0652bd2d3c05504b8c0a5479212a1852"
  },
  {
    "url": "en/guide/ui/logout.html",
    "revision": "1bd1eeae5e632570764d4830e7b487e8"
  },
  {
    "url": "en/guide/ui/search.html",
    "revision": "2966bcbfa3a1a0e820250dc65237b7f4"
  },
  {
    "url": "en/index.html",
    "revision": "8153a5b2436abc36f41212d9f9841f83"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "1e5ce6bbed6f9fd2f1ad38f6c6b4da83"
  },
  {
    "url": "en/terms/index.html",
    "revision": "cd392ef23eaacdeb053cc6cefce0661e"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "28efc854f1a8ee79c43ad40051bbdc1d"
  },
  {
    "url": "index.html",
    "revision": "3c6a85c47006c6176c5c59628b887997"
  },
  {
    "url": "pt/content/index.html",
    "revision": "897e28ca5ead0d50cbcba22155eb78d6"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "3f070cd32b0e4666081fe7c8d9cc774d"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "262318eeac3d8f6e095a5dff2cb50892"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "40599782eeb43e54c91487267c8f715c"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "99f2a0709771cfb4c99b2f3c613a4a4b"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "36536207af2cecd19fb0e3ece1c1c1e3"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "c90ec9f20867862e36e4b1ede29b4baa"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "d0bd691d3bf7d0bbdccb2e8ea581e27b"
  },
  {
    "url": "pt/guide/people/contacts/index.html",
    "revision": "6762592bdf8f4aeb56d8cae6874aa7d6"
  },
  {
    "url": "pt/guide/people/dynamic/index.html",
    "revision": "9a354e91cfa12249bfdf6453dddfc74c"
  },
  {
    "url": "pt/guide/people/exclusions/index.html",
    "revision": "cdec999ce494e786de34ec695319ad54"
  },
  {
    "url": "pt/guide/people/index.html",
    "revision": "5620bc1ed5f0ad0c064ea1b598d3a708"
  },
  {
    "url": "pt/guide/people/lists/add_contacts.html",
    "revision": "276850b484189389c48a561960a6c012"
  },
  {
    "url": "pt/guide/people/lists/change_fields.html",
    "revision": "cb75aa97f66a4c79c7e4b2b667b289b5"
  },
  {
    "url": "pt/guide/people/lists/delete.html",
    "revision": "a37e84a040bf2fdb5398f7a95cf23b6c"
  },
  {
    "url": "pt/guide/people/lists/export.html",
    "revision": "4d8ef6aebebc823cda201eaa1b432acd"
  },
  {
    "url": "pt/guide/people/lists/import_directory.html",
    "revision": "32f23e02f76483052fc28df5f3c5b790"
  },
  {
    "url": "pt/guide/people/lists/import_list.html",
    "revision": "e5f8f8ad7a4a3039583ae2360aa7d927"
  },
  {
    "url": "pt/guide/people/lists/index.html",
    "revision": "9e83d2b320bf6a739cc739749924ab86"
  },
  {
    "url": "pt/guide/people/lists/random.html",
    "revision": "0d8bb116cee546e03340126714822931"
  },
  {
    "url": "pt/guide/people/results/index.html",
    "revision": "b5911b3e0f2e5aea8a0aab1432a7de29"
  },
  {
    "url": "pt/guide/people/smart/index.html",
    "revision": "b188c6b255d1ecf98863669b62ac0f41"
  },
  {
    "url": "pt/guide/people/storage/index.html",
    "revision": "e743c9d1048b70b67dc47a26777922ba"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "e9e5bc8a94097003944fd8df5e5b7ded"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "f0b0513ce2c0484a06100e676959d27b"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "ff92ad134dcc1dd07cf078cc935217f2"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "a4b656ce023958a7d3fcecdbd4bb1e4d"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "57034d317698bad6380b53fb7d941332"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "b0b8f370c2677b3e1998ca2eeba0aff9"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "c564287275274c0d29521d7134a016dc"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "69516309dec58593b9623fd11f995783"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "7ac86030f3cfb9513bddd8f738b64e48"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "43f9fae062e95d3fef201cec01c58c46"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "11f32c164dc7e73caf356285c385126a"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "92a4520786cad4f0eef98c238cf24516"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "fc920980de1abf06c466065a954b21ad"
  },
  {
    "url": "pt/guide/ui/companies.html",
    "revision": "52917307982b854d453b0fb29126fcf2"
  },
  {
    "url": "pt/guide/ui/filters.html",
    "revision": "99ce9cf72aa54a838e54088ac1dd9048"
  },
  {
    "url": "pt/guide/ui/index.html",
    "revision": "881278c5dcbb351c00f895a2ec3fc344"
  },
  {
    "url": "pt/guide/ui/languages.html",
    "revision": "b48c57b7774f6208fc737e3f79122748"
  },
  {
    "url": "pt/guide/ui/logout.html",
    "revision": "5ed300dc718e2d474f6817bdff599685"
  },
  {
    "url": "pt/guide/ui/search.html",
    "revision": "e6f7d29c66530e785998bed9c46eb497"
  },
  {
    "url": "pt/guide/users/index.html",
    "revision": "dfd03f5ce86038fb03511b7783a57d31"
  },
  {
    "url": "pt/index.html",
    "revision": "777fa98e79f7901553d3ecab7438e999"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "696192c704bd3e8c4d17da33a0a7aff2"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "c3cb905ee98e5faef3a0df3c152e5279"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "fdf42232076bac56e2ac75d864f004e3"
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
