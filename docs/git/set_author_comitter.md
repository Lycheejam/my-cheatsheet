# GitのAuthorとCommiterを設定/変更する

* `<AUTHORNAME>` = GtiHubのユーザ名
* `<MAIL@ADDR>` = GitHubに登録したメールアドレス

## Authorの変更

```sh
$ git config --global user.name "<AUTHORNAME>"
$ git config --global user.email <MAIL@ADDR>
```

## Commiterの変更

```sh
$ git config --local user.name "<AUTHORNAME>"
$ git config --local user.email <MAIL@ADDR>
```

## 参考サイト様

* [Git の Commit Author と Commiter を変更する \- Qiita](https://qiita.com/sea_mountain/items/d70216a5bc16a88ed932)
* [Gitコミットを任意の名前とメールアドレスで行うコマンド \- Y\-Ken Studio](http://y-ken.hatenablog.com/entry/git-commit-as-different-user)