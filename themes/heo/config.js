const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2023-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.tangly1024.com' },
    { title: '人生苦短，及时行乐', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '仅供娱乐',
  HEO_HERO_TITLE_2: '',
  HEO_HERO_TITLE_3: '',
  HEO_HERO_TITLE_4: '',
  HEO_HERO_TITLE_5: '人们总以为自己没走过的路上开满了鲜花',
  HEO_HERO_TITLE_LINK: '',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  HERO_RECOMMEND_COVER: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE(528).png', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好！我是',
    '🔍 分享与热心帮助',
    '🤝 专修交互与设计',
    '🏃 脚踏实地行动派',
    '🏠 智能家居小能手',
    '🤖️ 数码科技爱好者',
    '🧱 团队小组发动机'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: '/about',
  HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL2: 'https://github.com/tangly1024',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://www.tangly1024.com',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/%E7%BE%8E%E5%9B%BD%E5%BE%80%E4%BA%8B.png',
      color_1: '#ffffff',
      title_2: 'Sketch',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/%E6%83%85%E4%B9%A6.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/f81a43e004d5109f425dc877f7ffdc97369814ea004668bf9.JPG',
      color_1: '#ffffff',
      title_2: 'Photoshop',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/crop1744012608949.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'FinalCutPro',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/Image_67443959709635.jpg',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/Image_1729421580376.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/IMG_20240604_201134.jpg',
      color_1: '#ffffff',
      title_2: 'Principle',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/81a9d8dbf428a21e8f85d5f693e5a331ac27d8c314818c866.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'illustrator',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/538edcac04b52f617088f288a3de80961c2d0dfdfe1b3f75e.jpg',
      color_1: '#ffffff',
      title_2: 'CSS3',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/3eb3d178c3a65de879ff0ecbe359a38b3ce998283f1c51b4d.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'JS',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/Screenshot_20240325_140227.jpg',
      color_1: '#ffffff',
      title_2: 'HTML',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/QM_1797283116.jpg',
      color_2: '#ffffff'
    },
    {
      title_1: 'Git',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/B3D2AA4ECD0082140AAFE195F1F32E06.jpg',
      color_1: '#ffffff',
      title_2: 'Rhino',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/1758177145409.jpeg',
      color_2: '#ffffff'
    },
    {
      title_1: '1',
      img_1: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/%E8%A5%BF%E6%A0%BC%E7%8E%9B.png',
      color_1: '#ffffff',
      title_2: '2',
      img_2: 'https://raw.githubusercontent.com/jim00jim/image/refs/heads/main/%E8%96%87%E5%B0%94%E8%8E%89%E7%89%B9.png',
      color_2: '#ffffff'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '交流频道',
  HEO_SOCIAL_CARD_TITLE_2: '加入我们的社群讨论分享',
  HEO_SOCIAL_CARD_TITLE_3: '点击加入社群',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_NOT_BY_AI: false, // 显示非AI写作
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
