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
    "revision": "1bfccef7423023f1f0c305c5a97324d2"
  },
  {
    "url": "assets/css/0.styles.a4dc1c6b.css",
    "revision": "b5dacd5ec95426f31a08ab3119e905ac"
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
    "url": "assets/js/13.d0e4479d.js",
    "revision": "907881e0a117a8abb9107dc3128769d9"
  },
  {
    "url": "assets/js/14.3c5fe65b.js",
    "revision": "dc5985d259be138fb2381f2ab0586e28"
  },
  {
    "url": "assets/js/15.b6334462.js",
    "revision": "42f90a2d419e1e91d0155655f4b4e6a8"
  },
  {
    "url": "assets/js/16.d5f8ecde.js",
    "revision": "49cf622937668bbfb951f05ad73da429"
  },
  {
    "url": "assets/js/17.a33fc0c2.js",
    "revision": "0c02f08a27ed88acfb932ef0b4351cd9"
  },
  {
    "url": "assets/js/18.85ba65d4.js",
    "revision": "3bc84186689d1ee52f8d77dcef28424f"
  },
  {
    "url": "assets/js/19.e0eb565d.js",
    "revision": "98fd74a7ca3a0296a5a66de0908caa5e"
  },
  {
    "url": "assets/js/2.aa882033.js",
    "revision": "e58a73a3880009645775ee3f75a108cc"
  },
  {
    "url": "assets/js/20.95440677.js",
    "revision": "0dbc26141a520ea1918f0e5b75481dc6"
  },
  {
    "url": "assets/js/21.b701933a.js",
    "revision": "7d5584ae19c6cc97182ac8606e7c6e2d"
  },
  {
    "url": "assets/js/22.611c1735.js",
    "revision": "26dac8bb03cbc32ab47b9e11d8c08951"
  },
  {
    "url": "assets/js/23.f0607085.js",
    "revision": "fac07e470c694167f35ec2f541f9167f"
  },
  {
    "url": "assets/js/24.62ba0c20.js",
    "revision": "7ded39f307c60896bd5d7127c11d1cf5"
  },
  {
    "url": "assets/js/25.a90e2682.js",
    "revision": "3413891a5bdfa519e264ad6e1d149d5c"
  },
  {
    "url": "assets/js/26.5c821fb8.js",
    "revision": "c91d0ef83fd4d257230d47404381f63d"
  },
  {
    "url": "assets/js/27.18843b1e.js",
    "revision": "7b6902baad6f7c4cf96599b7fe245f95"
  },
  {
    "url": "assets/js/28.ba082e6c.js",
    "revision": "4add695a8784e27c3996418c27a43d80"
  },
  {
    "url": "assets/js/29.9889e039.js",
    "revision": "878d7766635dd93ac2fcc017bc827032"
  },
  {
    "url": "assets/js/3.d3a5a022.js",
    "revision": "32dcbf997a2d530a4ba14bb81841de8d"
  },
  {
    "url": "assets/js/30.f182842f.js",
    "revision": "f9b243bc4c38b44a0c0a284a4c36aaf6"
  },
  {
    "url": "assets/js/31.2606469c.js",
    "revision": "41fca3a28762f0932d4ef879aa99bcf1"
  },
  {
    "url": "assets/js/32.aa9e339f.js",
    "revision": "04698b6a8a092ac834291a4b3259283a"
  },
  {
    "url": "assets/js/33.a2b40e74.js",
    "revision": "8885df3862f0d1e1d616156e95858ad9"
  },
  {
    "url": "assets/js/34.6ed31993.js",
    "revision": "75474f608340e9841d5c5522bb04a7ac"
  },
  {
    "url": "assets/js/4.d3e639cb.js",
    "revision": "123e5665796c4edbd20b3f434cb06f39"
  },
  {
    "url": "assets/js/5.dd3b9d38.js",
    "revision": "e74a325ce6805e1e663b916ac619d800"
  },
  {
    "url": "assets/js/6.c7bc0ba4.js",
    "revision": "ee7d1cced31ac008f7a83d624d749dac"
  },
  {
    "url": "assets/js/7.468820c6.js",
    "revision": "36fe7e069f586b1e57a312061b4c341a"
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
    "url": "assets/js/app.c1c1c78c.js",
    "revision": "5a936dc5c30f8b928f220f28c7c6efb0"
  },
  {
    "url": "en/guide/index.html",
    "revision": "c88b0989166ea5ab9f80fdf6664dc475"
  },
  {
    "url": "en/guide/requirements/certificates.html",
    "revision": "7cf54ed34f5de193ac466a79b8202342"
  },
  {
    "url": "en/guide/requirements/communications.html",
    "revision": "28b8df13c9be9e17c443acda36480669"
  },
  {
    "url": "en/guide/requirements/domains.html",
    "revision": "f628dd7d1f2a49ef984989fd02dc78a1"
  },
  {
    "url": "en/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "904a98b69b4d1410c70d9c2d69dfbc87"
  },
  {
    "url": "en/guide/requirements/google-gsuite/image_url.html",
    "revision": "a75f171948632a4180d023eaaa8147d6"
  },
  {
    "url": "en/guide/requirements/google-gsuite/index.html",
    "revision": "141c495346acc24ae01282ac639baff6"
  },
  {
    "url": "en/guide/requirements/google-gsuite/spam.html",
    "revision": "f35e390667f3715bd02e82b57d6b70b3"
  },
  {
    "url": "en/guide/requirements/index.html",
    "revision": "f0ed60f79965c4eb8ab603b65d0fc1f6"
  },
  {
    "url": "en/guide/requirements/ips.html",
    "revision": "021b756c2f5194d0169acb46a9aa5cb1"
  },
  {
    "url": "en/index.html",
    "revision": "5ddb7f9a719bd5498e8bb03cf862a5cc"
  },
  {
    "url": "index.html",
    "revision": "afa3c0a7c0119076c665d3be01bd1b21"
  },
  {
    "url": "pt/guide/index.html",
    "revision": "9c8a42ec898add28b4b33284132adf09"
  },
  {
    "url": "pt/guide/requirements/certificates.html",
    "revision": "5eae200f17b0fbdf24a3fe891398c258"
  },
  {
    "url": "pt/guide/requirements/communications.html",
    "revision": "e006d56599f0df80bf873119a349d774"
  },
  {
    "url": "pt/guide/requirements/domains.html",
    "revision": "52b1df2b4da42292c6e148dfdaa9a34f"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/email_whitelist.html",
    "revision": "b7449fa6143dbeb73c2187e259cbe266"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/image_url.html",
    "revision": "362e1868b75603ab230c4b4b6458b52f"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/index.html",
    "revision": "9172ca78ca82aef7e1526670c759bd3c"
  },
  {
    "url": "pt/guide/requirements/google-gsuite/spam.html",
    "revision": "6bdc5da7ba42d4878cda13dc4005a814"
  },
  {
    "url": "pt/guide/requirements/index.html",
    "revision": "426f3e76340de7044b61a2d70bea4944"
  },
  {
    "url": "pt/guide/requirements/ips.html",
    "revision": "cc03208661ea4fecd4ef82e08cb89037"
  },
  {
    "url": "pt/index.html",
    "revision": "f4477c6667dafe1ea2c0966ddda5024a"
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
