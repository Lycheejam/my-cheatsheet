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
        collapsable: true,
        children: [
          '/mysql/create_db_and_user',
          '/mysql/db_and_table_character_set'
        ]
      },
      {
        title: 'npm',
        collapsable: true,
        children: [
          '/npm/package_update'
        ]
      },
      {
        title: 'コマンド系',
        collapsable: true,
        children: [
          '/command/curl_response_code'
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
