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
    "revision": "6a6ab1ec3526a8d86336a7bd6a20da30"
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
    "url": "assets/js/103.a311c6d6.js",
    "revision": "85cf9bfb2de1d6e3016106eeef1a0d26"
  },
  {
    "url": "assets/js/104.3bda5ef8.js",
    "revision": "0f9116c5889936931a95300b28750996"
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
    "url": "assets/js/12.3f4b0e4b.js",
    "revision": "e4244bd789c5c3da705b2114e70a4864"
  },
  {
    "url": "assets/js/13.0f94ce45.js",
    "revision": "571026cb57cdbb87ebbf2410912d7831"
  },
  {
    "url": "assets/js/14.264a3e0c.js",
    "revision": "0e8b9bbae663be0693b9e0b59c6bce3e"
  },
  {
    "url": "assets/js/15.431e933a.js",
    "revision": "f7b24af590625e4d573c79de1f811ec6"
  },
  {
    "url": "assets/js/16.bc8a7786.js",
    "revision": "3e3f549cd090c18c3ea3380d08aa0f22"
  },
  {
    "url": "assets/js/17.6b61e496.js",
    "revision": "a54d40f6f6decd93f79e0e35ef127899"
  },
  {
    "url": "assets/js/18.10aa622c.js",
    "revision": "8d0758614edbf825a0ba5745ce98ba22"
  },
  {
    "url": "assets/js/19.b36d427f.js",
    "revision": "3d6fe8a1898ddcb5cdab639ec169865d"
  },
  {
    "url": "assets/js/20.88911a6b.js",
    "revision": "2fc541a0159c4778dbf8cf16f890ff7c"
  },
  {
    "url": "assets/js/21.132ac8ee.js",
    "revision": "97bd04c75f7117de311d6e8d60bc85fe"
  },
  {
    "url": "assets/js/22.eedba50b.js",
    "revision": "dc5dfea7adab11796e721788ad0da147"
  },
  {
    "url": "assets/js/23.0c593f80.js",
    "revision": "63575508aa3e17b8a14c0ff159882b1d"
  },
  {
    "url": "assets/js/24.93b8d4aa.js",
    "revision": "2d1a7c6af9b20118ae08920e9d9896eb"
  },
  {
    "url": "assets/js/25.fb2103a7.js",
    "revision": "6b58410f0eb65dc3ac071b818e36998e"
  },
  {
    "url": "assets/js/26.284ac362.js",
    "revision": "50bd5b62976a19076bc09cd6b76e3f60"
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
    "url": "assets/js/29.06fa4c5b.js",
    "revision": "1305c1f0bf15f826894dfb2686b7e802"
  },
  {
    "url": "assets/js/3.1dfac114.js",
    "revision": "b793ef6fbe3335d71c7427f75c1123b4"
  },
  {
    "url": "assets/js/30.b854f1d0.js",
    "revision": "f9a58bfec159461427d4db09d57830ed"
  },
  {
    "url": "assets/js/31.fdd39cbb.js",
    "revision": "74b084ed2e458ae874facd494c1fa494"
  },
  {
    "url": "assets/js/32.dd37c1d5.js",
    "revision": "c2beaf4774f28f06061e281d0ca4c90b"
  },
  {
    "url": "assets/js/33.bf633bdb.js",
    "revision": "bdb01002b02ecac8b2d4824a3797b8e8"
  },
  {
    "url": "assets/js/34.fe1d7d59.js",
    "revision": "8b45be5ce8cc8233b0c3a4b8626a0eb3"
  },
  {
    "url": "assets/js/35.baaf2e93.js",
    "revision": "df2ec928ad5278993fe4f389c8d6c067"
  },
  {
    "url": "assets/js/36.52c526ad.js",
    "revision": "109a586e04cadca35c2ed4119343a77d"
  },
  {
    "url": "assets/js/37.5f277eea.js",
    "revision": "ae7ca63f636b748612bd3da0a8fc5cd9"
  },
  {
    "url": "assets/js/38.1c4eec2a.js",
    "revision": "35d906dc3d31b8146bb5016d076ac0e9"
  },
  {
    "url": "assets/js/39.eabe0e84.js",
    "revision": "3e8799c22a22493ff6760f16d95b7b81"
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
    "url": "assets/js/41.f5e02efc.js",
    "revision": "30baf2b798d2a4ecf6dbf43a0fffc953"
  },
  {
    "url": "assets/js/42.f669ff84.js",
    "revision": "5d9267a2c4994894c85f7c01b9be81dd"
  },
  {
    "url": "assets/js/43.a87e9b78.js",
    "revision": "5353626e3826c048c4a2744aaa95e0c5"
  },
  {
    "url": "assets/js/44.9078a0e5.js",
    "revision": "bcb01eea241064c670172e68e64c1cad"
  },
  {
    "url": "assets/js/45.23e21a7b.js",
    "revision": "09622ee3c094904e27a0412a2d4ff7a3"
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
    "url": "assets/js/49.7962acb5.js",
    "revision": "67786ae96f7d3769f5887652c87abd34"
  },
  {
    "url": "assets/js/5.4d554b8f.js",
    "revision": "bb676513c4fd50b7656277968d4431af"
  },
  {
    "url": "assets/js/50.1bfb0474.js",
    "revision": "b136e6ec81a390e90869a0ed1171aeea"
  },
  {
    "url": "assets/js/51.832469ee.js",
    "revision": "95a9ab5de6cc6f97f0c9bb6401a53d3f"
  },
  {
    "url": "assets/js/52.318f61ea.js",
    "revision": "c1655a27c0a52bf9d530ed471bb0e64d"
  },
  {
    "url": "assets/js/53.3a70412d.js",
    "revision": "96bcc7fd919a4b23813fd1cd1628dc34"
  },
  {
    "url": "assets/js/54.2fcfb4a4.js",
    "revision": "12b5ce228c575dfeb9c8bd8d7cb16d11"
  },
  {
    "url": "assets/js/55.dd80443d.js",
    "revision": "368399c776adfc5c053de83c290e1f51"
  },
  {
    "url": "assets/js/56.b7ca4949.js",
    "revision": "965d2640b9f3f760eceae46ff54d9059"
  },
  {
    "url": "assets/js/57.80d9bef8.js",
    "revision": "8f928525041af5be0c9f936ca5861853"
  },
  {
    "url": "assets/js/58.5889f29f.js",
    "revision": "c4a95adb1e3fe6e51d0da4f363e1e400"
  },
  {
    "url": "assets/js/59.869af67c.js",
    "revision": "d710459b43833e38746038fb0c7ebbd4"
  },
  {
    "url": "assets/js/6.66a079c1.js",
    "revision": "f14d7f78affc068a212c0859f66adf6a"
  },
  {
    "url": "assets/js/60.15bda5fa.js",
    "revision": "916b66abe2d90a84a13483a6c6495b79"
  },
  {
    "url": "assets/js/61.bb2dd67b.js",
    "revision": "ff4288aae252f715943024f6b02f16e7"
  },
  {
    "url": "assets/js/62.da6d6652.js",
    "revision": "80d87bd7d5651ce2ccd501bf33cc7385"
  },
  {
    "url": "assets/js/63.032ec139.js",
    "revision": "fb0b5019ed31ceacac33da8ddbd8f316"
  },
  {
    "url": "assets/js/64.b7bbdc19.js",
    "revision": "49cb17da25539f176992cdaa082af98b"
  },
  {
    "url": "assets/js/65.109e8d00.js",
    "revision": "f411c2915c8568d5037b9ea3eeb9d47a"
  },
  {
    "url": "assets/js/66.be540401.js",
    "revision": "420d5db97d06b4432f9921571414e4b6"
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
    "url": "assets/js/70.81a3579e.js",
    "revision": "0f197e442ae8ef4ffffec27000ef611b"
  },
  {
    "url": "assets/js/71.d07c2903.js",
    "revision": "1ab603bd011dabbfbca057247946c24f"
  },
  {
    "url": "assets/js/72.ab20085b.js",
    "revision": "551afa0438afca273ba6b914dee1a45d"
  },
  {
    "url": "assets/js/73.3826d9da.js",
    "revision": "7fa9bc096c25d1d0d981dfc0a218715f"
  },
  {
    "url": "assets/js/74.e7afbff0.js",
    "revision": "dce5b462419428a0743a9fb1eb3ba2a3"
  },
  {
    "url": "assets/js/75.a6465c22.js",
    "revision": "063ac9ad04ac6193b87650ba6f43e282"
  },
  {
    "url": "assets/js/76.5816878e.js",
    "revision": "5aa565c637d373181766f4383a0d8850"
  },
  {
    "url": "assets/js/77.c81030ad.js",
    "revision": "b98460cd385b282af3e565c960c0d5e9"
  },
  {
    "url": "assets/js/78.6502b7f1.js",
    "revision": "6abce472ed5972ac3e817c065636e3a0"
  },
  {
    "url": "assets/js/79.941a55ba.js",
    "revision": "c6f7459088723d4a611ebe5de8643f20"
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
    "url": "assets/js/83.5a2ce958.js",
    "revision": "9e545ecbb94fdaf31494d3e0720232a8"
  },
  {
    "url": "assets/js/84.7eb5916d.js",
    "revision": "28f298d13b810d85adf88146c2de13d4"
  },
  {
    "url": "assets/js/85.dd2ba888.js",
    "revision": "55b57d17e50b837dc6b9b077b09fd41c"
  },
  {
    "url": "assets/js/86.94395321.js",
    "revision": "2baef13448276902a5a9bc6649f65ba5"
  },
  {
    "url": "assets/js/87.7ea68a50.js",
    "revision": "8d4a05d81ec8173229d00250631eefc5"
  },
  {
    "url": "assets/js/88.23481148.js",
    "revision": "273bf0065899fcb578411b2f81c6c5e4"
  },
  {
    "url": "assets/js/89.b6a178d0.js",
    "revision": "edfe9c5ae50a99cdf3c19294955944f7"
  },
  {
    "url": "assets/js/9.596cfd7d.js",
    "revision": "ba7e89560a4fc4b6fcc60d953b1d2156"
  },
  {
    "url": "assets/js/90.5a550abf.js",
    "revision": "3a1dc865133c9f2d189b7d7a353006d4"
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
    "url": "assets/js/93.e73c81aa.js",
    "revision": "3c13ff9ffcf98936f1763a7cb4904299"
  },
  {
    "url": "assets/js/94.f028a1bb.js",
    "revision": "f60c998f7362931c5d3edea11b5785b3"
  },
  {
    "url": "assets/js/95.ddd23109.js",
    "revision": "8e0e3953ea649a8b8efd76a616af36a3"
  },
  {
    "url": "assets/js/96.48efccb2.js",
    "revision": "7e3258f321df0f40b75f9a8c9fad463a"
  },
  {
    "url": "assets/js/97.cae14082.js",
    "revision": "163e6b543df45912860372d7f4155916"
  },
  {
    "url": "assets/js/98.73bcc692.js",
    "revision": "204f6b1237ceee0e61f3e85eff1bde01"
  },
  {
    "url": "assets/js/99.e686b239.js",
    "revision": "b47961d6feef4aebff28f9b9e56c1061"
  },
  {
    "url": "assets/js/app.0aba4a31.js",
    "revision": "b213d05a4bb3cb788ff718dd48d31640"
  },
  {
    "url": "assets/js/vendors~docsearch.eec9cc92.js",
    "revision": "bc8a3e4a2fa0b7efddc04c11bb7a21a3"
  },
  {
    "url": "en/content/index.html",
    "revision": "20f47611a6a1f7f14dc5a7ca4a8842ef"
  },
  {
    "url": "en/content/third-party.html",
    "revision": "bc20e22225629b903748abc6d73f1bff"
  },
  {
    "url": "en/guide/index.html",
    "revision": "524b430223e52c68d34c4198792d0383"
  },
  {
    "url": "en/guide/integrations/azure-ad/application_registration.html",
    "revision": "3be043ed24325db85582822d94e1e77c"
  },
  {
    "url": "en/guide/integrations/azure-ad/communications.html",
    "revision": "3eceeef4afc51fb93b1a1939966dcc3d"
  },
  {
    "url": "en/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "360f12feb213f6312b5a216764bd2b06"
  },
  {
    "url": "en/guide/integrations/azure-ad/index.html",
    "revision": "3b3875df2cd07692717ee1dde5347155"
  },
  {
    "url": "en/guide/integrations/azure-ad/phishx.html",
    "revision": "91868b1fa869c00753085a28e6789366"
  },
  {
    "url": "en/guide/people/contacts/index.html",
    "revision": "74cb8b9cafd4958e4a5f90961be92cbb"
  },
  {
    "url": "en/guide/people/dynamic/index.html",
    "revision": "8bbe067bb10253dfb3ee57321ccb0535"
  },
  {
    "url": "en/guide/people/exclusions/index.html",
    "revision": "3b5aa17a9051c07348cbc29dab230af4"
  },
  {
    "url": "en/guide/people/index.html",
    "revision": "d075abcd4acbc47e0e6748c8ba3e2a6f"
  },
  {
    "url": "en/guide/people/lists/add_contacts.html",
    "revision": "1736440bc3cfadde8dad4b297ab8d004"
  },
  {
    "url": "en/guide/people/lists/change_fields.html",
    "revision": "d3e324a1248497611995b124bddb951a"
  },
  {
    "url": "en/guide/people/lists/delete.html",
    "revision": "4767c7d8c9551718f68ce7025b6f4f8a"
  },
  {
    "url": "en/guide/people/lists/export.html",
    "revision": "7720343771697ffbe1187fd87b9af24f"
  },
  {
    "url": "en/guide/people/lists/import_directory.html",
    "revision": "971cd9876304d09a15314cbae9e2024f"
  },
  {
    "url": "en/guide/people/lists/import_list.html",
    "revision": "432b42af940ce1a65666535433e3f901"
  },
  {
    "url": "en/guide/people/lists/index.html",
    "revision": "04d57206e18bdbfa7b6ce54bcbe27b5f"
  },
  {
    "url": "en/guide/people/lists/random.html",
    "revision": "5811f24b45d75c257dc218b8f6cdd238"
  },
  {
    "url": "en/guide/people/results/index.html",
    "revision": "ad7c670bfde85ff14a62d6beec9dcd7f"
  },
  {
    "url": "en/guide/people/smart/index.html",
    "revision": "a7c302eacb71cb948c261c669b088b11"
  },
  {
    "url": "en/guide/people/storage/index.html",
    "revision": "a524fb409c98899cff120ad22c373a15"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "02f57de2afa6b16686452741503f4dd4"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "f994c22cde69661e9fff6ac7f72bf8fc"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "407d6a798146921b2ce393ac0a536193"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "554c2d69dc4af1a7b3a11f81a9f39a78"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "53c9b364b2b19609af7db24c60262e7d"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "ec09746b34bcfd1a81d4592da90c78b0"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "1c8f81740985c9043f78879791550efb"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "2e651a0fda2b256037bddcc6264bf07a"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "2fccd9fd8adb8295fe1ba624d94e1049"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "6557ca6aff18d3d51529e05891af484f"
  },
  {
    "url": "en/guide/requirements/microsoft-365/connectors.html",
    "revision": "8e2e2b63a677f188ef6ad52a1d7b0fdf"
  },
  {
    "url": "en/guide/requirements/microsoft-365/index.html",
    "revision": "0cc24e65f26d4121edc3cf71fde34a55"
  },
  {
    "url": "en/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "322f4a8428906b6b9dba0369b7c7c507"
  },
  {
    "url": "en/guide/ui/companies.html",
    "revision": "b83d1696d6e624d4c5e6c3e47244248a"
  },
  {
    "url": "en/guide/ui/filters.html",
    "revision": "dcd214eb76d49b401e1dff2b4e17c932"
  },
  {
    "url": "en/guide/ui/index.html",
    "revision": "855556d8049a7bedce04ca0823dfd061"
  },
  {
    "url": "en/guide/ui/languages.html",
    "revision": "213f9fd2b7bb01a29dc7fc71c14c38d8"
  },
  {
    "url": "en/guide/ui/logout.html",
    "revision": "6c9520aaa5f9870f71a92563fc3e5b65"
  },
  {
    "url": "en/guide/ui/search.html",
    "revision": "6a6468da82a19e630b7ce7a26224de6c"
  },
  {
    "url": "en/index.html",
    "revision": "1a8faa1f9feea03e593c9144bd89d7e8"
  },
  {
    "url": "en/terms/contract.html",
    "revision": "c80ad1cea0f8e5ced2ee1e54915658b9"
  },
  {
    "url": "en/terms/index.html",
    "revision": "fd9497ec8a60ca64a5686063ee93e742"
  },
  {
    "url": "en/terms/privacy.html",
    "revision": "8fae95ecdb8e111523f0b4cbf3365e26"
  },
  {
    "url": "index.html",
    "revision": "52c8ace6cd3859fc60f543d348b02256"
  },
  {
    "url": "pt/content/index.html",
    "revision": "8dc2d00adcdaed47abe769e769cb9664"
  },
  {
    "url": "pt/content/third-party.html",
    "revision": "9af2d7bcb09057deaea48289394d0875"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "bdcfdafd2a72e37eb1b89c4fdc79a82b"
  },
  {
    "url": "pt/guide/integrations/azure-ad/application_registration.html",
    "revision": "b7d82c06479d1c15aec38fa514430939"
  },
  {
    "url": "pt/guide/integrations/azure-ad/communications.html",
    "revision": "4be85e99a14dfe6bf7bfe851efe4865a"
  },
  {
    "url": "pt/guide/integrations/azure-ad/enterprise_applications.html",
    "revision": "770df855c62343f0b1e1da955eaa25f0"
  },
  {
    "url": "pt/guide/integrations/azure-ad/index.html",
    "revision": "c2057ab40605c51aba2ee981b55ecda7"
  },
  {
    "url": "pt/guide/integrations/azure-ad/phishx.html",
    "revision": "e7708bcafcb6f30f24a5e6c19527053b"
  },
  {
    "url": "pt/guide/people/contacts/index.html",
    "revision": "87334f804199327b77058ed8f261d4a4"
  },
  {
    "url": "pt/guide/people/dynamic/index.html",
    "revision": "97437a6856c4fd2c7ad5a9909d5dfdbd"
  },
  {
    "url": "pt/guide/people/exclusions/index.html",
    "revision": "ea555d008df6f72eed26363fb532546f"
  },
  {
    "url": "pt/guide/people/index.html",
    "revision": "ec2ac1d00d34eb12bdfdb55044e81238"
  },
  {
    "url": "pt/guide/people/lists/add_contacts.html",
    "revision": "fb6009a7e2e8af0923a3ddae33109c89"
  },
  {
    "url": "pt/guide/people/lists/change_fields.html",
    "revision": "424879de6a20f3e9bc6e8fa3eeb1b2bc"
  },
  {
    "url": "pt/guide/people/lists/delete.html",
    "revision": "2d34ba1aae7e9c3618d93c5e7d3b8974"
  },
  {
    "url": "pt/guide/people/lists/export.html",
    "revision": "3556105cb4bb39637280bac2b2b81dd9"
  },
  {
    "url": "pt/guide/people/lists/import_directory.html",
    "revision": "48736a29bc4035270ddbc0111cbdd6b3"
  },
  {
    "url": "pt/guide/people/lists/import_list.html",
    "revision": "061e0655a5762aa5ae14522c8b1013cc"
  },
  {
    "url": "pt/guide/people/lists/index.html",
    "revision": "5d3992eb1f71660c7abfb9e51a65c621"
  },
  {
    "url": "pt/guide/people/lists/random.html",
    "revision": "4aec697ce3d85f5d1d2e48ad1f86ddea"
  },
  {
    "url": "pt/guide/people/results/index.html",
    "revision": "010e6454748f1abb77d57a7794d949c5"
  },
  {
    "url": "pt/guide/people/smart/index.html",
    "revision": "3be465aadb61d4b5d7fd67894156d07d"
  },
  {
    "url": "pt/guide/people/storage/index.html",
    "revision": "e05338499096f76255a037a9c56a5921"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "ceb2db1aed71deb475b224a781194c82"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "9b8af388d2335150e01004fe131c1bc5"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "b687e8ae0b9aad1413453c0bc3f34c0b"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "4683d18ea088c8bd4dc377c6149eacb8"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "98c10d433da1be5f2beb3daba8e44c7f"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "9ae7fbae4cc7c279eb31e96024bf323c"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "e6f355982f1e2bebcd913db92e962b84"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "80b7ac00f7b2d4769bbff46a603acec2"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "0b0fbe4750c51c8ba4012175f3b21c34"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connection_filter.html",
    "revision": "6ae477fcc2486633802c28462aa2874a"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/connectors.html",
    "revision": "7d498121acb20ee2d9f8c91d79f61b9d"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/index.html",
    "revision": "fcfbc3eba4aedb129e1740bcd8144efa"
  },
  {
    "url": "pt/guide/requirements/microsoft-365/spam_filter.html",
    "revision": "1eca0d8fe9e44d25ce5d4d60817f8509"
  },
  {
    "url": "pt/guide/ui/companies.html",
    "revision": "1f09cae2d486a7ac1d02ae43d7c7af3a"
  },
  {
    "url": "pt/guide/ui/filters.html",
    "revision": "4a92887aad8a3fde08fe1e8ea1aa6c76"
  },
  {
    "url": "pt/guide/ui/index.html",
    "revision": "01789a6778433dcccbd6eb4a496334ca"
  },
  {
    "url": "pt/guide/ui/languages.html",
    "revision": "69557d16e73814618648a0cfdc48862d"
  },
  {
    "url": "pt/guide/ui/logout.html",
    "revision": "99af4f960d4075795bd437c5d98493ac"
  },
  {
    "url": "pt/guide/ui/search.html",
    "revision": "c3b8a98211afe0a408b5962bda3a2f10"
  },
  {
    "url": "pt/guide/users/index.html",
    "revision": "339fea94b6c93809987f2c4e1334bc4b"
  },
  {
    "url": "pt/index.html",
    "revision": "ccda3f02ebb037322f15adc0a855d4ba"
  },
  {
    "url": "pt/terms/contract.html",
    "revision": "3177ee7190a841499f64096f583f8bb9"
  },
  {
    "url": "pt/terms/index.html",
    "revision": "13d42525d2633d509f1f6b686ec835a6"
  },
  {
    "url": "pt/terms/privacy.html",
    "revision": "d61c7982fcc5fbaafff69ca4313a2a99"
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
