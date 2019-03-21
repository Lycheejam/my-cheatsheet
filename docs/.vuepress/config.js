module.exports = {
  title: 'チラ裏のメモ帳',
  themeConfig: {
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
      {
        title: 'MySQL',
        collapsable: false,
        children: [
          '/MySQL/Create_db_and_user',
          '/MySQL/Db_and_table_character_set'
        ]
      },
      {
        title: 'npm',
        collapsable: false,
        children: [
          '/npm/Package_update'
        ]
      }
    ],
    sidebarDepth: 3,  //サイドバー表示の階層指定
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
  }
}
