# インストール済みパッケージの削除

* PACKAGE_NAME = パッケージ名

## パッケージの確認

`npm ls`でインストール済みパッケージを確認可能

`alias`として下記も使用可能

* `list`
* `la`
* `ll`

`list`が使いやすいので使ってる。

### グローバルにインストールされたパッケージ

```sh
$ npm list -g <PACKAGE_NAME>
```

### ローカルにインストールされたパッケージ

プロジェクトディレクトリで下記コマンドを実行

```sh
$ npm list <PACKAGE_NAME>
```

## パッケージの削除

`npm uninstall`でパッケージを削除可能。

`alias`として下記も使用可能

* `un`
* `unlink`
* `remove`
* `rm`
* `r`

### グローバルにインストールされたパッケージの削除

```sh
$ npm uninstall -g <PACKAGE_NAME>
```

### ローカルにインストールされたパッケージの削除

プロジェクトディレクトリで下記コマンドを実行

```sh
$ npm uninstall <PACKAGE_NAME>
$ npm uninstall --save <PACKAGE_NAME>
$ npm uninstall --save-dev <PACKAGE_NAME>
```

`dependencies`オプションも指定することでアンインストール時に`package.json`から依存関係も削除可能。

## 参考サイト様

* [npm\-uninstall \| npm Documentation](https://docs.npmjs.com/cli/uninstall.html)
* [npm よく使うコマンドまとめ \#パッケージアンインストール \- Qiita](https://qiita.com/standard-software/items/2ac49a409688733c90e7#%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%B3%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)