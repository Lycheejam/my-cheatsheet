const fs = require('fs');

module.exports = {
  title: 'チラ裏のメモ帳',
  ga: 'UA-106566961-4',
  themeConfig: {
    base: '/',
    //検索オプション add Algolia
    algolia: {
      appId: 'ENL8ICJYDA',
      apiKey: '7e396b5408b8f9221d55c9ee5adf528d',
      indexName: 'index'
    },
    //ナビゲーションバー
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Twitter', link: 'https://twitter.com/Lychee_jam' },
      { text: 'Blog', link: 'https://kitigai.hatenablog.com/' },
      { text: 'GitHub', link: 'https://github.com/Lycheejam' }
    ],
    // サイドバー
    sidebar: getSidebarList(),
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

function getFileItems (docdir) {
  var items = fs.readdirSync(docdir).filter((f) => {
    return fs.existsSync(docdir + "/" + f) && fs.statSync(docdir + "/" + f).isDirectory();
  });
  return items;
};

function getSidebarList () {
  var dirpath = "./docs";
  var itemlist = getFileItems(dirpath);

  var list = ["/"].concat(itemlist.map((item) => {
    return {
      title: item,
      collapsable: true,
      children: fs.readdirSync(dirpath + "/" + item).map((childDir) => {
        return "/" + item + "/" + childDir;
      })
    };
  }));
  return list;
};