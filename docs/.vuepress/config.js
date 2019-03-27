const fs = require('fs');
const path = require('path');

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
      //getSidebarItem('/'),
      '',
      '/privacy',
      getSidebarGroup('/mysql/', 'MySQL', true),
      getSidebarGroup('/npm/', 'npm', true),
      getSidebarGroup('/git/', 'Git', true),
      getSidebarGroup('/command/', 'コマンド系', true)
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

//動かない
function getSidebarItem (targetdir) {
  let rootdir = "./docs";
  let files = getFiles(rootdir, targetdir);
  
  return getFilepaths(files, targetdir).map((path) => {
    return "[" + path + " ]";
  }).join();
};

// サイドバーアイテムの作成 メイン
function getSidebarGroup (targetdir, title, isCollapsable) {
  //vuepressルートディレクトリ
  let rootdir = "./docs";

  let files = getFiles(rootdir, targetdir);

  let grouptitle = toTitle(title, targetdir);

  //サイドバーアイテムの作成
  let directoryGroup =  {
    // グループリストタイトル
    title: grouptitle,
    // グループリスト展開有無
    collapsable: isCollapsable,
    // ディレクトリ配下のファイルリスト作成
    children: getFilepaths(files, targetdir)
  };
  return directoryGroup;
};

// 対象ディレクトリ配下のファイルを取得
function getFilepaths(files, targetdir) {
  return files.map((file) => {
    // 子ディレクトリ配下にREADME.mdが存在する場合は子ディレクトリのパスとする。
    if (file !== 'README.md') {
      // README.md以外の場合は子ディレクトリ+ファイル名を返す。
      return targetdir + file;
    } else {
      // README.mdの場合は子ディレクトリ直下のパスとする。
      return targetdir;
    }
  });
};

function getFiles (rootdir, targetpath) {
  return fs.readdirSync(rootdir + targetpath).filter((file) => {
    return isFile(rootdir + targetpath + file);
  });
};

function isFile(targetfile) {
  return fs.existsSync(targetfile) && fs.statSync(targetfile).isFile() && path.extname(targetfile) === '.md';
};

function toTitle(title, targetpath) {
  if (title === '') {
    return targetpath.replace('/', '')
  } else {
    return title
  }
};