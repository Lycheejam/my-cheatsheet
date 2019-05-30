# リポジトリに登録済みファイルの変更を無視する。

プロジェクトでリポジトリからクローンしてきたけどDB接続情報とかだけ編集したい。  
みたいなシチュエーション。ブランチを頻繁に切り替えるから差分にでてくると邪魔だしね。

```sh
$ git update-index --skip-worktree <FILE>
```

## 参考サイト様

* [Git \- git\-update\-index Documentation](https://git-scm.com/docs/git-update-index)
* [既に git 管理しているファイルをあえて無視したい \- Qiita](https://qiita.com/usamik26/items/56d0d3ba7a1300625f92)
* [Gitで既に管理されているファイルをローカルで無視する方法 \- Qiita](https://qiita.com/nishina555/items/9c4ab955083c770c1f61)