# npm installオプション

* PACKAGE_NAME = パッケージ名

## 依存関係の設定

### `--save` | `-S`

```sh
$ npm install --save <PACKAGE_NAME>
$ npm install -S <PACKAGE_NAME>
```

`--save`オプションを使用すると下記の様に`package.json`の`dependencies`へ追記される。

```json
{
  "dependencies": {
    "<PACKAGE_NAME>": "X.XX.XX"
  }
}
```

### `--save-dev` | `-D`

```sh
$ npm install --save-dev <PACKAGE_NAME>
$ npm install -D <PACKAGE_NAME>
```

`--save-dev`オプションを使用すると下記の様に`package.json`の`devDependencies`へ追記される。

```json
{
  "devDependencies": {
    "<PACKAGE_NAME>": "X.XX.XX"
  }
}
```

## インストールロケーション

* 参考
  * [【npm】グローバルインストールは控えるべき](https://mosapride.com/index.php/2018/02/06/post-681/)
  * [僕がnpm installに\-gをつけないわけ \- Qiita](https://qiita.com/DeployCat/items/cd456d6bea72937464f8)

### `-g` | `--global`

グローバルにインストールされる。

```sh
$ npm install -g <PACKAGE_NAME>
$ npm install --global <PACKAGE_NAME>
```

### ローカルにインストール

インストールロケーションのオプションを付けない。  
明示的にローカルインストールする方法は知らない。

```sh
$ npm install <PACKAGE_NAME>
```

## 参考サイト様

* [npm\-install \| npm Documentation](https://docs.npmjs.com/cli/install)
* [ちゃんと使い分けてる? dependenciesいろいろ。 \- Qiita](https://qiita.com/cognitom/items/acc3ffcbca4c56cf2b95)