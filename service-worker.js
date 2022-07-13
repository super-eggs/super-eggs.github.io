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
    "revision": "140049c659810e9c30c86553703230b3"
  },
  {
    "url": "About/index.html",
    "revision": "7be99ba74f48d5ea356ccd172c704f1a"
  },
  {
    "url": "assets/css/0.styles.5f689f29.css",
    "revision": "61791e04427861d7c633780fe7be8b69"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.34123518.js",
    "revision": "962f26d084a9a693438aa4b2f4249a73"
  },
  {
    "url": "assets/js/11.f0e24eb8.js",
    "revision": "ba2d82cf5f31f953dc2c9aa524ea83fe"
  },
  {
    "url": "assets/js/12.5e75a974.js",
    "revision": "be1a00869b974cc1d8b2ac28f2d14bb3"
  },
  {
    "url": "assets/js/13.db0bf381.js",
    "revision": "1d78b55d7584f1322012b4d29da1510f"
  },
  {
    "url": "assets/js/14.ed324319.js",
    "revision": "f4249588081d289433c3b99ede0158a4"
  },
  {
    "url": "assets/js/15.f40e8254.js",
    "revision": "b6c33d095d96e8e967c6f6ceb0aeb39e"
  },
  {
    "url": "assets/js/16.d8f963c5.js",
    "revision": "d4f5e46ecf90657cbc7ce3761491995b"
  },
  {
    "url": "assets/js/17.250470cc.js",
    "revision": "0667557abe885fd28d61d56951dc9e68"
  },
  {
    "url": "assets/js/18.5161c52b.js",
    "revision": "4df28626330fe1f6e1394990d8f6258c"
  },
  {
    "url": "assets/js/19.afb8dd7a.js",
    "revision": "5b5e35086030ddd325b2deaecdd1aa56"
  },
  {
    "url": "assets/js/2.3304c2e1.js",
    "revision": "e82612b05366e04e1017ce7fa9474775"
  },
  {
    "url": "assets/js/20.c8248808.js",
    "revision": "81819c1a0e5d2335f7c975db97eee706"
  },
  {
    "url": "assets/js/21.e818d83d.js",
    "revision": "90ea9248fe3cebe704b1872298e133b4"
  },
  {
    "url": "assets/js/22.69d0a99c.js",
    "revision": "4291c2ca1700fc01b7d8f74ead51d97d"
  },
  {
    "url": "assets/js/23.92b9837f.js",
    "revision": "71a72823448967aca33bf1bd0a6fbac4"
  },
  {
    "url": "assets/js/24.124a82a4.js",
    "revision": "7ba7ceaae15d28d41842d695f12e110a"
  },
  {
    "url": "assets/js/25.1c0271e6.js",
    "revision": "52fba733e1101866366e44c753ccee78"
  },
  {
    "url": "assets/js/26.34e44644.js",
    "revision": "3944fd7a9a1dda7196cdde0a888d6b15"
  },
  {
    "url": "assets/js/27.4f89b112.js",
    "revision": "0bbfb729bf34a4a0a95482561506c77b"
  },
  {
    "url": "assets/js/28.82ed427e.js",
    "revision": "e8206c2c9f0e8d1eace8649bbb8d4390"
  },
  {
    "url": "assets/js/29.64fae044.js",
    "revision": "3fbbea0d16fd56bc851a630e653c2826"
  },
  {
    "url": "assets/js/3.1c0cc69b.js",
    "revision": "979c082eb1af40c89594127ba198e5ca"
  },
  {
    "url": "assets/js/30.dc7d1b9b.js",
    "revision": "5616561d6bdd4a240da53f1fde50c1b9"
  },
  {
    "url": "assets/js/31.a273a940.js",
    "revision": "004721ee07ca12058c31d33b193b9310"
  },
  {
    "url": "assets/js/32.ca99c448.js",
    "revision": "7c7dc45a2bcc98acca6f4b69ed56f170"
  },
  {
    "url": "assets/js/33.4129d67d.js",
    "revision": "7abf3ca6019c03ec9e9a2035c8c212cc"
  },
  {
    "url": "assets/js/34.a49e24e6.js",
    "revision": "6732923b7c548b189158554b2df598ac"
  },
  {
    "url": "assets/js/35.4ba458c0.js",
    "revision": "463f1745b0ba6ecfdb3166f864e23188"
  },
  {
    "url": "assets/js/36.7412ff8c.js",
    "revision": "4bbe0ef7a7c5281ab7edc9febedf41c4"
  },
  {
    "url": "assets/js/37.35c3a72c.js",
    "revision": "75a1779abd8186b81f6976882ab6c1b0"
  },
  {
    "url": "assets/js/38.ebf390fb.js",
    "revision": "1e1f502ce86bca3c0f9db272dd8833d3"
  },
  {
    "url": "assets/js/39.6b308832.js",
    "revision": "5a28f08de487ce3f8c20c6048d3bb109"
  },
  {
    "url": "assets/js/4.e5a930e9.js",
    "revision": "aafbf890bbcf5bba278eda6db1ebaccb"
  },
  {
    "url": "assets/js/40.968d571d.js",
    "revision": "0e364a0fa8647be6eec2572b5d7c5281"
  },
  {
    "url": "assets/js/41.a1f587bf.js",
    "revision": "2453097a3de37f12cd6cee5af8d59551"
  },
  {
    "url": "assets/js/42.9f358bc3.js",
    "revision": "d032dd03efa804b6381606241ba4192b"
  },
  {
    "url": "assets/js/43.4f19f41e.js",
    "revision": "ec2e6670e63109f2c26fe6fca0f87b06"
  },
  {
    "url": "assets/js/44.a27ad98a.js",
    "revision": "45eaea45b620704ab073c61c37bcd1af"
  },
  {
    "url": "assets/js/45.fb26a2d8.js",
    "revision": "d72a2f5b2b88e0f929a8e1c9d0e95d51"
  },
  {
    "url": "assets/js/46.aa66c6d7.js",
    "revision": "ab12f6af9b9cb89017abebf3ed38258f"
  },
  {
    "url": "assets/js/47.00ae1556.js",
    "revision": "4d1c9acff52da0493950e40efda16a63"
  },
  {
    "url": "assets/js/48.699e8e33.js",
    "revision": "bb6f0b3334716b8e52fd8ac7ddf83ed8"
  },
  {
    "url": "assets/js/49.0f79ef04.js",
    "revision": "590c1d75b567ba004e09c9d4db1c4f18"
  },
  {
    "url": "assets/js/5.2d78753d.js",
    "revision": "8863e2643b2900a17521fb111cfc8ac9"
  },
  {
    "url": "assets/js/50.2428dcc2.js",
    "revision": "b7d006c8f9b5a1a41187bf90efb8581f"
  },
  {
    "url": "assets/js/51.829dcccc.js",
    "revision": "8c9c908a32cea97944ac3a943d88120a"
  },
  {
    "url": "assets/js/52.f2dfda6b.js",
    "revision": "0bb9a5ee30db72fb793afa10b45259ab"
  },
  {
    "url": "assets/js/53.225de2db.js",
    "revision": "b0e7ab7613861e98d4fcc7023de1b0ee"
  },
  {
    "url": "assets/js/54.b91ed453.js",
    "revision": "25634b7c3b434e535233c9ab3a590d74"
  },
  {
    "url": "assets/js/55.25bacde7.js",
    "revision": "e5bb0fd71d6fed383881c0f2e029340b"
  },
  {
    "url": "assets/js/56.2a58cece.js",
    "revision": "26a26dd218653e47abee40fff6281f03"
  },
  {
    "url": "assets/js/57.48eab866.js",
    "revision": "8b8b0f5049185d76edece9e7b885613d"
  },
  {
    "url": "assets/js/58.5cf8ca6e.js",
    "revision": "40aefad4861323a2b1c4f47a0693ce16"
  },
  {
    "url": "assets/js/59.458178cc.js",
    "revision": "aedb56720fb974cdce12c385dcf3be46"
  },
  {
    "url": "assets/js/6.66329e4b.js",
    "revision": "9e7e445409879e240647ac81ba2301bf"
  },
  {
    "url": "assets/js/60.7898b9b9.js",
    "revision": "f3edced54bdaf0b059e1ce141a7586cb"
  },
  {
    "url": "assets/js/61.5f651468.js",
    "revision": "679f5adc516350237cdecd329fb7f9fc"
  },
  {
    "url": "assets/js/62.cd190cb0.js",
    "revision": "c126ddb9123979b741671646903f87cb"
  },
  {
    "url": "assets/js/63.0d472232.js",
    "revision": "edfc91e7f4707b0fe0e5cc1ae6d84623"
  },
  {
    "url": "assets/js/64.e8a8ffe7.js",
    "revision": "50db366c81419faaf8d0c51283fa3274"
  },
  {
    "url": "assets/js/65.8a66ff7d.js",
    "revision": "c1bd11d43b948cd5a16e1a47622f5f1e"
  },
  {
    "url": "assets/js/66.0492741b.js",
    "revision": "577cd1af2b15a777d3d5145865f67ea5"
  },
  {
    "url": "assets/js/67.204dadcb.js",
    "revision": "238bd3e9403e42d7f7477a8d1c0fde3b"
  },
  {
    "url": "assets/js/68.7d5b0a8f.js",
    "revision": "3922bf279fc7e38be180af587a0b4ce4"
  },
  {
    "url": "assets/js/69.ed735059.js",
    "revision": "9244be8aa13d9729ae97a9e9a8160c2c"
  },
  {
    "url": "assets/js/7.44229983.js",
    "revision": "f8d06f2fdd72a46f8583ce69d0c02d5e"
  },
  {
    "url": "assets/js/70.0f643f0b.js",
    "revision": "04c2b6e5c49cc80c40638b6acd8f06ab"
  },
  {
    "url": "assets/js/71.a226be62.js",
    "revision": "aba5e6701cf9ba3493647c340c00cc76"
  },
  {
    "url": "assets/js/8.51a4d2f9.js",
    "revision": "adee2a0f0aaf28744d179a22da97c0ff"
  },
  {
    "url": "assets/js/9.ee30d1ab.js",
    "revision": "30f96a9a8eeb798b59572843463fff1a"
  },
  {
    "url": "assets/js/app.693e6c19.js",
    "revision": "d13248f2b933367d9d585d644e6389ac"
  },
  {
    "url": "Code/Css.html",
    "revision": "0e18f5d6d942d0f45f04fb2186806cd1"
  },
  {
    "url": "Code/index.html",
    "revision": "01ae9e28a64c2e6998d1d23d5d9ab729"
  },
  {
    "url": "Code/Javascript.html",
    "revision": "14ad6458fa4b300b4a2b36613a7f0287"
  },
  {
    "url": "Code/LaraCode.html",
    "revision": "1eeb07d173070960643296bdb161d28e"
  },
  {
    "url": "Code/Layui.html",
    "revision": "1233d826faf92480f96fdd4aea34f4bc"
  },
  {
    "url": "Code/Menu.html",
    "revision": "a06fd34cc76ccb6fb1f9fb37138c4e67"
  },
  {
    "url": "Code/Php.html",
    "revision": "7107602e4c953489bd2e8add2221ed50"
  },
  {
    "url": "Code/Swoole.html",
    "revision": "d9a4036a971f34e86977d210a3a2e437"
  },
  {
    "url": "Code/Thinkphp.html",
    "revision": "e3c5cf98be2a87eb011be2c14fff22e8"
  },
  {
    "url": "Code/UniApp.html",
    "revision": "e137d0f01a73b49b09d80c3111706bfa"
  },
  {
    "url": "Code/Untitled.html",
    "revision": "d445281d1598c3044e0271535d19473d"
  },
  {
    "url": "Code/Vue.html",
    "revision": "37768f268b8c6ffd6808b6ee35f96e21"
  },
  {
    "url": "Code/vueNote.html",
    "revision": "e54fb612f501ce0e6e78c924b96ed58d"
  },
  {
    "url": "Code/Wechat.html",
    "revision": "a2f098500669cc7d3f45c5b7b19888b4"
  },
  {
    "url": "Docker/elasticsearch.html",
    "revision": "695e6fd289d79818b8abc1c7914e84ab"
  },
  {
    "url": "Docker/index.html",
    "revision": "30c0a9ac20cd92b626a24711b33220f1"
  },
  {
    "url": "Docker/Minikube.html",
    "revision": "8f91fc0856f69fea87a4c819ba41fac6"
  },
  {
    "url": "EMS/index.html",
    "revision": "83387fd2dbffab210055a14cb7b1da6d"
  },
  {
    "url": "Go_Packages/index.html",
    "revision": "565fa7e9eb0010e2b3ae915a7cd8c536"
  },
  {
    "url": "Go_Practice/Chromedp.html",
    "revision": "50958f852a73ef7f66bbe05a7cd214a3"
  },
  {
    "url": "Go_Practice/Cobra.html",
    "revision": "c8354dbf4441e31807394370ae324b93"
  },
  {
    "url": "Go_Practice/go-gin-api.html",
    "revision": "34bf3510caccaf05104727a5a34d2e7b"
  },
  {
    "url": "Go_Practice/goquery.html",
    "revision": "c1e842005096c7a4d8679273fc355b61"
  },
  {
    "url": "Go_Practice/gui-walk.html",
    "revision": "b1dd341d5c2483455de72612881ab3ee"
  },
  {
    "url": "Go_Practice/index.html",
    "revision": "4a6b645ee5221a1dab09e211d5a4294e"
  },
  {
    "url": "Go_Practice/Singo.html",
    "revision": "acd6571671a6d90b40b38135058b436b"
  },
  {
    "url": "Go/《go 语言实战》 读书笔记.html",
    "revision": "40731d27a842ca5339b29ceb7b4fd4ce"
  },
  {
    "url": "Go/index.html",
    "revision": "74b9df1ae7e60e4574cfae04942f290e"
  },
  {
    "url": "Go/mianshiti.html",
    "revision": "1ee2f1fda32eb5fe7299246a65c78313"
  },
  {
    "url": "Go/post.html",
    "revision": "4dca945a69fa7bafa39fdc81cdf06ed3"
  },
  {
    "url": "good_link.html",
    "revision": "669a96f4239fd7a16f8b00bc94f3d751"
  },
  {
    "url": "Guide/index.html",
    "revision": "83bae1715fae1cdf4a298f2f1188ed6b"
  },
  {
    "url": "images/1.jpg",
    "revision": "7492bb8cddae799c9e3788f97cb6ac74"
  },
  {
    "url": "images/2.jpg",
    "revision": "f8df6d9c2492e4a60b3ece3f0413bdd4"
  },
  {
    "url": "images/3.jpg",
    "revision": "c74b485f9868798e7ab600f2989b7bc4"
  },
  {
    "url": "images/4.jpg",
    "revision": "cacbe6de5829c420b51093bd98c12336"
  },
  {
    "url": "images/5.jpg",
    "revision": "b1c444722ec4f181dbf010a9eeda6272"
  },
  {
    "url": "images/5d3c3159d1a49.png",
    "revision": "d0804ec4dca489cb9ba94523ed6c63a6"
  },
  {
    "url": "images/dockerimage.png",
    "revision": "aa427c927479f9e55f9063c371396d88"
  },
  {
    "url": "images/image-20201215110741455.png",
    "revision": "10ba6582f96e8a63f17c51f4f3867358"
  },
  {
    "url": "images/image-20201215111505365.png",
    "revision": "2c9945071e611a13ec5948e8ffdc4fa9"
  },
  {
    "url": "images/image-20201215114012421.png",
    "revision": "f074b292a2cee0fa338243c44dad2e36"
  },
  {
    "url": "index.html",
    "revision": "0912dd18f929ea586f4952dcfbdb1b3d"
  },
  {
    "url": "js/cursor.min.js",
    "revision": "ac37a3a34e305fc3565ab14a6a457f7c"
  },
  {
    "url": "js/jquery-3.5.min.js",
    "revision": "dc5e7f18c8d36ac1d3d4753a87c98d0a"
  },
  {
    "url": "Laravel_Package/deploy.html",
    "revision": "452f47685623d2ce06d6c38baa625dfb"
  },
  {
    "url": "Laravel_Package/index.html",
    "revision": "7d70dae52c7afe59b6d629fe8025464a"
  },
  {
    "url": "Laravel/index.html",
    "revision": "7f16da4f3854c5294300ea23ff1fc09f"
  },
  {
    "url": "Linux/Config.html",
    "revision": "8f530508f11d45ce19bf52373a5c33ae"
  },
  {
    "url": "Linux/Question.html",
    "revision": "9acd02540ef387f9b605bf58356ea3ad"
  },
  {
    "url": "Linux/Tool.html",
    "revision": "e01424837eb2f614329506cc92c203c4"
  },
  {
    "url": "Live/index.html",
    "revision": "882d9186831230bfdecf6042baf3f75f"
  },
  {
    "url": "log.png",
    "revision": "97a2fe037ae0cf5303ff2acb70ae2a0a"
  },
  {
    "url": "MyNote/index.html",
    "revision": "19d035b7548eae80e0ef591456dd96eb"
  },
  {
    "url": "orangbus.png",
    "revision": "c3b8ba46f6ddba8ca3c46b1a5865830a"
  },
  {
    "url": "Probject/dianCan.html",
    "revision": "aefd945d8a4156babda6cfea1d07faf7"
  },
  {
    "url": "Tool/01brew.html",
    "revision": "ac07066591d97fb93339714a0c7d5e78"
  },
  {
    "url": "Tool/02yarn.html",
    "revision": "337e2c7500afa8a33113cdb044f806f2"
  },
  {
    "url": "Tool/git.html",
    "revision": "e0f908f63fa165fc877815ca86cdfac0"
  },
  {
    "url": "Tool/goland.html",
    "revision": "c8e964f332a7a78baf6f137105d2a030"
  },
  {
    "url": "Tool/index.html",
    "revision": "efc94b2a626f87f7294900c15d22ceec"
  },
  {
    "url": "Tool/windows.html",
    "revision": "d40042b80d87a148d0f4d82f4f25a88d"
  },
  {
    "url": "Wamp/deployer.html",
    "revision": "7ae9a77bbc9ba869490db2bd9252c8d8"
  },
  {
    "url": "Wamp/docker.html",
    "revision": "8763364d227a89b58bf8889c8b7a3342"
  },
  {
    "url": "Wamp/elasticsearch.html",
    "revision": "670f458174e835e65c92d5049a9817d1"
  },
  {
    "url": "Wamp/etcd.html",
    "revision": "784ad96ffebf264ad2be3f53d1165ffd"
  },
  {
    "url": "Wamp/index.html",
    "revision": "aa8b05dfcafb5f27efc57922f28f442b"
  },
  {
    "url": "Wamp/laradock.html",
    "revision": "7890035ace109821dec5d81baf99b65c"
  },
  {
    "url": "Wamp/Minikube.html",
    "revision": "483b76549ac4b369cb71d79b543756fa"
  },
  {
    "url": "Wamp/server_deployment.html",
    "revision": "5b1489d614ebff99de56c508c1200a9d"
  },
  {
    "url": "WebNote/打包压缩命令.html",
    "revision": "256f5cd03bc1d38bcc3ffe429f753bc6"
  },
  {
    "url": "WebNote/如何快速清理 docker 资源.html",
    "revision": "7fa0f0d2e68dc30c7df0ce7270ee78a7"
  },
  {
    "url": "WebNote/十个催泪虐心的小故事.html",
    "revision": "992e46dc23dd0cc550d3c37ca9e7847a"
  },
  {
    "url": "WebNote/Git 配置多个 SSH-Key.html",
    "revision": "923dbf2a0e131c3f9594a955e701994c"
  },
  {
    "url": "WebNote/Git webhook 实现自动部署教程.html",
    "revision": "8a42732372977fc4308153ba239a56be"
  },
  {
    "url": "WebNote/index.html",
    "revision": "392cb14d26a8037c711e95507d0ea502"
  },
  {
    "url": "WebNote/php中call_user_func 与 call_user_func_array的使用 .html",
    "revision": "b6f1416870e1e6cca4a252179f6e2c2e"
  },
  {
    "url": "WebNote/UserAgent.html",
    "revision": "d75c42e05bd72d878005b0e8e425316e"
  },
  {
    "url": "wiaoijwuzntudhtjd/index.html",
    "revision": "07f361552ec88562a8ee70d2c10a783e"
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
