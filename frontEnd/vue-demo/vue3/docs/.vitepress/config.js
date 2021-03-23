const themeConfig = require('./config/theme')
var base='/';
module.exports = {
  title: "赵庄王",
  description: 'Enjoy when you can, and endure when you must.',
  lang: 'zh-CN',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  dest: 'pages',
  base: '/',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  // plugins: [
  //   ['@vuepress/medium-zoom', 'flowchart'],
  //   ["@vuepress-reco/vuepress-plugin-bgm-player",
  //   {
  //     audios: [
  //       {
  //         name: '箫中妙韵',
  //         artist: '巫娜',
  //         url: base+'/audio/箫中妙韵.mp3',
  //         cover: base+'/images/箫中妙韵.jpg'
  //       },
  //       {
  //         name: '古琴禅修',
  //         artist: '巫娜',
  //         url: base+'/audio/古琴禅修.mp3',
  //         cover: base+'/images/古琴禅修.jpg'
  //       },
  //       {
  //         name: 'intro',
  //         artist: 'The xx',
  //         url: base+'/audio/intro.mp3',
  //         cover: base+'/images/intro.jpg'
  //       },
  //       {
  //         name: 'Venus',
  //         artist: 'Lil Jet',
  //         url: base+'/audio/Venus.mp3',
  //         cover: base+'/images/Venus.jpg'
  //       },
  //       {
  //         name: 'Auditions',
  //         artist: 'Sing Cast',
  //         url: base+'/audio/Auditions.mp3',
  //         cover: base+'/images/Auditions.jpg'
  //       },
  //       {
  //         name: 'Right Now (Na Na Na)',
  //         artist: '邓壬鑫',
  //         url: base+'/audio/Right Now (Na Na Na).mp3',
  //         cover: base+'/images/Right Now (Na Na Na).jpg'
  //       },
  //       {
  //         name: '杨戬擒悟空',
  //         artist: '许镜清',
  //         url: base+'/audio/杨戬擒悟空.mp3',
  //         cover: base+'/images/杨戬擒悟空.jpg'
  //       },
  //       {
  //         name: '男儿当自强',
  //         artist: '林子祥',
  //         url: base+'/audio/男儿当自强.mp3',
  //         cover: base+'/images/男儿当自强.jpg'
  //       },

  //     ],
  //     position: {
  //       left: "10px",
  //       bottom: "10px",
  //       zIndex: 99999
  //     },
  //     shrinkMode: 'mini',
  //     floatPosition: 'left',
  //     floatStyle: {
  //       bottom: '200px',
  //       'z-index': '999999'
  //     },
  //   }
  // ],
  // [
  //   "@vuepress-reco/vuepress-plugin-kan-ban-niang",
  //   {
  //     messages: {
  //       welcome: '世界上最好的外婆',
  //       home: '一定要谦虚',
  //       theme: '不能让别人吃亏',
  //       close: '失败了没事，我们还会再来，有手有脚就不怕。'
  //     },
  //     messageStyle: {
  //       right: '10px',
  //       bottom: '190px'
  //     },
  //     modelStyle: {
  //       right: '90px',
  //       bottom: '-20px',
  //       opacity: '0.9'
  //     },
  //     btnStyle: {
  //       right: '90px',
  //       bottom: '40px',
  //     },
  //   },
  // ],
  // [
  //   "vuepress-plugin-auto-sidebar",
  // ],]
}  