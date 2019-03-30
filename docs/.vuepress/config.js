const sidebar = require('vuepress-sidebar-generator')

module.exports = {
  title: 'チラ裏のメモ帳',
  ga: 'UA-106566961-4',
  themeConfig: {
    // base: '/',
    //検索オプション add Algolia
    algolia: {
      apiKey: '84240d7e90e3258ff37677337e1b00ac',
      indexName: 'cheatsheet_kitigai'
    },
    //ナビゲーションバー
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Twitter', link: 'https://twitter.com/Lychee_jam' },
      { text: 'Blog', link: 'https://kitigai.hatenablog.com/' },
      { text: 'GitHub', link: 'https://github.com/Lycheejam' }
    ],
    // サイドバー
    sidebar: [
      ['', 'TOPページ'],
      '/privacy',
      sidebar.getSidebarGroup('git', 'git', true),
      sidebar.getSidebarGroup('mysql', 'MySQL', true),
      sidebar.getSidebarGroup('npm', 'npm', true),
      sidebar.getSidebarGroup('command', 'コマンド系', true),
      sidebar.getSidebarGroup('shortcut', 'ショートカット系', true)
    ],
    sidebarDepth: 1,  //サイドバー表示の階層指定
    displayAllHeaders: false,
    lastUpdated: '最終更新日',
    //nav barへのリンク追加
    //repo: 'Lycheejam/my-cheatsheet',
    //repoLabel: 'GitHub',
    //プルリクエストリンク
    docsRepo: 'Lycheejam/my-cheatsheet',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '編集を提案する'
  },
  // markdown settings
  markdown: {
    lineNumbers: true
  },
  // Internationalization setting
  locales: {
    '/': {
      lang: 'ja'
    }
  }
}