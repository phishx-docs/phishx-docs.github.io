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
    "revision": "1dfb48d522cbf61dee621af159b7a630"
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
    "url": "assets/js/10.b1bd2892.js",
    "revision": "7ad676bed4c63c56eb85d83da2f53f27"
  },
  {
    "url": "assets/js/100.e031e36a.js",
    "revision": "c6a118ee29fb7f244d50d41298ec173c"
  },
  {
    "url": "assets/js/101.a773160d.js",
    "revision": "ecab84d3b4c92ca4ef6cbca46841fe93"
  },
  {
    "url": "assets/js/102.dc1023f0.js",
    "revision": "1766812895401aad09edce3201ce4174"
  },
  {
    "url": "assets/js/103.3dfbf695.js",
    "revision": "d155d35708a6615e5aeb6699b82b4c9e"
  },
  {
    "url": "assets/js/104.b994378b.js",
    "revision": "c5da014a4dbe9493a0137921e920ee84"
  },
  {
    "url": "assets/js/105.de4ffb23.js",
    "revision": "7eec7583e43427287806e4a73f360479"
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
    "url": "assets/js/13.01c3a33f.js",
    "revision": "684ebb8a119ec54e7281e6068de8a101"
  },
  {
    "url": "assets/js/14.264a3e0c.js",
    "revision": "0e8b9bbae663be0693b9e0b59c6bce3e"
  },
  {
    "url": "assets/js/15.efe6e885.js",
    "revision": "06e862307808917fd6b2bc596c7adf5a"
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
    "url": "assets/js/18.5aad6635.js",
    "revision": "5d31f0a2dfed7e3fc88b2a7b6ab7e527"
  },
  {
    "url": "assets/js/19.ce6d7222.js",
    "revision": "4bf6e7b9e0ec518ece55f7435bfbb89e"
  },
  {
    "url": "assets/js/20.8147cc06.js",
    "revision": "221b65387b16c90e1577e81d8a4497aa"
  },
  {
    "url": "assets/js/21.04758de4.js",
    "revision": "cf395cc5b59f651ea5cf63cbe636448f"
  },
  {
    "url": "assets/js/22.5a2c1bc1.js",
    "revision": "121c370a66e36949ebe8f7e8a7ed7fef"
  },
  {
    "url": "assets/js/23.0c593f80.js",
    "revision": "63575508aa3e17b8a14c0ff159882b1d"
  },
  {
    "url": "assets/js/24.d2b2b48b.js",
    "revision": "072fc2ec474212208fb9a28a5dbe8bba"
  },
  {
    "url": "assets/js/25.bfcb7738.js",
    "revision": "71781f2f92f1cf5d0c8d543bd7d0ec1b"
  },
  {
    "url": "assets/js/26.5871e7d9.js",
    "revision": "4a5ac0123a18a444036c52ec9185dadd"
  },
  {
    "url": "assets/js/27.25b3fff4.js",
    "revision": "47a11d041932c2f2e1d68123db64db98"
  },
  {
    "url": "assets/js/28.d2458714.js",
    "revision": "44afa5df75066419343eeddfb24d018e"
  },
  {
    "url": "assets/js/29.f80d41eb.js",
    "revision": "01fbe70b4339a6e453fc587e68436ea0"
  },
  {
    "url": "assets/js/3.1dfac114.js",
    "revision": "b793ef6fbe3335d71c7427f75c1123b4"
  },
  {
    "url": "assets/js/30.1ac908be.js",
    "revision": "7b95497f99ea88da6c58402f2ebcd1ab"
  },
  {
    "url": "assets/js/31.cd35fbf5.js",
    "revision": "b16788539cbce80e8d62c8577b97439a"
  },
  {
    "url": "assets/js/32.230acc81.js",
    "revision": "6e5289bd3fdf35e0f4b77b6d9453244b"
  },
  {
    "url": "assets/js/33.414ee5cd.js",
    "revision": "a1f1b67561faa745fd29955c3c4b1680"
  },
  {
    "url": "assets/js/34.a9ef80e4.js",
    "revision": "20a393d8501ed92f2ecf867102c4bfa1"
  },
  {
    "url": "assets/js/35.29cae687.js",
    "revision": "3e94494dd4965621075253b68d1d2449"
  },
  {
    "url": "assets/js/36.61ef57fa.js",
    "revision": "6cd96cea7c84752f13fb5ffd7366b878"
  },
  {
    "url": "assets/js/37.e0239cd2.js",
    "revision": "bbfec712ee2f4b5d3cedea4cbfd1441a"
  },
  {
    "url": "assets/js/38.50261918.js",
    "revision": "edba1a5fca9f21a283be83cafd7f0433"
  },
  {
    "url": "assets/js/39.c5f0657c.js",
    "revision": "9e644c2ce73259332843aed12bf819d5"
  },
  {
    "url": "assets/js/4.2c3c7cee.js",
    "revision": "b692f9c8ade95b08e6c987b6fd69079f"
  },
  {
    "url": "assets/js/40.11c82b38.js",
    "revision": "6261ac4941731bb9a310b743deca4613"
  },
  {
    "url": "assets/js/41.324a0598.js",
    "revision": "faaabe967bcd10d17f6630b3856fa6c4"
  },
  {
    "url": "assets/js/42.9eee9930.js",
    "revision": "a7c1cd74503091b9fb8db309c71a3ce3"
  },
  {
    "url": "assets/js/43.d1d58bef.js",
    "revision": "de6d6efae7a87bc14e807532cf98451a"
  },
  {
    "url": "assets/js/44.507a8a4e.js",
    "revision": "1942360a84f80a72048dc762e4fa0b8c"
  },
  {
    "url": "assets/js/45.e0fd545f.js",
    "revision": "db50848d8637d13230c9b09bf4de04c3"
  },
  {
    "url": "assets/js/46.594a9d3f.js",
    "revision": "104ca63695d807a19d119ba65bf66b63"
  },
  {
    "url": "assets/js/47.5180d2d0.js",
    "revision": "dc0e43bc999cff38335f8fffb75f034a"
  },
  {
    "url": "assets/js/48.bbfd2b0d.js",
    "revision": "a2e06ac0eb6c54b70555f9fb6ed21e4a"
  },
  {
    "url": "assets/js/49.6185f9fe.js",
    "revision": "24eb33cfd0f3021aaca400a79128be72"
  },
  {
    "url": "assets/js/5.4ea58b3f.js",
    "revision": "f4f2f1b636a073913a7bbd1cf69d186e"
  },
  {
    "url": "assets/js/50.4802c07d.js",
    "revision": "4f3899658aa3c56f2b150f872c7ec693"
  },
  {
    "url": "assets/js/51.928b9b66.js",
    "revision": "d6de61ef6eaaa5d698fc86157884899d"
  },
  {
    "url": "assets/js/52.fac2c0f8.js",
    "revision": "7d837f532489ad3c653142db48eaf2ca"
  },
  {
    "url": "assets/js/53.266d037d.js",
    "revision": "53e327b8712026251c1f918920a57477"
  },
  {
    "url": "assets/js/54.61292cfb.js",
    "revision": "97d5019b76374c96c011f85fb1e0f53d"
  },
  {
    "url": "assets/js/55.41a1bffc.js",
    "revision": "c7ba02aa9c4b8e0968a416cd82336b46"
  },
  {
    "url": "assets/js/56.59ef9743.js",
    "revision": "e78376b058854c74d4fbe2c61a8a5baf"
  },
  {
    "url": "assets/js/57.1340b568.js",
    "revision": "95ec16d5b420035929f723ff7237857d"
  },
  {
    "url": "assets/js/58.9c5f55a2.js",
    "revision": "49a6129626cee8f5dfb0c2bc8d81b75f"
  },
  {
    "url": "assets/js/59.8aad73b5.js",
    "revision": "b1efd8421075254904889a9889f1ec75"
  },
  {
    "url": "assets/js/6.1188adea.js",
    "revision": "32e420d32fa117a6dd88fe04629355ba"
  },
  {
    "url": "assets/js/60.8f365cc4.js",
    "revision": "bac49b50597b87f9a3f9c2183e1a15a3"
  },
  {
    "url": "assets/js/61.516a1a9d.js",
    "revision": "b0a4a0264016ac3172cfb22d3f0d85ff"
  },
  {
    "url": "assets/js/62.2925c4b2.js",
    "revision": "2a7743a305f871665f0a48a7939c028d"
  },
  {
    "url": "assets/js/63.032ec139.js",
    "revision": "fb0b5019ed31ceacac33da8ddbd8f316"
  },
  {
    "url": "assets/js/64.7cbf0fe0.js",
    "revision": "b8201715b80cf466b7260d17738faf82"
  },
  {
    "url": "assets/js/65.109e8d00.js",
    "revision": "f411c2915c8568d5037b9ea3eeb9d47a"
  },
  {
    "url": "assets/js/66.ca5707f7.js",
    "revision": "f582ac428ac7a965b9460c1a89fccd9e"
  },
  {
    "url": "assets/js/67.6fa1e143.js",
    "revision": "67b5e80b4be0c27a0ba548979a20dd99"
  },
  {
    "url": "assets/js/68.83c43c10.js",
    "revision": "60222908fbfd7b697cb82f5d4459cd5b"
  },
  {
    "url": "assets/js/69.62bedff4.js",
    "revision": "d36a2aa9defd2e8b577d0ab1ba17c9ff"
  },
  {
    "url": "assets/js/7.58bb1346.js",
    "revision": "81e20ccafb0e8326506d7aefcfd58fb5"
  },
  {
    "url": "assets/js/70.81a3579e.js",
    "revision": "0f197e442ae8ef4ffffec27000ef611b"
  },
  {
    "url": "assets/js/71.6ab84b10.js",
    "revision": "c6ea9a6e959f4e5f7ad38a168e1dd7e8"
  },
  {
    "url": "assets/js/72.ab20085b.js",
    "revision": "551afa0438afca273ba6b914dee1a45d"
  },
  {
    "url": "assets/js/73.de0a7451.js",
    "revision": "369404c531b3f25e03aefb3f5f11b039"
  },
  {
    "url": "assets/js/74.e7afbff0.js",
    "revision": "dce5b462419428a0743a9fb1eb3ba2a3"
  },
  {
    "url": "assets/js/75.8de6d00f.js",
    "revision": "0f0c029bc556334dea6c50e9788c488e"
  },
  {
    "url": "assets/js/76.d8d2c007.js",
    "revision": "18fe7b2690fc4dc6b15f0854947cb9aa"
  },
  {
    "url": "assets/js/77.12d1aece.js",
    "revision": "0c4d3329fd5176f5c3379c44d302fbd1"
  },
  {
    "url": "assets/js/78.dc14c120.js",
    "revision": "616ccb530fe160be9820ebf63ba57ea2"
  },
  {
    "url": "assets/js/79.941a55ba.js",
    "revision": "c6f7459088723d4a611ebe5de8643f20"
  },
  {
    "url": "assets/js/8.cc646e2e.js",
    "revision": "e81bdc164fe9087196245d3c8089170f"
  },
  {
    "url": "assets/js/80.a1887540.js",
    "revision": "5ba336c2255c82cd1f699d338ef17af4"
  },
  {
    "url": "assets/js/81.33a29fd3.js",
    "revision": "9fa40ee53168200fe8cf9fbe1fcdacf6"
  },
  {
    "url": "assets/js/82.a8f7605b.js",
    "revision": "486d393f9ed84f3c3d06968fcb6ecc93"
  },
  {
    "url": "assets/js/83.eed9de78.js",
    "revision": "5ea3be67eb12c9488e3a1c53fe46b032"
  },
  {
    "url": "assets/js/84.0c039818.js",
    "revision": "e852f8cf82d46f18ecb11e24c5175336"
  },
  {
    "url": "assets/js/85.4c65968e.js",
    "revision": "cbb8e83430551780f4ee106556679ff4"
  },
  {
    "url": "assets/js/86.2d5be67c.js",
    "revision": "e2a81c52feb9807f94c72f091eb87f60"
  },
  {
    "url": "assets/js/87.c7f80d66.js",
    "revision": "df49ef2272a65b37ccc6dbd403aa010f"
  },
  {
    "url": "assets/js/88.64ab93bd.js",
    "revision": "a745e86c270d1679204f62f67173914c"
  },
  {
    "url": "assets/js/89.10622e9d.js",
    "revision": "c8f7d01716ae3202b01204b9fcd760c0"
  },
  {
    "url": "assets/js/9.596cfd7d.js",
    "revision": "ba7e89560a4fc4b6fcc60d953b1d2156"
  },
  {
    "url": "assets/js/90.4163f673.js",
    "revision": "3fcff5b412013b0ab47968b6d8b096a9"
  },
  {
    "url": "assets/js/91.18a8cf7a.js",
    "revision": "ce3f22854067bef5377fe7b243c4aed5"
  },
  {
    "url": "assets/js/92.f5d0a990.js",
    "revision": "cbc7e4506cd7753e7ad66c9eba3e28d2"
  },
  {
    "url": "assets/js/93.8af8e129.js",
    "revision": "f36a425dd1abe7da2a69930df002102a"
  },
  {
    "url": "assets/js/94.b448839a.js",
    "revision": "ae1c16d8519f5cde0c4b69093687f51f"
  },
  {
    "url": "assets/js/95.d292b4c2.js",
    "revision": "1474a15e6df481722ef71a27f8192325"
  },
  {
    "url": "assets/js/96.a541d808.js",
    "revision": "b1b0c9b6bc179c4ea66f85253a358f70"
  },
  {
    "url": "assets/js/97.d7787b84.js",
    "revision": "7c2eb84bee0dd5e87c55f11659c10208"
  },
  {
    "url": "assets/js/98.225eaf04.js",
    "revision": "536cd59ad185fed9425c7243a3e7bb6b"
  },
  {
    "url": "assets/js/99.6c3b71b3.js",
    "revision": "dd38f8c7e89a03b705ba55993d674d39"
  },
  {
    "url": "assets/js/app.dee2cdf6.js",
    "revision": "f600dca7b736b418ffe6c380abdb5f04"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "0075cd516a53e797429aeed78f822cd3"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "3fd6b473e2453f1c4fd91cefd617b559"
  },
  {
    "url": "en/guide/index.html",
    "revision": "23398e8875e73233cf6c32001ce5b885"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "1a6a4cd76aa7df8daa0f29593023a116"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "3e33a206914885bd5848032a754c514e"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "0619e677ebcbeffe87ff87b711cd1775"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "2c25aad57264ca90521e07458b6a3d2c"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "d838047e768e9a5936f68c4cad4e3a17"
  },
  {
    "url": "en/guide/people/contacts/index.html",
    "revision": "f0467d50ca1e9a7dca2d4a54d3057d8e"
  },
  {
    "url": "en/guide/people/dynamic/index.html",
    "revision": "ec51235873774c5c60f8e4211fc5b263"
  },
  {
    "url": "en/guide/people/exclusions/index.html",
    "revision": "f225ad3759a02a5b21dc351e6db006d0"
  },
  {
    "url": "en/guide/people/index.html",
    "revision": "42eeff1defdd89e3900e05899d7800b2"
  },
  {
    "url": "en/guide/people/lists/add_contacts.html",
    "revision": "bd42fcbdc26a7632d2a83a7878a19283"
  },
  {
    "url": "en/guide/people/lists/change_fields.html",
    "revision": "114445706e0832fbc8aebe8920cc106c"
  },
  {
    "url": "en/guide/people/lists/delete.html",
    "revision": "ca838bc1527dd924f87a2ce3ed4084f8"
  },
  {
    "url": "en/guide/people/lists/export.html",
    "revision": "d18a55f26863b4cf48d8caf9166c7e5e"
  },
  {
    "url": "en/guide/people/lists/import_directory.html",
    "revision": "210ccf7b78bdef4c2f08a144d6ac0ca6"
  },
  {
    "url": "en/guide/people/lists/import_list.html",
    "revision": "9a748e5956fdc4f3838143f3318a05ad"
  },
  {
    "url": "en/guide/people/lists/index.html",
    "revision": "a3ecddcfde60a0bbb95516b365222205"
  },
  {
    "url": "en/guide/people/lists/random.html",
    "revision": "b3e56f057f774f4a1cb2b0cf9bd8cb92"
  },
  {
    "url": "en/guide/people/results/index.html",
    "revision": "61ea0cbb33d287401c3382bfe803b663"
  },
  {
    "url": "en/guide/people/smart/index.html",
    "revision": "f52c6c8afa77b7619251fe283eb2b24e"
  },
  {
    "url": "en/guide/people/storage/index.html",
    "revision": "73edecc574f8a704ae35c0a750e72d5e"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "ea4cd15bb7f798ef5c24ad75944249dc"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "00beb1222cb8c77b3564abc6e5ff0de2"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "27ed39666fbe97e90b9b6a444fa2af36"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "7c82cd8ca4a185838a1269cb78a39f43"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "4a6c5d1dffc78418c0040c47dee55114"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "1576c74b2e01122af1c7896eb602873c"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "9c996120cf57f20ae0ec85b29fd5b564"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "5289d7700ac1dcc47e1f1eb56556d64d"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "5b0626ae5f261c5f8f690a6c3a744506"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "ecf9efdbf120d2a99de721907c2ee20e"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "78e235b8756fb7bf86a9d4173252677e"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "f68e6de3a2f71324d4b086865ac01f00"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "c29597626f26abcc17a39f11210dcf5a"
  },
  {
    "url": "en/guide/ui/companies.html",
    "revision": "21b6f3a7ed25e1c64ef1a627b52ef5bd"
  },
  {
    "url": "en/guide/ui/filters.html",
    "revision": "c51d35d234ac9b0ddef95f426f6f8a17"
  },
  {
    "url": "en/guide/ui/index.html",
    "revision": "bde4c10b1a813d3385f3258fe4a14bbc"
  },
  {
    "url": "en/guide/ui/languages.html",
    "revision": "26ffae852439776639239ace09dfeaae"
  },
  {
    "url": "en/guide/ui/logout.html",
    "revision": "0d9868bc08600ed3595c06722c5c5dc0"
  },
  {
    "url": "en/guide/ui/search.html",
    "revision": "03957e60bd669ea0c63125be58fe0a51"
  },
  {
    "url": "en/index.html",
    "revision": "73968f6e923d9f936c172c6652c2a0e6"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "aee0aa119de65affc09d835881aae040"
  },
  {
    "url": "en/terms/index.html",
    "revision": "0b4e8d34aa9a28d873c226fdae49c0fd"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "05df9e23b9d6de310bd79423e0e503fc"
  },
  {
    "url": "index.html",
    "revision": "b3b138ca6903c6a15303ae807b9544c8"
  },
  {
    "url": "pt/content/index.html",
    "revision": "b9ee19947fed0226985d537f8f07fbe2"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "bc1fc47610612768764003af3921b565"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "8657a25718124e0831370737f7ca8b63"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "432987fa2b24e9b46029b7765ac0b2b8"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "40011edcb26eb69ba68d148f5efc494a"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "5f89a097a86b511d97af19586e6b8d16"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "48d1030ff5ad5e7e66f3d307b5517522"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "ec5c2500d18165e4c4eacfaf8f19f67d"
  },
  {
    "url": "pt/guide/people/contacts/index.html",
    "revision": "267c0e0c39bb118aff773f01c3a5fc78"
  },
  {
    "url": "pt/guide/people/dynamic/index.html",
    "revision": "c525579798548c7ec9fc1c5155e1ac80"
  },
  {
    "url": "pt/guide/people/exclusions/index.html",
    "revision": "bad8ca7d31950e502c5fa33c4781ac69"
  },
  {
    "url": "pt/guide/people/index.html",
    "revision": "e5b71129c88c1756f9ba084b6670017e"
  },
  {
    "url": "pt/guide/people/lists/add_contacts.html",
    "revision": "cd8cf2ece3bfd8657da1e3a34307e1ee"
  },
  {
    "url": "pt/guide/people/lists/change_fields.html",
    "revision": "e4b42d9b6dc94c86e316a2da30772d69"
  },
  {
    "url": "pt/guide/people/lists/delete.html",
    "revision": "2cda693428e27a0d7250df70f8959fbc"
  },
  {
    "url": "pt/guide/people/lists/export.html",
    "revision": "a2581eb0ffed7526d77d1d8aab2ed03d"
  },
  {
    "url": "pt/guide/people/lists/import_directory.html",
    "revision": "6784a9cded55519aa26f0b8a49243e5f"
  },
  {
    "url": "pt/guide/people/lists/import_list.html",
    "revision": "89ba686f7995e57483636e7c6d2a2673"
  },
  {
    "url": "pt/guide/people/lists/index.html",
    "revision": "55b0b95a1cb9e428848c18df804a9059"
  },
  {
    "url": "pt/guide/people/lists/random.html",
    "revision": "ad494cdc66c665ba227602b741b4afaa"
  },
  {
    "url": "pt/guide/people/results/index.html",
    "revision": "f20d48ab96bf8298528cf7cbb5504c47"
  },
  {
    "url": "pt/guide/people/smart/index.html",
    "revision": "d1c4633d03c3f1678a6026bb3719b694"
  },
  {
    "url": "pt/guide/people/storage/index.html",
    "revision": "93275b8d82f2bc91d9c41d439d6d4bca"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "10fe20abe84dc2048eee6ebcab79f72f"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "9920d673723b74f1e9947f61510957a6"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "d3462ae344cf3f0a1c726e920a00d842"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "1cfc16005db1a4655737a0f149cb5654"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "6947c3684921daae1497f21dce33f1be"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "56179c6e87a0cb35501f4a0701f61991"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "44e9714eb5f1c645300dc94fc36f127b"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "c5e7a81eac681842e7ec82363fe39e69"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "8422337555e119e260d48cf30742c707"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "2c1c736ac20e4ca9d25fe4a5fd52d36c"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "881bdec3c7d93cfa6e5ac63e60b68d93"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "08ded0e0cbcba2ecf6149369a5bfad29"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "10222d527ca5611fbb2548af63fe2973"
  },
  {
    "url": "pt/guide/ui/companies.html",
    "revision": "106cdfb176220c3f17e2d8a9b5b63263"
  },
  {
    "url": "pt/guide/ui/filters.html",
    "revision": "66c5e02f49be73292cf521c94485e3cb"
  },
  {
    "url": "pt/guide/ui/index.html",
    "revision": "d60f1390995529cd134a0ee9ae95dc6a"
  },
  {
    "url": "pt/guide/ui/languages.html",
    "revision": "1ffde6fb76dcb59d67a0ecd446337f51"
  },
  {
    "url": "pt/guide/ui/logout.html",
    "revision": "96eb655414c1b75555f3e693a6d0a67c"
  },
  {
    "url": "pt/guide/ui/search.html",
    "revision": "6f8d7c3da11cb6fee35b44b4e3e605d9"
  },
  {
    "url": "pt/index.html",
    "revision": "95b3d05877e567c8eb630dea3a2eabfb"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "43f7e7768e3e8ea4e08a6c7d5a8552cb"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "1d9d894eeef991843a6580c5c7324a59"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "43d57ae360cf5b2a0f70fcab2e08f31e"
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
