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
    "revision": "f761c836e3911e613b9c3efd182293c4"
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
    "url": "assets/js/100.2186f8a6.js",
    "revision": "74ebb068b50debd3bfda12ed782fd03d"
  },
  {
    "url": "assets/js/101.2a783b73.js",
    "revision": "1c73e217979758e031eda8c74fa0669a"
  },
  {
    "url": "assets/js/102.839cd02e.js",
    "revision": "73d3076637a6811d09e41fcdedd7dbb7"
  },
  {
    "url": "assets/js/103.4b5307b6.js",
    "revision": "21328723566205987f296bd369c85d86"
  },
  {
    "url": "assets/js/104.df92a84f.js",
    "revision": "8ff5b6bb13c0781254e0f752da0b77a2"
  },
  {
    "url": "assets/js/105.fa1c475f.js",
    "revision": "ca9f4d0e19a1d62b9ba75753fcc88e9c"
  },
  {
    "url": "assets/js/106.84b6556e.js",
    "revision": "10d6cb934fae9a6fd8b998722d1b4eb6"
  },
  {
    "url": "assets/js/11.5dedc72f.js",
    "revision": "155690a7bd88e04f75d345d45294a0f0"
  },
  {
    "url": "assets/js/12.232e2be1.js",
    "revision": "aad048f0f2be7c946fd553879033ad2d"
  },
  {
    "url": "assets/js/13.a1ce9db8.js",
    "revision": "84fee259de62d0f78a87e76e1c92f852"
  },
  {
    "url": "assets/js/14.dab4d4f9.js",
    "revision": "8094b0fcf44acd5ab2efec7e5552c30f"
  },
  {
    "url": "assets/js/15.a0f08eab.js",
    "revision": "cd51582badfd14eb788ddff6f4eea68b"
  },
  {
    "url": "assets/js/16.a699bb34.js",
    "revision": "966019830272b6be712821671bea8e87"
  },
  {
    "url": "assets/js/17.6b61e496.js",
    "revision": "a54d40f6f6decd93f79e0e35ef127899"
  },
  {
    "url": "assets/js/18.b01084b2.js",
    "revision": "91e9f9e5bb55f180f266867b7b655983"
  },
  {
    "url": "assets/js/19.7eb89e43.js",
    "revision": "9ff69d144fa43ae1d44445b4e6502dfc"
  },
  {
    "url": "assets/js/20.3d440691.js",
    "revision": "f3e00668d218d272f852f99170a0ada3"
  },
  {
    "url": "assets/js/21.bbc768c1.js",
    "revision": "7b381fcf71bab2f5fb962b377595035d"
  },
  {
    "url": "assets/js/22.0f26dd44.js",
    "revision": "a5a85369e4af6000a82ed2fe0b2a8055"
  },
  {
    "url": "assets/js/23.7dd6f9cf.js",
    "revision": "340906064aeb5d143ee8997ced958705"
  },
  {
    "url": "assets/js/24.93b8d4aa.js",
    "revision": "2d1a7c6af9b20118ae08920e9d9896eb"
  },
  {
    "url": "assets/js/25.f24112b9.js",
    "revision": "a0dc7242f5b3c367ba9e2b4465e2b3f1"
  },
  {
    "url": "assets/js/26.5871e7d9.js",
    "revision": "4a5ac0123a18a444036c52ec9185dadd"
  },
  {
    "url": "assets/js/27.cdef4f23.js",
    "revision": "3c0a486de3aff6792174efb89191df13"
  },
  {
    "url": "assets/js/28.d2458714.js",
    "revision": "44afa5df75066419343eeddfb24d018e"
  },
  {
    "url": "assets/js/29.d28ab73e.js",
    "revision": "6ba95f641979575f0d3cd13ab1387967"
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
    "url": "assets/js/31.6e9603c7.js",
    "revision": "0f91fa5d017518446113128c79c67516"
  },
  {
    "url": "assets/js/32.02805ef3.js",
    "revision": "62a1f53274bf4a7cdaf65fbd6ea57bfc"
  },
  {
    "url": "assets/js/33.414ee5cd.js",
    "revision": "a1f1b67561faa745fd29955c3c4b1680"
  },
  {
    "url": "assets/js/34.f9345f94.js",
    "revision": "48d5ca292f4a6bad7b7c985d661d6561"
  },
  {
    "url": "assets/js/35.450ca65e.js",
    "revision": "1fe6507fb9c37b7cf15d54613a85fd3f"
  },
  {
    "url": "assets/js/36.b4e281a5.js",
    "revision": "2488439f1e71fae6d28ebd1783194928"
  },
  {
    "url": "assets/js/37.e0239cd2.js",
    "revision": "bbfec712ee2f4b5d3cedea4cbfd1441a"
  },
  {
    "url": "assets/js/38.1c4eec2a.js",
    "revision": "35d906dc3d31b8146bb5016d076ac0e9"
  },
  {
    "url": "assets/js/39.85a962ea.js",
    "revision": "94679a5c7fdc2035457d25a9f89c040d"
  },
  {
    "url": "assets/js/4.2c3c7cee.js",
    "revision": "b692f9c8ade95b08e6c987b6fd69079f"
  },
  {
    "url": "assets/js/40.04d50fcc.js",
    "revision": "37da3608cf34aaecf4509aac86d391af"
  },
  {
    "url": "assets/js/41.ff4bc4c7.js",
    "revision": "342595dc0b97c769a5fc7c972234c8dc"
  },
  {
    "url": "assets/js/42.fcc03469.js",
    "revision": "6d73673979615a12e4d5d4fef8a0e2e3"
  },
  {
    "url": "assets/js/43.a87e9b78.js",
    "revision": "5353626e3826c048c4a2744aaa95e0c5"
  },
  {
    "url": "assets/js/44.88261569.js",
    "revision": "36c1ed7cd3449c4909d66034654ef852"
  },
  {
    "url": "assets/js/45.67c0fa2c.js",
    "revision": "5d88fb8028b00c52db06bbbe37017d9c"
  },
  {
    "url": "assets/js/46.2f60abd3.js",
    "revision": "a3859b02b07308d95dce9030b0a1bbc2"
  },
  {
    "url": "assets/js/47.d4b59246.js",
    "revision": "6e585a22aaf59db154f5b25635fa8b31"
  },
  {
    "url": "assets/js/48.bbfd2b0d.js",
    "revision": "a2e06ac0eb6c54b70555f9fb6ed21e4a"
  },
  {
    "url": "assets/js/49.a18e0623.js",
    "revision": "90bcdad9c8af9269976186f238d1493d"
  },
  {
    "url": "assets/js/5.4d554b8f.js",
    "revision": "bb676513c4fd50b7656277968d4431af"
  },
  {
    "url": "assets/js/50.9b756b78.js",
    "revision": "b3f536b01d43cf1909ee35cbdeaebeea"
  },
  {
    "url": "assets/js/51.526a9050.js",
    "revision": "91f52abc1130a841ac6b25412a7be703"
  },
  {
    "url": "assets/js/52.71731364.js",
    "revision": "e24eb7ee9f52fa910ccd67a2c5a0945a"
  },
  {
    "url": "assets/js/53.dea6ce63.js",
    "revision": "cb76eb954d3750f488240adfea9e40f0"
  },
  {
    "url": "assets/js/54.774dd9d2.js",
    "revision": "20fa7e3273c56864a79f9a891719436d"
  },
  {
    "url": "assets/js/55.ae924e8c.js",
    "revision": "fa162fa860d1a25582fe3a474f928c52"
  },
  {
    "url": "assets/js/56.b7ca4949.js",
    "revision": "965d2640b9f3f760eceae46ff54d9059"
  },
  {
    "url": "assets/js/57.1340b568.js",
    "revision": "95ec16d5b420035929f723ff7237857d"
  },
  {
    "url": "assets/js/58.ac57872b.js",
    "revision": "e52711df0b3e65e68b28cf55553a9d53"
  },
  {
    "url": "assets/js/59.6993aae4.js",
    "revision": "e52a60764a64b1a48804275ab06e820e"
  },
  {
    "url": "assets/js/6.66a079c1.js",
    "revision": "f14d7f78affc068a212c0859f66adf6a"
  },
  {
    "url": "assets/js/60.d9b23842.js",
    "revision": "50231f7af2fc529df54faf43bf269d3c"
  },
  {
    "url": "assets/js/61.718aaa29.js",
    "revision": "9528aa40cd34c294ddaca68ee38aa8cb"
  },
  {
    "url": "assets/js/62.1bc79d88.js",
    "revision": "719328e6a83057052c85a6cef576041b"
  },
  {
    "url": "assets/js/63.5ff28442.js",
    "revision": "f5d349a3e03bf23fcb52eb7423c22ba1"
  },
  {
    "url": "assets/js/64.68dd759c.js",
    "revision": "979d8b68ea7dd0911960b32e6c8972c9"
  },
  {
    "url": "assets/js/65.7115a981.js",
    "revision": "22a82963478a7ca2c69a650b80e376ac"
  },
  {
    "url": "assets/js/66.8087b418.js",
    "revision": "5729a915d7ab7008f39e4ce10c357a76"
  },
  {
    "url": "assets/js/67.6fa1e143.js",
    "revision": "67b5e80b4be0c27a0ba548979a20dd99"
  },
  {
    "url": "assets/js/68.b1a90b2b.js",
    "revision": "126dc341028c7672729d1b0d5825ce62"
  },
  {
    "url": "assets/js/69.133152a0.js",
    "revision": "c5b6c859bd813c8294d2bacfb830e5c7"
  },
  {
    "url": "assets/js/7.58bb1346.js",
    "revision": "81e20ccafb0e8326506d7aefcfd58fb5"
  },
  {
    "url": "assets/js/70.dbb0ac3b.js",
    "revision": "0a6687942797fe252ec76923926d1689"
  },
  {
    "url": "assets/js/71.dc6f04ad.js",
    "revision": "28b847f277aae031438446c9a8a20428"
  },
  {
    "url": "assets/js/72.26af6fec.js",
    "revision": "cdac2404fcab44d4d91d69588fd20a32"
  },
  {
    "url": "assets/js/73.3826d9da.js",
    "revision": "7fa9bc096c25d1d0d981dfc0a218715f"
  },
  {
    "url": "assets/js/74.b7dcbc34.js",
    "revision": "0775d61b6f7a5c1e956987060cdc1971"
  },
  {
    "url": "assets/js/75.ffe5e3f7.js",
    "revision": "e5f8169755ade4b5ba16f547303728df"
  },
  {
    "url": "assets/js/76.5816878e.js",
    "revision": "5aa565c637d373181766f4383a0d8850"
  },
  {
    "url": "assets/js/77.3e5ccdff.js",
    "revision": "0dd09cb5bb05d6524bc637a0f999aabb"
  },
  {
    "url": "assets/js/78.0c3abe16.js",
    "revision": "e72a18cae7122a498a2952fcd33ef70f"
  },
  {
    "url": "assets/js/79.74986136.js",
    "revision": "6f19f14c81dd3960615ecaf97d5008b5"
  },
  {
    "url": "assets/js/8.8caed144.js",
    "revision": "4fbdac17977584e1537516e3bce93f7c"
  },
  {
    "url": "assets/js/80.a1887540.js",
    "revision": "5ba336c2255c82cd1f699d338ef17af4"
  },
  {
    "url": "assets/js/81.af25d77a.js",
    "revision": "7df77d985728bf41ac05d35312f64468"
  },
  {
    "url": "assets/js/82.a8f7605b.js",
    "revision": "486d393f9ed84f3c3d06968fcb6ecc93"
  },
  {
    "url": "assets/js/83.2209b2f8.js",
    "revision": "ea08d3533dc8838f9b14c8973a05e781"
  },
  {
    "url": "assets/js/84.0c039818.js",
    "revision": "e852f8cf82d46f18ecb11e24c5175336"
  },
  {
    "url": "assets/js/85.dd2ba888.js",
    "revision": "55b57d17e50b837dc6b9b077b09fd41c"
  },
  {
    "url": "assets/js/86.2d5be67c.js",
    "revision": "e2a81c52feb9807f94c72f091eb87f60"
  },
  {
    "url": "assets/js/87.611e28b4.js",
    "revision": "1de5794609a1221e11f7f4bf919cdfb1"
  },
  {
    "url": "assets/js/88.23481148.js",
    "revision": "273bf0065899fcb578411b2f81c6c5e4"
  },
  {
    "url": "assets/js/89.f2f3a7c8.js",
    "revision": "01aa4ae7339337c3adb3dc1e99a5563c"
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
    "url": "assets/js/92.369f0eda.js",
    "revision": "52c3a8d86ba811a503da5bd93fe7fe6d"
  },
  {
    "url": "assets/js/93.0b767457.js",
    "revision": "07a83fa34c8bff529ec638b87e288a8d"
  },
  {
    "url": "assets/js/94.b448839a.js",
    "revision": "ae1c16d8519f5cde0c4b69093687f51f"
  },
  {
    "url": "assets/js/95.a77a79c9.js",
    "revision": "0eb839881623e4bf42b7df1bb52daca4"
  },
  {
    "url": "assets/js/96.48efccb2.js",
    "revision": "7e3258f321df0f40b75f9a8c9fad463a"
  },
  {
    "url": "assets/js/97.0cfe3a1b.js",
    "revision": "31bfef9a70738aba21c80c98438e9ea9"
  },
  {
    "url": "assets/js/98.c4c9b294.js",
    "revision": "beb0b34d4bc818038a23b37ce2e7c73a"
  },
  {
    "url": "assets/js/99.6c3b71b3.js",
    "revision": "dd38f8c7e89a03b705ba55993d674d39"
  },
  {
    "url": "assets/js/app.b5b46a05.js",
    "revision": "7f801618644eeca9e008412f1cd0923b"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "a10a18418d64d3a50963242db3397ac8"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "ee0e57eac3747eeb8d3ae0a7abe31366"
  },
  {
    "url": "en/guide/index.html",
    "revision": "90b277e09631400ff9b8763be710d994"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "8745a630c8669ad23ec50a294b3240ae"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "75501ab25f0886487cf3fa46cd2c45a9"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "69dced36f7ad434b748b8f75b3749801"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "6daec8b6c4336f609a09e63653851de9"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "a8502edc865437985e82e63c76d7a0ca"
  },
  {
    "url": "en/guide/people/contacts/index.html",
    "revision": "0ba987bc1711f0008cb885b259213cda"
  },
  {
    "url": "en/guide/people/dynamic/index.html",
    "revision": "ba2f17743afd9f49b09bd267b993e73d"
  },
  {
    "url": "en/guide/people/exclusions/index.html",
    "revision": "fbf88021b8ba33153c203b31eaf4d1f8"
  },
  {
    "url": "en/guide/people/index.html",
    "revision": "6762f511f7e800cfb32893696e8fb4a6"
  },
  {
    "url": "en/guide/people/lists/add_contacts.html",
    "revision": "3b4218633d30ab13f0add6ec44d61388"
  },
  {
    "url": "en/guide/people/lists/change_fields.html",
    "revision": "a607e550002db9c0edf15f1dbbc11adf"
  },
  {
    "url": "en/guide/people/lists/delete.html",
    "revision": "8e638b4370cc5511af46e7ecd2212725"
  },
  {
    "url": "en/guide/people/lists/export.html",
    "revision": "3fd024143df8710d47ef70585c2c0191"
  },
  {
    "url": "en/guide/people/lists/import_directory.html",
    "revision": "1f1ca5cebaa825ad12b7453b3b201251"
  },
  {
    "url": "en/guide/people/lists/import_list.html",
    "revision": "dc59bdd2e0de04161bb2869df24f96c8"
  },
  {
    "url": "en/guide/people/lists/index.html",
    "revision": "990c1f89f255e837473c6d7da6dd3930"
  },
  {
    "url": "en/guide/people/lists/random.html",
    "revision": "2836f852805249624009e60cc458b496"
  },
  {
    "url": "en/guide/people/results/index.html",
    "revision": "b3a1576d94cc4d7c580e9a62959581e1"
  },
  {
    "url": "en/guide/people/smart/index.html",
    "revision": "e81d06435573e3749e08eb49b3724ecc"
  },
  {
    "url": "en/guide/people/storage/index.html",
    "revision": "2812adfd2e1c1ffb6ce6933990377356"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "4d07a9b88b957c9be3dd8f2b7205c3c2"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "f2e4baa42d7d4a9d5a8467164c4e7a5e"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "01bcd0f96eb43f8ca69ece13e6ef9fb7"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "47b73feb471a4b4d22e8899fc72cf2fd"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "a9d4cf07c54e4e7e451dbaf07873a730"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "30658365d0ee6f07266dd3982bc0de56"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "6d98865715ddaa1bbcb55dae1d6d42eb"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "a80eba5f2a9770f033905dcbcf9404c5"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "998efc473dae47e5a91e6ff8fc7e928b"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "e4d64af452eedac17a8ccb3eace3eb22"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "04482059a1af49eb2287ea840810ee71"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "29090eeefd8d446c60deaba3c4ed30ab"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "ee28e72bf2f88008805a0605d8db4870"
  },
  {
    "url": "en/guide/ui/companies.html",
    "revision": "798d59013cf97a85b57954d8395ac436"
  },
  {
    "url": "en/guide/ui/filters.html",
    "revision": "8b3f8f34920ed623d06defb599f64404"
  },
  {
    "url": "en/guide/ui/index.html",
    "revision": "54f4c8cd0b1598bf7aa11491d04fce87"
  },
  {
    "url": "en/guide/ui/languages.html",
    "revision": "28236b7905a69c42fb669f2d62fbb6ad"
  },
  {
    "url": "en/guide/ui/logout.html",
    "revision": "b1f9bf546d12eded3269c2065585c3c0"
  },
  {
    "url": "en/guide/ui/search.html",
    "revision": "4962208d176fb177fc29869187e1a18e"
  },
  {
    "url": "en/index.html",
    "revision": "ee93ccfd6e44e27ce210d8f9159348ce"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "4df5dea539498da41f011003842df6a0"
  },
  {
    "url": "en/terms/index.html",
    "revision": "06208e5a0a7eb0379dc9fe313b851967"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "0cddcd31c62026aa244daae05e4e155f"
  },
  {
    "url": "index.html",
    "revision": "3686ac9b56e40b2e4390850e71105883"
  },
  {
    "url": "pt/content/index.html",
    "revision": "d03865b61a8a9cc9ae666b3e954242c6"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "7ccd013089feb3b9342dc0b82e4d08aa"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "f00b036820bee14e6414cdb59a5c022f"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "c4fd1fccb062b61217aa88d94f5654d3"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "0f5a08fe3283d54e0e031f0a11609a44"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "75a2e98f93c845fb98f1e180efd8e845"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "9ed923059ecdb6a0868d146256c66b37"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "2a663e6f38c5825cc61d349b3cfe8758"
  },
  {
    "url": "pt/guide/people/contacts/index.html",
    "revision": "575e3c403e846be0fb97d1139452f9c4"
  },
  {
    "url": "pt/guide/people/dynamic/index.html",
    "revision": "c51e4aec440b0d531495f03d24c3ff66"
  },
  {
    "url": "pt/guide/people/exclusions/index.html",
    "revision": "e57762195e7c397472453392337ea828"
  },
  {
    "url": "pt/guide/people/index.html",
    "revision": "7c69ab7a59d414ad962b6ebac0f689f8"
  },
  {
    "url": "pt/guide/people/lists/add_contacts.html",
    "revision": "43d8f933585f840fa7b11d36186fc05e"
  },
  {
    "url": "pt/guide/people/lists/change_fields.html",
    "revision": "35344b938327f1e4138ef4e244b1835d"
  },
  {
    "url": "pt/guide/people/lists/delete.html",
    "revision": "e0f5d8100608d30e0bbc81b434b5ade8"
  },
  {
    "url": "pt/guide/people/lists/export.html",
    "revision": "92fea74c74c789d0b0d912781d75edcd"
  },
  {
    "url": "pt/guide/people/lists/import_directory.html",
    "revision": "8120384659dc359b569f0fa5281f6b6d"
  },
  {
    "url": "pt/guide/people/lists/import_list.html",
    "revision": "d5364c204db46394b438f4836d40b99f"
  },
  {
    "url": "pt/guide/people/lists/index.html",
    "revision": "f745309d028b1519142ba45b25c1ebb4"
  },
  {
    "url": "pt/guide/people/lists/random.html",
    "revision": "89018bb0998ac9f8ac92e40a048e3b9e"
  },
  {
    "url": "pt/guide/people/results/index.html",
    "revision": "0b6ce93928074c1cf8af34e47dfb32d7"
  },
  {
    "url": "pt/guide/people/smart/index.html",
    "revision": "a19853bfdd4e810df484a66a717bad61"
  },
  {
    "url": "pt/guide/people/storage/index.html",
    "revision": "aa386f1ae8c906d94842de9005972d65"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "8cb6ca69dad3ac044000398d3d54453e"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "fabcc31c4bf961e2271c2eb756cbef48"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "df7a32b0b0ba1efb11ceec53c1dec727"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "72c37c889c26c1356f273fd5f0d567b7"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "6eef2c1b62cb620d6d50bc164ac8f064"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "616338d186fc487392fc7566c63b1165"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "f84cc1054cc4059da7b775689d97050e"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "c16d576aa42824150e68f5184f1d1f00"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "f68ca087e9ba653e8ec2d8784ece6bf9"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "2c60bd330a9d1e7e720d466db2217636"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "dcf58b36fedb10c03786f46f610c7ee1"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "fcaaa8c0073111de012f42fcd24a5522"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "5b298a729a1b58f5d6c86914e48ef0e1"
  },
  {
    "url": "pt/guide/ui/companies.html",
    "revision": "2c411968e1fc317786094bc0342a2d87"
  },
  {
    "url": "pt/guide/ui/filters.html",
    "revision": "296dc7650b293c0a34d07123d8329e80"
  },
  {
    "url": "pt/guide/ui/index.html",
    "revision": "dc0f31b2f605890d6db47f068850b93e"
  },
  {
    "url": "pt/guide/ui/languages.html",
    "revision": "79259e5355e0904c82232c39e0f11b83"
  },
  {
    "url": "pt/guide/ui/logout.html",
    "revision": "ee00b50920fccb1988d7de9893875eba"
  },
  {
    "url": "pt/guide/ui/search.html",
    "revision": "2fc059d811b1b557b77bf4300a87c478"
  },
  {
    "url": "pt/guide/users/index.html",
    "revision": "061606c81a044f612c3723b2907b3fb5"
  },
  {
    "url": "pt/index.html",
    "revision": "977a27560b4c05d65c61b10e2335e06b"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "3b681d5691884cc394d1efee9af66b53"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "b1902d0d8e5c7b08112c5f4d1ecdfdff"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "2aff41988fb39186ad84a3c37a4cef9e"
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
