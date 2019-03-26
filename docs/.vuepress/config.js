const fs = require('fs');
const path = require('path');

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

// サイドバーアイテムの作成 メイン
function getSidebarList () {
  console.log('------------ getSidebarList start');
  //rootパス用
  var root = ['/']
  //vuepressルートディレクトリ
  var rootdir = "./docs";

  //root直下のファイル群はグループ化しないためファイルを単品で表示する。
  //root直下のファイル一覧取得
  var rootfiles = getRootFileItems(rootdir);
  console.log('rootfiles :', rootfiles);
  //ファイルパスの生成
  var rootGroup = rootfiles.map((file) => {
    return '/' + file;
  });

  //ディレクトリ一覧の取得
  var directores = getDirectores(rootdir);
  console.log('directores :', directores);

  //サイドバーアイテムの作成（ディレクトリ毎）
  var directoryGroups = directores.map((directory) => {
    //サイドバーアイテムの作成
    return {
      // グループリストタイトル
      title: directory,
      // グループリスト展開有無
      collapsable: true,
      // ディレクトリ配下のファイルリスト作成
      children: getFileitems(rootdir, directory)
    };
  });
  console.log('directoryGroups :', directoryGroups);

  // root直下のファイル群とroot配下のディレクトリ群を結合してサイドバーのアイテムとする。
  // ※root直下のREADME.mdについては'/'で表現される。
  var sidebarItems = root.concat(rootGroup, directoryGroups);

  console.log('sidebarItems :', sidebarItems);
  sidebarItems.map((item) => {
    console.log('item :', item);
  });
  console.log('------------ getSidebarList end');
  return sidebarItems;
};

// ディレクトリ一覧の取得
function getDirectores (rootdir) {
  // root配下のファイル＆ディレクトリ一覧取得
  var directores = fs.readdirSync(rootdir).filter((childdir) => {
    // .vuepressのみ除外
    if (childdir !== '.vuepress') {
      // ディレクトリの場合：true 対象がファイルであった場合はfalse
      return isDirectory(rootdir + '/' + childdir);
    }else{
      //対象ディレクトリが.vuepressの場合、false
      return false;
    }
  });
  return directores;
};

// ルート直下のファイルを取得（ex.README.md, privacy.md...etc）
function getRootFileItems (rootdir) {
  // root配下のファイル＆ディレクトリ一覧取得
  var files = fs.readdirSync(rootdir).filter((file) => {
    //root配下のREADME.mdは'/'で表現されるので排除する。
    if (file !== 'README.md') {
      // ファイル存在判定 and マークダウンファイル判定
      return isFile(rootdir + '/' + file);
    } else {
      // README.mdの場合：false
      return false;
    };
  });
  return files;
};

// ディレクトリ存在確認
function isDirectory(targetpath) {
  // existsSyncは非推奨だから使わないほうが良い？
  // 参考；fs.statSyncでファイルの存在判定 - Qiita https://qiita.com/tokimari/items/82222e1f99b2b9eb1fb8
  // やっぱりこのままでいいっぽい
  // 参考：Node.js でディレクトリかどうかを判定する方法 | phiary http://phiary.me/nodejs-check-is-directory/
  // ディレクトリが存在する かつ 対象パスはディレクトリか否か
  return fs.existsSync(targetpath) && fs.statSync(targetpath).isDirectory();
};

// ファイル存在確認（マークダウンファイル判定）
function isFile(targetpath) {
  return fs.existsSync(targetpath) && fs.statSync(targetpath).isFile() && path.extname(targetpath) === '.md';
};

// 対象ディレクトリ配下のファイルを取得
function getFileitems(rootdir, targetdir) {
  return fs.readdirSync(rootdir + "/" + targetdir).map((file) => {
    return "/" + targetdir + "/" + file;
  })
};