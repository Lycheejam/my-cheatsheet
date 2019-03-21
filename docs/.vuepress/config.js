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
        title: 'git',
        collapsable: false,
        children: [
          ['/git/', 'git index'],
          ['/git/fugafuga', 'git fugafuga']
        ]
      },
      {
        title: 'npm',
        collapsable: false,
        children: [
          '/npm/'
        ]
      },
      {
        title: 'docker',
        collapsable: false,
        children: [
          '/docker/',
          '/docker/hogehoge'
        ]
      },
      {
        title: 'mysql',
        collapsable: false,
        children: [
          '/mysql/'
        ]
      },
      {
        title: 'dotnet',
        collapsable: false,
        children: [
          '/dotnet/'
        ]
      }
    ],
    sidebarDepth: 3,  //サイドバー表示の階層指定
    displayAllHeaders: false,
    lastUpdated: '最終更新日',
    repo: 'Lycheejam/my-cheatsheet',
    repoLabel: 'GitHub',
    docsRepo: 'Lycheejam/my-cheatsheet',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '編集を提案する'
  }
}