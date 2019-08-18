const sidebar = require('vuepress-sidebar-generator')

module.exports = {
  title: 'チラ裏のメモ帳',
  ga: 'UA-106566961-4',
  head: [
    [ 'script', { type: 'text/javascript', src: 'https://platform.twitter.com/widgets.js', charset: 'utf-8', defer: 'defer', async: 'async' } ],
    [ 'script', { type: 'text/javascript', src: 'https://b.st-hatena.com/js/bookmark_button.js', charset: 'utf-8', defer: 'defer', async: 'async' } ],
    [ 'script', { type: 'text/javascript', id: 'Cookiebot', src: 'https://consent.cookiebot.com/uc.js', 'data-cbid': '814aefbc-5295-48c2-ae65-607f46849fdc', async: 'async' } ],
    [ 'link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.8.1/css/all.css', integrity: 'sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf', crossorigin: 'anonymous'} ]
  ],
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
      { text: 'Blog', link: 'https://kitigai.hatenablog.com/' }
    ],
    // サイドバー
    sidebar: [
      ['', 'TOPページ'],
      '/privacy',
      sidebar.getSidebarGroup('php', 'PHP', true),
      sidebar.getSidebarGroup('laravel', 'Laravel', true),
      sidebar.getSidebarGroup('git', 'git', true),
      sidebar.getSidebarGroup('mysql', 'MySQL', true),
      sidebar.getSidebarGroup('npm', 'npm', true),
      sidebar.getSidebarGroup('docker', 'Docker', true),
      sidebar.getSidebarGroup('dotnet', 'dotnet CLI', true),
      sidebar.getSidebarGroup('command', 'コマンド系', true),
      sidebar.getSidebarGroup('shortcut', 'ショートカット系', true),
      sidebar.getSidebarGroup('uncategorized', '未分類', true)
    ],
    sidebarDepth: 1,  //サイドバー表示の階層指定
    displayAllHeaders: false,
    activeHeaderLinks: false,
    lastUpdated: '最終更新日',
    //nav barへのリンク追加
    repo: 'Lycheejam/my-cheatsheet',
    repoLabel: 'GitHub',
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